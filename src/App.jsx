import React from 'react'
import Navbar from "./widgets/layout/navbar"
import Hero from "./widgets/layout/hero"
import Hero2 from "./widgets/layout/hero2"
import Hero3 from "./widgets/layout/hero3"
const App = () => {
  return (
    <div >
      <Navbar />
      <Hero />
      <Hero2 />
      {/* <Hero3/> */}
    </div>
  )
}

export default App
