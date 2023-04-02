
import React from "react";
import "./assets/font/jenthill.css";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar/NavBar";
import About from "./components/About/About";
import Exp from "./components/Experience";
import Works from "./components/Works";
import Contact from "./components/Contact";
// import './assets/font/jenthill.css'

function App() {
  return (
    <>
      <NavBar />
      <Hero/>
      <About />
      <Exp />
      <Works />
      <Contact />
    </>
  );
}

export default App;
