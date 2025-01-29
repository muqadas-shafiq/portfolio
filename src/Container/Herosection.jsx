import React from 'react'
import autmn from "../assets/autmn.jpeg";

const Herosection = () => {
  return (
    <div>
           <div className="relative w-full h-screen">
                <img src={autmn} alt="Autumn" className="w-full h-screen object-cover" />
                <div className="absolute inset-0 flex justify-center">
                  <div className="flex justify-center items-center text-white">
                    <div className="text-center">
                      <p>
                        <span className="text-4xl md:text-6xl md:font-light">
                          BUILT FASHION
                        </span>
                        <br />
                        <span className="md:text-8xl text-5xl font-semibold md:font-bold">
                          WITH THE SOUL
                        </span>
                        <br />
                        <span className="text-4xl md:text-6xl md:font-light">
                          OF INSPIRATION
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default Herosection