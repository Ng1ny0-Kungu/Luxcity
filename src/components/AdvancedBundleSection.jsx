import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import adobe from "../assets/Adobe.jpeg";
import webDev from "../assets/Web_Design_and_Development.jpg";
import programming from "../assets/programming.avif";
import aiTools from "../assets/AI_tools.png";
import softwareInstall from "../assets/software_installation.jpg";
import hardwareRepair from "../assets/Laptop_repair.avif";

const AdvancedBundleSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "100px",
  });

  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Animation + Lazy loading trigger
  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1.3, ease: "easeOut" },
      });

      const timer = setTimeout(() => setImagesLoaded(true), 400);
      return () => clearTimeout(timer);
    }
  }, [controls, inView]);

  // Image carousel settings
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
  };

  const images = [
    adobe,
    webDev,
    programming,
    aiTools,
    softwareInstall,
    hardwareRepair,
  ];

  return (
    <section
      ref={ref}
      className="relative py-20 px-6 md:px-20 bg-transparent text-white overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT: TEXT HOLDER */}
        <motion.div
          className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/10"
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#0492C2]">
            Advanced Bundle
          </h2>

          <p className="text-lg leading-relaxed text-gray-200">
            The <span className="font-semibold text-white">Advanced Bundle</span> is designed for 
            learners ready to move beyond the basics and begin solving real-world problems. 
            This program focuses on creativity, logic, technology, and professional 
            digital skills — preparing students for both modern careers and independent projects.
          </p>

          <div className="mt-6 space-y-5 text-gray-200">

            {/* GRAPHICS DESIGN */}
            <div>
              <h3 className="text-xl font-semibold text-white">🎨 Graphics Design</h3>
              <p className="leading-relaxed">
                Students learn creative design using 
                <span className="font-semibold text-white"> Adobe Illustrator</span> and 
                <span className="font-semibold text-white"> Photoshop</span>.  
                Topics include poster creation, logo design, photo retouching, branding, 
                and visual storytelling for social media and business use.
              </p>
            </div>

            {/* WEB DEV */}
            <div>
              <h3 className="text-xl font-semibold text-white">🌐 Web Design & Development</h3>
              <p className="leading-relaxed">
                A complete introduction to front-end development using 
                <span className="font-semibold text-white"> HTML, CSS, and JavaScript</span>.
                Students learn how websites work, create responsive layouts, style pages, 
                and build simple interactive projects.
              </p>
            </div>

            {/* PROGRAMMING */}
            <div>
              <h3 className="text-xl font-semibold text-white">💻 Programming & Computational Thinking</h3>
              <p className="leading-relaxed">
                Learners are introduced to programming logic and problem-solving using 
                <span className="font-semibold text-white"> Python</span>, 
                <span className="font-semibold text-white"> C</span>, and 
                <span className="font-semibold text-white"> Java</span>.  
                Topics include variables, loops, functions, algorithms, and basic debugging.
              </p>
            </div>

            {/* AI TOOLS */}
            <div>
              <h3 className="text-xl font-semibold text-white">🤖 Using AI Tools for Work & Research</h3>
              <p className="leading-relaxed">
                Students learn to use <span className="font-semibold text-white">ChatGPT</span>, 
                <span className="font-semibold text-white">Google Gemini</span>, and 
                <span className="font-semibold text-white">Microsoft Copilot</span> for research, 
                data analysis, content creation, learning support, and workflow optimization — 
                essential skills in today’s AI-driven world.
              </p>
            </div>

            {/* SOFTWARE INSTALLATION */}
            <div>
              <h3 className="text-xl font-semibold text-white">🛠️ Software & Hardware Installation</h3>
              <p className="leading-relaxed">
                Training includes installing operating systems, configuring applications, 
                optimizing settings, and understanding common system tools used in IT support.
              </p>
            </div>

            {/* HARDWARE MAINTENANCE */}
            <div>
              <h3 className="text-xl font-semibold text-white">🔧 Computer Hardware Maintenance</h3>
              <p className="leading-relaxed">
                Students learn to diagnose hardware issues, maintain laptop/desktop components, 
                clean and assemble machines, replace faulty parts, and perform routine checks.
              </p>
            </div>

          </div>

          <p className="text-lg text-gray-300 italic mt-6">
            A skills-focused program for learners ready to shape their future through technology.
          </p>
        </motion.div>

        {/* RIGHT: IMAGE CAROUSEL */}
        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 40,
            transition: { duration: 1.4, delay: 0.4, ease: "easeOut" },
          }}
        >
          {imagesLoaded ? (
            <Slider {...settings}>
              {images.map((img, i) => (
                <div key={i}>
                  <img
                    src={img}
                    loading="lazy"
                    alt={`Advanced Bundle ${i + 1}`}
                    className="w-full h-[420px] object-cover rounded-2xl"
                  />
                </div>
              ))}
            </Slider>
          ) : (
            <div className="w-full h-[420px] bg-gray-800 animate-pulse rounded-2xl" />
          )}

          {/* Slick styling */}
          <style>
            {`
              .slick-prev, .slick-next {
                width: 45px;
                height: 45px;
                z-index: 10;
                top: 50%;
                transform: translateY(-50%);
              }
              .slick-prev { left: 15px; }
              .slick-next { right: 15px; }
              .slick-prev:before, .slick-next:before {
                font-size: 36px;
                opacity: 0.8;
                color: #ffffff;
                transition: all 0.3s ease;
              }
              .slick-prev:hover:before, .slick-next:hover:before {
                color: #0492C2;
                opacity: 1;
                text-shadow: 0 0 12px rgba(4, 146, 194, 0.6);
              }
              .slick-dots { bottom: 10px; }
              .slick-dots li button:before {
                font-size: 12px;
                color: #ffffff;
                opacity: 0.5;
                transition: all 0.3s ease;
              }
              .slick-dots li.slick-active button:before {
                color: #0492C2;
                opacity: 1;
                text-shadow: 0 0 8px rgba(4, 146, 194, 0.7);
              }
            `}
          </style>
        </motion.div>

      </div>
    </section>
  );
};

export default AdvancedBundleSection;
