import resumeAnalyzer from "../assets/resume-analyzer.png";
import hubsCars from "../assets/hubs-cars.png";
import employeeManagement from "../assets/employee-management.png";

const projects = [
  {
    title: "AI Resume Analyzer Pro",
    desc: "AI Resume Analyzer Pro - A free ATS resume evaluation tool that analyzes resumes, calculates ATS scores, identifies missing skills, and provides recruiter-focused improvement suggestions.",
    tech: ["React", "Vite", "Javascript","HTML5","CSS3"],
    github: "https://github.com/Aravind628187/ai-resume-analyzer-pro",
    image: resumeAnalyzer,
  },

  {
    title: "HUB Cars",
    desc: "AI powered smart car marketplace application with price prediction and vehicle recommendation features.",
    tech: ["Python", "MongoDB", "React","Express","Node.js","Mechine Learning"],
    github: "https://github.com/Aravind628187/Car-price-prediction-system",
    image: hubsCars,
  },

  {
    title: "Employee Management System",
    desc: "Full CRUD employee management application built using Spring Boot and MySQL with REST APIs.",
    tech: ["Spring Boot", "MySQL"],
    github: "#",
    image: employeeManagement,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">

      <span className="projects-tag">
        🚀 My Work
      </span>

      <h2 className="projects-title">
        Featured Projects
      </h2>

      <p className="projects-subtitle">
        Projects showcasing backend development,
        full-stack engineering and AI integrations.
      </p>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <div
            className="project-card"
            key={project.title}
          >

            {/* Project Screenshot */}
            <div className="project-image-wrapper">

              <img
               src={project.image}
               alt={project.title}
               className="project-image"
               onError={(e) => {
                  console.log("Image failed:", project.image);
                }}
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

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="demo-btn"
                >
                  Live Demo →
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}