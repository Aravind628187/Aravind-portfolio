import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHackerrank,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { useState, useEffect } from "react";
import "../App.css";


export default function Hero() {
  const [stats, setStats] = useState({
    leetcodeSolved: 0,
    hackerrankSolved: 0,
  });

  useEffect(() => {
    fetch("/stats.json")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.error(err));
  }, []);

  const handleSceneMove = (event) => {
    if (event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    event.currentTarget.style.setProperty("--scene-x", `${x * 14}deg`);
    event.currentTarget.style.setProperty("--scene-y", `${y * -12}deg`);
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>

      <div className="hero-container">
        <div className="hero-content">
          {/* LEFT SIDE */}
          <div className="hero-left">
            <div className="status-badge">
              <span>🚀</span>
              <p>Open to Full-Time & Full-Stack Developer Internship Opportunities</p>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-title"
            >
              Aravind Kumar
            </motion.h1>

            <h2 className="hero-role">Aspiring Full-Stack Developer</h2>

            <p className="hero-description">
              Passionate about Full-Stack Web Development and building modern, scalable web applications. I build responsive user interfaces with React.js and develop secure, efficient backend services using Node.js, Express.js, and Java.
            </p>

            <div className="hero-highlights">

              <span>⚛️ React.js</span>

              <span>🟢 Node.js</span>

              <span>🚀 Express.js</span>

              <span>☕ Java</span>
              
              <span>🐍 Python</span>

              <span>🗄️ MySQL</span>

              <span>🍃 MongoDB</span>

              <span>📮 Postman</span>

              <span>🔗 REST APIs</span>

              <span>🔐 JWT Authentication</span>

              <span>🌿 Git</span>

              <span>🐙 GitHub</span>

              <span>🐳 Docker</span>
            </div>

            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">
                Explore My Projects
              </a>

              <a
                href="/resume.pdf"
                className="secondary-btn"
                target="_blank"
                rel="noreferrer"
              >
                Download CV
              </a>
            </div>

            <div className="hero-socials">
              <a
                href="https://github.com/Aravind628187"
                target="_blank"
                rel="noreferrer"
                className="social-btn github"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/chinthamanuaravindkumar/"
                target="_blank"
                rel="noreferrer"
                className="social-btn linkedin"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://leetcode.com/u/aravind628187/"
                target="_blank"
                rel="noreferrer"
                className="social-btn leetcode"
              >
                <SiLeetcode />
              </a>

              <a
                href="https://www.hackerrank.com/aravind628187"
                target="_blank"
                rel="noreferrer"
                className="social-btn hackerrank"
              >
                <FaHackerrank />
              </a>

              <a
                href="mailto:chithamanaravind@gmail.com"
                className="social-btn email"
              >
                <FaEnvelope />
              </a>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <h3>10+</h3>
                <p>Projects Built</p>
              </div>

              <div className="stat-card">
                <h3>{stats.leetcodeSolved}</h3>
                <p>LeetCode Solved</p>
              </div>

              <div className="stat-card">
                <h3>{stats.hackerrankSolved}</h3>
                <p>HackerRank Solved</p>
              </div>

              <div className="stat-card">
                <h3>10</h3>
                <p>Technologies</p>
              </div>

              <div className="stat-card">
                <h3>2027</h3>
                <p>B.Tech Graduate</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="hero-right" onPointerMove={handleSceneMove}>
            <div className="hero-3d-scene">
              <div className="image-bg-glow"></div>
              <div className="orbit orbit-one"><span></span></div>
              <div className="orbit orbit-two"><span></span></div>
              <div className="code-orb orb-react">React</div>
              <div className="code-orb orb-java">Java</div>
              <div className="code-orb orb-node">Node</div>
              <div className="particle p1"></div>
              <div className="particle p2"></div>
              <div className="particle p3"></div>
              <div className="particle p4"></div>

              <motion.img
                src="/aravind-ai-transparent.png"
                alt="Aravind Kumar"
                className="profile-image"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="scene-platform"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
