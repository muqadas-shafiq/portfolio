import React from 'react'
import suit from "../assets/suit-set.png"
import colors from "../assets/colors.jpeg"
import black from"../assets/black.png"
import white from "../assets/white.png"
import hodis from "../assets/hodis.png"
import men4 from "../assets/men4.png"
import { useNavigate } from "react-router-dom";


const Mens = () => {
  const navigate = useNavigate();
  const arivals=[
    {
      button:"new",
      button1 : "8%",
      img : hodis,
      p : "$60.00",
      p1: "$90.00"
    },
    {
      button:"new",
      button1 : "5%",
      img : black,
      p : "$60.00",
      p1: "$90.00"
    },
    {
      button:"new",
      button1 : "6%",
      img : men4,
      p : "$60.00",
      p1: "$90.00"
    },
    {
      button:"new",
      button1 : "7%",
      img : white,
      p : "$60.00",
      p1: "$90.00"
    }
  ]
  
  return (
    
    <div >
      
      <div className='h-80vh flex flex-col md:flex-row md:items-start items-center mt-12 md:pt-0 pt-12 bg-red-100'>
        <div className='mx-12 md:w-[50%] '>
        <p className="text-gray-800 md:text-9xl text-7xl  md:pt-32" style={{ fontFamily: "'Dancing Script', cursive" }}>
           Spring <br /> Collection
          </p>

        </div>
        <div className='w-[100%] flex justify-center'>
  <img src={suit} className='w-[80%] md:w-[100%] ' />
</div>

      </div>
      {/* verity */}
      <div className='flex flex-col md:flex-row mt-5'>
<div>
<img src={colors} />
</div>
<div className=' flex flex-col md:items-center items-start ml-28  w-[50%] '>
  <h1 className='text-2xl text-gray-700 mt-12 py-5'>TOP TRENDING</h1>
  <h2 className='text-4xl font-bold '>MENS WEAR</h2>
  <p className=' text-[18px] mt-5'>Where Comfort Meets Class - Upgrade Your Wardrobe.</p>
  <p className='font-bold mt-5 hover:text-gray-200'>DISCOVER NOW</p>
</div>
      </div>

      {/* new arivals */}
     <div>
     <div className='flex flex-col items-center mt-12'>
     <h1 className='text-5xl font-semibold '>New Arrivals</h1>
     <p className='text-[22px] mt-5'>Unique and modren designes with us.</p>
     </div>

     <div className='flex md:flex-row flex-col mt-5'>
        {arivals.map((item, index)=>(
          <div 
          key={index} className='bg-gray-200 m-2 '>
           <div className='flex flex-col items-start gap-2 my-3'>
           <button className='px-5 text-[18px] bg-green-600 ml-5 '>{item.button}</button>
           <button className='px-6 text-[18px] bg-yellow-500 ml-5 '>{item.button1}</button>
           </div>
             <div className='flex justify-center'>
                   <img src={item.img} className='w-80 h-96'/>
              </div>
              <div className='flex gap-3'> <p className='font-semibold text-[18px]'>{item.p}</p>
              <p className='line-through text-gray-600'>{item.p1}</p></div>
          </div>
        ))}
      </div>
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