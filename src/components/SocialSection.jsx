// src/components/SocialSection.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import charitywalk from "../assets/charitywalk.jpg";
import charitywalk2 from "../assets/charitywalk2.jpeg";
import communityfun from "../assets/communityfun.jpg";

const textContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function SocialSection() {
  const images = [charitywalk, charitywalk2, communityfun];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="w-full py-20 px-6 md:px-20 bg-transparent relative z-10">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image Slideshow */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative w-full h-80 md:h-[450px] rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src={images[currentIndex]}
            alt="Luxcity Social Life"
            className="w-full h-full object-cover transition-all duration-700"
          />

          {/* Buttons */}
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black/70"
          >
            ◀
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black/70"
          >
            ▶
          </button>
        </motion.div>

        {/* Right: Text Box */}
        <motion.div
          variants={textContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6 text-left"
        >
          <motion.h2
            variants={textItem}
            className="text-3xl md:text-5xl font-bold text-[#0492C2]"
          >
            Our Social Life
          </motion.h2>

          <motion.p
            variants={textItem}
            className="text-gray-300 leading-relaxed"
          >
            At Luxcity, we believe success means more when it’s shared. We
            partner with local initiatives to create lasting impact, ensuring
            that every event, every project, and every moment we curate leaves
            the community stronger than before. Luxury is not just in the
            experiences we create — it’s in the lives we uplift.
          </motion.p>

          {/* Explore Button */}
          <motion.div variants={textItem}>
            <Link
              to="/about"
              className="px-6 py-3 rounded-lg bg-[#0492C2] text-white font-semibold hover:bg-white hover:text-[#0492C2] border border-[#0492C2] transition"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default SocialSection;
