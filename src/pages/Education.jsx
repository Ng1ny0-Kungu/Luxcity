import React from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import Footer from "../components/Footer";

const Education = () => {
  return (
    <div className="relative min-h-screen bg-[#151E3D] text-white">
      <ParticlesBackground />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#E7B10A]">Education</h1>
        <p className="text-lg md:text-xl max-w-2xl text-center">
          Learn with Luxcity’s education initiatives and training programs.
        </p>
      </div>


      {}
      <Footer />
    </div>
  );
};

export default Education;
