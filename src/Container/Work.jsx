import React from 'react'
import { FaFacebookMessenger,FaFacebook,FaAddressBook}  from "react-icons/fa";

const Work = ({text}) => {
    const links =[
        {id:9,src:FaFacebookMessenger},
        {id:8,src:FaFacebook},
        {id:7,src:FaAddressBook}
      ]
  return (
    <div>
         <div className=' flex flex-col justify-center items-center rounded mt-10 md:mt-28 px-4'>
        <h2 className='text-2xl font-bold '>FREELANCE/OFFICE</h2>
        <h1 className='md:text-9xl text-5xl font-bold py-8'>{text} </h1>
        <div className="flex space-x-4">
      {links.map(({ id, src }) => (
        <div key={id} className='py-10'>
        
          {React.createElement(src, { className: "text-6xl " })}
        </div>
      ))}
    </div>
      </div>

     <div>
     <div className='m-3'>
      <p className='text-[20px] py-3'>Name</p>
      <input type="name" placeholder='ENTER YOUR NAME' className='bg-gray-200 w-full min-h-10 pl-4 rounded' />
    </div>
    <div className='m-3'>
      <p className='text-[20px] py-3'>E-mail</p>
      <input type="email" placeholder='ENTER YOUR E-MAIL' className='bg-gray-200 w-full min-h-10 pl-4 rounded' />
    </div>
    <div className='m-3'>
      <p className='text-[20px] py-3'>Message</p>
      <input type="name" placeholder='TYPE YOUR MESSAGE' className='bg-gray-200 w-full min-h-28 pl-4 rounded' />
      <button type='submit' className='bg-black text-white p-3 px-8 font-sans mt-3'>SUBMIT</button>
    </div>
    <div className='flex justify-between text-3xl font-medium h-14 w-full mt-10 px-4'>
  <h1>based in pakistan</h1>
  <h1>frontend developer</h1>
</div>
     </div>
      
    </div>
  )
}

export default Work