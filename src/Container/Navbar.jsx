import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const location= window.location.pathname
  console.log(location)
    const [menuOpen, setmenuOpen]=useState('');
    const toggleMenu=()=>{
        setmenuOpen(!menuOpen)
    }
  return (
    
    <div>
        <nav className="flex justify-between items-center px-10 py-8">
      {/* Logo */}
      <div className="text-2xl text-gray-500 font-medium">Logo</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex md:gap-8 gap-5 text-xl">
        <li >
          <Link className={`cursor-pointer ${location === '/'? 'text-gray-600': 'text-black'}`} to={'/'}>Home</Link>
          </li>
        <li>
          <Link className={` cursor-pointer ${location === '/Landing'? 'text-gray-600': 'text-black'}`} to={'/Landing'}>Landing</Link>
          </li>
        <li>
          <Link className={`cursor-pointer ${location === '/about' ?'text-gray-600':'text-black'}`} to={'/about'}>About</Link>
          </li>
        <li>
          <Link className={`cursor-pointer ${location === '/Contact'?'text-gray-600':'text-black'}`} to={'/Contact'}>Contact</Link>
          </li>
      </ul>

      {/* Hamburger Icon */}
      <div className='md:hidden text-2xl cursor-pointer' onClick={toggleMenu}>
        menu
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-5 py-5 text-xl">
          <li>
            <Link className="hover:text-gray-400 cursor-pointer" to={'/'}>Home</Link>
            </li>
          <li>
            <Link className="hover:text-gray-400 cursor-pointer" to={'/Landing'}>Landing</Link>
            </li>
          <li>
            <Link className="hover:text-gray-400 cursor-pointer" to={'/About'}>About</Link>
            </li>
          <li>
            <Link className="hover:text-gray-400 cursor-pointer" to={'/Contact'}>Contact</Link>
            </li>
        </ul>
      )}
    </nav>
    </div>
  )
}

export default Navbar