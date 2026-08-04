import { ArrowUp, ArrowUpRight, Mail, MapPin, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const footerLinks = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="footer-glow footer-glow-one" aria-hidden="true" />
      <div className="footer-glow footer-glow-two" aria-hidden="true" />

      <div className="footer-container">
        <div className="footer-cta">
          <div className="footer-cta-copy">
            <span className="footer-kicker"><Sparkles size={14} /> Have a project in mind?</span>
            <h2>Let&apos;s build something <span>remarkable.</span></h2>
          </div>
          <a className="footer-cta-button" href="mailto:chinthamanaravind@gmail.com">
            Start a conversation <ArrowUpRight size={19} />
          </a>
        </div>

        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="footer-name" aria-label="Aravind Kumar home">
              AK<span>.</span>
            </a>
            <p className="footer-role">
              Full-Stack and AI/ML developer crafting thoughtful interfaces,
              intelligent systems, and production-ready digital products.
            </p>
            <span className="footer-location"><MapPin size={15} /> India · Open to opportunities</span>
          </div>

          <nav className="footer-navigation" aria-label="Footer navigation">
            <span className="footer-column-title">Explore</span>
            {footerLinks.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
          </nav>

          <div className="footer-connect">
            <span className="footer-column-title">Connect</span>
            <a href="https://github.com/Aravind628187" target="_blank" rel="noreferrer"><FaGithub /> GitHub <ArrowUpRight /></a>
            <a href="https://linkedin.com/in/chinthamanuaravindkumar" target="_blank" rel="noreferrer"><FaLinkedinIn /> LinkedIn <ArrowUpRight /></a>
            <a href="mailto:chinthamanaravind@gmail.com"><Mail /> Email me <ArrowUpRight /></a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Aravind Kumar. Designed and built with purpose.</p>
          <span className="footer-availability"><i /> Available for work</span>
          <button type="button" onClick={scrollToTop} aria-label="Back to top">
            Back to top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
