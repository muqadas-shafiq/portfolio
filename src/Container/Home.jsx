import React from "react";
import { WiLightning } from "react-icons/wi";
import autmn from "../assets/autmn.jpeg";
import men1 from "../assets/men1.jpeg";
import women1 from "../assets/women1.jpeg";
import kid1 from "../assets/kid1.jpeg";

const Home = () => {
  const collections = [
    {
      name: "MENS",
      img: men1,
      button: "CLICK FOR MORE",
    },
    {
      name: "WOMENS",
      img: women1,
      button: "CLICK FOR MORE",
    },
    {
      name: "KIDS",
      img: kid1,
      button: "CLICK FOR MORE",
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <div className="h-12 bg-gray-800 fixed top-0 left-0 w-full z-50 shadow-md">
        <div className="h-12 flex flex-row items-center justify-between px-6">
          <div className="flex flex-row">
            <WiLightning className="text-green-500 text-4xl font-bold" />
            <p className="text-white">
              <span className="text-[22px]">fashion</span>
              <span className="text-[18px] mx-1">mart</span>
            </p>
          </div>
          <div>
            <button className="bg-green-500 px-3 py-1 font-semibold text-white rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
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

      {/* Introduction Section */}
      <div className="flex flex-col items-center min-h-72 text-center py-20">
        <p className="text-3xl font-semibold pb-4">SELECT YOUR COLLECTION</p>
        <p className="text-2xl text-gray-900">
          Beauty is a harmony of inner grace and outward expressions. <br />
          In the mirror of grace, true beauty finds its perfect frame.
        </p>
      </div>

      {/* Collections Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-20 py-8">
        {collections.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 shadow-lg rounded-lg bg-gray-100"
          >
            <p className="text-2xl pb-2">{item.name}</p>
            <img src={item.img}
              
              className="w-full h-96 object-cover rounded-lg mb-4"
            />
          
            <button className="border-2 border-black text-black px-4 py-2 rounded bg-white  mt-4 ">
              {item.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
