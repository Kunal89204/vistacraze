import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from "../../assets/vistacraze.png"
import { IoIosMail } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

import "./Navbar.css"
import Drop from "../../assets/dropdown1.png"

import { FaHandHoldingHeart } from "react-icons/fa";

import { FaInstagram, FaFacebook, FaYoutube, FaPhone } from "react-icons/fa6";

export default function Example( { currentPage } ) {
  const [ navbarOpen, setNavbarOpen ] = useState( false );

  const navigation = [
    { name: 'Home', href: '/', current: currentPage === 'Home' },
    { name: 'About', href: '/about', current: currentPage === 'About' },
    { name: 'Team', href: '/team', current: currentPage === 'Team' },
    { name: 'Blog', href: '/Blog', current: currentPage === 'Blog   ' },
    { name: 'Contact', href: '/contact', current: currentPage === 'Contact' },
  ];

  const classNames = ( ...classes ) => {
    return classes.filter( Boolean ).join( ' ' );
  };
  return (
    <div className='z-999 bg-transparent w-screen fixed z-50 border-b-2 border-white'>


      <Disclosure as="nav" className="backdrop-blur-3xl z-50  sticky navborder top-0 ">
        {( { open } ) => (
          <>
            <div>

            </div>
            <div className="mx-auto max-w-7xl   px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-20  items-center justify-center md:justify-between sm:justify-between">
                <div className="absolute inset-y-0 left-0 flex  items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                <div className='gap-32 w-screen flex justify-center  items-center '>

                  <div className="relative inline-block ring-0 border-0  bg-gray-100  border-transparent text-left group">
                    <button
                      type="button"
                      className="inline-flex justify-center items-center px-4 py-2  shadow-sm text-sm  font-medium rounded-md hover:underline "
                    >
                      About us

                    </button>
                    <div className="hidden group-hover:block origin-top-right dropdown absolute p-10 text-4xl right-0 -left-10 rounded-md shadow-lg bg-black ring-1  text-white ring-black ring-opacity-5">
                      <div
                        className="py-1  text-3xl flex"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu">
                        <div className='flex gap-5 flex-col'>
                          <div class="linkWrap">

                            <a class="style-28" href="#" data-after="WHO WE ARE ">
                              <span>WHO WE ARE </span>
                            </a>
                          </div>
                          <div class="linkWrap">

                            <a class="style-28" href="#" data-after="WHAT WE DO ">
                              <span>WHAT WE DO </span>
                            </a>
                          </div>
                          <div class="linkWrap">

                            <a class="style-28" href="#" data-after="WHY CHOOSE US ">
                              <span>WHY CHOOSE US  </span>
                            </a>
                          </div>
                          <div class="linkWrap">

                            <a class="style-28" href="#" data-after="OUR TEAM ">
                              <span>OUR TEAM  </span>
                            </a>
                          </div>
                          <div class="linkWrap">

                            <a class="style-28" href="#" data-after="OUR MISSION ">
                              <span>OUR MISSION </span>
                            </a>
                          </div>


                        </div>
                        <img src={Drop} alt="vistaCraze" className='w-96 ml-28 h-96' />
                        <div>

                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative inline-block ring-0 border-0  bg-gray-100  border-transparent text-left group">
                    <button
                      type="button"
                      className="inline-flex justify-center items-center px-4 py-2  shadow-sm text-sm  font-medium rounded-md hover:underline "
                    >
                      Services

                    </button>
                    <div className="hidden group-hover:block origin-top-right dropdown absolute p-10 text-4xl right-0    -left-10 rounded-md shadow-lg bg-black ring-1  text-white ring-black ring-opacity-5">
                      <div
                        className="py-1  font-serif text-3xl flex"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu">
                          <div className='flex gap-5 flex-col'>
                          <div class="linkWrap">

                            <a class="style-28 hover:text-blue-600" href="#" data-after="DIGITAL MARKETING">
                              <span className='hover:text-blue-600'> DIGITAL MARKETING </span>
                            </a>
                          </div>
                          <div class="linkWrap">

                            <a class="style-28" href="#" data-after="DIGITAL STRATEGY ">
                              <span>DIGITAL STRATEGY </span>
                            </a>
                          </div>
                          <div class="linkWrap">

                            <a class="style-28" href="#" data-after="WEB DEVELOPMENT ">
                              <span>WEB DEVELOPMENT </span>
                            </a>
                          </div>
                          <div class="linkWrap">

                            <a class="style-28" href="#" data-after="BRANDING and UX/UI DESIGN ">
                              <span>BRANDING and UX/UI DESIGN  </span>
                            </a>
                          </div>
                          <div class="linkWrap">

                            <a class="style-28" href="#" data-after="APP DEVELOPMENT ">
                              <span>APP DEVELOPMENT  </span>
                            </a>
                          </div>
                          <div class="linkWrap">

                            <a class="style-28" href="#" data-after="STAFF AUGMENTATION ">
                              <span>STAFF AUGMENTATION </span>
                            </a>
                          </div>
                          <div class="linkWrap">

                            <a class="style-28" href="#" data-after="CONTENT SERVICE ">
                              <span>CONTENT SERVICE </span>
                            </a>
                          </div>


                        </div>
                        <img src={Drop} alt="vistaCraze" className='w-96 ml-28 h-96' />
                        <div>

                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex   justify-center ml-40  md:ml-1 items-center">
                    <a href="/">
                      <img
                        className="h-32 md:h-40 text-white bg-white mix-blend-difference lg:h-28  w-auto  "
                        src={Logo}
                        alt="rahil foundation logo"
                      />
                    </a>
                  </div>


                  <div className="relative inline-block ring-0 border-0  bg-gray-100  border-transparent text-left group">
                    <button
                      type="button"
                      className="inline-flex justify-center items-center px-4 py-2  shadow-sm text-sm  font-medium rounded-md hover:underline "
                    >
                      Our Process

                    </button>
                    <div className="hidden group-hover:block origin-top-right dropdown -left-96 -ml-96 absolute p-10 text-4xl right-0   -left-44 rounded-md shadow-lg bg-black ring-1  text-white ring-black ring-opacity-5">
                      <div
                        className="py-1 text-2xl font-serif flex"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu">
                         <div className='flex gap-5 flex-col'>
                          <div class="linkWrap">

                            <a class="style-28" href="#" data-after="WHO WE ARE ">
                              <span>WHO WE ARE </span>
                            </a>
                          </div>
                          <div class="linkWrap">

                            <a class="style-28" href="#" data-after="WHAT WE DO ">
                              <span>WHAT WE DO </span>
                            </a>
                          </div>
                          <div class="linkWrap">

                            <a class="style-28" href="#" data-after="WHY CHOOSE US ">
                              <span>WHY CHOOSE US  </span>
                            </a>
                          </div>
                          <div class="linkWrap">

                            <a class="style-28" href="#" data-after="OUR TEAM ">
                              <span>OUR TEAM  </span>
                            </a>
                          </div>
                          <div class="linkWrap">

                            <a class="style-28" href="#" data-after="OUR MISSION ">
                              <span>OUR MISSION </span>
                            </a>
                          </div>


                        </div>
                        <img src={Drop} alt="vistaCraze" className='w-96 ml-28 h-96' />
                        <div>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative inline-block ring-0 border-0  bg-gray-100  border-transparent text-left group">
                    <button
                      type="button"
                      className="inline-flex justify-center items-center px-4 py-2  shadow-sm text-sm  font-medium rounded-md hover:underline "
                    >
                      Contact

                    </button>
                    <div className="hidden group-hover:block origin-top-right dropdown absolute p-10 text-4xl right-0   -left-96 -ml-96 rounded-md shadow-lg bg-black ring-1  text-white ring-black ring-opacity-5">
                      <div
                        className="py-1 text-3xl flex"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu">
                         <div className='flex gap-5 flex-col'>
                          <div class="linkWrap">

                            <a class="style-28" href="#" data-after="WHO WE ARE ">
                              <span>WHO WE ARE </span>
                            </a>
                          </div>
                          <div class="linkWrap">

                            <a class="style-28" href="#" data-after="WHAT WE DO ">
                              <span>WHAT WE DO </span>
                            </a>
                          </div>
                          <div class="linkWrap">

                            <a class="style-28" href="#" data-after="WHY CHOOSE US ">
                              <span>WHY CHOOSE US  </span>
                            </a>
                          </div>
                          <div class="linkWrap">

                            <a class="style-28" href="#" data-after="OUR TEAM ">
                              <span>OUR TEAM  </span>
                            </a>
                          </div>
                          <div class="linkWrap">

                            <a class="style-28" href="#" data-after="OUR MISSION ">
                              <span>OUR MISSION </span>
                            </a>
                          </div>


                        </div>
                        <img src={Drop} alt="vistaCraze" className='w-96 ml-28 h-96' />
                        <div>

                        </div>
                      </div>
                    </div>
                  </div>

                </div>


              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map( ( item ) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-black hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ) )}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}
