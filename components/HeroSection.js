"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  // Scroll to section
  const handleMenuClick = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#36454F] pb-2 min-h-screen flex items-center">
      {/* Hamburger menu */}
      <div className="absolute top-6 right-6 z-20">
        <button
          className="flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none bg-transparent hover:bg-transparent p-0 focus:ring-0 focus:border-transparent"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Open menu"
        >
          <span className="block w-7 h-0.5 bg-[#FFFFF0] mb-1.5 rounded transition-all"></span>
          <span className="block w-7 h-0.5 bg-[#FFFFF0] mb-1.5 rounded transition-all"></span>
          <span className="block w-7 h-0.5 bg-[#FFFFF0] rounded transition-all"></span>
        </button>
        {menuOpen && (
          <div
            ref={menuRef}
            className="absolute right-0 mt-2 flex flex-col items-end animate-fade-in z-30 bg-transparent"
          >
            <button
              className="py-1 px-0 text-right text-gray-200 hover:text-gray-400 font-medium bg-transparent border-none shadow-none outline-none transition-colors"
              style={{ background: 'none', boxShadow: 'none', border: 'none' }}
              onClick={() => handleMenuClick("about")}
            >
              About
            </button>
            <button
              className="py-1 px-0 text-right text-gray-200 hover:text-gray-400 font-medium bg-transparent border-none shadow-none outline-none transition-colors"
              style={{ background: 'none', boxShadow: 'none', border: 'none' }}
              onClick={() => handleMenuClick("projects")}
            >
              Projects
            </button>
            <button
              className="py-1 px-0 text-right text-gray-200 hover:text-gray-400 font-medium bg-transparent border-none shadow-none outline-none transition-colors"
              style={{ background: 'none', boxShadow: 'none', border: 'none' }}
              onClick={() => handleMenuClick("contact")}
            >
              Contact
            </button>
          </div>
        )}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 py-8">
        {/* Left side - Image, smooth fade-in and upward motion */}
      <motion.div
          className="relative mb-12 lg:mb-0 lg:mr-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl">
        <Image
          src="/ai-finance-profile.png"
          alt="Finance AI Portrait"
          layout="fill"
          objectFit="cover"
          priority
          className="rounded-full"
        />
          </div>
      </motion.div>

        {/* Right side - Text content, staggered fade-in and upward motion */}
      <motion.div
          className="text-center lg:text-left max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: "easeInOut" }}
        >
          {/* Subtitle */}
          <motion.p
            className="text-lg lg:text-xl text-white font-medium mb-4 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeInOut" }}
          >
            Welcome to my portfolio
          </motion.p>

          {/* Main title with enhanced gradient */}
          <motion.h1
            className="text-5xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: "easeInOut" }}
          >
            <span className="text-white">
              Abel 
            </span>
            <br />
            <span className="text-white">
              Bireda
            </span>
          </motion.h1>

          {/* Enhanced tagline with 2 second delay, smaller size */}
          <motion.p
            className="text-base md:text-lg text-white font-light leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2, ease: "easeInOut" }}
          >
          Bridging <span className="text-white font-semibold">Finance</span> and <span className="text-white font-semibold">Technology</span> for Smarter Insights
            <span className="animate-blink text-white">_</span>
          </motion.p>
      </motion.div>
      </div>

      <style jsx>{`
        .animate-blink {
          animation: blink 1.5s step-end infinite;
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          50.01%, 100% { opacity: 0; }
        }
        .animate-fade-in {
          animation: fadeIn 0.2s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
