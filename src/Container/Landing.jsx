import React from 'react'
import { SiGamedeveloper } from "react-icons/si";
import { SlSocialDropbox } from "react-icons/sl";
import { FaArrowsToCircle, FaRegCircleUser } from "react-icons/fa6";
import { TbBriefcaseOff } from "react-icons/tb";
import { SiSuzuki } from "react-icons/si";
import { ImBrightnessContrast } from "react-icons/im";
import { FaSchoolCircleXmark } from "react-icons/fa6";
import girl from '../assets/girl.jpg'
import Mission from './Mission';
import HeroSection from './HeroSection';
import { FaFacebookMessenger,FaFacebook,FaAddressBook}  from "react-icons/fa";
import desktop from '../assets/desktop.jpg'
import apple from '../assets/apple.jpg'
import laptop1 from '../assets/laptop1.jpg'
import laptop from '../assets/laptop.jpg'
import woman1 from '../assets/woman1.jpg'
import woman2 from '../assets/woman2.jpg'
 import writing from '../assets/writing.jpg'
import Work from './Work'
const Landing = () => {
      const menu=[
        {
            count:"01",
            icon:SiGamedeveloper,
            title:"BRIEF",
            text:"its a simple text . Select to send this text to another person this text to another person"
        },
        {
            count:"02",
            icon:SlSocialDropbox,
            title:"DESIGNE",
            text:"its a simple text. Select to send this text to another person this text to another person "
        },
        {
            count:"03",
            icon:FaArrowsToCircle,
            title:"DEVELOPER",
            text:"its a simple text. Select to send this text to another person this text to another person"
        },
        {
            count:"04",
            icon:FaRegCircleUser,
            title:"SOCIAL MEDIA",
            text:"its a simple text.its a simple text. Select to send this text to another person "
        },
      ]
      const text=[
        
        {
            h1:".MARKETING",
            description: "Marketing is the art of creating visually appealing and user-friendly interfaces that ensure seamless navigation and interaction. A great design combines aesthetics.",
        },
       
        {
            h1:".BRANDING",
            description: "Branding is the art of creating visually appealing and user-friendly interfaces that ensure seamless navigation and interaction. A great design combines aesthetics.",
        },
        {
            h1:".DEVELOPING",
            description: "Developing is the art of creating visually appealing and user-friendly interfaces that ensure seamless navigation and interaction. A great design combines aesthetics .",
        },
        {
            h1:".DESIGNING",
            description: "App design is the art of creating visually appealing and user-friendly interfaces that ensure seamless navigation and interaction. A great design combines .",
        },
      ]
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
      const links =[
        {id:9,src:FaFacebookMessenger},
        {id:8,src:FaFacebook},
        {id:7,src:FaAddressBook}
      ]
  return (
    <div>
        {/* heroSection */}
        <HeroSection text={"PORTFOLIO"}/>
      {/* img */}
      <div
  className="bg-cover bg-center min-h-screen w-full "
  style={{ backgroundImage: `url(${desktop})`}}
></div>

{/* menu */}
<div className='grid grid-cols-1 md:grid-cols-4 px-3 py-20 md:mt-10 gap-10 '>
    {menu.map((item,index)=>(
        <div key={index} className='flex flex-col justify-start gap-5 items-center'>
            <p className='text-2xl'>{item.count}</p>
            <div className='text-5xl text-gray-500'>< item.icon/></div>
            <h2 className='text-2xl font-bold'>{item.title}</h2>
            <p className='text-gray-900 text-[20px] pl-3 text-center'>{item.text}</p>
        </div>
    ))}
</div>
<Mission/>
{/* menu */}
<div className=' flex flex-col px-10 md:flex-row gap-16 my-10'>
{text.map((item,index)=>(
    <div key={index}>
        <div className='text-2xl font-bold pb-5 '>{item.h1}</div>
        <div className='text-[25px] md:text-[19px] text-gray-900 w-[90%] md:max-w-sm'>{item.description}</div>
        
    </div>
))}
</div>

<div className='flex flex-col md:flex-row mt-5 md:mt-20 gap-10'>
    <div className='md:max-w-[50%]'>
        <img src={girl} />
    </div>
    
    <div  className='bg-gray-200 flex-col'>
        <div><h1 className='text-9xl pl-2'>,,</h1></div>
        <p className='text-[25px] md:text-2xl pt-10 px-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo minus nobis qui quis, ipsam aliquid vero tenetur possimus accusamus voluptatibus magnam unde debitis voluptates earum laudantium magni facilis. Repudiandae, impedit?</p>
        <div className='p-8 text-2xl font-medium'>
            <h1 className=' text-2xl font-medium'>THEETA</h1>
            <h1 className=' text-[19px] font-medium'>LEARN AND EARN</h1>
        </div>
    </div>
</div>
{/* icons */}
<div className='grid md:grid-cols-4 grid-cols-3 mt-4 md:my-20'>
    {icons.map(({id,src})=>(
        <div key={id} className='flex justify-center md:p-10 py-5'>
            {React.createElement(src, { className: "md:text-7xl text-4xl" })}
            </div>
    ))}
</div>
{/* persons */}
 <div className='bg-gray-200'>
   <div className='flex'>
   <div className='md:max-w-full hidden md:flex'>
        <img src={woman1}/>
    </div>
    <div className='p-20 flex flex-col justify-center items-center max-w-ful mx-10'>
        <h1 className='text-[35px] md:text-2xl font-medium px-5'>JACK ELIZABETH</h1>
        <h3 className='text-[25px] md:text-[18px]'>SALES MANAGER</h3>
    </div>
    <div className='md:max-w-full hidden md:flex'>
        <img src={woman2}/>
    </div>
   </div>
</div> 

{/* certificate */}
<div className='flex  justify-between my-5 md:my-24 flex-col md:flex-row pl-10 md:px-5'>
      <div className='w-full md:w-[50%] bg-slate-100 md:pl-5'>
      <h1 className='md:text-7xl text-4xl font-bold py-5'>CERTIFICATE</h1>
      <img src={writing}  />
      </div>
      <div className='pr-20 mt-5'>
        <div>
        <h1 className="text-3xl">2024</h1>
        <h1 className="text-2xl font-bold py-3">Website <br /> Development </h1>
        <p className='max-w-lg text-[20px]  text-gray-800'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque nisi, amet aspernatur molestias dolore alias distinctio a ipsa possimus id est expedita nostrum ipsam, vero accusamus rerum ab inventore sunt.</p>
        </div>
        <div className='pt-5'>
        <h1 className="text-3xl">2024</h1>
        <h1 className="text-2xl font-bold py-3">Theeta<br /> Institute </h1>
        <p className='max-w-lg text-[20px]  text-gray-800'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti cum recusandae a! Consequuntur doloremque natus maiores reiciendis adipisci quidem, odio quas deserunt corrupti atque at architecto voluptatibus harum velit beatae!.</p>
        </div>
      </div>
    </div>
    {/* imgs */}
    <div className='grid grid-cols-1 md:grid-cols-4 gap-10 bg-cover bg-center'>
       <div>
       <img src={apple} />
       </div>
       <div  className='flex max-w-full'><img src={laptop1} /></div>
       <div className='flex max-w-full'><img src={laptop} /></div>
       <div className='flex max-w-full'><img src={writing} /></div>
    </div>
   <div className="flex space-x-4 justify-center mt-12">
   {links.map(({ id, src }) => (
        <div key={id} className='md:py-10'>
        
          {React.createElement(src, { className: "text-6xl " })}
        </div>
      ))}
   </div>
   {/* our-work */}
   <div className='flex  justify-between mt-5 md:my-24 flex-col md:flex-row'>
      <div className='flex flex-col justify-center items-center pr-20 bg-slate-100 pt-5 pl-8 md:w-[50%] h-[170px]'>
        <h1 className='text-3xl font-medium '>SERVICES</h1>
      <h1 className='md:text-7xl text-4xl font-bold py-2'>OUR WORK</h1>
      </div>
      <div className='pr-20'>
        <div className='mt-5 px-5'>
        <h1 className="text-3xl pb-5">Digital Printing</h1>
        <p className='max-w-lg text-[20px]  text-gray-800 py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, impedit reiciendis. Rem illum magni reiciendis, similique molestiae ab nostrum eum rerum, quaerat exercitationem natus cum sunt est velit blanditiis quo?.</p>
        </div>
        <div className='mt-5 text-2xl font-light pl-5'>
        <p className='pt-3'>Brand Identity</p>
        <p className='pt-3'>logo Designe</p>
        <p className='pt-3'>Product Designe</p>
        <p className='pt-3'>Social media</p>
        </div>
      </div>
    </div>
    <Work text={"CONTACT US"}/>
    

    </div>
  )
}

export default Landing