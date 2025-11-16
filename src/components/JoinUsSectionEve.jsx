import React from "react";
import { motion } from "framer-motion";

const JoinUsSection = () => {
  return (
    <section className="relative py-16 px-6 md:px-20 bg-transparent text-white overflow-hidden flex justify-center items-center">
      <motion.div
        className="bg-white/5 backdrop-blur-md px-10 py-8 rounded-2xl shadow-lg border border-white/10 text-center max-w-2xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1.4, ease: "easeOut" },
        }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0492C2]">
          Ready to Showcase Your Business and Make Memories with Us? 🌟
        </h2>
        <p className="text-lg leading-relaxed text-gray-200">
          Whether you dream to present your business and ideas, show your love to someone on their special day, or have a classic entry into your marriage —{" "}
          <span className="text-[#0492C2] font-semibold">Luxcity Creatives</span>{" "}
          is here to help you turn your dreams into a reality.
          <br />
          <br />
          Invite us into your happiness! 🎨💃🎶
          <br />
          <br />
          Message us on our socials below <span className="text-xl">👇😊</span>
          <br />
          or call us directly on{" "}
          <span className="text-[#04b293] font-semibold">
            0700 200 507
          </span>
          .
        </p>
      </motion.div>

      <style>
        {`
          section::before {
            content: "";
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at center, rgba(4,146,194,0.15), transparent 70%);
            opacity: 0.6;
            z-index: 0;
          }
          div {
            position: relative;
            z-index: 1;
          }
        `}
      </style>
    </section>
  );
};

export default JoinUsSection;
