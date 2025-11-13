import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import Fashion1 from "../assets/Fashion1.jpg";
import Fashion3 from "../assets/Fashion3.png";
import Modelling from "../assets/Modelling.jpg";
import Modelling2 from "../assets/Modelling2.jpg";
import Modelling3 from "../assets/Modelling3.jpg";
import Modelling5 from "../assets/Modelling5.jpg";
import ModelVideo from "../assets/model2.mp4";

const ModellingSection = () => {
  const controls = useAnimation();
  const videoRef = useRef(null);

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 1.2 } });
  }, [controls]);

  // Custom Arrow Components (Copied from FashionSection2.jsx)
  const NextArrow = ({ onClick }) => (
    <div
      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#E7B10A]/70 hover:bg-[#E7B10A] text-white rounded-full p-2 cursor-pointer z-10 transition-all shadow-md"
      onClick={onClick}
    >
      ▶
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#E7B10A]/70 hover:bg-[#E7B10A] text-white rounded-full p-2 cursor-pointer z-10 transition-all shadow-md"
      onClick={onClick}
    >
      ◀
    </div>
  );
  // END Custom Arrow Components

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4500, // Matched timing from FashionSection2.jsx
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
    nextArrow: <NextArrow />, // Added custom arrows
    prevArrow: <PrevArrow />, // Added custom arrows
  };

  return (
    <section className="relative py-20 px-6 md:px-20 text-white overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/10"
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#E7B10A]">
            The Modelling Experience ✨
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            <strong>Luxcity Creatives</strong> empowers upcoming models to shine —
            from <strong>university galas</strong> to <strong>beauty pageants</strong>.
            We collaborate with top designers for elegant runway outfits.
            <br /><br />
            <span className="italic text-gray-300">
              Every confident step deserves a spotlight. 🌟
            </span>
          </p>
        </motion.div>

        <motion.div
          className="rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}
        >
          <Slider {...settings}>
            {[Fashion1, Fashion3, Modelling, Modelling2, Modelling3, Modelling5].map((img, i) => (
              <div key={i}>
                <LazyLoadImage
                  src={img}
                  alt={`Model image ${i + 1}`}
                  effect="blur"
                  className="w-full h-[420px] object-cover rounded-2xl transition-transform duration-700 hover:scale-105" // Added hover effect
                />
              </div>
            ))}
            <div>
              <video
                ref={videoRef}
                src={ModelVideo}
                className="w-full h-[420px] object-cover rounded-2xl"
                muted
                controls
                playsInline
              />
            </div>
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default ModellingSection;