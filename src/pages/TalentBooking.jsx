import SEO from "../components/SEO";
import React from "react";
import { Helmet } from "react-helmet";
import ParticlesBackground from "../components/ParticlesBackground";
import ArtAcademySection from "../components/ArtAcademySection";
import MusicAcademySection from "../components/MusicAcademySection";
import DanceAcademySection from "../components/DanceAcademySection";
import JoinUsSection from "../components/JoinUsSection";
import Footer from "../components/Footer";

<SEO
  title="Luxcity Talent Academy | Art, Music & Dance Training"
  description="Professional talent development in art, dance, and music. Train with Luxcity’s expert instructors and grow your creative career."
/>


const TalentBooking = () => {
  return (
    <div className="relative min-h-screen bg-[#151E3D] text-white overflow-x-hidden">

      {/* 🔥 SEO FOR TALENT ACADEMY PAGE */}
      <Helmet>
        <title>Luxcity Talent Academy | Art, Music & Dance Training</title>

        <meta
          name="description"
          content="Join Luxcity Talent Academy to explore your passion in art, music, and dance. Professional training programs designed for creativity, performance, and skill growth."
        />

        <meta
          name="keywords"
          content="Luxcity Talent Academy, art lessons Kenya, dance classes Kenya, music training Kenya, modeling Kenya, Luxcity academy, creative arts Kenya"
        />

        {/* Social / OG */}
        <meta property="og:title" content="Luxcity Talent Academy" />
        <meta
          property="og:description"
          content="Unlock your artistic potential with Luxcity Talent Academy — art, dance, and music training for all learners."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Luxcity Academy" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <ParticlesBackground />

      {/* HERO SECTION */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#E7B10A]">
          Talent Academy
        </h1>
        <p className="text-lg md:text-xl max-w-2xl">
          Unlock creativity and performance through professional training in art,
          dance, and music at Luxcity Talent Academy.
        </p>

        
      </div>

      {/* MAIN SECTIONS */}
      <ArtAcademySection />
      <MusicAcademySection />
      <DanceAcademySection />
      <JoinUsSection />

      <Footer />
    </div>
  );
};

export default TalentBooking;
