// src/app/LocoMotiveScroll.js
import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

const LocoMotiveScrollComponent = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const scroll = new LocomotiveScroll({
        el: document.querySelector('#scroll-container'),
        smooth: true,
        // Add other Locomotive Scroll options here
      });

      // Cleanup on component unmount
      return () => {
        scroll.destroy();
      };
    }
  }, []);

  return null;
};

export default LocoMotiveScrollComponent;
