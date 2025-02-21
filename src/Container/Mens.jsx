import React from 'react'
import { useNavigate } from "react-router-dom";
import Items from './Items'


const Mens = () => {
  const navigate = useNavigate();
 
  
  return (
    
    <div >
      
    <Items/>
     {/* back to home page */}
     <div className="flex justify-center mt-10">
        <button
          onClick={() => navigate("/")} // ✅ Go back to home page
          className="px-6 py-2 bg-green-800 text-white text-lg rounded-lg hover:bg-green-700 transition"
        >
          Back to Home Page
        </button>
      </div>
    </div>
  )
}

export default Mens