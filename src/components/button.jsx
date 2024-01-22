import React from 'react'
import "../pages/button.css"
const button = ({btn}) => {
  return (
    <div>  <div class="button-container">
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
      </div></div>
  )
}

export default button
