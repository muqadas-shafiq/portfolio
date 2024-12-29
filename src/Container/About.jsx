import React ,{useEffect} from 'react'
import HeroSection from './HeroSection';
import { SiTicktick } from "react-icons/si";
import { TbBriefcaseOff } from "react-icons/tb";
import { SiSuzuki } from "react-icons/si";
import { ImBrightnessContrast } from "react-icons/im";
import { FaSchoolCircleXmark } from "react-icons/fa6";
import { SiGamedeveloper } from "react-icons/si";
import { FaArrowsToCircle, FaRegCircleUser } from "react-icons/fa6";
import { SlSocialDropbox } from "react-icons/sl";
import girl from '../assets/girl.jpg'
import Work from './Work';
import AOS from 'aos';
import 'aos/dist/aos.css'


const About = () => {
  useEffect(()=>{
    AOS.init({duration:1000});
  },[]);
  const icons=[
    {id:1, src:TbBriefcaseOff},
    {id:1, src:SiSuzuki },
    {id:1, src:ImBrightnessContrast},
    {id:1, src:FaSchoolCircleXmark},
    {id:1, src:FaRegCircleUser},
    {id:1, src:FaArrowsToCircle},
    {id:1, src:SiGamedeveloper},
    {id:1, src:SlSocialDropbox},
  ]
  return (
    <div>
        <HeroSection text={"ABOUT"}/>
        <div className='pl-20 max-w-[80%] my-10' data-aos="fade-up"> 
          <div className=''>
            <h1 className='text-2xl md:text-4xl font-bold md:leading-[50px]'>OUR STUDIO INTIGRATE TOP-TIER GRAPHICS, PHOTOGRAPHY AND WEB DESIGNING , CRAFTING COMPELLING VISUAL NARATIVE FOR YOUR BRAND&apos;S SUCCESS. </h1>
          </div>
          <div >
            <p className='text-2xl py-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum repudiandae magnam accusamus neque asperiores, voluptas id eligendi itaque tempora, molestias totam ipsa pariatur harum ipsam aliquam provident! Culpa, quasi officiis.</p>
            <div className='flex justify-start '>
        <button className='bg-black text-white p-3 px-8 font-sans mt-3'>OUR CONTACT</button>
        </div>
          </div>
        </div>
        {/* menu */}
        {/* div1 */}
        <div className='min-h-screen my-5 md:my-10'  data-aos="fade-left">
       <div className='flex flex-col md:flex-row gap-5 px-5 '>
           <div className='w-96'></div>
          <div className='md:w-[35%] bg-gray-200  p-10 rounded'>
           <div className='flex justify-end  pb-10 text-5xl '>
            <SiTicktick/>
           </div>
           <div><h1 className="text-2xl font-bold">WORLD OF CREATIVITY</h1>
           <p className="text-gray-800 pt-4 text-[19px] font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, aspernatur modi possimus illum quod optio nisi praesentium amet pariatur Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum ullam nemo sint hic fugiat explicabo molestiae. Fuga ipsam distinctio consequuntur.</p></div>
          </div>
         
          <div className='md:w-[35%] bg-gray-200 py-5 px-10 rounded'>
           <div className='flex justify-end  pb-10 text-5xl '>
            <SiTicktick/>
           </div>
           <div><h1 className="text-2xl font-bold">WORLD OF CREATIVITY</h1>
           <p className="text-gray-800 pt-4 text-[19px] font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, aspernatur modi possimus illum quod optio nisi praesentium amet pariatur Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum ullam nemo sint hic fugiat explicabo molestiae. Fuga ipsam distinctio consequuntur.</p></div>
          </div>
          {/* div2 */}
          </div>
       <div className='flex flex-col md:flex-row gap-5 px-5 mt-5 md:mt-10 ' data-aos="fade-right">
       <div className='md:w-[35%] bg-gray-200 p-10 rounded'>
           <div className='flex justify-end  pb-10 text-5xl '>
            <SiTicktick/>
           </div>
           <div><h1 className="text-2xl font-bold">WORLD OF CREATIVITY</h1>
           <p className="text-gray-800 pt-4 text-[19px] font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, aspernatur modi possimus illum quod optio nisi praesentium amet pariatur Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum ullam nemo sint hic fugiat explicabo molestiae. Fuga ipsam distinctio consequuntur.</p></div>
          </div>
          <div className='md:w-[35%] bg-gray-200 py-5 px-10 rounded'>
           <div className='flex justify-end  pb-10 text-5xl '>
            <SiTicktick/>
           </div>
           <div><h1 className="text-2xl font-bold">WORLD OF CREATIVITY</h1>
           <p className="text-gray-800 pt-4 text-[19px] font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, aspernatur modi possimus illum quod optio nisi praesentium amet pariatur Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum ullam nemo sint hic fugiat explicabo molestiae. Fuga ipsam distinctio consequuntur.</p></div>
          </div>
    
          <div className='w-96'></div>
          </div>
          </div>
{/* icons */}
<div className='grid md:grid-cols-4 grid-cols-3 mt-4 md:my-20'data-aos="fade-up">
    {icons.map(({id,src})=>(
        <div key={id} className='flex justify-center md:p-10 py-5'>
            {React.createElement(src, { className: "md:text-7xl text-4xl" })}
            </div>
    ))}
</div>

<div className='flex flex-col md:flex-row mt-5 md:mt-20 gap-10'>
    <div className='md:max-w-[50%]'  data-aos="fade-right">
        <img src={girl} />
    </div>
    
    <div  className='bg-gray-200  items-center flex-col' data-aos="fade-left">
        <div><h1 className='text-9xl pl-2'>,,</h1></div>
        <p className='text-2xl pt-10 px-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo minus nobis qui quis, ipsam aliquid vero tenetur possimus accusamus voluptatibus magnam unde debitis voluptates earum laudantium magni facilis. Repudiandae, impedit?</p>
        <div className='p-8 text-2xl font-medium'>
            <h1 className=' text-2xl font-medium'>THEETA</h1>
            <h1 className=' text-[19px] font-medium'>LEARN AND EARN</h1>
        </div>
    </div>
</div>
<Work text={"LET'S WORK"}/>
    </div>
  )
}

export default About