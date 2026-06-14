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
  const techStack = [
    "Java",
    "Spring Boot",
    "React",
    "MySQL",
    "MongoDB",
    "AWS",
  ];

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

  return (
    <section className="hero-section">
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>

      <div className="hero-container">
        <div className="hero-content">
          {/* LEFT SIDE */}
          <div className="hero-left">
            <div className="status-badge">
              <span>🚀</span>
              <p>Open To Internships & Full-Time Opportunities</p>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-title"
            >
              Aravind Kumar
            </motion.h1>

            <h2 className="hero-role">Java Backend Developer</h2>

            <p className="hero-description">
              Passionate Java Backend Developer specializing in Spring Boot, REST APIs, Microservices, and Cloud-native applications.
            </p>

            <div className="hero-highlights">

              <span>🟢 Node.js</span>

              <span>🍃 Spring Boot</span>

              <span>⚙ REST APIs</span>

              <span>📦 Microservices</span>

              <span>☁ AWS</span>

            </div>

            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">
                View Projects
              </a>

              <a
                href="/resume.pdf"
                className="secondary-btn"
                target="_blank"
                rel="noreferrer"
              >
                Download Resume
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
          <div className="hero-right">
            <div className="image-bg-glow"></div>
            <div className="image-bg-glow-2"></div>
            <div className="particle p1"></div>
            <div className="particle p2"></div>
            <div className="particle p3"></div>
            <div className="particle p4"></div>

            <motion.img
              src="/aravind-ai-transparent.png"
              alt="Aravind Kumar"
              className="profile-image"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}