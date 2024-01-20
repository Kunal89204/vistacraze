import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import "./hero.css"
import { IoIosArrowRoundDown } from "react-icons/io";

import Logo from "../../assets/vistacraze (1).png"
const Track = () => {
  useEffect( () => {
    const text = document.querySelector( '.text .text-inner' );
    const track = document.querySelector( '.track' );
    const shape = document.querySelector( '.shape .rotate' );

    const tl = gsap.timeline( { paused: true } );

    tl.to( shape, {
      duration: 1,
      scale: 30,
      rotate: 240,
      ease: 'Expo.easeIn',
    } ).to(
      text,
      {
        duration: 1,
        translateX: 0,
        ease: 'Power2.easeIn',
      },
      0
    );

    const handleScroll = () => {
      const progress =
        window.pageYOffset / ( document.body.offsetHeight - window.innerHeight );

      tl.progress( progress );

      document.body.style.setProperty( '--scroll', progress );
    };

    window.addEventListener( 'scroll', handleScroll, false );

    return () => {
      // Cleanup: Remove the event listener when the component unmounts
      window.removeEventListener( 'scroll', handleScroll, false );
    };
  }, [] );

  return (

    <div className='w-screen '>
      <div className='flex justify-center'>
        <div className='flex justify-center bg-white -mt-16 Circle w-32 h-32 z-10 absolute animate-bounce'>
      <h1 className='flex flex-col text-lg justify-center items-center'>
        Let's Grow
        <IoIosArrowRoundDown className='text-3xl' />
      </h1>
    </div>

      </div>

      <div className="track">

        <div className="overlay">
          <div className="text">
            <div className="text-inner">
              digital marketing agency   digital marketing agency    digital marketing agency   digital marketing agency
            </div>
          </div>
          <div className="shape">
            <div className="scale">
              <div className="rotate">
                <div className="img">
                  <img src={Logo} alt="" className='-rotate-45 ' />

                </div>
              </div>
            </div>
          </div>
          <div className="gradient"></div>
        </div>
      </div>
    </div>
  );
};

export default Track;
