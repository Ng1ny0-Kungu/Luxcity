import React from "react";
import { motion } from "framer-motion";

const JoinUsSection = () => {
  return (
    <section className="relative py-16 px-6 md:px-20 bg-transparent text-white overflow-hidden flex justify-center items-center">
      <motion.div
        className="bg-white/5 backdrop-blur-md px-10 py-8 rounded-2xl shadow-lg border border-white/10 text-center max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1.4, ease: "easeOut" },
        }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#E7B10A]">
          Ready to Begin Your Learning Journey with Luxcity? 🎓
        </h2>

        <p className="text-lg leading-relaxed text-gray-200">
          Whether you’re taking your very first step into the digital world or advancing
          your skills toward a professional career, the{" "}
          <span className="text-[#E7B10A] font-semibold">Luxcity Education Program</span>{" "}
          is here to guide your growth.
          <br /><br />
          From essential computer literacy to advanced skills in programming,
          AI usage, web development, graphics design, and IT maintenance,
          we provide a supportive and practical learning environment tailored
          to today’s world.
          <br /><br />
          Take the step that shapes your future — join the Beginner or Advanced Bundle
          and unlock your potential with us.
          <br /><br />
          Have a question? Message us on our social platforms{" "}
          <span className="text-xl">👇😊</span>
          <br />
          or call directly on{" "}
          <span className="text-[#04b293] font-semibold">
            0700 200 507
          </span>.
        </p>
      </motion.div>

      <style>
        {`
          section::before {
            content: "";
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at center, rgba(231,177,10,0.15), transparent 70%);
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
