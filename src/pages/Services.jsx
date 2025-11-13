import React from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import FashionSection from "../components/FashionSection2";
import ModellingSection from "../components/ModellingSection";
import TravelsSection from "../components/TravelsSection";
import JoinUsSection from "../components/JoinUsSectionServices";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <div className="relative min-h-screen bg-[#151E3D] text-white">
      <ParticlesBackground />

      {/* Hero Header */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#E7B10A]">
          Fashion, Modelling & Travel
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-gray-200">
          Discover Luxcity’s fashion brand, modelling agency, and travel experiences —
          elegance, style, and adventure redefined.
        </p>
      </div>

      {/* All Sections */}
      <div className="relative z-10">
        <FashionSection />
        <ModellingSection />
        <TravelsSection />
        <JoinUsSection />
      </div>

      <Footer />
    </div>
  );
};

export default Services;
