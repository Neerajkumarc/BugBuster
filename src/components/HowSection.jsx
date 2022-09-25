import React from "react";
import one from '../assets/one.png'
import two from '../assets/two.png'
import three from '../assets/three.png'
import four from '../assets/four.jpg'
import { motion } from "framer-motion"

const HowSection = () => {
  return (
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
      duration:1.5
    }}

    className="p-10 my-32">
      <div  className="flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-7xl font-bold">How It <span className="text-gradient">Works</span></h1>
        <p className="my-10 max-w-[60vw] text-center">
          BugBuster automatically scans for all the known vulnerabilities. We
          inspect all possible sources of dangerous data processing and generate
          a detailed report which may help to resolve security issues and
          protect your data.
        </p>
      </div>

      {/* //dd */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="flex flex-col items-center justify-center"> <img  className="w-200px] h-[200px] rounded-full" src={one} alt="" />
        <p className="py-8 w-[200px] text-center">Selection of a target for scanning</p>
        </div>
        <div className="flex flex-col items-center justify-center"> <img className="w-[200px] h-[200px] rounded-full"  src={two} alt="" />
        <p className="py-8 w-[200px] text-center">APK file is uploaded to the service</p>
        </div>
        <div className="flex flex-col items-center justify-center"> <img className="w-[200px] h-[200px] rounded-full"  src={three} alt="" />
        <p className="py-8 w-[200px] text-center">Automatic scanning of the app to detect vulnerabilities</p>
        </div>
        <div className="flex flex-col items-center justify-center"> <img className="w-[200px] h-[200px] rounded-full"  src={four} alt="" />
        <p className="py-8 w-[200px] text-center">Generating a report that can be exported as a PDF</p>
        </div>
      </div>
    </motion.div>
  );
};

export default HowSection;
