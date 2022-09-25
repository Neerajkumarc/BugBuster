import React from "react";
import about1 from '../assets/about1.jpg'
import { motion } from "framer-motion";

const About = () => {
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
      duration:1
      
    }}
    viewport={{once:true}}  
    className="w-full  flex flex-col justify-between p-8">
      <div className="flex flex-col-reverse md:flex-row max-w[1240px] gap-10">
        <div>
          <img
            className=" rounded-full shadow-[0_35px_60px_-15px_rgba(0,0,0,1)] h-[80%] w-auto md:h-[70vh] md:w-[70vw]"
            src={about1}
            alt="section"
          />
        </div>

        <div>
          <h1 className="text-4xl md:text-7xl font-bold"> <span className="text-gradient">Who</span> We Are</h1>
          <p className="my-8 lg:w-[30vw] ">
            BugBuster is a tool that can be use to detect vulnerabilities in an android app. Our goal is to uncover mobile vulnerabilities that may help to improve the Security of app.
          </p>
          <p className="lg:w-[40vw]">
            Bugbuster can uncover all know vulnerabilities by an automated process. It supports all the android apps and also can reveal several known java-specific vulnerabilities.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
