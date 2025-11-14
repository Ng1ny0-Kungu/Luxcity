import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import dance1 from "../assets/Danceacademy1.jpeg";
import dance2 from "../assets/Danceacademy2.jpg";
import danceVideo from "../assets/Dancevideo.mp4";

const DanceAcademySection = () => {
  const controls = useAnimation();

  // Lazy-load trigger
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "120px",
  });

  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, ease: "easeOut" },
      });

      // Lazy load video
      const t = setTimeout(() => setVideoLoaded(true), 400);
      return () => clearTimeout(t);
    }
  }, [inView, controls]);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
    beforeChange: () => {
      if (videoRef.current) videoRef.current.pause();
      setIsPlaying(false);
    },
    afterChange: (index) => {
      if (index === 2 && videoRef.current) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    },
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const togglePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) videoRef.current.pause();
    else videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (videoRef.current) {
      videoRef.current.volume = vol;
      setIsMuted(vol === 0);
    }
  };

  return (
    <section
      ref={ref}
      className="relative py-20 px-6 md:px-20 bg-transparent text-white overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <motion.div
          className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/10"
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#0492C2]">
            What Defines Your Rhythm?
          </h2>
          <p className="text-lg leading-relaxed text-gray-200">
            Our Dance Academy is a space where movement meets meaning. From salsa to
            contemporary and cultural dances, we guide you to express emotion through
            motion. Each step builds confidence, rhythm, and grace — shaping artistry
            in motion.
            <br /><br />
            <span className="italic text-gray-300">
              Dance is the heartbeat you can see.
            </span>
          </p>
        </motion.div>

        {/* SLIDER */}
        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 40,
            transition: { duration: 1.4, delay: 0.4 },
          }}
        >
          {inView ? (
            <Slider {...settings}>
              {[dance1, dance2].map((img, i) => (
                <div key={i}>
                  <img
                    src={img}
                    loading="lazy"
                    decoding="async"
                    alt={`Dance Academy ${i + 1}`}
                    className="w-full h-[420px] object-cover rounded-2xl"
                  />
                </div>
              ))}

              {/* Lazy video */}
              <div>
                {videoLoaded ? (
                  <video
                    ref={videoRef}
                    src={danceVideo}
                    className="w-full h-[420px] object-cover rounded-2xl"
                    muted={isMuted}
                    controls
                    playsInline
                  />
                ) : (
                  <div className="w-full h-[420px] bg-gray-800 animate-pulse rounded-2xl" />
                )}
              </div>
            </Slider>
          ) : (
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
              .slick-prev:hover:before, .slick-next:hover:before {
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

export default DanceAcademySection;
