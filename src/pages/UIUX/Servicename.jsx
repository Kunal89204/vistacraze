import React from "react";

export default function Servicename({ title, description}) {
  const links = {
    link1:
      "https://cdn.create.vista.com/api/media/small/8299228/stock-photo-laptop-with-blue-graphics",
  };
  return (
    <div className=" px-5  md:w-1/2 ">
      <div className=" py-5 md:flex">
        <div className="border-4 flex items-center md:w-1/3">
          <img src={links.link1} alt=""  />
        </div>
        <div>
        <div >
          <h1 className="text-black text-2xl py-3 font-bold md:text-lg md:text-center">
            {title}
          </h1>
        </div>
        <p className="text-gray-600 md:text-sm md:px-4">
          {description}
         
        </p>
        </div>
      </div>
      <hr />
    </div>
  );
}
