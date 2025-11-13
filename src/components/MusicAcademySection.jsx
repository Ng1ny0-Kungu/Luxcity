import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer"; // 👈 Added
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import music1 from "../assets/musicacademy.jpg";
import music2 from "../assets/musicacademy2.jpg";
import musicVideo from "../assets/Music.mp4";

const MusicAcademySection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "100px",
  });

  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false); // 👈 Lazy load video

  // Animate section when in view
  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, ease: "easeOut" },
      });

      // Load video only when visible
      const timer = setTimeout(() => setVideoLoaded(true), 500);
      return () => clearTimeout(timer);
    }
  }, [controls, inView]);

  const handleVolumeChange = (e) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (videoRef.current) videoRef.current.volume = vol;
  };

  const handleMuteToggle = () => {
    setIsMuted((prev) => !prev);
    if (videoRef.current) videoRef.current.muted = !videoRef.current.muted;
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
    fade: true,
    beforeChange: () => {
      if (videoRef.current) videoRef.current.pause();
    },
    afterChange: (index) => {
      if (index === 2 && videoRef.current) {
        videoRef.current.play();
      }
    },
  };

  const images = [music1, music2];

  return (
    <section
      ref={ref}
      className="relative py-20 px-6 md:px-20 bg-transparent text-white overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Box */}
        <motion.div
          className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/10"
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#0492C2]">
            What Moves You in Music?
          </h2>
          <p className="text-lg leading-relaxed text-gray-200">
            Our Music Academy helps you find your rhythm and voice — whether it’s mastering
            instruments, learning vocals, or exploring the world of music production.
            From melody creation to live performance, we guide your journey into sound.
            <br />
            <br />
            <span className="italic text-gray-300">
              Speak the language that everyone understands — music.
            </span>
          </p>
        </motion.div>

        {/* Media Carousel */}
        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 40,
            transition: { duration: 1.4, delay: 0.4, ease: "easeOut" },
          }}
        >
          {inView ? (
            <Slider {...settings}>
              {images.map((img, i) => (
                <div key={i}>
                  <img
                    src={img}
                    loading="lazy"
                    alt={`Music Academy ${i + 1}`}
                    className="w-full h-[420px] object-cover rounded-2xl"
                  />
                </div>
              ))}
              <div>
                <video
                  ref={videoRef}
                  src={musicVideo}
                  className="w-full h-[420px] object-cover rounded-2xl"
                    muted
                    controls
                    playsInline
                  />
              </div>
            </Slider>
          ) : (
            // Placeholder for carousel before it's visible
            <div className="w-full h-[420px] bg-gray-800 animate-pulse rounded-2xl" />
          )}

          {/* Styles for arrows and dots */}
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

              .slick-dots {
                bottom: 10px;
              }
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
              .slick-dots li button:hover:before {
                color: #0492C2;
                opacity: 0.9;
              }
            `}
          </style>
        </motion.div>
      </div>
    </section>
  );
};

export default MusicAcademySection;
