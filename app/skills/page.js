export default function SkillsPage() {
  const skills = [
    "Excel",
    "Python",
    "SQL",
    "Power BI",
    "Tableau",
    "Bloomberg Terminal",
    "Streamlit",
    "SAP FICO",
    "Financial Modeling",
    "Data Visualization",
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Skills & Tools</h1>
      <p className="text-gray-700 max-w-xl mb-8">
        I work across a wide spectrum of financial and technical tools to deliver analysis, insights, and decision support.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-gray-100 text-gray-800 rounded-lg p-3 text-center font-medium shadow-sm"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
