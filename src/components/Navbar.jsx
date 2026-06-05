import { Menu, Download } from "lucide-react";

export default function Navbar() {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar-container">

        {/* Logo */}
        <div className="navbar-logo">
          <span className="logo-dot"></span>
          Aravind.dev
        </div>

        {/* Links */}
        <div className="navbar-links">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Actions */}
        <div className="navbar-actions">

          <a
            href="/resume.pdf"
            className="resume-btn"
          >
            <Download size={16} />
            Resume
          </a>

          <button className="menu-btn">
            <Menu size={20} />
          </button>

        </div>

      </nav>
    </header>
  );
}