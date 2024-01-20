import React, { useEffect } from 'react';
import { GUI } from 'dat.gui';
import "./hero2.css"
const CONFIG = {
  gradient: true,
  animated: true,
  highlight: 2,
  spread: 1,
  primary: '#ffffff',
  secondary: '#606060',
};

const datGUI = new GUI();

const updateStyles = () => {
  for (const key of Object.keys(CONFIG)) {
    document.documentElement.style.setProperty(`--${key}`, CONFIG[key]);
  }
  document.documentElement.setAttribute('data-gradient', CONFIG.gradient);
  document.documentElement.setAttribute('data-animate', CONFIG.animated);
};

const highlightOneFolder = datGUI.addFolder('Highlight One');
highlightOneFolder.add(CONFIG, 'highlight', 0, 5, 1).name('Spread').onChange(updateStyles);
highlightOneFolder.addColor(CONFIG, 'primary').name('Color').onChange(updateStyles);
highlightOneFolder.add(CONFIG, 'gradient').name('Use gradient?').onChange(updateStyles);
highlightOneFolder.add(CONFIG, 'animated').name('Animate gradient?').onChange(updateStyles);

const highlightTwoFolder = datGUI.addFolder('Highlight Two');
highlightTwoFolder.add(CONFIG, 'spread', 0, 5, 1).name('Spread').onChange(updateStyles);
highlightTwoFolder.addColor(CONFIG, 'secondary').name('Color').onChange(updateStyles);

updateStyles();

const App = () => {
  useEffect(() => {
    return () => {
      // Cleanup: Remove dat.GUI when the component unmounts
      datGUI.destroy();
    };
  }, []);

    return (
      <div className='hero2 h-auto'>


    <div className="wrapper text-7xl w-3/4">
      <h2 className='heading2'>Transforming Visions into Digital Triumphs – Your Success, Our Expertise. Elevate your brand with strategic digital marketing that resonates, engages, and delivers results. Welcome to a journey where innovation meets impact!  </h2>
    </div>
      </div>
  );
};

export default App;
