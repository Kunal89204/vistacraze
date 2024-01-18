import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import Pagecounter from "./Pcounter"
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import { FaCheckCircle } from "react-icons/fa";
import Bgimg2 from '../assets/wallpaperflare.com_wallpaper.jpg'
import "./style.css";
import Contact from "../pages/contact"
import BgImg from "../assets/WhatsApp Image 2023-11-29 at 14.18.13_b671c327.jpg"
import Aboutimg from "../assets/AdobeStock_610346089_Preview.jpeg";
import Aboutimg2 from "../assets/Picsart_23-11-30_13-59-30-430.png"
import arrow1 from "../assets/hand-drawn-dotted-arrow-line-clip-art-free-png.webp"
import Faq from "../widgets/profile/App"


export function Home() {
  return (
    <>
      <div className="relative flex  content-center items-center justify-center pt-52   pb-40 overflow-x-hidden">
        <div className="absolute   " />

        <div className="absolute top-0 h-full w-screen bg-black/20 bg-cover bg-center" />

        <div className="max-w-8xl container relative ">
          <div className="flex flex-wrap items-center">
            <div className="px-4 text-center lg:w-screen  lg:flex justify-between">

              <div className="hero_content_box content  -mt-10 text-justify ">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-6 text-white "
                >
                  <span className="text-orange-800 ">
                    Empowering
                  </span> Communities, Defending Digital <span className="text-blue-500 border-b-4 border-orange-800">
                    Trust
                  </span>
                </Typography>
                <Typography variant="lead" color="white" className="opacity-80 text-xl font-bold">
                  The statistics are alarming—23,000 crimes a day, 1,000 crimes an hour.
                  In the digital age, where connectivity thrives, so does the threat of cybercrime.
                  The National Cyber Crime Reporting Portal reveals a staggering 700,000 complaints
                  in April 2023 alone, with nearly 100,000 emerging from Uttar Pradesh.

                </Typography>
                <div className="flex mt-9">
                  <a
                    // href="https://www.creative-tim.com/product/material-tailwind-kit-react"
                    target="_blank"
                    className=" lg:flex mt-3"
                  >
                    <Button size="lg" fullWidth className="text-lg">
                      DISCOVER MORE
                    </Button>
                  </a>
                  <a
                    // href="https://www.creative-tim.com/product/material-tailwind-kit-react"
                    target="_blank"
                    className=" lg:flex mt-2 ml-6 "
                    style={{cursor: 'none'}}
                  >
                    <Button disabled={true}  style={{ pointerEvents: 'none'}} size="lg" fullWidth className="text-lg shake bg-grey-300 border-2 text-blue-500 hover:bg-blue-500 hover:text-white hover:border-none focus:outline-none active:bg-red-600">
                      Donate
                    </Button>
                  </a>
                </div>
              </div>
              <img src={BgImg} alt="" className="banner1  " />
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap ">
            <div className="mx-auto mt-24 flex w-full  h-screen justify-center px-4 md:w-4/12 lg:mt-0">
              {/* <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/teamwork.jpeg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    Top Notch Services
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </Typography>
                </CardBody>
              </Card> */}
              <div className="-ml-12">
                <img src={Aboutimg} alt="" className="rounded-full z-1" />

                <div className="absolute -z-2 -mt-48 w-2/4 h-2/4 text-red-500 bg-blue-gray-600 opacity-10 rounded-full" ></div>
                <img src={arrow1} alt="" className="absolute w-28 -rotate-90 ml-72 mt-8" />

                <img src={Aboutimg2} alt="" className="rounded-full w-72 mt-28 ml-80" />
              </div>

            </div>
            <div className="mx-auto ml-40 -mt-10 w-full px-4 md:w-5/12">

              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div>

              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                WELCOME TO RAHIL FOUNDATION
              </Typography>
              <Typography className="mb-4 font-normal text-blue-gray-500">
                The statistics are alarming—23,000 crimes a day, 1,000 crimes an hour. In the digital age, where connectivity thrives, so does the threat of cybercrime. The National Cyber Crime Reporting Portal reveals a staggering 700,000 complaints in April 2023 alone, with nearly 100,000 emerging from Uttar Pradesh.

                <br />
                <br />
                <div className="bg-gray-300  text-black rounded-xl pl-5 border-l-8 border-amber-800">
                  At  <span className="text text-red-700 font-bold">RAHIL FOUNDATION</span>,
                  we're on a mission to change this narrative. Our resolve is clear: to empower individuals and
                  communities against the rising tide of online fraud. Through
                  <a href="#"> <span className="text-blue-500 hover:underline font-semibold">Read More... </span>
                  </a>
                </div>
              </Typography>
              <div className=" flex justify-evenly gap-5  ">
                <Typography className="mb-8 font-normal text-blue-gray-500" >
                  <span variant="h3"
                    className="mb-3 font-bold flex -mb-5 text-blue-gray-900 font-extrabold text-xl"
                    color="blue-gray">
                    <FaCheckCircle className="text-red-600 mt-2 text-lg font-extrabold" />
                    our mission
                  </span>
                  <br />
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia at sapiente
                </Typography>
                <Typography className="mb-8 font-normal text-blue-gray-500">
                  <span variant="h3"
                    className="mb-3 font-bold flex -mb-5 text-blue-gray-900 font-extrabold text-xl"
                    color="blue-gray">
                    <FaCheckCircle className="text-red-600 mt-2 text-lg font-extrabold" />
                    our mission
                  </span>
                  <br />
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia at sapiente

                </Typography>
              </div>
              <a
                // href="https://www.creative-tim.com/product/material-tailwind-kit-react"
                target="_blank"
                className=" lg:flex mt-2 ml-6 "
              >
                <Button size="lg" className="cursor-pointer">
                  DISCOVER MORE
                </Button>
              </a>

            </div>


          </div>
        </div>
      </section>
      {/* <Pagecounter /> */}
      <section className="px-10 pt-20 pb-48 text-center  justify">
        <div className="container mx-auto w-5/12 text-center">

          <img src={Bgimg2} alt="" className="BGImage2 " />
          <Typography className="text-blue-gray-100 font-bold text-center mb-7 pt-8 text-xl">
            We’re here to support  people
          </Typography>
          <Typography className=" text-4xl font-bold text-white mb-6">
            Fundraising for the People and Causes you Care About
          </Typography>
          <a target="_blank"
            className=" lg:flex mt-2 ml-6 ">
            <Button size="lg" className="text-lg shake border-2 text-white hover:bg-blue-500 hover:text-white hover:border-none focus:outline-none ml-48">
              DONATE NOW
            </Button>
          </a>

          {/* <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-lg fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div> */}
        </div>

       
      </section>
      <section>
          {/* <Faq/> */}
        </section>
      {/* <section className="relative bg-blue-gray-50/50 py-24 px-4">
        <div className="container mx-auto">
          <PageTitle heading="Build something">
            Put the potentially record low maximum sea ice extent tihs year down
            to low ice. According to the National Oceanic and Atmospheric
            Administration, Ted, Scambos.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          <PageTitle heading="Want to work with us?">
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
          <form className="mx-auto mt-12 max-w-3xl text-center">
            <div className="mb-8 flex gap-8">
              <Input variant="standard" size="lg" label="Full Name" />
              <Input variant="standard" size="lg" label="Email Address" />
            </div>
            <Textarea variant="standard" size="lg" label="Message" rows={8} />
            <Button variant="gradient" size="lg" className="mt-8">
              Send Message
            </Button>
          </form>
        </div>
      </section> */}

      <div className="bg-blue-gray-50/50 -mt-20">
        <Footer />
      </div>
    </>
  );
}

export default Home;
