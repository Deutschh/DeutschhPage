import { useState } from "react";
import Hero from "./Sections/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./Sections/Portifolio";
import Gallery from "./Sections/Gallery";

function App() {


  return <div className="w-full h-full flex flex-col">
    <Navbar />
    <Hero />
    <Portfolio />
    <Gallery />
  </div>;
}

export default App;
