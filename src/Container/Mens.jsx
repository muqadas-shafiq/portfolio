import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Items from './Items'
import mens from "../assets/men,s.png"
import AOS from"aos"
import 'aos/dist/aos.css'
import men1 from "../assets/men2.jpeg"
import nova from "../assets/nova.jpeg"
import shirt from "../assets/T-shirts.jpeg"
import watch from "../assets/watch.jpeg"
import { FaInstagram } from "react-icons/fa6";



const Mens = () => {
  useEffect(()=>{
    AOS.init({duration: 2000});
  },[])
  const navigate = useNavigate();
 
  
  return (
    
    <div className='mt-12 mx-3'>
      <div className=' flex items-center justify-center 'data-aos="fade-left">
        <div className='flex  items-center h-44'><h1 className='md:text-5xl text-4xl font-bold mt-5 font-serif'  >MEN`s SECTION</h1></div>
      </div>
      <div className='flex md:flex-row flex-col items-center  justify-between mt-5'>
        <div >
          <div className='bg-slate-300 rounded-t-full md:w-[500px] w-[350px] gap-5 mb-12 md:mb-0' data-aos="fade-right"> <div data-aos="fade-left"><img src={mens} /></div></div>
        </div>
        
        <div className='pl-20 w-full flex flex-col items-start justify-center md:ml-14 ml-0' data-aos="fade-up">
          <h2 className='md:text-3xl text-2xl font-semibold mb-5'>Trending Products</h2>
          <h1 className='md:text-6xl text-4xl font-bold'>FLEX HOODEY</h1>
          <p className='mt-12 text-2xl hover:text-gray-600 hover:text-[20px]'>Discover Now</p>
          
        </div>
      </div>
      
    <Items/>
    <div className='flex items-center justify-center flex-col mt-12' data-aos="fade-left">
      <h1 className='md:text-5xl text-4xl font-bold'>FOLLOW US ON INSTAGRAM</h1>
      <div className='grid md:grid-cols-4 grid-cols-1 gap-6  my-9'>

       <div className='bg-gray-300 h-[400px] flex items-center justify-center rounded-lg'>
         <img src={men1} className='h-[400px] w-[350px] hover:bg-slate-500 hover:h-[380px] hover:w-[330px] rounded-lg' /></div>

       <div className='bg-gray-300 h-[400px] flex items-center justify-center rounded-lg'>
         <img src={nova} className='h-[400px] w-[350px] hover:bg-slate-500 hover:h-[380px] hover:w-[330px] rounded-lg' /></div>

       <div className='bg-gray-300 h-[400px] flex items-center justify-center rounded-lg'>
         <img src={shirt} className='h-[400px] w-[350px] hover:bg-slate-500 hover:h-[380px] hover:w-[330px] rounded-lg' /></div>

       <div className='bg-gray-300 h-[400px] flex items-center justify-center rounded-lg'>
         <img src={watch} className='h-[400px] w-[350px] hover:bg-slate-500 hover:h-[380px] hover:w-[330px] rounded-lg' /></div>
      </div>
      <FaInstagram className='text-7xl hover:text-gray-600'/>
      <p className='text-2xl'>fassion.netlify.app</p>
    </div>
     {/* back to home page */}
     <div className="flex justify-center mt-10">
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

export default Mens