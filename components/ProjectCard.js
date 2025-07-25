export default function ProjectCard({ title, description, link, cta }) {
  return (
    <div className="border rounded-xl p-5 shadow-sm hover:shadow-md transition bg-white">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2 text-sm">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 text-blue-600 hover:underline font-medium"
      >
        {cta || "View Project"} →
      </a>
    </div>
  );
}
