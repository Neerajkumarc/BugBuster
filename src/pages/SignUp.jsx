import React from "react";
import logo from "../assets/logoblk.png";
import signupimg from "../assets/SignUp.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SignUp = () => {
  return (
    <motion.div
    initial={{

      opacity:0
    }}
    whileInView={{

      opacity:1
    }}
    transition={{
      duration:1
      
    }}
    className="flex h-[90vh] justify-center items-center ">
        <div className=" bg-white w-[80vw] md:w-[60vw]  h-[520px] rounded-md">
      <div className="grid md:grid-cols-2">
        <div className="hidden md:flex flex-col p-12">
          <img className="w-[100%] lg:w-[80%] h-auto" src={logo} alt="logoimg" />
          <img className="w-[100%] lg:w-[80%] h-auto" src={signupimg} alt="img" />
        </div>
        <div className=" text-black flex flex-col justify-center items-center">
          <p className="text-4xl mt-4 font-bold text-[#00f]">
            Sign Up
          </p>
          <form action="">
            <div className="my-4">
              <label className="block " htmlFor="name">
                Name:
              </label>
              <input
                className="border border-black rounded p-1 md:w-[20vw] "
                type="text"
                name="name"
                required
              />
            </div>
            <div className="my-4">
              <label className="block " htmlFor="last-name">
                Last-Name:
              </label>
              <input
                className="border border-black rounded p-1 md:w-[20vw]"
                type="text"
                name="last-name"
                required
              />
            </div>
            <div className="my-4">
              <label className="block " htmlFor="email">
                Email:
              </label>
              <input
                className="border border-black rounded p-1 md:w-[20vw]"
                type="email"
                name="email"
                required
              />
            </div>
            <div className="my-4">
              <label className="block" htmlFor="password">
                Password:
              </label>
              <input
                className="border border-black  rounded p-1 md:w-[20vw]"
                type="password"
                name="password"
                required
              />
            </div>
          </form>
          <button className="bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-2 rounded text-white w-40 font-bold">
            Sign Up
          </button>
        </div>
      </div>
      <p className="text-black text-center md:text-right px-4 lg:mr-24 lg:mb-6">Already have an account? <Link className="text-[#00f]" to="/signin">Sign in</Link></p>
      </div>
    </motion.div>
  );
};

export default SignUp;
