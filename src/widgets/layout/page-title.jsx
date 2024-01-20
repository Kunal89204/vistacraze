// Gallery.js

import React, { useState } from 'react';
import './Gallery.css';
import  Navbar from '../layout/navbar';
import Reactimg from "../../assets/react.png"
import Nextjs from "../../assets/nextjs.png"
const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filterSelection = (category) => {
    setSelectedCategory(category);
  };

  const imgData = [
    { url: Reactimg, category: 'sports', title: "React.js" },
    { url: Nextjs, category: 'sports', title: "Next.js" },
    { url: 'https://i.postimg.cc/C570B6Hn/adi.jpg', category: 'sorts' },
    { url: 'https://i.postimg.cc/9XJs9TH9/hub-1.jpg', category: 'watch' },
    { url: 'https://i.postimg.cc/T1g5jvYw/ro.jpg', category: 'watch' },
    { url: 'https://i.postimg.cc/50ZFF2JT/pp7.jpg', category: 'watch' },
    // Add more image data entries with different categories
  ];

  return (

    <div>
      <Navbar/>
<div className='w-screen flex flex-col top-20 pt-32 gap-10 items-center '>
      <div className='flex text-center gap-5 font-semibold  justify-center items-center  flex-col'>
        <h1 className='text-'>GROW YOUR BUSINESS</h1>
        <div className=' w-1/2 text-balance text-4xl'>
          Our Modern <span className='  text-gray-600'>
            Full-stack Tech</span> Built for Performance.
        </div>
        <div className=' w-3/4 justify-center text-center flex items-center'>
          our web design  experts have carefully   curated the ultimate
          tech stack to ensure the  highest quality and performance of your application
        </div>
    </div>


      <div className=" flex gap-4  ">
        <div onClick={() => filterSelection('all') } className=' cursor-pointer rounded-2xl bg-gray-300 p-2 text-sm '>Show All</div>
        <div onClick={() => filterSelection('sports') } className=' cursor-pointer rounded-2xl bg-gray-300 p-2 text-sm '>Web Design</div>
        <div onClick={() => filterSelection('watch') } className=' cursor-pointer rounded-2xl bg-gray-300 p-2 text-sm '>Front-End</div>
        <div onClick={() => filterSelection('watch') } className=' cursor-pointer rounded-2xl bg-gray-300 p-2 text-sm '>Back-End</div>
        <div onClick={() => filterSelection('watch') } className=' cursor-pointer rounded-2xl bg-gray-300 p-2 text-sm '>CMS</div>
        {/* Add buttons for other categories */}
      </div>

      <div className="img-container">
        {imgData.map((img, index) => (
          <div
            key={index}
            className={`imgDiv ${selectedCategory === 'all' || img.category === selectedCategory ? 'show' : ''}`}
          >
            <div className='flex flex-col justify-center items-center gap-4'>
              <img src={img.url} alt="" height="80%" width="70%" />
              {/* <p>{img.title}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>

    </div>
    );
};

export default Gallery;
