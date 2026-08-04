export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        <div className="about-content">
          <span className="about-badge"><i /> Behind the build</span>

          <h2>
            I turn ambitious ideas into <span>intelligent products.</span>
          </h2>

          <p className="about-lead">
            I&apos;m Aravind Kumar — a Full-Stack and AI/ML developer focused on
            building useful, scalable digital experiences from first sketch to
            production.
          </p>

          <p className="about-copy">
            As a B.Tech CSE (AI &amp; ML) student at Parul University, I blend
            thoughtful interfaces with secure APIs, data-driven intelligence,
            and dependable backend systems. I care about products that feel as
            polished as they are technically strong.
          </p>

          <div className="about-highlights" aria-label="Professional highlights">
            <div><strong>Full-Stack</strong><span>Product Engineering</span></div>
            <div><strong>AI + ML</strong><span>Applied Intelligence</span></div>
            <div><strong>End-to-End</strong><span>Build to Deployment</span></div>
          </div>

          <div className="about-skills">
            <span>React.js</span>
            <span>JavaScript</span>
            <span>Node.js</span>
            <span>Python</span>
            <span>MongoDB</span>
            <span>AI / ML</span>
          </div>
        </div>

        <div className="about-visual" aria-label="Portrait of Aravind Kumar">
          <div className="about-orbit about-orbit-one" />
          <div className="about-orbit about-orbit-two" />
          <div className="about-image">
            <img src="/aravind-about-ai.jpg" alt="Aravind Kumar" />
            <div className="about-image-shade" />
            <div className="about-image-caption">
              <span className="about-status-dot" />
              <div><strong>Available for opportunities</strong><small>Full-Stack · AI/ML</small></div>
            </div>
          </div>
          <div className="about-floating-card about-floating-code">
            <span>&lt;/&gt;</span><small>Building with purpose</small>
          </div>
          <div className="about-floating-card about-floating-ai">
            <span>AI</span><small>Future focused</small>
          </div>
        </div>

      </div>
    </section>
  );
}
