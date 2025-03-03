import React from "react";
import Collection from "./Collection";
import Salesection from "./Salesection";
import Footer from "./Footer";
import autmn from "../assets/autmn.jpeg";
import Navbar from "./Navbar";
import AOS from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";


const Home = () => {
  useEffect(()=>{
    AOS.init({duration: 2000});
  },[]);

  return (
    <div>
      {/* Navbar */}
    <Navbar/>
      {/* Hero Section */}

        <div className="relative  h-screen">
                       <img src={autmn} alt="Autumn" className="w-full h-screen object-cover" />
                       <div className="absolute inset-0 flex justify-center">
                         <div className="flex justify-center items-center text-white">
                           <div className="text-center" data-aos="zoom-in">
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
      <div className="flex flex-col items-center min-h-72 text-center py-20" data-aos="fade-up">
        <p className="text-3xl font-semibold pb-4">SELECT YOUR COLLECTION</p>
        <p className="text-2xl text-gray-900">
          Beauty is a harmony of inner grace and outward expressions. <br />
          In the mirror of grace, true beauty finds its perfect frame.
        </p>
      </div>

      {/* Collections Section */}
      <Collection/>
      {/* sale section */}
      <Salesection/>
      {/* Location */}
      <div >
        
        <h3 class="flex items-center justify-between text-3xl mt-5">REACH OUT US TODAY</h3>
        <h1 class="md:text-5xl text-4xl font-semibold py-5">OUR LOCATION</h1>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10478.777503658177!2d74.31792886732067!3d31.44522827935452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391906c6c5053c7b%3A0xe3c53a5968aab635!2sQuaid%20e%20Azam%20Industrial%20Estate%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1738144313941!5m2!1sen!2s" className="md:w-full w-[400px]" height="550" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        
        <Footer/>
    </div>
  );
};

export default Home;

