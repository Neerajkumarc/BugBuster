import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

import { Routes, Route } from "react-router-dom";
import Upload from "./pages/Upload";



const App = () => {
  return <>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/signup" element={<SignUp/>} />
    <Route path="/signin" element={<SignIn/>} />
    <Route path="/upload" element={<Upload/>} />
  </Routes>
  <Footer/>
  </>
};

export default App;
