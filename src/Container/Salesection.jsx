import React from 'react'
import track from "../assets/track-suit.png"
import { FaStar } from "react-icons/fa6";

const Salesection = () => {
  return (
    <div>
        <div className="bg-gray-100  flex md:flex-row flex-col justify-between pl-4">
                <div>
                <img src={track} />
                </div>
                <div className="bg-white md:w-2/6 flex flex-col pl-5  ">
               <div className=" my-7 ">
               <div className="md:my-20">
                <p className="text-2xl font-semibold ">NEW STALK</p>
                  <div className=" flex gap-1 text-yellow-400 text-2xl ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  </div>
                </div>
                  <p className="line-through text-xl text-gray-700">Old price: 2000</p> 
                  <p className="text-xl mt-3">New price: 1500 </p>
                  <div className="flex gap-5 mt-5">
                    <p className="text-xl ">Color</p>
                    <input type="text" placeholder="color you want" className="p-2 border border-gray-400" />
                  </div>
                  <div className="flex gap-5 mt-5">
                    <p className="text-xl ">Size</p>
                    <input type="text" placeholder="Size" className="p-2 border border-gray-400 ml-4" />
                  </div>
                  <div className="md:ml-20 mt-5">
                  <button className="border-2 border-black text-black px-4 py-2 rounded bg-white  mt-4">Order Now</button>
                  </div>
                </div>
               </div>
                <div>
                  <div className="md:mt-24 flex flex-col pl-5 md:pl-12 md:items-center justify-center mb-5">
                    <p className="text-2xl font-medium text-gray-700 md:my-5 mt-12">READ PRODUCT DETAILS</p>
                    <p className="text-[17px] md:ml-12">You can watch product attributes with color , <br /> size or any attribute</p>
                    <button className="border-2 border-black text-black px-4 py-2 rounded bg-white mt-12 w-fit">CHECK NOW</button>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default Salesection