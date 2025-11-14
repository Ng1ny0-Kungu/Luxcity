import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer"; 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import art1 from "../assets/Artacademy.jpeg";
import art2 from "../assets/Artacademy2.jpg";
import art3 from "../assets/Artacademy3.jpg";
import art4 from "../assets/Artacademy4.jpg";

const ArtAcademySection = () => {
  const controls = useAnimation();

  // Lazy load trigger for **entire section**
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "150px",
  });

  // Trigger text animation only when visible
  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, ease: "easeOut" },
      });
    }
  }, [controls, inView]);

  // Carousel settings — autoplay only once section is on screen
  const settings = {
    dots: true,
    infinite: true,
    autoplay: inView,       // 👈 only autoplay when visible
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
  };

  const artImages = [art1, art2, art3, art4];

  return (
    <section
      ref={ref}
      className="relative py-20 px-6 md:px-20 bg-transparent text-white overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* TEXT BOX */}
        <motion.div
          className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/10"
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#0492C2]">
            What Calls You to Art?
          </h2>

          <p className="text-lg leading-relaxed text-gray-200">
            Our Art Academy is devoted to nurturing creativity in you or your child —
            from pencil sketches and crayon drawings to expressive painting.
            We help you bring your artistic voice to life through exhibitions
            and gallery expos held right here in Kenya.
            <br /><br />
            <span className="italic text-gray-300">
              Converse with the world without any words.
            </span>
          </p>
        </motion.div>

        {/* IMAGE CAROUSEL */}
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
              {artImages.map((img, i) => (
                <div key={i}>
                  <img
                    src={img}
                    loading="lazy"          // 👈 LAZY LOAD IMAGE
                    decoding="async"
                    alt={`Art Academy ${i + 1}`}
                    className="w-full h-[420px] object-cover rounded-2xl transition-all duration-700"
                  />
                </div>
              ))}
            </Slider>
          ) : (
            // Skeleton shimmer placeholder
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

export default ArtAcademySection;
