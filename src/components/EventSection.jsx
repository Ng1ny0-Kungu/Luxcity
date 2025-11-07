import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Event images
import birthdayparty from "../assets/birthdayparty.jpg";
import techconvention from "../assets/techconvention.jpg";
import weddingreception from "../assets/weddingreception.jpg";

function EventSection() {
  const images = [birthdayparty, techconvention, weddingreception];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="w-full py-16 px-6 md:px-20 bg-transparent relative z-10">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#0492C2]">Our Events</h2>
          <p className="text-gray-200">
            Luxcity creates unforgettable entertainment, from corporate galas to private parties.
            We turn your vision into a spectacular reality with expert planning and execution.
          </p>

          <ul className="text-gray-300 space-y-2">
            <li>🏠 <span className="font-semibold">Corporate Events:</span> Conferences, seminars, product launches.</li>
            <li>🏠 <span className="font-semibold">Private Parties:</span> Birthdays, anniversaries, graduations, and more.</li>
            <li>🏠 <span className="font-semibold">Weddings:</span> Elegant receptions, ceremonies, and after-parties.</li>
          </ul>
        </motion.div>

        {/* Right: Image Slider */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src={images[currentIndex]}
            alt="Luxcity Event"
            className="w-full h-full object-cover transition-all duration-500"
          />

          {/* Buttons */}
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black/70"
          >
            ◀
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black/70"
          >
            ▶
          </button>
        </motion.div>
      </div>

      {/* Explore Events Button */}
      <div className="flex justify-center mt-10">
        <Link
          to="/events"
          className="px-6 py-3 rounded-lg bg-[#0492C2] text-white font-semibold hover:bg-white hover:text-[#0492C2] border border-[#0492C2] transition"
        >
          Explore Events
        </Link>
      </div>
    </section>
  );
}

export default EventSection;
