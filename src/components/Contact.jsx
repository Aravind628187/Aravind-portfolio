import { useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  Mail,
  Phone,
  MapPin,
  Download,
  Clock
} from "lucide-react";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8y10fpm", // Service ID
        "template_q9b7h3w", // Replace
        form.current,
        "UE7oG5_-UWJoqHxnm" // Replace
      )
      .then(
        () => {
          alert("✅ Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to Send Message");
          console.log(error);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">

      {/* Header */}
      <div className="contact-header">

        <div className="contact-badge">
          📬 Contact Me
        </div>

        <p className="contact-tagline">
          🚀 Let's Work Together
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
        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
        >

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Tell me about your project..."
            required
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