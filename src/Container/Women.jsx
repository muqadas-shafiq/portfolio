import React, { useEffect } from 'react'
import Items from './Items'
import women from "../assets/women.jpeg"
import woem1 from "../assets/woem1.jpeg"
import cute from "../assets/cute.jpeg"
import hide from "../assets/women-hide.jpeg"
import woman3 from "../assets/woman3.jpeg"
import { FaInstagram } from "react-icons/fa6";
import AOS from "aos";
import 'aos/dist/aos.css'
import hodis from "../assets/hodis.png"


import { useNavigate } from "react-router-dom";

const Women = () => {
  useEffect(()=>{
    AOS.init({duration: 2000});
  },[]);
    const navigate = useNavigate();
    const  blog=[
      {
        img : cute,
        h2: "Mirror to the soul",
        p: "by j. collection",
        p1: "Maria is the Fasion director at the fassionSpot"
      },
      {
        img : woem1,
        h2: "Hope of ray",
        p: "by j. collection",
        p1: "Maria is the Fasion director at the fassionSpot"
      },
      {
        img : hide ,
        h2: "Little star",
        p: "by j. collection",
        p1: "Maria is the Fasion director at the fassionSpot"
      },
      {
        img : woman3 ,
        h2: "Marcedese benz",
        p: "by j. collection",
        p1: "Maria is the Fasion director at the fassionSpot"
      },
    ]
   
   
  return (
    <div className="relative mt-12 h-[100vh] mx-3">
      <img src={women} className="w-full h-[100vh] object-cover " data-aos="fade-left" alt="Women" />

      
      <div className="absolute inset-0 flex justify-center items-center ">
      <div className="text-white text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
          <h1 className="text-7xl font-bold" data-aos="fade-right">WOMEN's</h1>
        </div>
      </div>

<div>
  <h1 className='text-5xl font-bold my-3 '>NEW BLOGS</h1>
  <div className='flex md:flex-row flex-col gap-5 ' data-aos="fade-up">
    {blog.map((item, index)=>(
      <div key={index}>
        <div className=''> <img src={item.img} className='h-[70vh] w-[50vh]' /></div>
        <div className='font-medium text-[18px]'>{item.h2}  </div>
        <div className='text-[18px] font-medium text-amber-600 hover:text-gray-600'>{item.p}  </div>
        <div className='font-medium text-gray-600'>{item.p1}  </div>
      </div>
    ))}
  </div>
</div>
 <div className='flex md:flex-row flex-col items-center justify-between mt-20'>
        <div >
          <div className='bg-slate-300 rounded-full md:w-[500px] w-[350px] gap-5 md:mb-0 mb-12' data-aos="fade-right"> <div data-aos="fade-left"><img src={hodis} /></div></div>
        </div>
        
        <div className='pl-20 w-full flex flex-col items-start justify-center md:ml-14 ml-0' data-aos="fade-up">
          <h2 className='md:text-3xl text-2xl font-semibold mb-5'>Trending Products</h2>
          <h1 className='md:text-6xl text-4xl font-bold'>ZIP HOODEY</h1>
          <p className='mt-12 text-2xl hover:text-gray-600 hover:text-[20px]'>Discover Now</p>
          
        </div>
      </div>
      <Items />
    

<div className='flex items-center justify-center my-5 flex-col ' data-aos="fade-left">
  <h1 className='text-5xl font-bold'>FOLLOW US ON INSTAGRAM</h1>
  <FaInstagram className='text-7xl mt-5 hover:text-gray-600'/>
  <p className='text-2xl'>https://Fassionspot.com</p>
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

export default Women
