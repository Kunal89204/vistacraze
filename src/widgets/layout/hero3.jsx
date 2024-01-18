import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const YourThreeJSComponent = () => {
  let containerRef = useRef(null);
  let camera, scene, renderer, controls, particleSystem;
  let shaderUniforms, shaderAttributes;
  let imageData = null;
  let animationTime = 0;
  let animationDelta = 0.03;
  const imageWidth = 640;
  const imageHeight = 360;

  useEffect(() => {
    init();
    // tick();
  }, []);

  const init = () => {
    createScene();
    createControls();
    createPixelData();

    window.addEventListener('resize', onWindowResize, false);
  };

  const createScene = () => {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 3000;
    camera.lookAt(scene.position);

    renderer = new THREE.WebGLRenderer({
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1);

    containerRef.current.appendChild(renderer.domElement);
  };

  const createControls = () => {
    controls = new OrbitControls(camera, renderer.domElement);

    controls.rotateSpeed = 1.0;
    controls.zoomSpeed = 1.2;
    controls.panSpeed = 0.8;

    controls.noZoom = false;
    controls.noPan = true;

    controls.staticMoving = true;
    controls.dynamicDampingFactor = 0.3;
  };
  const createPixelData = () => {
    const image = new Image();
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    image.crossOrigin = 'Anonymous';
    image.onload = () => {
      image.width = canvas.width = imageWidth;
      image.height = canvas.height = imageHeight;

      context.fillStyle = context.createPattern(image, 'no-repeat');
      context.fillRect(0, 0, imageWidth, imageHeight);
      // context.drawImage(image, 0, 0, imageWidth, imageHeight);

      imageData = context.getImageData(0, 0, imageWidth, imageHeight).data;

      createParticles();
      tick();
    };

    <img src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/tree_star.jpg' />;
  };

  const createParticles = () => {
    const colors = [];
    const weights = [0.2126, 0.7152, 0.0722];
    let c = 0;

    let geometry, material;
    let x, y;
    const zRange = 400;

    geometry = new THREE.Geometry();
    geometry.dynamic = false;

    x = imageWidth * -0.5;
    y = imageHeight * 0.5;

    shaderAttributes = {
      vertexColor: {
        type: 'c',
        value: [],
      },
    };

    shaderUniforms = {
      amplitude: {
        type: 'f',
        value: 0.5,
      },
    };

    const shaderMaterial = new THREE.ShaderMaterial({
      attributes: shaderAttributes,
      uniforms: shaderUniforms,
      vertexShader: document.getElementById('vertexShader').textContent,
      fragmentShader: document.getElementById('fragmentShader').textContent,
    });

    for (let i = 0; i < imageHeight; i++) {
      for (let j = 0; j < imageWidth; j++) {
        const color = new THREE.Color();

        color.setRGB(imageData[c] / 255, imageData[c + 1] / 255, imageData[c + 2] / 255);
        shaderAttributes.vertexColor.value.push(color);

        const weight = color.r * weights[0] + color.g * weights[1] + color.b * weights[2];

        const vertex = new THREE.Vector3();

        vertex.x = x;
        vertex.y = y;
        vertex.z = (zRange * -0.5) + zRange * weight;

        geometry.vertices.push(vertex);

        c += 4;
        x++;
      }

      x = imageWidth * -0.5;
      y--;
    }

    particleSystem = new THREE.Points(geometry, shaderMaterial);

    scene.add(particleSystem);
  };

  const tick = () => {
    requestAnimationFrame(tick);

    update();
    render();
  };

  const update = () => {
    shaderUniforms.amplitude.value = Math.sin(animationTime);

    animationTime += animationDelta;

    controls.update();
  };

  const render = () => {
    renderer.render(scene, camera);
  };

  const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  return <div ref={containerRef} />;
};

export default YourThreeJSComponent;
