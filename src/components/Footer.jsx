import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <h3 className="footer-name">
          Aravind Kumar
        </h3>

        <p className="footer-role">
            Building AI-Powered Data Solutions with Python, SQL & Machine Learning
        </p>

        <div className="footer-socials">
          <a
            href="https://github.com/Aravind628187"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/chinthamanuaravindkumar"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:chithamanaravind@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Aravind Kumar. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}