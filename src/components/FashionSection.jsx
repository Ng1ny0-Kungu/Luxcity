import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

import bracelet from "../assets/bracelet.jpg";
import necklace from "../assets/necklace.jpg";
import earrings from "../assets/earrings.jpg";
import { Link } from "react-router-dom";

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

function FashionSection() {
  const images = [bracelet, necklace, earrings];
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
        {/* Left: Text Box */}
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
            Let us adorn you
          </motion.h2>

          <motion.p
            variants={textItem}
            className="text-gray-300 leading-relaxed"
          >
            Our curated selection of luxury fashion and jewelry, featuring
            handcrafted designs and premium materials. Our marketing division
            ensures these products reach discerning clients both locally and
            abroad, offering unparalleled elegance and sophistication.
          </motion.p>

          <motion.h3
            variants={textItem}
            className="text-xl font-semibold text-[#0492C2] pt-6"
          >
            With:
          </motion.h3>

          <div className="grid grid-cols-2 gap-8 mt-4">
            {/* Counter 1 */}
            <motion.div
              variants={textItem}
              className="text-center md:text-left space-y-2"
            >
              <h3 className="text-4xl font-bold text-white">
                <CountUp start={0} end={1000} duration={3} />+
              </h3>
              <p className="text-sm text-gray-300">
                Exclusive jewelry pieces sold, each reflecting timeless elegance
                and superior craftsmanship for our esteemed clientele.
              </p>
            </motion.div>

            {/* Counter 2 */}
            <motion.div
              variants={textItem}
              className="text-center md:text-left space-y-2"
            >
              <h3 className="text-4xl font-bold text-white">
                <CountUp start={0} end={100} duration={3} />%
              </h3>
              <p className="text-sm text-gray-300">
                Increase in customer satisfaction reported after purchasing our
                luxury fashion items, enhancing their personal style.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right: Image Slideshow */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative w-full h-80 md:h-[450px] rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src={images[currentIndex]}
            alt="Luxcity Fashion"
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
      </div>
      {/*Explore button*/}
      <div className="flex justify-center mt-10">
        <Link
          to="/services"
          className="px-6 py-3 rounded-lg bg-[#0492C2] text-white font-semibold hover:bg-white hover:text-[#0492C2] border border-[#0492C2] transition"
        >
          Explore Fashion 
        </Link>
      </div>
    </section>
  );
}

export default FashionSection;
