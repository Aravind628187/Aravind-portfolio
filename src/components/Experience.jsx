import {
  Code2,
  Database,
  Cloud,
  Trophy,
  CheckCircle2,
} from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="experience-section"
    >
      {/* Header */}

      <div className="experience-header">

        <span className="experience-badge">
          Experience
        </span>

        <h2 className="experience-heading">
          Technical Expertise
        </h2>

        <p className="experience-subtitle">
          Skilled in building scalable backend systems,
          designing efficient databases and deploying
          modern applications using cloud technologies.
        </p>

      </div>

      {/* Cards */}

      <div className="experience-grid">

        <div className="experience-card">

          <Code2 size={40} />

          <h3>Backend Engineering</h3>

          <p>
            Building secure and scalable backend
            applications using Java and Spring Boot.
          </p>

          <ul>
            <li><CheckCircle2 size={16}/> Spring Boot</li>
            <li><CheckCircle2 size={16}/> REST APIs</li>
            <li><CheckCircle2 size={16}/> JWT Security</li>
            <li><CheckCircle2 size={16}/> Microservices</li>
          </ul>

        </div>

        <div className="experience-card">

          <Database size={40} />

          <h3>Database Management</h3>

          <p>
            Experience with relational and NoSQL
            databases for scalable applications.
          </p>

          <ul>
            <li><CheckCircle2 size={16}/> MySQL</li>
            <li><CheckCircle2 size={16}/> MongoDB</li>
            <li><CheckCircle2 size={16}/> Query Optimization</li>
            <li><CheckCircle2 size={16}/> Schema Design</li>
          </ul>

        </div>

        <div className="experience-card">

          <Cloud size={40} />

          <h3>Cloud & Deployment</h3>

          <p>
            Deploying applications using cloud
            platforms and modern DevOps tools.
          </p>

          <ul>
            <li><CheckCircle2 size={16}/> AWS</li>
            <li><CheckCircle2 size={16}/> Docker</li>
            <li><CheckCircle2 size={16}/> GitHub Actions</li>
            <li><CheckCircle2 size={16}/> CI/CD</li>
          </ul>

        </div>

      </div>

      {/* Highlights */}

      <div className="achievement-card">

        <div className="achievement-header">
          <Trophy size={34} />
          <h3>Achievements & Highlights</h3>
        </div>

        <div className="stats-grid">

          <div className="stat-box">
            <h4>15+</h4>
            <p>Projects Built</p>
          </div>

          <div className="stat-box">
            <h4>100+</h4>
            <p>DSA Problems</p>
          </div>

          <div className="stat-box">
            <h4>10+</h4>
            <p>Technologies</p>
          </div>

          <div className="stat-box">
            <h4>2027</h4>
            <p>Graduation</p>
          </div>

        </div>

      </div>

    </section>
  );
}