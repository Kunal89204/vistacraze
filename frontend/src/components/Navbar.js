'use client'

import Image from 'next/image';
import Link from 'next/link';
import Logo from '../assets/vistacraze.png';
import Service from "../assets/download (2).jpeg"
import { useState,useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Navbar = () => {
  const [ isMenuOpen, setIsMenuOpen ] = useState( false );

  const toggleMenu = () => {
    setIsMenuOpen( !isMenuOpen );
  };

  // ===============================================
   useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const textElements = gsap.utils.toArray('.text');

    textElements.forEach((text) => {
      gsap.to(text, {
        backgroundSize: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: text,
          start: 'center 80%',
          end: 'center 20%',
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <nav className="border-b-2 pl-10 h-16">
      <div className="container flex h-16 items-center justify-center relative">
        {/* Hamburger icon for mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-3xl w-20 focus:outline-none">
            &#9776;
          </button>
        </div>

        <div className="flex items-center w-3/4 justify-between">
          {/* Logo */}

          <Image src={Logo} alt="vistacraze" width={100} height={10} className=" hidden lg:block justif-start" />


          {/* Menu items */}
          <ul
            className={`${ isMenuOpen ? 'flex flex-col' : 'hidden'
              } lg:flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 absolute top-full left-0  w-full lg:w-auto lg:relative`}
          >
            <li className="relative group">
              {/* Use Next.js Link for navigation */}
              <Link href="#" passHref>
                <p className="text-black hover:text-gray-300">SERVICES</p>
              </Link>
              <div className="lg:absolute hidden h-screen  lg:w-screen  lg:ml-4 lg: p-6 -left-96 group-hover:block bg-black text-white rounded-lg space-y-2">
                <div className="flex  gap-20 p-20">
                  <div className="flex gap-6 justify-center text-3xl flex-col">
                    <Link href="/digiting">Digital marketing</Link>
                    <Link href="/web-development">Web development</Link>
                    <Link href="/web-design">Web design</Link>
                    <Link href="/branding">Branding</Link>
                    {/* <Link href="/submenu-5">Submenu 5</Link> */}
                  </div>
                  <Image src={Service} alt="vistacraze" width={300} height={200} className=" hidden lg:block justif-start mix-blend-difference " />

                </div>
              </div>
            </li>

            <li className="relative group">
              {/* Use Next.js Link for navigation */}
              <Link href="#" passHref>
                <p className="text-black hover:text-gray-300">ABOUT US</p>
              </Link>
              <div className="lg:absolute hidden lg:w-screen lg:ml-4 p-6 -left-64 group-hover:block bg-gray-800 text-white rounded-lg space-y-2">
                <Link href="/about-digiting">About Digiting</Link>
                <Link href="/about-web-development">About Web development</Link>
                <Link href="/about-web-design">About Web design</Link>
                <Link href="/about-branding">About Branding</Link>
                <Link href="/about-submenu-5">About Submenu 5</Link>
              </div>
            </li>
            <li className="relative group">
              {/* Use Next.js Link for navigation */}
              <Link href="#" passHref>
                <p className="text-black hover:text-gray-300">INSIGHTS</p>
              </Link>
              <div className="lg:absolute hidden lg:w-screen lg:ml-4 p-6 -left-64 group-hover:block bg-gray-800 text-white rounded-lg space-y-2">
                <Link href="/about-digiting">About Digiting</Link>
                <Link href="/about-web-development">About Web development</Link>
                <Link href="/about-web-design">About Web design</Link>
                <Link href="/about-branding">About Branding</Link>
                <Link href="/about-submenu-5">About Submenu 5</Link>
              </div>
            </li>
            <li className="relative group">
              {/* Use Next.js Link for navigation */}
              <Link href="#" passHref>
                <p className="text-black hover:text-gray-300">INDSUTRIES</p>
              </Link>
              <div className="lg:absolute hidden lg:w-screen lg:ml-4 p-6 -left-64 group-hover:block bg-gray-800 text-white rounded-lg space-y-2">
                <Link href="/about-digiting">About Digiting</Link>
                <Link href="/about-web-development">About Web development</Link>
                <Link href="/about-web-design">About Web design</Link>
                <Link href="/about-branding">About Branding</Link>
                <Link href="/about-submenu-5">About Submenu 5</Link>
              </div>
            </li>
            <li className="relative group">
              {/* Use Next.js Link for navigation */}
              <Link href="#" passHref>
                <p className="text-black hover:text-gray-300">CAREERS</p>
              </Link>
              <div className="lg:absolute hidden lg:w-screen lg:ml-4 p-6 -left-64 group-hover:block bg-gray-800 text-white rounded-lg space-y-2">
                <Link href="/about-digiting">About Digiting</Link>
                <Link href="/about-web-development">About Web development</Link>
                <Link href="/about-web-design">About Web design</Link>
                <Link href="/about-branding">About Branding</Link>
                <Link href="/about-submenu-5">About Submenu 5</Link>
              </div>
            </li>
            <li className="relative group">
              {/* Use Next.js Link for navigation */}
              <Link href="#" passHref>
                <p className="text-black hover:text-gray-300">CONTACT</p>
              </Link>
              <div className="lg:absolute hidden lg:w-screen lg:ml-4 p-6 -left-64 group-hover:block bg-gray-800 text-white rounded-lg space-y-2">
                <Link href="/about-digiting">About Digiting</Link>
                <Link href="/about-web-development">About Web development</Link>
                <Link href="/about-web-design">About Web design</Link>
                <Link href="/about-branding">About Branding</Link>
                <Link href="/about-submenu-5">About Submenu 5</Link>
              </div>
            </li>

            {/* Add more menu items as needed */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
