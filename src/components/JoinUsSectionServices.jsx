import React from "react";
import { motion } from "framer-motion";

const JoinUsSection = () => {
  return (
    <section className="relative py-16 px-6 md:px-20 text-white overflow-hidden flex justify-center items-center">
      <motion.div
        className="bg-white/5 backdrop-blur-md px-10 py-8 rounded-2xl shadow-lg border border-white/10 text-center max-w-2xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1.4, ease: 'easeOut' },
        }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0492C2]">
          Ready to Dress, Shine, and Explore? 🌟
        </h2>
        <p className="text-lg text-gray-200 leading-relaxed">
          Whether you love <strong>fashion</strong>, <strong>modelling</strong>, or <strong>travel</strong>, 
          Luxcity Creatives is your gateway to elegance, experience, and adventure.
          <br /><br />
          Message us on our socials <span className="text-xl">👇😊</span> 
          <br />or call{" "}
          <span className="text-[#04b293] font-semibold">0700 200 507</span>.
        </p>
      </motion.div>
    </section>
  );
};

export default JoinUsSection;
