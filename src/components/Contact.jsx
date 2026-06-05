import {
  Mail,
  Phone,
  MapPin,
  Download,
  Clock
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">

      {/* Header */}
      <div className="contact-header">

        <span className="contact-badge">
          🚀 Let's Work Together
        </span>

        <h2>
          Let's Build Something Great Together
        </h2>

        <p>
          Open to internships, freelance projects and
          full-time opportunities in Java Backend Development,
          Spring Boot and Full Stack Development.
        </p>

      </div>

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">

          <div className="availability-card">
            🟢 Available For Internships & Full-Time Roles
          </div>

          <div className="info-card">
            <Mail size={22} />
            <div>
              <h4>Email</h4>
              <p>chithamanaravind@gmail.com</p>
            </div>
          </div>

          <div className="info-card">
            <Phone size={22} />
            <div>
              <h4>Phone</h4>
              <p>+91 6281875741</p>
            </div>
          </div>

          <div className="info-card">
            <MapPin size={22} />
            <div>
              <h4>Location</h4>
              <p>Andhra Pradesh, India</p>
            </div>
          </div>

          <div className="info-card">
            <Clock size={22} />
            <div>
              <h4>Response Time</h4>
              <p>Usually responds within 24 hours</p>
            </div>
          </div>

          <div className="social-links">

            <a
              href="https://github.com/Aravind628187"
              target="_blank"
              rel="noreferrer"
            >
              
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/chinthamanuaravindkumar/"
              target="_blank"
              rel="noreferrer"
            >
              
              LinkedIn
            </a>

          </div>

          <a
            href="/resume.pdf"
            className="resume-download-btn"
          >
            <Download size={18} />
            Download Resume
          </a>

        </div>

        {/* RIGHT SIDE */}
        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows="6"
            placeholder="Tell me about your project..."
          />

          <button type="submit">
            Send Message →
          </button>

        </form>

      </div>

      {/* Bottom CTA */}

      <div className="contact-footer">

        <h3>
          Ready to build scalable applications together?
        </h3>

        <p>
          Let's connect and create something impactful.
        </p>

      </div>

    </section>
  );
}