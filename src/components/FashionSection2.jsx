import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import anklets from "../assets/anklets.webp";
import earrings1 from "../assets/earrings1.jpg";
import earrings2 from "../assets/earrings2.jpg";
import earrings3 from "../assets/earrings3.webp";
import Fashion2 from "../assets/Fashion2.png";
import Fashion4 from "../assets/Fashion4.jpg";
import Fashion5 from "../assets/Fashion5.jpg";
import Fashion6 from "../assets/Fashion6.png";
import Fashion7 from "../assets/Fashion7.jpg";
import necklace2 from "../assets/necklace2.jpg";
import necklace3 from "../assets/necklace3.jpg";
import Shoes from "../assets/Shoes.webp";
import Shoes2 from "../assets/Shoes2.webp";

const FashionSection = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    });
  }, [controls]);

  // Custom Arrow Components
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

  // Slider settings
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4500, // timing maintained
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const fashionImages = [
    anklets,
    earrings1,
    earrings2,
    earrings3,
    Fashion2,
    Fashion4,
    Fashion5,
    Fashion6,
    Fashion7,
    necklace2,
    necklace3,
    Shoes,
    Shoes2,
  ];

  return (
    <section className="relative py-20 px-6 md:px-20 text-white overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Text Section */}
        <motion.div
          className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#E7B10A]">
            Style. Craft. Elegance ✨
          </h2>
          <p className="text-lg leading-relaxed text-gray-200">
            <strong>Luxcity Fashion</strong> redefines creativity through
            personalized fashion. Explore our <strong>jewels</strong>,
            <strong>custom jerseys</strong>, <strong>branded shoes</strong>, and
            <strong>exotic outfits</strong> — all handcrafted to perfection.
            <br /><br />
            Shop online and enjoy doorstep delivery.
            <br /><br />
            <span className="italic text-gray-300">
              Wear art. Live style. Be Luxcity. 💫
            </span>
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
        >
          <Slider {...settings}>
            {fashionImages.map((img, i) => (
              <div key={i}>
                <img
                  src={img}
                  alt={`Fashion item ${i + 1}`}
                  loading="lazy"
                  className="w-full h-[420px] object-cover rounded-2xl transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default FashionSection;
