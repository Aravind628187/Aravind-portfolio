import { Menu, Download } from "lucide-react";

export default function Navbar() {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar-container">

        {/* Logo */}
        <a href="#home" className="navbar-logo">
          <div className="navbar-logo">
           Aravind Kumar
          </div>
        </a>

        {/* Links */}
        <div className="navbar-links">

          <a href="#home">Home</a>

          <a href="#about">
            About
          </a>

          <a href="#skills">
            Skills
          </a>

          <a href="#projects">
            Projects
          </a>


          <a href="#achievements">
            Achievements
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>

        {/* Actions */}
        <div className="navbar-actions">

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
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