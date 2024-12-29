
import HeroSection from './HeroSection'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Work from './Work'
import { useEffect } from 'react';

const Contact = () => {
  useEffect(()=>{
    AOS.init({duration:1000});
  },[]);
  return (
    <div>
        <HeroSection text={"CONTACT"}/>
        {/* locations */}
        <div className='flex  justify-between my-10 flex-col md:flex-row px-5'>
      <div className='pl-6'data-aos="fade-right">
        <h3 className='flex items-center justify-between text-3xl '>REACH OUT US TODAY</h3>
      <h1 className='md:text-7xl text-4xl font-bold py-5'>LOCATIONS</h1>
      </div>
      <div className='pr-20' data-aos="fade-left">
        <div className='pl-7'>
        <h1 className="text-3xl">PAKISTAN</h1>
        <h1 className="text-[17px] font-bold py-2">LAHORE </h1>
        <p className='max-w-lg text-[20px]  text-gray-800'>House # 219 , Block 5, Sectoer 2D one TownShip Lahore</p>
        </div>
        <div>
        <div className='pl-7'>
        <h1 className="text-3xl mt-10">UK</h1>
        <h1 className="text-[17px] font-bold py-2">LONDON </h1>
        <p className='max-w-lg text-[20px]  text-gray-800'>House # 219 , Block 5, Sectoer 2D one TownShip Lahore</p>
        </div>
        <div className='pl-7'>
        <h1 className="text-3xl mt-10">AUSTRELIA</h1>
        <h1 className="text-[19px] font-bold py-2">MEBOURNE </h1>
        <p className='max-w-lg text-[20px]  text-gray-800'>House # 219 , Block 5, Sectoer 2D one TownShip Lahore</p>
        </div>
      </div>
      </div>
    </div>
   <div className='flex justify-center mt-20'>
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108857.80410805141!2d74.24849152187369!3d31.50200547150305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919018da644cf15%3A0xf7e66d6f39b9a46d!2stownship%20Lahore!5e0!3m2!1sen!2s!4v1732817313485!5m2!1sen!2s" className='md:w-full w-[200px]' height="550"  allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
   </div>

        <Work text={"LET'S WORK"}/>
    </div>
  )
}

export default Contact