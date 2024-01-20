import React from 'react'
import Navbar from "../widgets/layout/navbar"
import Hero from "../widgets/layout/hero"
import Hero2 from "../widgets/layout/hero2"
import Hero3 from "../widgets/layout/hero3"
import Heromain from "../widgets/layout/heromain"
import Cards from "../widgets/layout/cards"
const App = () => {
  return (
    <div >
      <Navbar />
      <Heromain/>
      <Hero />
      <Hero2 />
      <Cards/>
      {/* <Hero3/> */}
    </div>
  )
}

export default App
