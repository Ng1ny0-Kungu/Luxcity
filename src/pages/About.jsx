import SEO from "../components/SEO";
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Slider from "react-slick";
import ParticlesBackground from "../components/ParticlesBackground";
import Footer from "../components/Footer";

import JOEPIC from "../assets/JOE.jpeg";
import Community from "../assets/Community.jpg";
import Community2 from "../assets/Community2.jpg";
import Community3 from "../assets/Community3.webp";
import TreePlanting from "../assets/Tree_planting.webp";
import Community4 from "../assets/Community4.jpeg";
import Community5 from "../assets/Community5.jpeg";

const About = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setImagesLoaded(true), 400);
    return () => clearTimeout(t);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
  };

  const communityImages = [
    Community,
    Community2,
    Community3,
    TreePlanting,
    Community4,
    Community5,
  ];

  return (
    <div className="relative min-h-screen bg-[#151E3D] text-white">

      {/* ===========================
              🔥 SEO OPTIMIZATION
      ============================ */}
      <Helmet>
        <title>About Luxcity | Talent, Events, Education & Creative Services</title>

        <meta
          name="description"
          content="Learn about Luxcity—founded by Joseph Kimani—offering premium services in talent training, events, fashion, modeling, travel, and community outreach programs. Discover our mission, values, and impact."
        />

        <meta
          name="keywords"
          content="Luxcity, About Luxcity, creative agency Kenya, fashion Kenya, modeling agency Kenya, talent academy Kenya, events company Kenya, Luxcity founder, Joseph Kimani"
        />

        {/* Social Sharing */}
        <meta property="og:title" content="About Luxcity" />
        <meta
          property="og:description"
          content="Luxcity is a modern creative and talent organization offering education, fashion, events, travel, and community development programs."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Luxcity" />

        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* ========================
              PAGE TITLE
      ========================== */}
      <ParticlesBackground />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#E7B10A]">
          About Us
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-center text-gray-200">
          Luxcity is your partner in talent, events, education, fashion, and travel.
        </p>
      </div>

      {/* ===========================
             FOUNDER PROFILE
      ============================ */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 md:px-20 pb-20">
        <div className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-lg border border-white/10 max-w-3xl text-center">

          {/* Founder Photo */}
          <div className="flex justify-center mb-6">
            <img
              src={JOEPIC}
              alt="Founder - Joseph Kimani"
              className="w-40 h-40 object-cover rounded-full border-4 border-[#E7B10A] shadow-lg"
            />
          </div>

          {/* Name */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#E7B10A] mb-2">
            Joseph Kimani
          </h2>
          <p className="text-lg text-gray-300 mb-6">Founder & Director, Luxcity</p>

          {/* Bio */}
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            Joseph is an <span className="font-semibold text-white">Education graduate from the University of Embu</span>,
            whose passion for creativity and mentorship inspired the birth of Luxcity.
            He has ventured into <span className="font-semibold text-white">fashion, jewelry,
            event planning, modeling</span>, and <span className="font-semibold text-white">
            academic tutoring</span>— creating an ecosystem where talent grows.
          </p>

          {/* Mission */}
          <h3 className="text-2xl md:text-3xl font-semibold text-[#E7B10A] mt-8 mb-3">
            Our Mission
          </h3>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            To empower individuals through creativity, education, and opportunity —
            offering premium services that elevate talent, transform events,
            and inspire growth across every field we touch.
          </p>

          {/* Contact */}
          <p className="text-lg text-gray-300 mt-8">
            Reach Joseph directly at <br />
            <span className="text-[#04ffb3] font-semibold text-xl">
              0700 200 507
            </span><br />
            or through our social media pages below.
          </p>
        </div>
      </div>

      {/* ===========================
              LUXCITY DESCRIPTION
      ============================ */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 md:px-20 pb-24">
        <div className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-lg border border-white/10 max-w-4xl text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#E7B10A]">
            Who We Are
          </h2>

          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            Founded in 2025, <span className="font-semibold text-white">Luxcity</span> is a modern organization
            dedicated to delivering premium services across multiple sectors —
            including talent academies, events planning and execution,
            fashion and jewelry artistry, modeling and influencer linkage,
            curated travel experiences, and high-impact education programs.
            <br /><br />
            Our mission is to empower individuals and brands with creativity,
            professionalism, and limitless opportunity.
          </p>
        </div>
      </div>

      {/* ===========================
            COMMUNITY ENGAGEMENT
      ============================ */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 md:px-20 pb-24">
        <div className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-lg border border-white/10 max-w-5xl text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-[#0492C2]">
            Our Community Engagement
          </h2>

          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-12">
            Luxcity prides itself in making a real difference.  
            Through our dedicated community programs, we actively participate in:
            <br /><br />
            🌱 <span className="text-white font-semibold">Tree-Planting Initiatives</span><br />
            🧹 <span className="text-white font-semibold">Environmental Clean-Ups</span><br />
            🤝 <span className="text-white font-semibold">Team-Building Activities</span><br />
            ❤️ <span className="text-white font-semibold">Charity Events</span><br />
            <br />
            These activities reflect our belief that progress is meaningful
            only when shared with the community around us.
          </p>

          {/* 🔻 Slider */}
          {imagesLoaded ? (
            <Slider {...settings}>
              {communityImages.map((img, i) => (
                <div key={i}>
                  <img
                    src={img}
                    loading="lazy"
                    alt={`Community Event ${i + 1}`}
                    className="w-full h-[420px] object-cover rounded-2xl"
                  />
                </div>
              ))}
            </Slider>
          ) : (
            <div className="w-full h-[420px] bg-gray-800 animate-pulse rounded-2xl" />
          )}

          {/* Slick Styling */}
          <style>
            {`
              .slick-prev,
              .slick-next {
                width: 45px;
                height: 45px;
                z-index: 10;
                top: 50%;
                transform: translateY(-50%);
              }
              .slick-prev { left: 15px; }
              .slick-next { right: 15px; }

              .slick-prev:before,
              .slick-next:before {
                font-size: 36px;
                color: #ffffff;
                opacity: 0.85;
                transition: 0.3s ease;
              }

              .slick-prev:hover:before,
              .slick-next:hover:before {
                color: #0492C2;
                opacity: 1;
                text-shadow: 0 0 10px rgba(4,146,194,0.7);
              }
            `}
          </style>
        </div>

        {/* FINAL CALL-TO-ACTION */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#E7B10A]">
            Join Us Today
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
            Be part of a growing community that values creativity, excellence, and positive impact.  
            Connect with us and let’s build something extraordinary together.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
