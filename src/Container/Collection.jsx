import React from 'react'
import men1 from "../assets/men1.jpeg";
import women1 from "../assets/women1.jpeg";
import kid1 from "../assets/kid1.jpeg";

const Collection = () => {
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
  )
}

export default Collection