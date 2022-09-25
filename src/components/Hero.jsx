import React from 'react'
import hero1 from '../assets/hero1.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div 
    initial={{
      opacity:0
    }}
    whileInView={{
      opacity:1
    }}
    transition={{
      duration:1.5
      
    }}
    viewport={{once:true}}  
    className='w-full h-[100vh] flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w[1240px] mx-auto '>
            <div
                     
            className='flex flex-col justify-center  md:items-start w-full px-8 py-8'>
                <h1 className='font-bold text-5xl md:text-7xl'>Secure Your <span className='text-gradient'>Android</span> Apps</h1>
                <p className='py-8'>A mobile app vulnerability scanner designed for DevOps process integration, that is built to protect your customer's privacy and defend their devices against modern threats.</p>
                <Link to="/upload" className='bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-2 rounded text-white w-40 font-bold'>Get Started</Link>
            </div>
            <div
             
            className='p-8'>
                <img className='border-2 border-black rounded shadow-[0_35px_60px_-15px_rgba(0,0,0,1)]' src={hero1} alt="img" />
            </div>
        </div>
      
    </motion.div>
  )
}

export default Hero
