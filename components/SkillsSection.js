"use client";
import { motion } from "framer-motion";
import {
  FaPython,
  FaFileExcel,
  FaChartLine,
  FaDatabase,
  FaChartPie,
  FaLaptopCode,
} from "react-icons/fa";

const skills = [
  { icon: FaPython, label: "Python" },
  { icon: FaFileExcel, label: "Excel" },
  { icon: FaChartPie, label: "Power BI / Dashboards" },
  { icon: FaChartLine, label: "Financial Modeling" },
  { icon: FaDatabase, label: "SQL & Data Management" },
  { icon: FaLaptopCode, label: "Automation & Scripting" },
];

export default function SkillsSection() {
  return (
    <motion.section
      id="skills"
      className="py-10 max-w-5xl mx-auto text-center bg-[#FFF8E7]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#004953]">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-center items-center px-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center space-y-2 hover:scale-110 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <skill.icon className="text-4xl md:text-5xl text-[#004953]" />
            <span className="text-sm font-semibold text-[#004953]">{skill.label}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
