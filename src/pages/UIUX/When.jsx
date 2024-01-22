import React from "react";
import rocket from "../../assets/rocket.png";
import Whencard from './Whencard'
import chart from '../../assets/chart.png'
import growth from '../../assets/growth.png'

export default function When() {
  return (
    <div className="bg-white 2xl:px-48">
      <h2 className="lg:text-2xl text-lg px-5 py-8 text-gray-500">WHEN</h2>
      <div className="text-gray-700 text-3xl lg:text-7xl px-5 font-semibold">
        When Can A UX Design Agency
        <div className=" text-gray-700">
          <span className="text-gray-400"> Create Values</span> for Companies
        </div>
      </div>

     <div className="lg:flex justify-around lg:space-x-5 px-8 lg:py-20  xl:space-x-20">


     <Whencard
        imageUrl={rocket}
        title="For Startups"
        description="Ignite growth with intuitive designs, fostering user loyalty and attracting investors."
      />

     <Whencard
        imageUrl={chart}
        title="For Businesses"
        description="Elevate brand image, enhance user satisfaction, and drive competitive edge for the future market."
      />

     <Whencard
        imageUrl={growth}
        title="For Enterprises & Startups"
        description="Streamline operations, amplify user experiences, and solidify industry leadership."
      />



     </div>


    </div>
  );
}
