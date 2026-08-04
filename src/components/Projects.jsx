import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import resumeAnalyzer from "../assets/resume-analyzer.png";
import hubsCars from "../assets/hubs-cars.png";
import enterpriseDashboard from "../assets/enterprise-Dashboard.png";
import leadFlowPro from "../assets/leadflow-pro.webp";
import TiltCard from "./TiltCard";

const projects = [
  {
    title: "Enterprise AI Business Intelligence Dashboard",
    category: "AI Analytics Platform",
    desc: "Production-ready analytics platform with anomaly detection, forecasting, interactive dashboards, document exports, LLM insights, and real-time business intelligence.",
    tech: ["Python", "FastAPI", "Pandas", "Scikit-Learn", "PostgreSQL", "React", "Chart.js", "OpenAI API"],
    github: "https://github.com/Aravind628187/enterprise-ai-bi-platform",
    image: enterpriseDashboard,
  },
  {
    title: "LeadFlow Pro",
    category: "Full-Stack SaaS",
    desc: "Secure lead-management workspace with pipeline automation, live analytics, task tracking, notifications, role-based access, and an audited lead lifecycle.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    github: "https://github.com/Aravind628187/LeadFlow-Pro",
    demo: "https://lead-flow-pro-green.vercel.app/",
    image: leadFlowPro,
    featured: true,
  },
  {
    title: "AI Resume Analyzer Pro",
    category: "AI Career Tool",
    desc: "Free ATS evaluation experience that analyzes resumes, calculates compatibility scores, finds missing skills, and delivers recruiter-focused recommendations.",
    tech: ["React", "Vite", "JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/Aravind628187/ai-resume-analyzer-pro",
    demo: "https://ai-resume-analyzer-pro-pi.vercel.app",
    image: resumeAnalyzer,
    featured: true,
  },
  {
    title: "HUB Cars",
    category: "Machine Learning",
    desc: "Smart car marketplace enhanced with machine-learning price prediction and personalized vehicle recommendation features.",
    tech: ["Python", "MongoDB", "React", "Express", "Node.js", "Machine Learning"],
    github: "https://github.com/Aravind628187/Car-price-prediction-system",
    image: hubsCars,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-heading-row">
        <div>
          <span className="projects-tag"><Sparkles size={14} /> Selected work</span>
          <h2 className="projects-title">Projects built to <span>make an impact.</span></h2>
        </div>
        <p className="projects-subtitle">
          A selection of full-stack, data, and AI products designed around real
          business problems—from the first interface to production deployment.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <TiltCard className={`project-card${project.featured ? " project-card-featured" : ""}`} key={project.title}>
            <div className="project-image-wrapper">
              <img src={project.image} alt={`${project.title} interface`} className="project-image" loading="lazy" />
              <div className="project-image-overlay" />
              <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
              {project.featured && <span className="project-featured"><i /> Live project</span>}
            </div>

            <div className="project-content">
              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              <div className="project-tech" aria-label={`${project.title} technologies`}>
                {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
              </div>

              <div className="project-actions">
                <a href={project.github} target="_blank" rel="noreferrer" className="github-btn" aria-label={`View ${project.title} on GitHub`}>
                  <FaGithub size={17} /> Source <ArrowUpRight size={15} />
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="demo-btn" aria-label={`Open ${project.title} live demo`}>
                    <ExternalLink size={17} /> Live Demo <ArrowUpRight size={15} />
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
