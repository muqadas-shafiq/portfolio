import React from "react";
import butterfly from "../assets/butterfliy.jpeg";
import { FaInstagram } from "react-icons/fa6";
import { CiFacebook, CiTwitter } from "react-icons/ci";


const Footer = () => {


  return (
    <div className="flex flex-col items-center">
  
      <div
        className="relative min-h-96 flex flex-col md:flex-row justify-center items-center text-white p-5 md:pr-28 pr-12 w-full"
        style={{
          backgroundImage: `url(${butterfly})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-lg"></div>

        <div className="relative flex flex-col md:flex-row justify-between items-center w-full px-10 gap-8 text-center md:text-left">
          
          <div className="max-w-52">
            <h1 className="text-xl font-semibold">CONTACT US</h1>
            <ul className="font-normal leading-8">
              <li>Fashion@Email.com</li>
              <li><span>Number:</span> 12788919295</li>
              <li><span>Address:</span> Block #5, 2 D1, Township Lahore</li>
            </ul>
          </div>

        
          <div className="max-w-52">
            <h1 className="text-xl font-semibold">QUICK LINKS</h1>
            <ul className="font-normal leading-8">
              <li>Home</li>
              <li>Shop</li>
              <li>Contact</li>
            </ul>
          </div>
           <div className="max-w-52">
            <h1 className="text-xl font-semibold mb-12">FOLLOW US</h1>
            <ul className="text-3xl leading-8 flex flex-row gap-2">
              <li><FaInstagram /></li>
              <li><CiFacebook /></li>
              <li><CiTwitter /></li>
            </ul>
          </div>
        </div>
      </div>

      
       
    </div>
  );
};

export default Footer;
