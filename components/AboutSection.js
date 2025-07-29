"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative flex items-center justify-center bg-[#232323] px-6 py-20 overflow-hidden text-gray-100">
      {/* Content */}
      <div className="relative z-10 max-w-3xl w-full text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6 text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl font-light leading-relaxed text-gray-300 mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          I am a finance professional with a strong interest in harnessing the power of data,
          analytics, and AI to create smarter insights and strategic value. With a background
          in financial analysis and consulting, I enjoy solving problems that sit at the
          intersection of numbers, business, and innovation.
        </motion.p>

        <motion.p
          className="text-lg md:text-xl font-light leading-relaxed text-gray-300 mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          I thrive in roles that require both analytical depth and collaborative drive. I’m
          especially motivated by working on projects that contribute to transparency,
          efficiency, and better decision-making in financial ecosystems.
        </motion.p>

        {/* Final Boxed Highlight */}
        <motion.div
          className="bg-neutral-800 text-gray-200 border border-neutral-700 rounded-xl p-6 shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <p className="text-lg md:text-xl font-medium">
            Tech-savvy, curious, and grounded in finance — I enjoy exploring how AI,
            automation, and data can reshape how we understand and manage capital.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
