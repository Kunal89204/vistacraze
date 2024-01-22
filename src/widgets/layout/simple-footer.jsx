import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import "./section.css"
import RobotHand from "../../assets/vr.png"
import MoreAbout from "../../components/MoreaboutUS"
import Mrkting from "../../assets/1.jpg"
import { BsGraphUpArrow } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { ImTarget } from "react-icons/im";
import Button from "../../components/button"
import Aprouchimg from "../../assets/aprouch.jpg"
gsap.registerPlugin( ScrollTrigger );

const ColorChangingSections = () => {
  useEffect( () => {
    const container = document.querySelector( ".container" );

    const firstSection = {
      section: document.querySelector( "#first-section" ),
      bgColor: "#000",
    };

    const secondSection = {
      section: document.querySelector( "#second-section" ),
      bgColor: "#fff",
    };

    const thirdSection = {
      section: document.querySelector( "#third-section" ),
      bgColor: "#000",
    };

    function setColors( curr, next ) {
      let tl = gsap.timeline( { ease: 'power2.in' } );
      tl.to( ".card", {
        duration: 1,
        background: next.cardBgColor
      } ).to( container, {
        duration: 1,
        background: next.bgColor,
        color: next.fontColor,
        delay: -1
      } );
    }

    gsap.set( container, {
      backgroundColor: firstSection.bgColor,
      color: firstSection.fontColor
    } );

    gsap.set( ".card", {
      backgroundColor: firstSection.cardBgColor
    } );

    gsap.to( secondSection, {
      duration: 1,
      scrollTrigger: {

        trigger: secondSection.section,

        start: "top 70%",
        end: '+=100',
        onEnter: () => setColors( firstSection, secondSection ),
        onLeaveBack: () => setColors( secondSection, firstSection )
      }
    } );

    gsap.to( thirdSection.section, {
      duration: 1,
      scrollTrigger: {
        trigger: thirdSection.section,

        start: "top 70%",
        end: '+=100',
        onEnter: () => setColors( secondSection, thirdSection ),
        onLeaveBack: () => setColors( thirdSection, secondSection )
      }
    } );
  }, [] );

  return (
    <div className='w-screen overflow-hidden flex mt-10 justify-center items-center'>
      <div className="container w-screen rounded-3xl">
        <section id="first-section" className='w-screen p-10'>
          <div className="card">
            <div className='flex '>
              <div className='grid grid-flow-row ld:grid-flow-col grid-rows-2 gap-5 lg:gap-0 lg:grid-cols-2'>
                <MoreAbout
                  h1="Your ideas, Our Expertise, Infinite Posibilities."
                  description="Welcome to Vista Craze, where creativity meets expertise in the world of digital services. As a dynamic and innovative freelancing agency, we take pride in delivering top-notch solutions tailored to meet the unique needs of our clients."
                  description2=" Imagine a place where your ideas are transformed into stunning websites, eye-catching graphics, and powerful online strategies. That's us!"
                  btn="Contact Us"
                />
                <img src={Mrkting} alt='' className=' rounded-xl md:-ml-12  lg:h-96' />
              </div>
              <div>

              </div>
            </div>
          </div>
        </section>
        <section id="second-section" className='mt-10 w-full flex justify-center border-black  border-b-2'>
          <div className="card">
            <div className='flex flex-col items-center gap-10 justify-center'>
              <div className='flex flex-col items-center gap-10 justify-center'>
                <div className='text-black text-5xl text-center w-3/4 justify-center'>
                  Combining Strategy, AI, Award-Winning Creative, and Technology to Drive Growth
                </div>
                <div className='text-black text-xl text-center w-1/2'>
                  We launch 360 digital marketing campaigns that drive awareness, traffic, and cross channel sales.
                </div>

              </div>
              <div className='grid grid-flow-col grid-cols-3 mt-10  p-10'>
                <div className='flex items-center  flex-col'>
                  <div className='border-4 hover:bg-black hover:text-white rounded-full overflow-hidden p-5'>

                    <ImTarget className='text-5xl m-2 text-center' />
                  </div>
                  Target
                  <span className='text-center text-balance'>
                    We create winning brand strategies and craft culture-driven stories and content.
                  </span>
                </div>

                <div className='flex items-center flex-col'>
                  <div className='border-4 hover:bg-black hover:text-white rounded-full overflow-hidden p-5'>

                    <FaPeopleGroup className='text-5xl  m-2 text-center' />
                  </div>
                  Launch
                  <span className='text-center text-balance'>
                    High Performance Marketing across Social, Search, Display, Video, Email, and more.
                  </span>
                </div>
                <div className='flex items-center flex-col'>
                  <div className='border-4 hover:bg-black hover:text-white rounded-full overflow-hidden p-5'>

                    <BsGraphUpArrow className='text-5xl  m-2 text-center' />
                  </div>
                  Grow
                  <span className='text-center text-balance'>
                    Measure and optimize LCV, CPA, and ROAS.
                  </span>
                </div>
              </div>
            </div>

          </div>
        </section>
        <section id="third-section" className='mt-10 w-full flex p-5 text-white border-black  border-b-2'>
          <div className="card">
            <div className='grid grid-flow-col grid-cols-2 '>
              <div className='flex gap-10 flex-col'>
                <div className='text-start w-3/4 text-3xl'>
                  Winning strategy,
                  expertise, and relentless
                  innovation.
                </div>
                <div className='flex gap-10'>
                  <ul className='flex flex-col gap-3'>
                    <li>Strategy</li>
                    <li>Content</li>
                    <li>Branding</li>
                    <li>Creative</li>
                    <li>Data Science & Analytics</li>
                    <li>eCommerce</li>
                    <li>Paid Search</li>
                    <li>Paid Social</li>
                    <li>Display & Retargeting</li>
                  </ul>
                  <ul  className='flex flex-col gap-3'>
                    <li>OTT & Connected TV</li>
                    <li>Streaming Audio</li>
                    <li>Amazon</li>
                    <li>Grocery eCommerce <br/>Marketing</li>
                    <li>SEO</li>
                    <li>Email, SMS, & CRM</li>
                    <li>Social Media</li>
                    <li>Influencer</li>
                  </ul>
                </div>
                <Button btn=" Approach"/>
              </div>
              <img src={Aprouchimg} alt=''  className='  rounded-3xl'/>
            </div>
          </div>
        </section>
      </div>
    </div>

  );
};

export default ColorChangingSections;
