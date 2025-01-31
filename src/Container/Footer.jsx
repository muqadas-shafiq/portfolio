import React from 'react';
import butterfly from "../assets/butterfliy.jpeg";

const Footer = () => {
  return (
    <div
      className="relative h-auto flex flex-col md:flex-row justify-center items-center text-white p-10"
      style={{
        backgroundImage: `url(${butterfly})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for Glassmorphism Effect */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-lg"></div>

      {/* Content */}
      <div className="relative flex flex-col md:flex-row justify-between items-center w-full px-10 gap-8 text-center md:text-left">
        {/* Contact Section */}
        <div className="max-w-52">
          <h1 className="text-xl font-semibold">CONTACT US</h1>
          <ul className="font-normal leading-8">
            <li>Fashion@Email.com</li>
            <li><span>Number:</span> 12788919295</li>
            <li><span>Address:</span> Block #5, 2 D1, Township Lahore</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="max-w-52">
          <h1 className="text-xl font-semibold">QUICK LINKS</h1>
          <ul className="font-normal leading-8">
            <li>Home</li>
            <li>Shop</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="max-w-52">
          <h1 className="text-xl font-semibold">FOLLOW US</h1>
          <ul className="font-normal leading-8">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
