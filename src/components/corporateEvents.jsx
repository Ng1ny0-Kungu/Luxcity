import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import conference1 from "../assets/conference1.jpeg";
import conferencehall from "../assets/conferencehall.jpg";
import conferencehall1 from "../assets/conferencehall1.jpg";
import productlaunch from "../assets/productlaunch.jpg";
import productlaunch1 from "../assets/productlaunch1.jpg";
import productlaunch2 from "../assets/productlaunch2.png";
import seminar from "../assets/seminar.png";
import techconvention from "../assets/techconvention.jpg";

const CorporateEventsSection = () => {
  const controls = useAnimation();

  // 🔥 Lazy load trigger
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "120px",
  });

  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, ease: "easeOut" },
      });

      // Load carousel slightly after the section enters view
      const t = setTimeout(() => setImagesLoaded(true), 300);
      return () => clearTimeout(t);
    }
  }, [inView, controls]);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
  };

  const images = [
    conference1,
    conferencehall,
    conferencehall1,
    productlaunch,
    productlaunch1,
    productlaunch2,
    seminar,
    techconvention,
  ];

  return (
    <section
      ref={ref}
      className="relative py-20 px-6 md:px-20 bg-transparent text-white overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT */}
        <motion.div
          className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/10"
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#0492C2]">
            Events That Inspire Excellence
          </h2>

          <p className="text-lg leading-relaxed text-gray-200">
            From high-level conferences to exciting product launches — we bring excellence
            to every corporate event.
            <br /><br />
            Our team ensures every detail is handled with precision:
          </p>

          <ul className="list-none space-y-2 mt-2 text-gray-300">
            <li>🏢 <strong>Corporate Conferences & Seminars</strong> — planned with professionalism and style.</li>
            <li>🚀 <strong>Product Launches & Tech Conventions</strong> — designed to impress and inspire.</li>
            <li>🎨 <strong>Elegant Décor & Hall Styling</strong> — modern furniture, ambient lighting, and artistic flooring.</li>
            <li>🍽️ <strong>Catering & Hospitality</strong> — top-tier dining for every guest and occasion.</li>
            <li>🎧 <strong>Audiovisual Setup</strong> — crystal-clear sound, visuals, and live coordination.</li>
          </ul>

          <br />

          <p className="text-lg leading-relaxed text-gray-200">
            Whether it’s a start-up showcase or a multinational summit — we make every moment shine.
            <br /><br />
            <span className="italic text-gray-300">
              Because great ideas deserve an equally great stage. 🌟
            </span>
          </p>
        </motion.div>

        {/* RIGHT IMAGE CAROUSEL WITH LAZY LOAD */}
        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 40,
            transition: { duration: 1.4, delay: 0.4 },
          }}
        >
          {imagesLoaded ? (
            <Slider {...settings}>
              {images.map((img, i) => (
                <div key={i}>
                  <img
                    src={img}
                    loading="lazy"
                    decoding="async"
                    alt={`Corporate Event ${i + 1}`}
                    className="w-full h-[420px] object-cover rounded-2xl"
                  />
                </div>
              ))}
            </Slider>
          ) : (
            // Skeleton loader
            <div className="w-full h-[420px] bg-gray-800 animate-pulse rounded-2xl" />
          )}

          {/* ARROWS + DOTS STYLING */}
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

              .slick-prev:hover:before,
              .slick-next:hover:before {
                color: #0492C2;
                opacity: 1;
              }

              .slick-dots {
                bottom: 10px;
              }

              .slick-dots li button:before {
                font-size: 12px;
                color: #ffffff;
                opacity: 0.5;
              }

              .slick-dots li.slick-active button:before {
                color: #0492C2;
                opacity: 1;
              }
            `}
          </style>
        </motion.div>
      </div>
    </section>
  );
};

export default CorporateEventsSection;
