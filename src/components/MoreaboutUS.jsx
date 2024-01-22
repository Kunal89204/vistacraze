import React from 'react'
import "../pages/button.css"
const about = ( { h1, description, description2, btn } ) => {
  return (
    <div> <div className=' '>
      <div className=''>
        <div className='text-4xl md:text-4xl md:w-2/3 w-full py-10 font-bold md:max-lg:w-full 2xl:text-6xl text-gray-400'>{h1} </div>
      </div>
      <div className='flex flex-col gap-5'>
        <div className=' text-base md:text-xl text-white font-sans text-balance '>
          {description}
        </div>
        <div className=' text-base md:text-xl text-white font-sans    '>
          {description2}
        </div>
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
    </div></div>
  )
}

export default about
