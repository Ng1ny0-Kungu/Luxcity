import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import birthdayparty from "../assets/birthdayparty.webp";
import birthdayparty1 from "../assets/birthdayparty1.webp";
import anniversaryparty from "../assets/anniversaryparty.jpeg";
import graduationparty from "../assets/graduationparty.jpg";
import graduationparty1 from "../assets/graduationparty1.jpg";
import graduationparty2 from "../assets/graduationparty2.jpg";
import others from "../assets/others.jpg";

const PrivatePartiesSection = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    });
  }, [controls]);

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

  return (
    <section className="relative py-20 px-6 md:px-20 bg-transparent text-white overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {}
        <motion.div
          className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/10"
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#E7B10A]">
            Private Parties That Spark Joy ✨
          </h2>
          <p className="text-lg leading-relaxed text-gray-200">
            Life’s best moments deserve a beautiful stage — and that’s exactly
            what we create at <strong>Luxcity</strong>.{" "}
            <br />
            <br />
            From 🎂 <strong>birthday parties</strong> and 💍{" "}
            <strong>anniversary celebrations</strong> to 🎓{" "}
            <strong>graduations</strong> and 💐 <strong>dowry events</strong>,
            our team crafts each experience with warmth, creativity, and
            elegance.{" "}
            <br />
            <br />
            We handle every detail — from vibrant décor and mood lighting to
            catering, music, and seating setups — so you can focus on enjoying
            the celebration with your loved ones.{" "}
            <br />
            <br />
            Whether it’s a cozy family gathering or a grand outdoor event, we’ll
            make sure it’s one for the memories.{" "}
            <br />
            <br />
            <span className="italic text-gray-300">
              Because every milestone deserves to shine. 🌸
            </span>
          </p>
        </motion.div>

        {}
        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1.4, delay: 0.4, ease: "easeOut" },
          }}
        >
          <Slider {...settings}>
            {[birthdayparty, birthdayparty1, anniversaryparty, graduationparty, graduationparty1, graduationparty2, others].map(
              (img, i) => (
                <div key={i}>
                  <img
                    src={img}
                    alt={`Private Party ${i + 1}`}
                    className="w-full h-[420px] object-cover rounded-2xl"
                  />
                </div>
              )
            )}
          </Slider>

          {}
          <style>
            {`
              .slick-prev, .slick-next {
                width: 45px;
                height: 45px;
                z-index: 10;
                top: 50%;
                transform: translateY(-50%);
              }
              .slick-prev {
                left: 15px;
              }
              .slick-next {
                right: 15px;
              }
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

export default PrivatePartiesSection;
