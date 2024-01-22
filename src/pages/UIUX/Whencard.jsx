import React from 'react';
import rocket from '../../assets/rocket.png'; // Make sure to provide the correct path

const Card = ({ imageUrl, title, description }) => {
  return (
    <div className="group px-10 py-5 bg-gray-200 lg:w-1/3 hover:bg-black my-10">
      <div className="py-10">
        <img src={imageUrl} alt="" className="w-16" />
      </div>

      <div className="py-5">
        <div className="text-black text-3xl py-5 pt-24 font-semibold group-hover:text-white">{title}</div>
        <div className="text-black group-hover:text-white text-lg">{description}</div>
      </div>
    </div>
  );
};

export default Card
