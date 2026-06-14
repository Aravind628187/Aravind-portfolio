export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        <div className="about-content">
          <span className="about-badge">About Me</span>

          <h2>
            Passionate Java Backend Developer
          </h2>

          <p>
            I'm Aravind Kumar, a passionate Java Backend Developer
            focused on building scalable REST APIs, microservices,
            and cloud-ready applications using Spring Boot and
            modern technologies.
          </p>

          <p>
            I enjoy solving problems on LeetCode, developing
            full-stack applications, and continuously improving
            my software engineering skills.
          </p>

          <div className="about-skills">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>React</span>
            <span>MySQL</span>
            <span>MongoDB</span>
            <span>AWS</span>
          </div>
        </div>

        <div className="about-image">
          <img
            src="/aravind.jpg"
            alt="Aravind Kumar"
          />
        </div>

      </div>
    </section>
  );
}