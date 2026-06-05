import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHackerrank
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";
import { useEffect, useState } from "react";

export default function Hero() {
  const techStack = [
    "Java",
    "Spring Boot",
    "React",
    "MySQL",
    "MongoDB",
    "AWS",
  ];
  const [leetcodeSolved, setLeetcodeSolved] = useState(64);

  useEffect(() => {
  fetch("/stats.json")
    .then((res) => res.json())
    .then((data) => {
      setLeetcodeSolved(data.leetcodeSolved);
    });
}, []);
  return (
    <section className="hero-section">
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>
      <div className="hero-socials"></div>
      <div className="hero-container">

        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="profile-wrapper"
        >
          <img
            src="/aravind.jpg"
            alt="Aravind Kumar"
            className="profile-image"
          />
        </motion.div>

        {/* Status */}
        <span className="status-badge">
          🚀 Open To Internships & Full-Time Opportunities
        </span>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-title"
        >
          Aravind Kumar
        </motion.h1>

        {/* Role */}
        <h2 className="hero-role">
          Java Backend Developer
        </h2>

        {/* Short Value Proposition */}
        <p className="hero-description">
          Passionate Java Backend Developer focused on building
          scalable REST APIs, microservices and cloud-ready
          applications using Spring Boot and modern technologies.
        </p>

        {/* Quick Highlights */}
        <div className="hero-highlights">
          <span>✓ Spring Boot</span>
          <span>✓ REST APIs</span>
          <span>✓ Microservices</span>
          <span>✓ AWS Basics</span>
        </div>

        {/* Buttons */}
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

        {/* Social Links */}
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

          <a href="mailto:chithamanaravind@gmail.com"
            className="social-btn email"
          >
              <FaEnvelope />
          </a>
        </div>

        {/* Tech Stack */}
        <div className="tech-stack">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="tech-pill"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="stats-grid">

          <div className="stat-card">
            <h3>15+</h3>
            <p>Projects Built</p>
          </div>

          <div className="stat-card">
            <h3>{leetcodeSolved}+</h3>
            <p>Leetcode Solved</p>
          </div>

          <div className="stat-card">
            <h3>10+</h3>
            <p>Technologies</p>
          </div>

          <div className="stat-card">
            <h3>2027</h3>
            <p>B.Tech Graduate</p>
          </div>

        </div>

      </div>
    </section>
  );
}