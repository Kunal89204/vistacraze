import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import "./section.css"
gsap.registerPlugin(ScrollTrigger);

const ColorChangingSections = () => {
  useEffect(() => {
    const container = document.querySelector(".container");

    const firstSection = {
      section: document.querySelector("#first-section"),
      bgColor: "#000",
      fontColor: "#F0F400",
      cardBgColor: "#fff"
    };

    const secondSection = {
      section: document.querySelector("#second-section"),
      bgColor: "#fff",
      fontColor: "#6EC6DF",
      cardBgColor: "#000"
    };

    const thirdSection = {
      section: document.querySelector("#third-section"),
      bgColor: "#000",
      fontColor: "#233329",
      cardBgColor: "#fff"
    };

    function setColors(curr, next) {
      let tl = gsap.timeline({ ease: 'power2.in' });
      tl.to(".card", {
        duration: 1,
        background: next.cardBgColor
      }).to(container, {
        duration: 1,
        background: next.bgColor,
        color: next.fontColor,
        delay: -1
      });
    }

    gsap.set(container, {
      backgroundColor: firstSection.bgColor,
      color: firstSection.fontColor
    });

    gsap.set(".card", {
      backgroundColor: firstSection.cardBgColor
    });

    gsap.to(secondSection, {
      duration: 1,
      scrollTrigger: {
        trigger: secondSection.section,
        markers: true,
        start: "top 70%",
        end: '+=100',
        onEnter: () => setColors(firstSection, secondSection),
        onLeaveBack: () => setColors(secondSection, firstSection)
      }
    });

    gsap.to(thirdSection.section, {
      duration: 1,
      scrollTrigger: {
        trigger: thirdSection.section,
        markers: true,
        start: "top 70%",
        end: '+=100',
        onEnter: () => setColors(secondSection, thirdSection),
        onLeaveBack: () => setColors(thirdSection, secondSection)
      }
    });
  }, []);

  return (
    <div className="container">
      <section id="first-section">
        <div className="card">
          <h1>First</h1>
        </div>
      </section>
      <section id="second-section">
        <div className="card">
          <h1>Second</h1>
        </div>
      </section>
      <section id="third-section">
        <div className="card">
          <h1>Third</h1>
        </div>
      </section>
    </div>
  );
};

export default ColorChangingSections;
