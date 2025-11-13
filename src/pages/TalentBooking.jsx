import React from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import ArtAcademySection from "../components/ArtAcademySection";
import MusicAcademySection from "../components/MusicAcademySection";
import DanceAcademySection from "../components/DanceAcademySection";
import JoinUsSection from "../components/JoinUsSection";
import Footer from "../components/Footer";

const TalentBooking = () => {
  return (
    <div className="relative min-h-screen bg-[#151E3D] text-white overflow-x-hidden">
  <ParticlesBackground />

  <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#E7B10A]">Talent Academy</h1>
    <p className="text-lg md:text-xl max-w-2xl">
      Unlock creativity and performance through professional training in art, dance, and music at Luxcity Talent Academy.
    </p>

    <div className="space-x-4">
      <h1 className="px-6 py-3 rounded-lg bg-[#0492C2] text-white font-semibold hover:bg-[#0378A8] transition">
        Explore Now
      </h1>
    </div>
  </div>

  <ArtAcademySection />
  <MusicAcademySection />
  <DanceAcademySection />
  <JoinUsSection />

  <Footer />
    </div>

  );
};

export default TalentBooking;
