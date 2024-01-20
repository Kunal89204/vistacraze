import React from 'react'
import Navbar from "./widgets/layout/navbar"
import Hero from "./widgets/layout/hero"
import Hero2 from "./widgets/layout/hero2"
import Hero3 from "./widgets/layout/hero3"
import Heromain from "./widgets/layout/heromain"
const App = () => {
  return (
    <div >
      <Navbar />
      <Heromain/>
      <Hero />
      <Hero2 />
      {/* <Hero3/> */}
    </div>
  )
}

export default App
