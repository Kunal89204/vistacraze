import React from 'react'
import Navbar from "../widgets/layout/navbar"
import Hero from "../widgets/layout/hero"
import Hero2 from "../widgets/layout/hero2"
import Hero3 from "../widgets/layout/hero3"
import Heromain from "../widgets/layout/heromain"
import Cards from "../widgets/layout/cards"
// import Section1 from "../widgets/layout/simple-footer"
import Footer from "../widgets/layout/footer"
import Anim from "../widgets/layout/simple-footer"
import FaqItem from "./FAQBox"
import Faq from "../pages/FAQ"
const App = () => {
  return (
    <div >
      <Navbar />
      <Heromain/>
      <Hero />
      <Hero2 />
      <Anim/>
      <FaqItem />
      <Faq/>
      {/* <Section1 /> */}
      <Footer />
    </div>
  )
}

export default App
