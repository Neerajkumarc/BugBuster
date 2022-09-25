import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { motion } from 'framer-motion'


const Contact = () => {
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
    viewport={{once:true}}  
    className="flex h-[90vh] justify-center items-center ">
        <div className=" bg-white w-[80vw] md:w-[60vw]  h-[500px] rounded-md flex items-center justify-center">
      <div className="grid md:grid-cols-2">
        <div className="hidden md:flex flex-col p-4 px-8 gap-20 text-black">
          <p className='text-4xl font-bold text-gradient'>Contact Us</p>
          <p>
            Fill up the form our Team will get back to you within 24 hours.
          </p>
          <p className='flex '>
          <AiOutlineMail className='text-3xl'/><span>&nbsp; bugbuster@gmail.com</span>
          </p>
        </div>
        <div className=" text-black flex flex-col justify-center items-center lg:border border-black lg:p-8 lg:mt-4 lg:mx-4 lg:rounded-lg lg:shadow-xl lg:bg-slate-100">
          <p className="text-4xl mt-4 font-bold text-indigo-500">
            Get In Touch
          </p>
          <form action="">
            <div className="my-6">
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
           
            <div className="my-6">
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
            <div className="my-6">
              <label className="block" htmlFor="password">
                Message:
              </label>
              <textarea
                className="border border-black  rounded p-1 md:w-[20vw]"
                name="message"
                required
              />
            </div>
          </form>
          <button className="bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-2 rounded text-white w-40 font-bold">
            Send
          </button>
        </div>
      </div>
     
      </div>
    </motion.div>
  )
}

export default Contact
