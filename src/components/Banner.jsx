import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const banner = () => {
  return (
    <div className="flex  flex-col gap-11 justify-center items-center h-[30vh] bg-[#21253f]">
      <h1 className="text-4xl md:text-7xl text-center px-2">
        Start <span className="text-gradient">Securing</span> your apps now!
      </h1>
      <Link
        to="/upload"
        className="button px-8 py-2 rounded text-white w-40 font-bold"
      >
        Get Started
      </Link>
    </div>
  );
};

export default banner;
