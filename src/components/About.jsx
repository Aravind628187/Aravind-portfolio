export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        <div className="about-content">
          <span className="about-badge">About Me</span>

          <h2>
            Aspiring Full-Stack Developer
          </h2>

          <p>
            I'm Aravind Kumar, a B.Tech CSE (AI & ML) student at Parul
            University passionate about Full-Stack Web Development and
            building modern, scalable web applications. I enjoy creating
            responsive user interfaces with React.js and developing secure,
            efficient backend services using Node.js, Express.js, and Java.
          </p>

          <p>
            I build end-to-end web applications by integrating frontend,
            backend, databases, and REST APIs. I have experience working
            with React.js, Node.js, Express.js, Spring Boot, MySQL,
            MongoDB, JWT Authentication, and Git while continuously
            improving my problem-solving and software development skills.
          </p>

          <div className="about-skills">
            <span>React.js</span>
            <span>JavaScript</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>Java</span>
            <span>Spring Boot</span>
            <span>MySQL</span>
            <span>MongoDB</span>
            <span>REST APIs</span>
            <span>JWT</span>
            <span>Git</span>
            <span>GitHub</span>
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