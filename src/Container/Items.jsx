import React, { useEffect } from 'react'
import black from"../assets/black.png"
import white from "../assets/white.png"
import hodis from "../assets/hodis.png"
import men4 from "../assets/men4.png"
import AOS from "aos"
import 'aos/dist/aos.css'


const Items = () => {
  useEffect(()=>{
    AOS.init({duration: 3000});
  },[])
    
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
    <div data-aos="fade-up">
             
        
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
    </div>
  )
}

export default Items