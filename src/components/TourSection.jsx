import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Tour images
import tour1 from "../assets/tour1.jpg";
import tour2 from "../assets/tour2.jpg";
import tour3 from "../assets/tour3.jpg";

function TourSection() {
  const tourImages = [tour1, tour2, tour3];
  const [tourIndex, setTourIndex] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "100px",
  });

  // Auto carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setTourIndex((prev) => (prev + 1) % tourImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [tourImages.length]);

  // Counters
  const [countDestinations, setCountDestinations] = useState(0);
  const [countSatisfaction, setCountSatisfaction] = useState(0);

  useEffect(() => {
    let startDest = 0;
    let startSat = 0;

    const destInterval = setInterval(() => {
      if (startDest < 50) {
        startDest++;
        setCountDestinations(startDest);
      } else {
        clearInterval(destInterval);
      }
    }, 40);

    const satInterval = setInterval(() => {
      if (startSat < 100) {
        startSat++;
        setCountSatisfaction(startSat);
      } else {
        clearInterval(satInterval);
      }
    }, 20);

    return () => {
      clearInterval(destInterval);
      clearInterval(satInterval);
    };
  }, []);

  return (
    <section className="bg-transparent py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image Container */}
        <motion.div
          ref={ref}
          className="relative rounded-2xl overflow-hidden shadow-lg"
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {inView ? (
            <img
              src={tourImages[tourIndex]}
              alt="Tour"
              loading="lazy"
              decoding="async"
              className="w-full h-[400px] object-cover transition-all duration-500"
            />
          ) : (
            <div className="w-full h-[400px] bg-gray-800 animate-pulse rounded-2xl" />
          )}

          {/* Manual Buttons */}
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button
              onClick={() =>
                setTourIndex((prev) => (prev - 1 + tourImages.length) % tourImages.length)
              }
              className="bg-black/50 text-white px-3 py-1 rounded-full hover:bg-black/70"
            >
              ‹
            </button>

            <button
              onClick={() =>
                setTourIndex((prev) => (prev + 1) % tourImages.length)
              }
              className="bg-black/50 text-white px-3 py-1 rounded-full hover:bg-black/70"
            >
              ›
            </button>
          </div>
        </motion.div>

        {/* Text Container */}
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg text-white"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#0492C2]">
            Our Tours
          </h2>

          <p className="mb-6">
            Discover the beauty of Kenya with our curated travel experiences.
            From wildlife safaris to cultural tours, we offer personalized
            packages for every traveler. Let us guide you to unforgettable
            adventures and lasting memories.
          </p>

          <h3 className="text-[#0492C2] text-xl font-semibold text-center mb-6">
            With:
          </h3>

          <div className="grid grid-cols-2 gap-8 text-center">

            {/* Destinations */}
            <div>
              <h4 className="text-5xl font-bold">{countDestinations}+</h4>
              <p className="text-sm mt-2">
                Destinations explored through our expertly curated tours.
              </p>
            </div>

            {/* Satisfaction */}
            <div>
              <h4 className="text-5xl font-bold">{countSatisfaction}%</h4>
              <p className="text-sm mt-2">
                Customer satisfaction—our promise of premium travel experiences.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Explore Tours Button */}
      <div className="flex justify-center mt-10">
        <Link
          to="/services"
          className="px-6 py-3 rounded-lg bg-[#0492C2] text-white font-semibold hover:bg-white hover:text-[#0492C2] border border-[#0492C2] transition"
        >
          Explore Tours
        </Link>
      </div>
    </section>
  );
}

export default TourSection;
