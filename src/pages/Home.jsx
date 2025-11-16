import SEO from "../components/SEO";
import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import ParticlesBackground from "../components/ParticlesBackground";
import EventSection from "../components/EventSection";
import TourSection from "../components/TourSection";
import FashionSection from "../components/FashionSection";
import SocialSection from "../components/SocialSection";
import Footer from "../components/Footer";

<SEO 
  title="Luxcity | Talent, Events, Fashion, Travel & Education"
  description="Luxcity offers talent academy training, events planning, fashion styling, jewelry, modeling, travel experiences, and premium creative services."
/>


function Home() {
  return (
    <div className="relative min-h-screen bg-[#151E3D] text-white">

      {/* 🔥 HOME PAGE SEO */}
      <Helmet>
        <title>Luxcity | Premier Events, Talent, Fashion & Travel</title>

        <meta
          name="description"
          content="Welcome to Luxcity — Kenya’s hub for premier modeling, event planning, talent development, career courses, luxury fashion, jewelry, and curated travel experiences. Discover unforgettable moments and purposeful impact."
        />

        <meta
          name="keywords"
          content="Luxcity Kenya, modeling agency, Kenya events, fashion jewelry, talent training, travel tours Kenya, entertainment events, Luxcity academy"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Luxcity | Premier Talent & Events" />
        <meta
          property="og:description"
          content="Experience modeling, entertainment events, talent booking, fashion, jewelry, and curated travel experiences with Luxcity."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Luxcity" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

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

      {/* Main Sections */}
      <EventSection />
      <TourSection />
      <FashionSection />
      <SocialSection />

      <Footer />
    </div>
  );
}

export default Home;
