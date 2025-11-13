import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import weddingreception1 from "../assets/weddingreception1.jpg";
import weddingreception2 from "../assets/weddingreception2.jpg";
import Gardenwedding from "../assets/Gardenwedding.jpeg";
import weddingshoot from "../assets/weddingshoot.jpeg";
import weddingshoot1 from "../assets/weddingshoot1.jpg";
import weddingfood from "../assets/weddingfood.webp";
import weddingfood1 from "../assets/weddingfood1.jpeg";
import weddingfood2 from "../assets/weddingfood2.jpg";

const WeddingEventsSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "120px" });
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, ease: "easeOut" },
      });
      const timer = setTimeout(() => setImagesLoaded(true), 300);
      return () => clearTimeout(timer);
    }
  }, [controls, inView]);

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
    weddingreception1,
    weddingreception2,
    Gardenwedding,
    weddingshoot,
    weddingshoot1,
    weddingfood,
    weddingfood1,
    weddingfood2,
  ];

  return (
    <section
      ref={ref}
      className="relative py-20 px-6 md:px-20 bg-transparent text-white overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* 💍 Text Box */}
        <motion.div
          className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/10"
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#d62441]">
            Weddings That Tell Your Love Story 💖
          </h2>
          <p className="text-lg leading-relaxed text-gray-200">
            At <strong>Luxcity</strong>, we believe your wedding day should be as
            breathtaking as your love story. From the first “yes” to the final
            dance, our team brings magic, precision, and passion into every
            detail.
            <br />
            <br />
            Whether you dream of a lush 🌿 <strong>garden ceremony</strong> or a
            glamorous 💎 <strong>indoor reception</strong>, we help you find and
            style the perfect venue. We take care of everything — elegant seating,
            themed décor, romantic lighting, floral designs, and sound setups that
            set the perfect mood.
            <br />
            <br />
            After the “I do’s,” we bring the party alive with enchanting{" "}
            <strong>after-parties</strong>, full-course dining, signature 🍸{" "}
            <strong>drinks</strong>, and your desired <strong>recipes</strong>{" "}
            prepared by professional chefs.
            <br />
            <br />
            And because memories are forever, we also capture your special day
            with expert <strong>wedding photography</strong> and{" "}
            <strong>videography</strong> — every smile, every dance, every kiss.
            <br />
            <br />
            <span className="italic text-gray-300">
              From vows to celebrations — we make your dream wedding come alive. 💐
            </span>
          </p>
        </motion.div>

        {/* 📸 Image Carousel */}
        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          style={{
            boxShadow:
              "0 0 25px 5px rgba(255, 192, 203, 0.4), 0 0 45px 15px rgba(231, 177, 10, 0.2)",
          }}
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
                    alt={`Wedding Event ${i + 1}`}
                    className="w-full h-[420px] object-cover rounded-2xl"
                  />
                </div>
              ))}
            </Slider>
          ) : (
            <div className="w-full h-[420px] bg-gray-800 animate-pulse rounded-2xl" />
          )}

          {/* 💫 Slick Styling */}
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

export default WeddingEventsSection;
