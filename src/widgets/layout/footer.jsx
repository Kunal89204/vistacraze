import React, { useEffect, useState, useRef } from 'react';import "../footer.css"
import Arrow from "../../assets/Vector.webp"
import CustomCursor from "../../widgets/layout/CustomCursor"
const footer = () => {
  return (
    <div className=' flex h-screen mb-7 overflow-hidden'>
      <div className='w-screen  flex h-screen flex-col'>
        <div className=' flex  p-32 justify-between'>

          <div className='text-8xl'>
            Let's bring your
            <br />

            <h1 className='mt-7 text-end'>
              ideas to life!</h1>
          </div>
          <img src={Arrow} alt="" className='h-10 items-center flex justify-center mt-32' />
          <div className='circle w-32 h-32 flex justify-center  items-center border-2 border-black hover:bg-black hover:text-white'>
            contect us
          </div>
        </div>

        <div className='grid grid-flow-col grid-cols-2 text-xl justify-between p-20'>
          <div className='flex flex-col gap-2'>
            <span className="linkWrap w-auto">

              <a className="style-29 lg:w-20" href="#" data-after="Mail us ">
                <span >Mail us  </span>
              </a>
            </span>
             <div className="linkWrap">
                <a className="style-29 lg:w-80" href="#" data-after="karansharma8543@gmail.com ">
                  <span>karansharma8543@gmail.com</span>
                </a>
              </div>
            <a></a>
            <br />

            <h1> Even better call us</h1>
            <div className="linkWrap">
                <a className="style-29  lg:w-52" href="#" data-after="+91 8543810264 ">
                  <span>+91 8543810264 </span>
                </a>
              </div>
          </div>
          <div className='flex flex-col gap-5'>
            <div>
              let's be friends

            </div>
            <div className='grid grid-flow-col grid-cols-3'>
              <div className="linkWrap">
                <a className="style-29 lg:w-28" href="#" data-after="Facebook ">
                  <span>Facebook </span>
                </a>
              </div>
              <div className="linkWrap">
                <a className="style-29 lg:w-28" href="#" data-after="Instagram ">
                  <span>Instagram </span>
                </a>
              </div>
              <div className="linkWrap">
                <a className="style-29 lg:w-28" href="#" data-after="Twitter ">
                  <span>Twitter </span>
                </a>
              </div>

            </div>
            <div className='grid grid-flow-col grid-cols-3'>
              <div className="linkWrap">
                <a className="style-29 lg:w-28" href="#" data-after="LinkedIN ">
                  <span>LinkedIN </span>
                </a>
              </div>
              <div className="linkWrap">
                <a className="style-29 lg:w-28" href="#" data-after="Yourtube ">
                  <span>Yourtube </span>
                </a>
              </div>
              <div className="linkWrap">
                <a className="style-29 lg:w-28" href="#" data-after="Behnace ">
                  <span>Behnace </span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default footer
