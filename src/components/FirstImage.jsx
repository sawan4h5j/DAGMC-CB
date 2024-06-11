import { useTypewriter } from "react-simple-typewriter";
// import club_image from "../../src/image/homepage.png"
import Aos from "aos";
import 'aos/dist/aos.css';
import { useContext, useEffect, useState } from "react";
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
// import CubePagination from "./CubePagination";

const FirstImage = () => {
  
  const { user, logOut } = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
      .then(result => {
        toast.success("LogOut Successful")
      })
      .catch()
  }

  useEffect(() => {
    Aos.init({ duration: 2000 })

   
  }, [])
  const [text] = useTypewriter({
    words: ['Welcome To Our Club',],
    loop: Infinity
  })

  return (

    <>

      
      <div className="relative mx-auto">

        <div className="hero transition-colors before:absolute before:-z-10 before:h-full text-white before:w-full before:origin-top-left  before:scale-x-0 before:bg-gradient-to-r from-violet-600 to-indigo-600 before:transition-transform before:duration-500 hover:text-black  before:hover:scale-x-100 ">
          <div className="hero-content rounded-lg mt-8 overflow-hidden items-center gap-20 flex-col-reverse md:flex-row lg:flex-row-reverse   border-gray-800  ">
            {/* <img data-aos="zoom-in-down" src="https://i.ibb.co/gWcSk22/second.jpg" className='w-auto max-w-80 md:max-w-sm rounded-lg shadow-2xl	box-shadow: 80 25px 50px -12px rgb(5 5 5 / 500) shadow-[#00f7ff] ' /> */}

            <video  autoPlay loop muted width="500" className="rounded-lg shadow-2xl	box-shadow: 80 25px 50px -12px rgb(5 5 5 / 500) shadow-[#00f7ff]">
              <source src="./homeVideo.mp4" />
            </video>
            {/* <div className="  sm:w-full sm:h-full md:w-[720px] md:h-[450px]  shadow-2xl md:rounded-md mt-3 	box-shadow: 80 25px 50px -12px rgb(5 5 5 / 500) shadow-[#00f7ff]">
            <CubePagination />
          </div> */}
            <div>
              <h1 data-aos="fade-right" className="text-4xl md:text-5xl font-bold text-[#00f7ff] animate-pulse uppercase">Welcome to Debating Association of GMMSC !</h1>
              <p className="py-6 text-2xl"> <span className="">Hi</span> , {text}</p>
              {/* <Typewriter></Typewriter> */}


              <button className="mt-2 relative bg-gray-800 border-2 rounded-lg bg-transparent py-2.5 px-5 font-medium uppercase transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full text-[#00f7ff] before:w-full before:origin-top-left before:scale-x-0 before:bg-[#00f7ff] before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-x-100 border-[#00f7ff]">
                <a href="https://www.facebook.com/messages/t/334005380360765" target="_blank">Message Us</a>
              </button>

              {/* <button className="relative bg-gray-800 border-2 rounded-lg bg-transparent py-2.5 px-5 font-medium uppercase transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full text-white before:w-full before:origin-top-left before:scale-x-0 before:bg-[#00f7ff] before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-x-100 border-white">
              <a href="https://www.facebook.com/messages/t/334005380360765" target="_blank">Message Us</a>
            </button> */}

              {/* <NavLink to='/gallery' className='btn ml-4 btn-outline btn-default   border-b-red-800 border-neutral transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none bg-[#00f7ff] hover:border-none'>Gallery</NavLink> */}

              {user ?

                <button onClick = {handleLogOut} className=" ml-4 bg-[#00f7ff] border-2 rounded-lg py-2.5 px-5 font-medium uppercase transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full text-[#000000] before:scale-x-0 before:bg-[#00f7ff] before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-x-100 border-[#00f7ff]">LogOut</button>
                :
                <NavLink to="/login">
                  <button className="ml-4 bg-[#00f7ff] border-2 rounded-lg py-2.5 px-5 font-medium uppercase transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full text-[#000000] before:scale-x-0 before:bg-[#00f7ff] before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-x-100 border-[#00f7ff]">Login</button>

                </NavLink>
              }

            </div>
          </div>
        </div>

        <MessengerCustomerChat
          pageId="334005380360765"
          // appId="1112761916427890"
          appId="991214452423731"

        />
      </div>
    </>

  );
};

export default FirstImage;