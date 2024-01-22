import React from 'react'
import Navbar from "../../widgets/layout/navbar"
import Hero from "./Hero"
import Service from './Service'
import When from "./When"
const home = () => {
    return (
        <div>
            <Navbar />
             <Hero
        h1="Web"
        h2="Design"
        h3="$ —"
        h4="Development"
        description="We're not just designers; we're collaborators in your progress. With our web design service lets make an impact by combining unique design and technical expertise."
        btn="Contact Us"
      />
            <Service />
            <When />
        </div>
    )
}

export default home
