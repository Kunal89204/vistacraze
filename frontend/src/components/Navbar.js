'use client'

import Image from 'next/image';
import Link from 'next/link';
import Logo from '../assets/vistacraze.png';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-100 p-4">
      <div className="container flex justify-between items-center relative">
        {/* Hamburger icon for mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-3xl focus:outline-none">
            &#9776;
          </button>
        </div>

        {/* Logo */}
        <div className="hidden lg:block">
          <Image src={Logo} alt="vistacraze" width={150} height={70} />
        </div>

        {/* Menu items */}
        <ul
          className={`${
            isMenuOpen ? 'flex flex-col' : 'hidden'
          } lg:flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 absolute top-full left-0 bg-gray-100 w-full lg:w-auto lg:relative`}
        >
          <li className="relative group">
            {/* Use Next.js Link for navigation */}
            <Link href="#" passHref>
              <p className="text-black hover:text-gray-300">Services</p>
            </Link>
            <div className="lg:absolute hidden lg:w-screen lg:ml-4 p-6 -left-64 group-hover:block bg-gray-800 text-white rounded-lg space-y-2">
              <Link href="/digiting">Digiting</Link>
              <Link href="/web-development">Web development</Link>
              <Link href="/web-design">Web design</Link>
              <Link href="/branding">Branding</Link>
              <Link href="/submenu-5">Submenu 5</Link>
            </div>
          </li>

          <li className="relative group">
            {/* Use Next.js Link for navigation */}
            <Link href="#" passHref>
              <p className="text-black hover:text-gray-300">About us</p>
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
    </nav>
  );
};

export default Navbar;
