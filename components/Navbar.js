import Link from "next/link";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Skills", path: "/skills" },
  { label: "Contact", path: "/contact" },
  { label: "Download CV", path: "/Abel_Bireda_resume.pdf", external: true }
];

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold">Abel Abera</h1>
        <ul className="flex space-x-6">
          {navItems.map(({ label, path, external }) => (
            <li key={path}>
              {external ? (
                <a
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  {label}
                </a>
              ) : (
                <Link href={path} className="text-gray-700 hover:text-blue-600 transition">
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
