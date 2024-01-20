import React from 'react'
import Star from "../../assets/Project3.jpg"
import ThreeD from "../../assets/3d.jpg"
const heromain = () => {
    return (
        <div className='h-screen overflow-hidden w-screen justify-center items-center text-9xl'>
            <img src={Star} alt="" className='absolute flex -top-20 -z-10' />

            <div className=' flex mt-32 items-center justify-center font-extralight'>
                DIGITAL <span className='mt-32'> GROWTH
                    {/* <img src={ThreeD} alt="" className='absolute flex top-20 mix-blend-darken left-96 ml-96 w-96 -z-10' /> */}

                </span>

            </div>



        </div>


    )
}

export default heromain
