import React from 'react'
import android from '../assets/android.png'
import { motion } from 'framer-motion'

const Upload = () => {
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
    className=' w-full mt-[-90px] h-screen flex flex-col gap-10 justify-center'>
        <div className='text-center'>
        <p className='text-4xl md:text-7xl '>New Scan</p>
        <p className='my-2'>Upload your .apk file here</p>
        </div>
        <div className='border-dashed border-2 rounded-xl border-white bg-zinc-200 bg-opacity-20 w-[80vw] h-[60vh] flex justify-between flex-col items-center mx-auto'>
            <div className=' flex flex-col justify-between items-center'>
            <img className='w-[300px] h-auto' src={android} alt="android" />
           <div className='border-2 border-white rounded-lg p-2 mb-4 flex items-center text-white'> <input type="file" accept='.apk'  />
           </div>
            <input type="submit" value="Upload" className='bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-2 rounded text-white w-40 font-bold ' />
            </div>
        </div>
    </motion.div>
  )
}

export default Upload
