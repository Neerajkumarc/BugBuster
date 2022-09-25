import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <ul className="flex flex-col md:flex-row">
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
  );
};

export default Links;
