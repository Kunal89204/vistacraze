import React from 'react'

export default function Title() {
  return (
    <div className='p-4 bg-black flex items-center justify-between'>
      <h1 className='text-4xl '>Vistacraze</h1>
      <nav className='w-full'>
        <ul className='flex  space-x-10 justify-center'>
          <li className='xl:text-xl'>Services</li>
          <li className='xl:text-xl'>About Us</li>
          <li className='xl:text-xl'>Work</li>
          <li className='xl:text-xl'>Our Process</li>
          <li className='xl:text-xl'>Career</li>
        </ul>
      </nav>
    </div>
  )
}
