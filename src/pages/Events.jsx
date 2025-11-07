import React from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import CorporateEvents from "../components/corporateEvents";
import PrivatePartiesSection from "../components/privateParties";
import WeddingEventsSection from "../components/WeddingEventsSection"
import JoinUsSectionEve from "../components/JoinUsSectionEve";

import Footer from "../components/Footer";
const Events = () => {
  return (
    <div className="relative min-h-screen bg-[#151E3D] text-white">
      <ParticlesBackground />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Events</h1>
        <p className="text-lg md:text-xl max-w-2xl text-center">
          Explore event planning done by Luxcity Creatives
        </p>
        <div className="space-x-4">
          <h1 className="px-6 py-3 rounded-lg bg-[#0492C2] text-white font-semibold hover:bg-[#0378A8] transition">
           Explore Now
          </h1>
        </div>
      </div>

      
      <CorporateEvents />
      <PrivatePartiesSection />
      <WeddingEventsSection />
      <JoinUsSectionEve />

      <Footer />
    </div>
  );
};

export default Events;
