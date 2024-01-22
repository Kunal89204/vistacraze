import React from "react";
import './faqitem.css'
export default function FAQitem({sno, qstn, desc, imgurl}) {
  return (
    <div class=" w-auto bg-black text-white">
      <div class="faq-item flex flex-col p-10 border-b-2 border-gray-700">
     <div className="flex gap-2 items-center text-5xl">
       <div class="">{sno}</div>
      <div class="question">{qstn}</div>
     </div>
      <div class="answer">{desc}
      <button>Learn More</button>
      </div>

      <img   src={imgurl}  alt=""  className=" faqimg"
        />
      </div>
    </div>
  );
}
