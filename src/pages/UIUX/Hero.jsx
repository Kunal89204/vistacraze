import React from 'react'
import "../button.css"
export default function Hero({h1,h2, h3, h4, description, btn}) {
  return (
    <div className='px-4 py-14 md:px-8 lg:p-14 xl:p-26 2xl:p-32 bg-black'>
      <div className=''>
        <div className='text-4xl md:text-7xl md:w-2/3 w-full py-10 font-bold md:max-lg:w-full 2xl:text-8xl text-white'>{h1}  <span class=" bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">{h2}</span> {h3} <div className='text-gray-400'>{h4}</div></div>
      </div>
      <div className='w-4/5 text-base md:text-2xl text-gray-400 md:max-lg:w-4/5 xl:w-2/3'>
     {description}
      </div>
      <div className="my-10 xl:my-14 ">
      <div class="button-container">
        <div class="element1">
          <button class="button1">{btn}</button>
        </div>
        <div class="element2">
          <button class="button2 small">
            <img
              src="https://assets-global.website-files.com/643f7373d3f6653157617339/6475e07a5346abd5e16df149_short_down.svg"
              alt=""
            />
          </button>
        </div>
        <div class="element3">
          <button class="button2 ">
            <img
              src="https://assets-global.website-files.com/643f7373d3f6653157617339/6475e07a5346abd5e16df149_short_down.svg"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}
