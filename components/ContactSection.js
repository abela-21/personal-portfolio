"use client";
import { motion } from "framer-motion";
import { FaDownload, FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="min-h-screen w-full flex flex-col justify-center items-center bg-[#2a3439] text-white relative overflow-hidden px-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <motion.div
        className="w-full text-center mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">Contact</h2>
        <p className="text-lg md:text-xl font-light mb-8 text-white/80">
          Let's connect! Feel free to reach out for collaboration, project inquiries, or just to say hello.
        </p>
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center mb-10 w-full">
          <a
            href="/Abel_Bireda _CV_08.25.pdf"
            download
            className="flex items-center gap-3 px-6 py-3 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition text-white text-lg font-medium"
          >
            <FaDownload className="text-xl" /> Download CV
          </a>
          <div className="flex items-center gap-3 text-lg">
            <FaPhone className="text-xl" />
            <span>+49 (152) 2536 9765</span>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <FaEnvelope className="text-xl" />
            <span>abela.abera.ag@gmail.com</span>
          </div>
        </div>
      </motion.div>
      {/* Socials bottom right */}
      <motion.div
        className="fixed bottom-8 right-8 flex flex-col gap-4 z-40"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <a href="https://github.com/abela-21" target="_blank" rel="noopener noreferrer" className="text-[#FFFFF0] hover:text-gray-300 transition">
          <FaGithub className="text-2xl" />
        </a>
        <a href="https://linkedin.com/in/abel-abera-bireda" target="_blank" rel="noopener noreferrer" className="text-[#FFFFF0] hover:text-gray-300 transition">
          <FaLinkedin className="text-2xl" />
        </a>
        <a href="https://twitter.com/Abela_AG" target="_blank" rel="noopener noreferrer" className="text-[#FFFFF0] hover:text-gray-300 transition">
          <FaTwitter className="text-2xl" />
        </a>
      </motion.div>
      {/* Copyright bottom left */}
      <div className="fixed bottom-8 left-8 z-40 text-xs text-white/70">
        © {new Date().getFullYear()} Abel Bireda. All rights reserved.
      </div>
    </motion.section>
  );
}
