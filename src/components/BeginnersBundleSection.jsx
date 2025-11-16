import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import msSuite from "../assets/MsSuite.webp";
import googleApps from "../assets/Google_apps.jpg";
import internetSurfing from "../assets/Internet_surfing.jpg";

const BeginnerBundleSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "100px",
  });

  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Animation + Lazy Loading Trigger
  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, ease: "easeOut" },
      });

      const timer = setTimeout(() => setImagesLoaded(true), 400);
      return () => clearTimeout(timer);
    }
  }, [controls, inView]);

  // Slider Settings
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5500,     // Timer speed
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
  };

  const images = [msSuite, googleApps, internetSurfing];

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
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#E7B10A]">
            Beginner Bundle
          </h2>

          <p className="text-lg leading-relaxed text-gray-200">
            The <span className="font-semibold text-white">Beginner Bundle</span> introduces
            learners to the modern digital world — helping them build strong foundational
            computer literacy skills.
            <br /><br />
            Students learn essential computer usage, proper device handling, typing basics,
            and digital organization. They also explore the full{" "} 
            <span className="font-semibold text-white">Microsoft Office Suite</span> including
            Word, Excel, PowerPoint, Publisher, Access, and more.
            <br /><br />
            Additionally, learners are introduced to{" "}
            <span className="font-semibold text-white">Google Workspace</span> tools such as
            Docs, Sheets, Drive, Gmail, and Classroom — enabling them to work, share, and
            collaborate online.
            <br /><br />
            To complete their foundation, the program covers{" "}
            <span className="font-semibold text-white">Internet navigation</span>: browsing
            safely, downloading files, searching online, and basic research techniques.
          </p>

          <p className="text-lg text-gray-300 italic mt-4">
            A perfect starting point for high school graduates entering the digital era.
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
                    alt={`Beginner Bundle ${i + 1}`}
                    className="w-full h-[420px] object-cover rounded-2xl"
                  />
                </div>
              ))}
            </Slider>
          ) : (
            /* Shimmer Placeholder */
            <div className="w-full h-[420px] bg-gray-800 animate-pulse rounded-2xl" />
          )}

          {/* Slick Styling */}
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
                color: #E7B10A;
                opacity: 1;
                text-shadow: 0 0 12px rgba(231, 177, 10, 0.6);
              }

              .slick-dots { bottom: 10px; }
              .slick-dots li button:before {
                font-size: 12px;
                color: #ffffff;
                opacity: 0.5;
                transition: all 0.3s ease;
              }
              .slick-dots li.slick-active button:before {
                color: #E7B10A;
                opacity: 1;
                text-shadow: 0 0 8px rgba(231, 177, 10, 0.7);
              }
              .slick-dots li button:hover:before {
                color: #E7B10A;
                opacity: 0.9;
              }
            `}
          </style>
        </motion.div>

      </div>
    </section>
  );
};

export default BeginnerBundleSection;
