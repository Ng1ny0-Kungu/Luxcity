import SEO from "../components/SEO";
import React from "react";
import { Helmet } from "react-helmet";
import ParticlesBackground from "../components/ParticlesBackground";
import FashionSection from "../components/FashionSection2";
import ModellingSection from "../components/ModellingSection";
import TravelsSection from "../components/TravelsSection";
import JoinUsSection from "../components/JoinUsSectionServices";
import Footer from "../components/Footer";

<SEO
  title="Luxcity Services | Fashion, Modeling & Travel"
  description="Discover Luxcity’s fashion brand, modeling agency, travel packages, and lifestyle experiences crafted for elegance and adventure."
/>


const Services = () => {
  return (
    <div className="relative min-h-screen bg-[#151E3D] text-white">

      {/* 🔥 SEO FOR SERVICES PAGE */}
      <Helmet>
        <title>Luxcity Services | Fashion, Modelling & Travel Experiences</title>

        <meta
          name="description"
          content="Explore Luxcity’s premium services including fashion branding, modelling agency services, professional photoshoots, talent linking, and curated travel destinations across Kenya."
        />

        <meta
          name="keywords"
          content="Luxcity fashion, modelling agency Kenya, fashion brand Kenya, Luxcity creatives, luxury travel Kenya, model booking Kenya, photoshoots Kenya"
        />

        {/* OG / Social Sharing */}
        <meta property="og:title" content="Luxcity Services" />
        <meta
          property="og:description"
          content="Luxcity delivers excellence in fashion, modelling and curated travel experiences. Explore elegance, creativity, and adventure redefined."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Luxcity" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <ParticlesBackground />

      {/* HERO HEADER */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#E7B10A]">
          Fashion, Modelling & Travel
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-gray-200">
          Discover Luxcity’s fashion brand, modelling agency, and travel experiences —
          elegance, style, and adventure redefined.
        </p>
      </div>

      {/* MAIN SECTIONS */}
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
