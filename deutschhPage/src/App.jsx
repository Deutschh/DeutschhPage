import { useState } from "react";
import Hero from "./Sections/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./Sections/Portifolio";

function App() {


  return <div className="w-full h-full flex flex-col">
    <Navbar />
    <Hero />
    <Portfolio />
  </div>;
}

export default App;
