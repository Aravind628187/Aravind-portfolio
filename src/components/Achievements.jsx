import {
  Trophy,
  GraduationCap,
  Code2,
  ExternalLink,
} from "lucide-react";

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="section-header">
        <span className="experience-badge">
          Achievements
        </span>

        <h2 className="experience-heading">
          Certifications & Milestones
        </h2>

        <p className="experience-subtitle">
          Learning continuously and building
          real-world software solutions.
        </p>
      </div>
      {/* HP LIFE Data Science & Analytics */}

      <div className="experience-grid">

        {/* React Certificate */}
        <div className="experience-card certificate-card">
          
          <img
            src="/certificates/react-certificate.png"
            alt="React Certificate"
            className="certificate-image"
          />

          <h3>React (Basic) Certificate</h3>

          <p>
            HackerRank Certified • June 2026
          </p>

          <a
            href="https://www.hackerrank.com/certificates/4e6f3a4ead28"
            target="_blank"
            rel="noreferrer"
            className="certificate-btn"
          >
            View Certificate
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Java Certificate */}
        <div className="experience-card certificate-card">
          <img
            src="/certificates/java-certificate.png"
            alt="Java Certificate"
            className="certificate-image"
          />

          <h3>Java (Basic) Certificate</h3>

          <p>
            HackerRank Certified • June 2026
          </p>

          <a
            href="https://www.hackerrank.com/certificates/673e452c0ef7"
            target="_blank"
            rel="noreferrer"
            className="certificate-btn"
          >
            View Certificate
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Android Certificate */}
        <div className="experience-card certificate-card">
          <img
            src="/certificates/android-kotlin-certificate.jpg"
            alt="Android Certificate"
            className="certificate-image"
          />

          <h3>Android Development Bootcamp</h3>

          <p>
            Udemy Certified • July 2025
          </p>

        
        </div>

        {/* ICAT */}
        <div className="experience-card">
          <GraduationCap size={32} />

          <h3>ICAT Participation</h3>

          <p>
            Participated in Internship Common
            Aptitude Test (ICAT).
          </p>
        </div>

        {/* Coding Journey */}
        <div className="experience-card">
          <Code2 size={32} />

          <h3>Coding Journey</h3>

          <div className="stats-grid">
            <div>
              <h4>100+</h4>
              <p>LeetCode</p>
            </div>

            <div>
              <h4>30+</h4>
              <p>HackerRank</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}