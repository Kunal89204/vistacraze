import React from "react";
import Servicename from "./Servicename";

export default function Service() {
  return (
    <div className="bg-white">
      <div className="text-center text-4xl text-black py-6 sm:text-6xl sm:py-16">
        Our Comprehensive
        <div className="text-gray-400">Web Design Services</div>
      </div>

      <div className="sm:flex xl:px-24 2xl:px-52 flex-wrap">

        <Servicename
          title="Front-end Development"
          description="Our web design experts bring your visuals to life with pixel-perfect coding, ensuring an engaging user experience."
        />
        <Servicename
          title="Back-end Development"
          description="Our web development team builds the robust infrastructure that powers your website, guaranteeing seamless functionality."
        />
        <Servicename
          title="Custom Web Application"
          description="We create tailor-made web solutions, aligning with your unique business needs for unmatched performance."
        />
        <Servicename
          title="CMS Solutions"
          description="Our web developer integrate user-friendly CMS solutions for effortless content updates and website management."
        />
        <Servicename
          title="SEO Optimization"
          description="We ensure your website runs flawlessly with regular updates, backups, and optimizations for peak performance."
        />
        <Servicename
          title="Continuous Support"
          description="Our commitment doesn't end with launch; we offer continuous support to keep your website thriving."
        />
        
      </div>
    </div>
  );
}
