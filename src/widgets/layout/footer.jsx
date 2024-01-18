import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";
import Brandlogo from "../../assets/Picsart_23-11-25_12-20-04-236.png"
const year = new Date().getFullYear();

export function Footer({ title, description, socials, menus, copyright }) {
  return (
    <section id="footer">
      <footer className="relative px-4 pt-8 pb-6" >
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <Typography variant="h4" className="mb-4" color="blue-gray">
              <img src={Brandlogo} alt="" className="w-20 h10 ml-28 -mb-4"/>
            </Typography>
            <Typography className="font-normal text-orange-900  font-bold tracking-widest md:tracking-widest ml-20  " >
             FOUNDATION
            </Typography>
            <Typography className="font-normal bg-indigo-200 w-64 text-white pr-3 tracking-widest md:tracking-widest  font-bold tracking-widest pl-7" >
             CYBER CIVILIZED INDIA
            </Typography>
           
            <div className="mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-start">
              {socials.map(({ color, name, path }) => (
                <a
                  key={name}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton color="white" className="rounded-full">
                    <Typography color={color}>
                      <i className={`fa-brands fa-${name}`} />
                    </Typography>
                  </IconButton>
                </a>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-12 grid w-max grid-cols-2 gap-24 lg:mt-0">
            {menus.map(({ name, items }) => (
              <div key={name}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 block font-medium uppercase"
                >
                  {name}
                </Typography>
                <ul className="mt-3">
                  {items.map((item) => (
                    <li key={item.name}>
                      <Typography
                        as="a"
                        href={item.path}
                        target="_blank"
                        rel="noreferrer"
                        variant="small"
                        className="mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700"
                      >
                        {item.name}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              {copyright}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
    </section>
  );
}

Footer.defaultProps = {
  title: "Material Tailwind",
  description:
    "Easy to use React components for Tailwind CSS and Material Design.",
  socials: [
    {
      color: "blue",
      name: "facebook",
      path: "https://www.facebook.com/profile.php?id=61553355344574&mibextid=2JQ9oc",
    },
    {
      color: "light-blue",
      name: "twitter",
      path: " https://x.com/Foundation82382?t=it1xzN9Ex9C37uh93SIxvA&s=08 ",
    },
    {
      color: "purple",
      name: "instagram",
      path: "https://instagram.com/rahil_foundation?igshid=OGQ5ZDc2ODk2ZA==",
    },
    {
      color: "pink",
      name: "dribbble",
      path: "#",
    },
    {
      color: "red",
      name: "youtube",
      path: "https://www.youtube.com/channel/UCEu_1hB-oEAHz3jx0KaqqFA",
    },
    {
      color: "black",
      name: "github",
      path: "https://github.com/RahilBMS",
    },
  ],
  menus: [
    {
     
      items: [
      
        
        
       
          
      ],
    },
    // {
    //   name: "other resources",
    //   items: [
    //     {
    //       name: "MIT License",
    //       path: "https://github.com/creativetimofficial/material-tailwind/blob/main/LICENSE.md?ref=mtk",
    //     },
    //     {
    //       name: "Contribute",
    //       path: "https://github.com/creativetimofficial/material-tailwind/blob/main/CONTRIBUTING.md?ref=mtk",
    //     },
    //     {
    //       name: "Change Log",
    //       path: "https://github.com/creativetimofficial/material-tailwind/blob/main/CHANGELOG.md?ref=mtk",
    //     },
    //     {
    //       name: "Contact Us",
    //       path: "https://creative-tim.com/contact-us?ref=mtk",
    //     },
    //   ],
    // },
  ],
  copyright: (
    <>
      {/* Copyright © {year} Material Tailwind by{" "} */}
     
      .
    </>
  ),
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
