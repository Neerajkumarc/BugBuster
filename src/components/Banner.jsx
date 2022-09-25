import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

const banner = () => {
  return (
    <div 
  
    
    className='flex  flex-col gap-11 justify-center items-center h-[30vh] bg-[#21253f]'>
      <motion.h1
        initial={
          {
            x:200,
            opacity:0
            
          }
        }
        whileInView={{
          x:0,
          opacity:1
        }}
        transition={{
          duration:1.5
          
        }}
        viewport={{once:true}}
      className='text-4xl md:text-7xl text-center px-2'>Start <span className='text-gradient'>Securing</span> your apps now!</motion.h1>
      <Link to="/upload" className='button px-8 py-2 rounded text-white w-40 font-bold'>Get Started</Link>
    </div>
    
    )
}

export default banner
