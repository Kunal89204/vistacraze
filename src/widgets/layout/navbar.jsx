import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from "../../assets/vistacraze.png"
import { IoIosMail } from "react-icons/io";
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
    <div className='z-999 bg-transparent'>


      <Disclosure as="nav" className="backdrop-blur-3xl z-50  sticky navborder top-0 ">
        {( { open } ) => (
          <>
            <div>

            </div>
            <div className="mx-auto max-w-7xl  navborder px-2 sm:px-6 lg:px-8">
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

                <div className='gap-20 flex justify-center  items-center p-16'>
                   <div className="flex   justify-center ml-40  md:ml-1 items-center">
                  <a href="/">
                    <img
                      className="h-20 md:h-40 lg:h-28  w-auto  "
                      src={Logo}
                      alt="rahil foundation logo"
                    />
                  </a>
                </div>
                <div className="flex flex-1  items-center justify-center ml-10 sm:items-stretch sm:justify-start">

                  <div className="hidden   sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      <div className="relative inline-block ring-0 border-0 border-transparent text-left group">
                        <button
                          type="button"
                          className="inline-flex justify-center items-center px-4 py-2  shadow-sm text-sm  font-medium rounded-md hover:underline "
                        >
                          About us
                          <svg
                            className="-mr-1 ml-2 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 8a1 1 0 011 1v5a1 1 0 11-2 0V9a1 1 0 011-1zm-2.707-2.293a1 1 0 011.414 0L10 9.586l1.293-1.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 0 10-1.414 1 1 0 011.414 0L10 9.586 11.293 8.293z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                        <div className="hidden group-hover:block origin-top-right dropdown absolute p-10 text-4xl right-0   -left-10 rounded-md shadow-lg bg-black ring-1  text-white ring-black ring-opacity-5">
                          <div
                            className="py-1 text-4xl flex"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu">
                            <div className='flex flex-col'>
                            <a
                                href="/about"
                                className="block px-4 py-2 text-sm md:text-3xl  "
                                role="menuitem"
                              >
                                Who we are
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm md:text-3xl "
                                role="menuitem"
                              >
                                what we do
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm md:text-3xl "
                                role="menuitem"
                              >
                                Director's
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm md:text-3xl "
                                role="menuitem"
                              >
                                Our location
                              </a>

                              <a
                                href="#"
                                className="block px-4 py-2 text-sm md:text-3xl "
                                role="menuitem"
                              >
                                Vision & Mission
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm md:text-3xl "
                                role="menuitem"
                              >
                                Supporters
                              </a>
                            </div>
                            <img src={Drop} alt="vistaCraze" className='w-96 ml-28 h-96'/>
                            <div>

                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative inline-block ring-0 border-0 border-transparent text-left group">
                        <button
                          type="button"
                          className="inline-flex justify-center items-center px-4 py-2  shadow-sm text-sm  font-medium rounded-md hover:underline "
                        >
                        Services
                          <svg
                            className="-mr-1 ml-2 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 8a1 1 0 011 1v5a1 1 0 11-2 0V9a1 1 0 011-1zm-2.707-2.293a1 1 0 011.414 0L10 9.586l1.293-1.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 0 10-1.414 1 1 0 011.414 0L10 9.586 11.293 8.293z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                        <div className="hidden group-hover:block origin-top-right dropdown absolute p-10 text-4xl right-0   -left-10 rounded-md shadow-lg bg-black ring-1  text-white ring-black ring-opacity-5">
                          <div
                            className="py-1 text-4xl flex"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu">
                            <div className='flex flex-col'>
                            <a
                                href="/about"
                                className="block px-4 py-2 text-sm md:text-3xl  "
                                role="menuitem"
                              >
                                Who we are
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm md:text-3xl "
                                role="menuitem"
                              >
                                what we do
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm md:text-3xl "
                                role="menuitem"
                              >
                                Director's
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm md:text-3xl "
                                role="menuitem"
                              >
                                Our location
                              </a>

                              <a
                                href="#"
                                className="block px-4 py-2 text-sm md:text-3xl "
                                role="menuitem"
                              >
                                Vision & Mission
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm md:text-3xl "
                                role="menuitem"
                              >
                                Supporters
                              </a>
                            </div>
                            <img src={Drop} alt="vistaCraze" className='w-96 ml-28 h-96'/>
                            <div>

                            </div>
                          </div>
                        </div>
                      </div>


                      <div className="relative inline-block ring-0 border-0 border-transparent text-left group">
                        <button
                          type="button"
                          className="inline-flex justify-center items-center px-4 py-2  shadow-sm text-sm  font-medium rounded-md hover:underline "
                        >
                          Our Process
                          <svg
                            className="-mr-1 ml-2 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 8a1 1 0 011 1v5a1 1 0 11-2 0V9a1 1 0 011-1zm-2.707-2.293a1 1 0 011.414 0L10 9.586l1.293-1.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 0 10-1.414 1 1 0 011.414 0L10 9.586 11.293 8.293z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                        <div className="hidden group-hover:block origin-top-right dropdown absolute p-10 text-4xl right-0   -left-44 rounded-md shadow-lg bg-black ring-1  text-white ring-black ring-opacity-5">
                          <div
                            className="py-1 text-4xl flex"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu">
                            <div className='flex flex-col'>
                            <a
                                href="/about"
                                className="block px-4 py-2 text-sm md:text-3xl  "
                                role="menuitem"
                              >
                                Who we are
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm md:text-3xl "
                                role="menuitem"
                              >
                                what we do
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm md:text-3xl "
                                role="menuitem"
                              >
                                Director's
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm md:text-3xl "
                                role="menuitem"
                              >
                                Our location
                              </a>

                              <a
                                href="#"
                                className="block px-4 py-2 text-sm md:text-3xl "
                                role="menuitem"
                              >
                                Vision & Mission
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm md:text-3xl "
                                role="menuitem"
                              >
                                Supporters
                              </a>
                            </div>
                            <img src={Drop} alt="vistaCraze" className='w-96 ml-28 h-96'/>
                            <div>

                            </div>
                          </div>
                        </div>
                      </div>
                    <div className="relative inline-block ring-0 border-0 border-transparent text-left group">
                        <button
                          type="button"
                          className="inline-flex justify-center items-center px-4 py-2  shadow-sm text-sm  font-medium rounded-md hover:underline "
                        >
                        Contact
                          <svg
                            className="-mr-1 ml-2 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 8a1 1 0 011 1v5a1 1 0 11-2 0V9a1 1 0 011-1zm-2.707-2.293a1 1 0 011.414 0L10 9.586l1.293-1.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 0 10-1.414 1 1 0 011.414 0L10 9.586 11.293 8.293z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                        <div className="hidden group-hover:block origin-top-right dropdown absolute p-10 text-4xl right-0   -left-80 rounded-md shadow-lg bg-black ring-1  text-white ring-black ring-opacity-5">
                          <div
                            className="py-1 text-4xl flex"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu">
                            <div className='flex flex-col'>
                            <a
                                href="/about"
                                className="block px-4 py-2 text-sm md:text-3xl  "
                                role="menuitem"
                              >
                                Who we are
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm md:text-3xl "
                                role="menuitem"
                              >
                                what we do
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm md:text-3xl "
                                role="menuitem"
                              >
                                Director's
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm md:text-3xl "
                                role="menuitem"
                              >
                                Our location
                              </a>

                              <a
                                href="#"
                                className="block px-4 py-2 text-sm md:text-3xl "
                                role="menuitem"
                              >
                                Vision & Mission
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm md:text-3xl "
                                role="menuitem"
                              >
                                Supporters
                              </a>
                            </div>
                            <img src={Drop} alt="vistaCraze" className='w-96 ml-28 h-96'/>
                            <div>

                            </div>
                          </div>
                        </div>
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
