"use client";

import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectSection from "../components/ProjectSection";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";
// import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main className="scroll-smooth">
      <section id="home" className="bg-[#232323]">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="projects" className="bg-[#232323]">
        <ProjectSection />
      </section>
      <section id="skills" className="bg-[#FFF8E7] w-full">
        <SkillsSection />
      </section>
      <section id="contact" className="bg-[#B0B3B8] w-full">
        <ContactSection />
      </section>
      {/* <Footer /> */}
    </main>
  );
}
