"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Financial Snapshot Spark",
    description:
      "A financial snapshot tool for financial statement analysis and valuation metrics.",
    image: "/snapshot.png",
    link: "https://snapshot-spark-u6dv.vercel.app",
  },
  {
    title: "Tariff Wars",
    description:
      "Chasing the Next Nash Equilibrium: The Tariff War Between the US and EU.",
    image: "/tariff.png",
    link:
      "https://medium.com/@abela.abera.ag/chasing-the-next-nash-equilibrium-the-tariff-war-between-the-us-and-eu-602be2dc4340",
  },
  {
    title: "Financial Forecast Modelling",
    description:
      "Custom Excel dashboard with PowerPoint presentation for a Lingoda SaaS company to forecast trends and churn analysis.",
    image: "/presntation.png",
    link:
      "https://docs.google.com/presentation/d/1r4ZFtSr22zmiN-iyV-d42fQvbGAEQWYI/edit?usp=sharing&ouid=108349794833253726483&rtpof=true&sd=true",
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.15 * i, ease: "easeInOut" },
  }),
};

export default function ProjectSection() {
  return (
    <section id="projects" className="py-20 px-4 bg-[#232323]">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#282b2d] rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 border border-[#232323] flex flex-col"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            custom={index}
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.03, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.25)" }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-200 text-sm flex-1">{project.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
