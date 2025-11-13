import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AngamaMara from "../assets/Angama-Mara-3.jpg";
import ElephantViewing from "../assets/elephantviewing.jpg";
import Giraffes from "../assets/giraffes.jpg";
import SasaabLodge from "../assets/Sasaab-Lodge.jpg";
import ThompsonFalls from "../assets/thompsonfalls.jpg";
import Treetops from "../assets/treetops.jpg";
import WildbeestMigration from "../assets/wildbeestmigration.webp";
import ZebraInLodge from "../assets/zebrainlodge.jpg";
import Campfire from "../assets/campfire.jpg";
import ResortVideo from "../assets/resort_lounge.mp4";

const TravelsSection = () => {
  const controls = useAnimation();
  const videoRef = useRef(null);

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 1.2 } });
  }, [controls]);

  // Custom Arrow Components
  const NextArrow = ({ onClick }) => (
    <div
      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#0492C2]/70 hover:bg-[#0492C2] text-white rounded-full p-2 cursor-pointer z-10 transition-all shadow-md"
      onClick={onClick}
    >
      ▶
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#0492C2]/70 hover:bg-[#0492C2] text-white rounded-full p-2 cursor-pointer z-10 transition-all shadow-md"
      onClick={onClick}
    >
      ◀
    </div>
  );

  // Slider settings
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="relative py-20 px-6 md:px-20 text-white overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Text Section */}
        <motion.div
          className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10"
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#0492C2]">
            Journeys Beyond the Ordinary 🌍
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            <strong>Luxcity Creatives</strong> partners with travel experts for
            unforgettable Kenyan adventures — from <strong>wildlife safaris</strong> and
            <strong> nature views</strong> to <strong>evening campfires</strong> under the stars.
            <br /><br />
            Stay in luxurious lodges and maybe share breakfast with a giraffe or zebra 😅.
            <br /><br />
            <span className="italic text-gray-300">
              Adventure, elegance, and wonder — all in one unforgettable journey.
            </span>
          </p>
        </motion.div>

        {/* Image + Video Carousel */}
        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}
        >
          <Slider {...settings}>
            {[
              AngamaMara,
              ElephantViewing,
              Giraffes,
              SasaabLodge,
              ThompsonFalls,
              Treetops,
              WildbeestMigration,
              ZebraInLodge,
              Campfire,
            ].map((img, i) => (
              <div key={i}>
                <img
                  src={img}
                  alt={`Travel ${i + 1}`}
                  loading="lazy"
                  className="w-full h-[420px] object-cover rounded-2xl transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}

            {/* Resort Video */}
            <div>
              <video
                ref={videoRef}
                src={ResortVideo}
                className="w-full h-[420px] object-cover rounded-2xl transition-transform duration-300 hover:scale-[1.02]"
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

export default TravelsSection;
