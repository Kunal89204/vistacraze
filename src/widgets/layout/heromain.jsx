import React, { useState } from 'react';
import Star from "../../assets/Project3.jpg"
// import ThreeD from "../../assets/3d.jpg"
import { FaRankingStar } from "react-icons/fa6";
import { GoNorthStar } from "react-icons/go";
import { LiaStarOfLifeSolid } from "react-icons/lia";
import herobg from "../../assets/Project6.jpg"
import "../heromain.css"
import Heroimg from "../../assets/heroimg.jpg"
const heromain = () => {
    const [ isHovered, setIsHovered ] = useState( false );

    return (
        <div className='h-screen overflow-hidden w-screen  justify-center items-center ' >
            <div className='w-screen absolute grid grid-flow-col  grid-cols-1 -z-10'>
                <img src={Star} alt="" className='herobgimg1 mix-blend-darken -top-52 -z-10' />
                <img src={herobg} alt='' className=" herobgimg   top-0 -z-10" />
            </div>

            <div className='flex h-screen justify-center gap-10 items-center flex-col'>

                <div className='flex h-52 text-8xl mt-20 items-center relative justify-center font-extralight' >
                    DIGITAL

                    <span
                        className=' flex mt-32 cursor-pointer mix-blend-darken '
                        onMouseEnter={() => setIsHovered( true )}
                        onMouseLeave={() => setIsHovered( false )}
                    >
                        GROW{' '}{isHovered && ( <span className='flex text-md'>I</span> )}TH{isHovered && ( <span className='flex text-md '>us</span> )}
                        <GoNorthStar className='   flex text-3xl' />
                        <LiaStarOfLifeSolid className=' absolute ml-44 mt-2 flex text-7xl' />

                        <span className='text-sm mt-20 absolute'> </span>

                    </span>

                </div>

                <div className=' w-3/5 flex bg-white rounded-r-3xl  -ml-20   '>
                    <FaRankingStar className=' relative text-blue-600 flex   justify-center items-center text-7xl' />
                       <span className='text-6xl underline '>W</span>

                    <div className=' w-full text-balance text-2xl'>
                        e craft end-to-end marketing strategies using top platforms to overcome challenges and achieve your goals
                    </div>
                </div>

            </div>



        </div>


    )
}

export default heromain
