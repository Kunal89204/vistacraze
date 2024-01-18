import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import "../../pages/style.css"

import BrandLogo from "../../assets/Picsart_23-11-25_12-20-04-236.png"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export function Navbar({ brandName, routes, action }) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {routes.map(({ name, path, icon, href, target }) => (
        <Typography
          key={name}
          as="li"
          variant="large"
          color="inherit"
          className="capitalize"
        >
          {href ? (
            <a
              href={href}
              target={target}
              className="flex items-center gap-1 p-1 font-normal"
            >
              {icon &&
                React.createElement(icon, {
                  className: "w-[18px] h-[18px] opacity-75 mr-1",
                })}
              {name}
            </a>
          ) : (
            <Link
              to={path}
              target={target}
              className="flex items-center gap-1 p-1 font-normal"
            >
              {icon &&
                React.createElement(icon, {
                  className: "w-[18px] h-[18px] opacity-75 mr-1",
                })}
              {name}
            </Link>
          )}
        </Typography>
      ))}
    </ul>
  );

  return (
    <MTNavbar  className="p-2  bg-white mx-auto h-18 w-screen">
      <div className=" flex items-center   justify-between text-black ">
        <Link to="/" className="text-center">
          <Typography className="mr-4 ml-2 cursor-pointer py-1 font-bold text-center">
            <img src={BrandLogo} alt="" className="h-20 w-20 ml-20 "/>
            <Typography className="font-normal text-orange-900  font-bold tracking-widest md:tracking-widest ml-5" >
             FOUNDATION
            </Typography>
            <Typography className="font-normal bg-indigo-200 text-white pl-3 pr-3 tracking-widest md:tracking-widest  font-bold tracking-widest" >
             CYBER CIVILIZED INDIA
            </Typography>
            
          </Typography>
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <div className="hidden gap-2 lg:flex flex-row ">
        <FaUser  className="text-blue-500 text-xl mt-4"/> 

          <a
            // href="https://www.material-tailwind.com/blocks?ref=mtkr"
            target="_blank"
            className="hover:bg-gray-400 rounded-xl hover:text-white "
          >
            <Button variant="text" size="sm" color="white" fullWidth className="text-gray-600 hover  hover:text-white">
            
            <h4 className="flex-row ">
           
                Join us now
              </h4>
              <h2>Become a Volunteer</h2>
            </Button>
          </a>
          {React.cloneElement(action, {
            className: "hidden lg:inline-block",
          })}
        </div>
        <IconButton
          variant="text"
          size="lg"
          color="white"
          className="ml-auto  text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
        <MobileNav
        className="rounded-xl bg-white px-4 pt-2 pb-4 text-blue-gray-900"
        open={openNav}
      > 
        <div className="container mx-auto">
          {navList}
          <a
            // href="https://www.material-tailwind.com/blocks/react?ref=mtkr"
            target="_blank"
            className="mb-2 block"
          >
            <Button variant="text" size="sm" fullWidth >
              <h4>
                Join us now
              </h4>
              <h2>Become a Volunteer</h2>
            </Button>
          </a>
          {React.cloneElement(action, {
            className: "w-full block",
          })}
        </div>
      </MobileNav>
    </MTNavbar>
  );
}

Navbar.defaultProps = {
  brandName: "Material Tailwind React",
  action: (
    <a
      // href="https://www.creative-tim.com/product/material-tailwind-kit-react"
      target="_blank"
      className=" lg:flex mt-6"
    >
      <Button variant="gradient" size="lg" fullWidth className="">
        Donate
      </Button>
    </a>
  ),
};

Navbar.propTypes = {
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.node,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
