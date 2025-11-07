import React from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <div className="relative min-h-screen bg-[#151E3D] text-white">
      <ParticlesBackground />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Fashion, Modelling & Travel</h1>
        <p className="text-lg md:text-xl max-w-2xl text-center">
          Discover Luxcity’s fashion brand, modelling agency and travel opportunities.
        </p>
      </div>


      {}
      <Footer />
    </div>
  );
};

export default Services;
