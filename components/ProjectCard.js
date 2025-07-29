export default function ProjectCard({ title, description, link, image, cta }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition bg-white block"
    >
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2 text-sm">{description}</p>
        <span className="inline-block mt-4 text-blue-600 hover:underline font-medium">
          {cta || "View Project"} →
        </span>
      </div>
    </a>
  );
}