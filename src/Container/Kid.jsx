import React, { useEffect } from 'react'
import kid from "../assets/kid.jpeg"
import kid2 from "../assets/kid2.jpeg"
import kid3 from "../assets/kid3.jpeg"
import AOS from"aos"
import 'aos/dist/aos.css'
import { GiWoodCabin } from "react-icons/gi";
import Items from './Items'
import Footer from './Footer'

import { useNavigate } from "react-router-dom";

const Kid = () => {
    const navigate = useNavigate();
  useEffect(()=>{
      AOS.init({duration: 2000});
    },[])
  return (
    <div className='mt-12' >
      
      <div className='flex flex-col md:flex-row mx-1 space-y-4 md:space-y-0 md:space-x-2' >
        
        <div className='relative' data-aos="flip-left">
          <img 
            src={kid}  className='h-[600px] w-[300px] object-cover' 
          />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white md:text-5xl text-4xl font-semibold md:hover:text-4xl md:hover:text-gray-300 '>
            #KID`S
          </div>
        </div>

        <div className='relative' data-aos="flip-right">
          <img 
            src={kid2}   className='h-[600px] w-[400px] object-cover ' 
          />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white md:text-5xl text-4xl font-semibold md:hover:text-4xl md:hover:text-gray-300'>
            #GIRLS
          </div>
        </div>

        <div className='relative' data-aos="flip-left">
          <img 
            src={kid3} className='h-[600px] w-[700px] object-cover' 
          />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white md:text-5xl text-4xl font-semibold md:hover:text-4xl md:hover:text-gray-300'>
          #Accessories
          </div>
        </div>

      </div>
      <div className='mt-5 flex flex-col items-center' data-aos="flip-left">
    <p><GiWoodCabin  className='text-9xl text-gray-700'/>  </p>
    <p className='pt-5 w-[700px] text-[18px] text-gray-600'>Eget scelerisque, mollis blandit et risus mauris phasellus ac. Felis amet dui metus purus mauris a, commodo amet phasellus id erat nec, pellentesque a, dictum orci porttitor et. Quis ac fames est ut, proin adipiscing in morbi elementum amet ligula. Habitant pellentesque laoreet lacus quisque consequat tincidunt diam vivamus sapien.</p>
    <div className='flex mt-5 text-[20px]'>
    <p className='text-gray-700 font-medium'>SilverStar</p>
    <p className='font-medium'>/CEO</p>
    </div>
      </div>
      <Items/>
      <Footer/>
        {/* back to home page */}
     <div className="flex justify-center mt-2">
        <button
          onClick={() => navigate("/")} // ✅ Go back to home page
          className="px-6 py-2 bg-green-800 text-white text-lg rounded-lg hover:bg-green-700 transition"
        >
          Back to Home Page
        </button>
      </div>
    </div>
  )
}

export default Kid
