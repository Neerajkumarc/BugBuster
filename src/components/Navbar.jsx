import React, { useState } from "react";
import logo from "../assets/logo.png";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import { Link } from "react-router-dom";
import NavigationLinks from "./NavigationLinks";
import {motion} from "framer-motion"

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <nav className="w-full h-[100px]">
      <div className="max-w-[1240px] h-full mx-auto px-4 flex items-center justify-between">
        <motion.div 
         initial={{
          x:-100,
          opacity:0
        }}
        whileInView={{
          x:0,
          opacity:1
        }}
        transition={{
          duration:1
          
        }}
        viewport={{once:true}}  
        className="flex items-center ">
         <Link to="/"> <img className="h-[60px] w-auto" src={logo} alt="logo" /></Link>
        </motion.div>
        <div className="hidden md:flex">
          <NavigationLinks/>
        </div>
        <div className="hidden md:flex pr-4 ">
          <Link
            to="/signin"
            className="button mx-8 rounded px-4 py-2 text-white"
          >
            Sign in
          </Link>
          <Link
            to="/signup"
            className=" button px-4 rounded py-2 text-white"
          >
            Sign Up
          </Link>
        </div>
        <div className="md:hidden cursor-pointer">
          {!nav ? (
            <GiHamburgerMenu size={40} onClick={handleClick} />
          ) : (
            <GiCancel size={40} onClick={handleClick} />
          )}
        </div>
      </div>
      <div className={!nav ? "hidden" : "w-full bg-[#00003a] absolute px-8"}>
        <div onClick={handleClick}>
        <NavigationLinks />
        </div>
        <div className="flex flex-col">
          <Link to="/signin" onClick={handleClick} className="font-bold border-2 text-center border-[#ffffff] my-2  rounded px-4 py-1 text-[#ffffff]">
            Sign in
          </Link>
          <Link to="/signup" onClick={handleClick} className="button mb-2 px-4 text-center rounded py-1 text-white">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
