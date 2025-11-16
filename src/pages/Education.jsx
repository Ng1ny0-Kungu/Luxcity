import SEO from "../components/SEO";
import React from "react";
import { Helmet } from "react-helmet";
import ParticlesBackground from "../components/ParticlesBackground";
import BeginnerBundleSection from "../components/BeginnersBundleSection";
import AdvancedBundleSection from "../components/AdvancedBundleSection";
import JoinUsSectionEducation from "../components/JoinUsSectionEducation";
import Footer from "../components/Footer";

<SEO
  title="Luxcity Education | Beginner & Advanced Digital Courses"
  description="Learn digital skills, computer literacy, graphics design, programming, AI tools, and more through Luxcity’s structured education programs."
/>


const Education = () => {
  return (
    <div className="relative min-h-screen bg-[#151E3D] text-white">

      
      <Helmet>
        <title>Luxcity Education | Beginner & Advanced Training Programs</title>

        <meta
          name="description"
          content="Luxcity provides high-quality education programs for high school graduates, including computer literacy, digital skills, programming, graphics design, AI tools, software installation, and career development paths."
        />

        <meta
          name="keywords"
          content="Luxcity Education, computer literacy Kenya, beginner digital skills, advanced ICT training, programming classes Kenya, Python courses Kenya, graphics design training Kenya, AI skills Kenya"
        />

        {/* Social Media / Sharing */}
        <meta property="og:title" content="Luxcity Education Programs" />
        <meta
          property="og:description"
          content="Explore Luxcity’s Beginner and Advanced training programs designed to equip learners with digital skills, programming knowledge, graphics design, and career readiness."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Luxcity" />

        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      
      <ParticlesBackground />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#E7B10A]">
          Education
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-center">
          Learn with Luxcity’s education initiatives and training programs.
        </p>
      </div>

      
      <div className="relative z-10 flex flex-col items-center justify-center px-6 md:px-20 py-16">
        <div className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-lg border border-white/10 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#E7B10A]">
            Empowering Minds Through Knowledge
          </h2>

          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            At <span className="font-semibold text-white">Luxcity</span>, we believe that
            education opens doors — not just to opportunity, but to confidence,
            creativity, and independence. Our commitment is to offer{" "}
            <span className="font-semibold">
              high-quality, practical, and modern training programs
            </span>{" "}
            that empower learners to thrive in today’s evolving world.
            <br />
            <br />
            Designed especially for{" "}
            <span className="text-white font-semibold">
              high school graduates
            </span>
            , our programs help students transition smoothly into
            university-level learning while equipping them with valuable{" "}
            <span className="font-semibold">career and life skills</span>. Whether
            someone aims to pursue self-employment, join the corporate world, or
            explore creative fields, Luxcity provides the foundation they need
            to grow and excel.
            <br />
            <br />
            Our education system is divided into two comprehensive learning
            paths:
          </p>

          <ul className="text-lg md:text-xl text-gray-300 mt-6 space-y-3">
            <li>
              🌟{" "}
              <span className="font-semibold text-white">Beginner Bundle</span>{" "}
              — Introducing learners to essential skills, foundational
              knowledge, and hands-on exposure.
            </li>
            <li>
              🚀{" "}
              <span className="font-semibold text-white">Advanced Bundle</span>{" "}
              — A mastery-level program focused on real-world application,
              problem-solving, and professional development.
            </li>
          </ul>

          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mt-6">
            With dedicated instructors, interactive sessions, and a supportive
            learning environment, Luxcity ensures every student receives
            guidance that strengthens their abilities, sharpens their mindset,
            and prepares them for a successful future.
          </p>
        </div>
      </div>

      
      <AdvancedBundleSection />
      <JoinUsSectionEducation />

      <Footer />
    </div>
  );
};

export default Education;
