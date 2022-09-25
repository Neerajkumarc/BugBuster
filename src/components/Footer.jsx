import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-[220px] bg-black flex flex-col justify-center items-center">
      <div className="max-w-[1240px] flex flex-col md:flex-row items-center mx-auto  justify-between ">
        <img className="h-[60px] w-auto block mx-6" src={logo} alt="logo" />
        <div className="flex  items-center flex-col">
          <div className="my-4 flex flex-col">
            <ul className="flex">
              <li className="px-4 hover:text-[#0088ff]">
                <Link to="/"> Home </Link>
              </li>
              <li className="px-4 hover:text-[#0088ff]">
                <Link to="/about"> About </Link>
              </li>
              <li className="px-4 hover:text-[#0088ff]">
                <Link to="/contact"> Contact Us </Link>
              </li>
            </ul>
          </div>
          <div className="flex text-4xl gap-6">
            <AiOutlineFacebook />
            <AiOutlineInstagram />
            <AiOutlineTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
