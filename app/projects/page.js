import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <p className="text-gray-700 max-w-xl mb-8">
        These projects combine finance expertise with modern tools to deliver actionable insights and strategic analysis.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard
          title="Equity Analysis Dashboard"
          description="A Python and Streamlit-powered dashboard analyzing consumer stocks across key valuation and profitability metrics."
          link="#"
          cta="View Dashboard"
        />
        <ProjectCard
          title="Discounted Cash Flow Model"
          description="Downloadable Excel model calculating intrinsic value based on projected FCFs, WACC, and terminal value."
          link="/resume.pdf" // Replace with real link later
          cta="Download Excel"
        />
        <ProjectCard
          title="Power BI: KPI Tracker"
          description="Interactive dashboard tracking revenue, operating margins, and efficiency metrics for a simulated portfolio."
          link="#"
          cta="View Power BI"
        />
      </div>
    </div>
  );
}
