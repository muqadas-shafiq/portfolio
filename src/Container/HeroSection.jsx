import React from 'react'
import { FaFacebookMessenger,FaFacebook,FaAddressBook}  from "react-icons/fa";

const links =[
    {id:9,src:FaFacebookMessenger},
    {id:8,src:FaFacebook},
    {id:7,src:FaAddressBook}
  ]
const HeroSection = ({text}) => {
  return (
    <div>
         <div className='md:min-h-[90vh] min-h-[50vh] py-5 md:py-0 flex flex-col justify-center items-center'>
        <h2 className='text-2xl font-bold '>FREELANCE/OFFICE</h2>
        <h1 className='md:text-9xl text-5xl font-bold py-4'>{text}</h1>
        <div className='flex justify-center md:text-3xl text-2xl font-medium h-20 w-full md:px-10 px-5'>
  <h1>frontend developer</h1>
</div>
        <div className="flex space-x-2">
      {links.map(({ id, src }) => (
        <div key={id} className=''>
        
          {React.createElement(src, { className: "text-6xl " })}
        </div>
      ))}
    </div>
    
      </div>
    </div>
  )
}

export default HeroSection