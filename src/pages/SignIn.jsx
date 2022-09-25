import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const SignIn = () => {
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
        <div className=" bg-white w-[60vw] h-[70vh] rounded-md">
      <div className="">
        <div className=" text-black flex flex-col justify-center items-center">
          <p className="text-[#00f] text-4xl mt-4 font-bold ">
            Sign In
          </p>
          <form action="">
           
            <div className="my-6">
              <label className="block " htmlFor="email">
                Email:
              </label>
              <input
                className="border border-black rounded p-1 md:w-[30vw]"
                type="email"
                name="email"
              />
            </div>
            <div className="my-6">
              <label className="block" htmlFor="password">
                Password:
              </label>
              <input
                className="border border-black  rounded p-1 md:w-[30vw]"
                type="password"
                name="password"
              />
            </div>
          </form>
          <button className="bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-2 rounded text-white w-40 font-bold">
            Sign In
          </button>
        </div>
      </div>
      <p className="text-black text-center mt-6">Don't have an account? <Link className="text-[#00f]" to="/signup">Sign up</Link></p>
      </div>
    </motion.div>
  )
}

export default SignIn
