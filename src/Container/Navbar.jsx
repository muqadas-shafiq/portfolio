import React from 'react'
import { WiLightning } from "react-icons/wi";

const Navbar = () => {
  return (
    <div>
        <div className="h-12 bg-gray-800 fixed top-0 left-0 w-screen z-50 shadow-md">
                <div className="h-12 flex flex-row items-center justify-between md:px-6">
                  <div className="flex flex-row">
                    <WiLightning className="text-green-500 text-4xl font-bold" />
                    <p className="text-white">
                      <span className="text-[22px]">fashion</span>
                      <span className="text-[18px] mx-1">mart</span>
                    </p>
                  </div>
                  <div>
                    <button className="bg-green-500 py-1 px-1 text-white rounded">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default Navbar