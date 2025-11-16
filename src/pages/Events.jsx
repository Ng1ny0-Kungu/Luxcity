import SEO from "../components/SEO";
import React from "react";
import { Helmet } from "react-helmet";
import ParticlesBackground from "../components/ParticlesBackground";
import CorporateEvents from "../components/corporateEvents";
import PrivatePartiesSection from "../components/privateParties";
import WeddingEventsSection from "../components/WeddingEventsSection";
import JoinUsSectionEve from "../components/JoinUsSectionEve";
import Footer from "../components/Footer";

<SEO 
  title="Luxcity Events | Corporate, Private & Wedding Events"
  description="Explore Luxcity’s world-class event planning—corporate conferences, private parties, weddings, décor, and entertainment management."
/>


const Events = () => {
  return (
    <div className="relative min-h-screen bg-[#151E3D] text-white">

      {/* 🔥 SEO FOR EVENTS PAGE */}
      <Helmet>
        <title>Luxcity Events | Corporate, Private & Wedding Event Planning</title>

        <meta
          name="description"
          content="Discover Luxcity’s premium event planning services including corporate conferences, private parties, weddings and professional event styling across Kenya."
        />

        <meta
          name="keywords"
          content="Luxcity events, event planners Kenya, corporate events Kenya, private parties Kenya, wedding planners Kenya, Luxcity creatives"
        />

        {/* OG / Social */}
        <meta property="og:title" content="Luxcity Events" />
        <meta
          property="og:description"
          content="Luxcity offers exceptional event planning services — corporate events, private celebrations and weddings crafted with elegance and precision."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Luxcity" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <ParticlesBackground />

      {/* HERO SECTION */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#E7B10A]">
          Events
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-center">
          Explore event planning done by Luxcity Creatives
        </p>
        
      </div>

      {/* MAIN SECTIONS */}
      <CorporateEvents />
      <PrivatePartiesSection />
      <WeddingEventsSection />
      <JoinUsSectionEve />

      <Footer />
    </div>
  );
};

export default Events;
