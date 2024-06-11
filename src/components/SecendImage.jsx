import Aos from 'aos';
import club_image2 from '../../src/image/secondImage.png'
import { useEffect } from 'react';
import 'aos/dist/aos.css';


const SecendImage = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (


    <div className='relative mt-24 md:mt-56 mb-32 mx-auto '>
      <div className="hero transition-colors before:absolute before:-z-10 before:h-full text-white before:w-full before:origin-top-right  before:scale-x-0 before:bg-gradient-to-r from-violet-600 to-indigo-600 before:transition-transform before:duration-500 hover:text-black before:hover:scale-x-100 first-letter:origin-top-left">

        <div className="hero-content rounded-lg mt-1 overflow-hidden md:gap-56 flex-col-reverse md:flex-row    border-gray-800  ">

          <img src={club_image2} className='w-[800px] overflow-hidden max-w-72 md:max-w-lg rounded-lg shadow-2xl	box-shadow: 80 25px 50px -12px rgb(5 5 5 / 500) shadow-[#00f7ff] ' />
          <div>

            <h1 className="text-4xl text-center md:text-5xl overflow-hidden font-bold text-[#00f7ff] animate-pulse uppercase"> Join Our Debate club 
            </h1>
            <p className="py-6 overflow-hidden text-center text-2xl">logic is our beauty</p>
            {/* <Typewriter></Typewriter> */}

            {/* <button className="relative bg-gray-800 border-2 rounded-lg bg-transparent py-2.5 px-5 font-medium uppercase transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full text-white before:w-full before:origin-top-left before:scale-x-0 before:bg-[#00f7ff] before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-x-100 border-white">
              <a href="https://www.facebook.com/messages/t/334005380360765" target="_blank">Message Us</a>
            </button> */}

          </div>
        </div>
        
      </div>

    </div>
  );



};

export default SecendImage;