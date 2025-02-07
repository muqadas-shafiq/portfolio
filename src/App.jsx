import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Container/Home";
import Mens from "./Container/Mens";
import Women from "./Container/Women";
import Kid from "./Container/Kid";
import Navbar from "./Container/Navbar";
// import { Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar/>
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kid" element={<Kid />} />
        </Routes>
      
       {/* <Link to={"/"}>
                          <button className=" text-white font-medium w-80 bg-green-500 md:w-[1350px] py-3">
                        Back to home page
                          </button>
                        </Link>
           */}
    </Router>
  );
};

export default App;
