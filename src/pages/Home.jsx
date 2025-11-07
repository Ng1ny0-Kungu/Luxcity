import React from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "../components/ParticlesBackground";
import EventSection from "../components/EventSection";
import TourSection from "../components/TourSection";
import FashionSection from "../components/FashionSection";
import SocialSection from "../components/SocialSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="relative min-h-screen bg-[#151E3D] text-white">
      <ParticlesBackground />

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-start text-center min-h-screen px-6 pt-48">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold italic mb-6 text-white inline-block relative">
            Welcome to <span className="text-[#0492C2]">Luxcity</span>
            <span className="absolute left-0 -bottom-2 w-full h-2 rounded-full bg-[#0492C2]" />
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
            Luxcity offers premier modeling, entertainment events, talent booking, career courses,
            and curated travel experiences. Discover luxury fashion, jewelry, and our commitment to
            social responsibility. Join us in creating unforgettable moments and making a positive
            impact.
          </p>

          <div className="space-x-5">
            <button className="px-6 py-3 rounded-lg bg-[#0492C2] text-white font-semibold hover:bg-[#0378A8] transition">
              Explore Now
            </button>
          </div>
        </div>
      </section>

      {}
      <EventSection />
      <TourSection />
      <FashionSection />
      <SocialSection />

      {}
      <Footer />
    </div>
  );
}

export default Home;
