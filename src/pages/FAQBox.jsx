import React from 'react'
import FAQitem from './FAQitem'

export default function FAQBox() {
  return (
    <div className='w-screen p-32 bg-black'>
      <h1 className='text-gray-200 text-xl '>OUR SEVICES</h1>
      <FAQitem sno="1" qstn="DIGITAL MARKETING" desc="123456789123456789123456789123456789123456789123456789" imgurl="https://png.pngtree.com/png-vector/20191126/ourmid/pngtree-image-of-cute-radish-vector-or-color-illustration-png-image_2040180.jpg" />
      <FAQitem sno="2" qstn="UX DESIGN" desc="123456789123456789123456789123456789123456789123456789" imgurl="https://png.pngtree.com/png-vector/20191126/ourmid/pngtree-image-of-cute-radish-vector-or-color-illustration-png-image_2040180.jpg" />
      <FAQitem sno="3" qstn="WEB DESIGN" desc="123456789123456789123456789123456789123456789123456789" imgurl="https://png.pngtree.com/png-vector/20191126/ourmid/pngtree-image-of-cute-radish-vector-or-color-illustration-png-image_2040180.jpg" />
      <FAQitem sno="4" qstn="WEB DEVELOPMENT" desc="123456789123456789123456789123456789123456789123456789" imgurl="https://png.pngtree.com/png-vector/20191126/ourmid/pngtree-image-of-cute-radish-vector-or-color-illustration-png-image_2040180.jpg" />
      <FAQitem sno="5" qstn="APP DEVELOPMENT" desc="123456789123456789123456789123456789123456789123456789" imgurl="https://png.pngtree.com/png-vector/20191126/ourmid/pngtree-image-of-cute-radish-vector-or-color-illustration-png-image_2040180.jpg" />
      <FAQitem sno="6" qstn="SAAS DESIGN" desc="123456789123456789123456789123456789123456789123456789" imgurl="https://png.pngtree.com/png-vector/20191126/ourmid/pngtree-image-of-cute-radish-vector-or-color-illustration-png-image_2040180.jpg" />

    </div>
  )
}
