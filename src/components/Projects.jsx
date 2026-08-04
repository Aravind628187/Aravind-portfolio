import resumeAnalyzer from "../assets/resume-analyzer.png";
import hubsCars from "../assets/hubs-cars.png";
import enterpriseDashboard from "../assets/enterprise-Dashboard.png";
import leadFlowPro from "../assets/leadflow-pro.webp";
import TiltCard from "./TiltCard";

const projects = [
  {
  title: "Enterprise AI Business Intelligence Dashboard",
  desc: "Production-ready AI-powered analytics platform featuring anomaly detection, forecasting, interactive dashboards, PDF/Excel export, LLM insights, authentication, and real-time business analytics.",
  tech: [
    "Python",
    "FastAPI",
    "Pandas",
    "Scikit-Learn",
    "PostgreSQL",
    "React",
    "Chart.js",
    "OpenAI API"
  ],
  github: "https://github.com/Aravind628187/enterprise-ai-bi-platform",
  image: enterpriseDashboard,
  },
  {
    title: "LeadFlow Pro",
    desc: "Production-ready lead management platform with secure role-based workspaces, pipeline automation, live analytics, task tracking, notifications, and an audited lead lifecycle.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    github: "https://github.com/Aravind628187/LeadFlow-Pro",
    demo: "https://lead-flow-pro-green.vercel.app/",
    image: leadFlowPro,
  },
  {
    title: "AI Resume Analyzer Pro",
    desc: "AI Resume Analyzer Pro - A free ATS resume evaluation tool that analyzes resumes, calculates ATS scores, identifies missing skills, and provides recruiter-focused improvement suggestions.",
    tech: ["React", "Vite", "Javascript","HTML5","CSS3"],
    github: "https://github.com/Aravind628187/ai-resume-analyzer-pro",
    demo: "https://ai-resume-analyzer-pro-pi.vercel.app",
    image: resumeAnalyzer,
  },

  {
    title: "HUB Cars",
    desc: "AI powered smart car marketplace application with price prediction and vehicle recommendation features.",
    tech: ["Python", "MongoDB", "React","Express","Node.js","Mechine Learning"],
    github: "https://github.com/Aravind628187/Car-price-prediction-system",
    image: hubsCars,
  }


];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">

      <span className="projects-tag">
        🚀 My Work
      </span>
      <h2 className="projects-title">
        Data Science & AI Projects
      </h2>

      <p className="projects-subtitle">
          A collection of Data Science, Data Analytics, Machine Learning, AI, and Full-Stack projects focused on solving real-world business problems through data-driven solutions.
      </p>

      <div className="projects-grid">

        {projects.map((project) => (

          <TiltCard
            className="project-card"
            key={project.title}
          >

            {/* Project Screenshot */}
            <div className="project-image-wrapper">

              <img
               src={project.image}
               alt={project.title}
               className="project-image"
              />

  

            </div>

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.desc}</p>

              <div className="project-tech">

                {project.tech.map((tech) => (
                  <span key={tech}>
                    {tech}
                  </span>
                ))}

              </div>

              <div className="project-actions">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-btn"
                >
                  GitHub →
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="demo-btn"
                  >
                    Live Demo →
                  </a>
                )}

              </div>

            </div>

          </TiltCard>

        ))}

      </div>

    </section>
  );
}
