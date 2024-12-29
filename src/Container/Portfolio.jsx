import React ,{useEffect}from 'react'
import { SiTicktick } from "react-icons/si";
import work from '../assets/work.jpg'
import { FaArrowCircleRight } from "react-icons/fa";
import bags from '../assets/bags.jpg'
import home from'../assets/home.jpg'
import bag from '../assets/bag.jpg'
import girl from '../assets/girl.jpg'
import Mission from './Mission';
import HeroSection from './HeroSection';
import Work from './Work';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Portfolio = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[]);
 
  const data1 = [
    {
      icon: SiTicktick,
      count: "(1)",
      title: "APP DESIGN",
      description: "App design is the art of creating visually appealing and user-friendly interfaces that ensure seamless navigation and interaction. A great design combines aesthetics with functionality to deliver an exceptional user experience.",
    },
    {
      icon: SiTicktick ,
      count: "(2)",
      title: "FRAMER",
      description: "Framer is the art of creating visually appealing and user-friendly interfaces that ensure seamless navigation and interaction. A great design combines aesthetics with functionality to deliver an exceptional user experience.",
    },
  
  ];
  const data2 = [
    {
      icon: SiTicktick,
      count: "(3)",
      title: "WEB DESIGNE",
      description: "web Designing is the art of creating visually appealing and user-friendly interfaces that ensure seamless navigation and interaction. A great design combines aesthetics with functionality.",
    },
    {
      icon: SiTicktick ,
      count: "(4)",
      title: "STRUCTURE",
      description: "Structure of websete is the art of creating visually appealing and user-friendly interfaces that ensure seamless navigation and interaction. A great design combines aesthetics with functionality.",
    },
    {
      icon: SiTicktick ,
      count: "(5)",
      title: "STYLING",
      description: "Styling of app is the art of creating visually appealing and user-friendly interfaces that ensure seamless navigation and interaction. A great design combines aesthetics with functionality.",
    },
  ];
  return (

    <div>
      {/* Navbar */}

      {/* heroSection */}

     <HeroSection text={"MUQADAS"}/>
      {/* img */}
      <div
  className="bg-cover bg-center min-h-screen w-full" data-aos="fade-left"
  style={{ backgroundImage: `url(${work})`}}
></div>


{/* menu */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-7 py-4 mt-20" data-aos="fade-up">
      {data1.map((item, index) => (
        <div key={index} className="border p-6 rounded shadow-md  bg-gray-200">
        <div className='flex justify-end '> <item.icon className="text-4xl " /></div>
        <div className='flex flex-col items-start '>
        <span className="font-medium text-2xl py-3">{item.count}</span>
        <h2 className="text-xl font-bold">{item.title}</h2>
         <p className="text-gray-800 py-4 text-[18px] font-normal">{item.description}</p>
         
        </div>
       </div>
      ))}
    </div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-7 py-4" data-aos="fade-up">
      {data2.map((item, index) => (
         <div key={index} className="border p-6 rounded shadow-md  bg-gray-200">
         <div className='flex justify-end '> <item.icon className="text-4xl " /></div>
         <div className='flex flex-col items-start '>
         <span className="font-medium text-2xl py-3">{item.count}</span>
         <h2 className="text-xl font-bold">{item.title}</h2>
          <p className="text-gray-800 py-4 text-[18px] font-normal">{item.description}</p>
          
         </div>
        </div>

      ))}
    
    </div>
    {/* latest projects */}
    <h1 className='md:text-6xl text-4xl font-bold p-8 ' >LATEST PROJECTS</h1>
    <div className=' gap-8 md:grid md:grid-cols-2' data-aos="fade-up">
      <div >
        <div>
          <img src={work} />
          </div>
          <div className='flex justify-between p-10'>
          <div className='flex flex-col gap-3'>
            <h1 className='text-2xl font-bold '>OUTDOOR ADVERTISING</h1>
            <h3 className='text-2xl font-medium'>Sample Headline</h3>
          </div>
          <div className='md:text-6xl text-4xl'>
          <FaArrowCircleRight />
          </div>
          </div>
        </div>
       
      <div >
        <div>
          <img src={bag} />
          </div>
          <div className='flex justify-between p-10'>
          <div className='flex flex-col gap-3'>
            <h1 className='text-2xl font-bold '>SHOP</h1>
            <h3 className='text-2xl font-medium'>Sample Headline</h3>
          </div>
          <div className='md:text-6xl text-4xl'>
          <FaArrowCircleRight />
          </div>
          </div>
        </div>
      <div >
        </div>
      </div>
    <div className=' gap-8 md:grid md:grid-cols-2' data-aos="fade-up">
      <div >
        <div>
          <img src={home} />
          </div>
          <div className='flex justify-between p-10'>
          <div className='flex flex-col gap-3'>
            <h1 className='text-2xl font-bold '>LOGO DESIGNE</h1>
            <h3 className='text-2xl font-medium'>Sample Headline</h3>
          </div>
          <div className='md:text-6xl text-4xl'>
          <FaArrowCircleRight />
          </div>
          </div>
        </div>
       
      <div >
        <div>
          <img src={bags} />
          </div>
          <div className='flex justify-between p-10'>
          <div className='flex flex-col gap-3'>
            <h1 className='text-2xl font-bold '>PRINT</h1>
            <h3 className='text-2xl font-medium'>Sample Headline</h3>
          </div>
          <div className='md:text-6xl text-4xl'>
          <FaArrowCircleRight />
          </div>
          </div>
        </div>
      <div >
        </div>
      </div>
      {/* vission */}
      <div className='flex flex-col justify-center items-center mb-10 md:px-10 px-5' data-aos="fade-up">
        <div className='flex justify-center'>
          <img src={girl}  />
        </div>
        <div className=' flex flex-col justify-center '>
        <h1 className='md:text-7xl text-4xl font-bold md:py-10 py-5'>CREATIVE VISIONARY</h1>
        <p className="text-gray-800  text-[20px] py-5 font-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, magnam dicta tempora amet veniam hic soluta cumque facere mollitia ad quos nisi ut iusto eos nemo, atque voluptate voluptatum illum.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, magnam dicta tempora amet veniam hic soluta cumque facere mollitia ad quos nisi ut iusto eos nemo, atque voluptate voluptatum illum.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, magnam dicta tempora amet veniam hic soluta cumque facere mollitia ad quos nisi ut iusto eos nemo, atque voluptate voluptatum illum.</p>
        <div className='flex justify-start '>
        <button className='bg-black text-white p-3 px-8 font-sans mt-3'>OUR CONTACT</button>
        </div>

        </div>
      </div>

      {/* missions */}
      <Mission/>
      {/* repeat divs */}
      <div
  className="bg-cover bg-center min-h-screen w-full mt-5 " data-aos="fade-up"
  style={{ backgroundImage: `url(${work})`}}
></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-7 py-4 mt-20" data-aos="fade-up">
      {data1.map((item, index) => (
        <div key={index} className="border p-6 rounded shadow-md  bg-gray-200">
        <div className='flex justify-end '> <item.icon className="text-4xl " /></div>
        <div className='flex flex-col items-start '>
        <span className="font-medium text-2xl py-3">{item.count}</span>
        <h2 className="text-xl font-bold">{item.title}</h2>
         <p className="text-gray-800 py-4 text-[18px] font-normal">{item.description}</p>
         
        </div>
       </div>
      ))}
    </div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-7 py-4" data-aos="fade-up">
      {data2.map((item, index) => (
         <div key={index} className="border p-6 rounded shadow-md  bg-gray-200">
         <div className='flex justify-end '> <item.icon className="text-4xl " /></div>
         <div className='flex flex-col items-start '>
         <span className="font-medium text-2xl py-3">{item.count}</span>
         <h2 className="text-xl font-bold">{item.title}</h2>
          <p className="text-gray-800 py-4 text-[18px] font-normal">{item.description}</p>
          
         </div>
        </div>
      ))}
    </div>
    {/* certificate */}
    <div className='flex  justify-between my-10 flex-col md:flex-row px-5' data-aos="fade-down">
      <div>
      <h1 className='md:text-7xl text-4xl font-bold py-5'>CERTIFICATE</h1>
      </div>
      <div className='pr-20'>
        <div>
        <h1 className="text-3xl">2024</h1>
        <h1 className="text-2xl font-bold py-5">Website <br /> Development </h1>
        <p className='max-w-lg text-[20px]  text-gray-800'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis dolores cupiditate ratione similique molestias sequi modi, repellat esse porro voluptates facere temporibus molestiae nobis fuga tenetur vitae ducimus eum nam!.</p>
        </div>
        <div>
        <h1 className="text-3xl">2024</h1>
        <h1 className="text-2xl font-bold py-5">Theeta<br /> Institute </h1>
        <p className='max-w-lg text-[20px]  text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est velit, neque et dignissimos sint consequuntur exercitationem blanditiis vero voluptas, perferendis ullam voluptatum sapiente id harum consequatur qui voluptatem officia inventore.</p>
        </div>
      </div>
    </div>

    {/* lets work */}
  <Work text={"LET'S WORK"}/>
    
    </div>
  )
}

export default Portfolio