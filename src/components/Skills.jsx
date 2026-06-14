export default function Skills() {
  const skills = [
    "Java",
    "Spring Boot",
    "React",
    "JavaScript",
    "MySQL",
    "MongoDB",
    "AWS",
    "Git",
    "Postman",
  ];

  return (
    <section id="skills" className="skills-section">

      <span className="skills-tag">
        Skills
      </span>

      <h2 className="skills-title">
        Technologies I Work With
      </h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill} className="skill-card">
            {skill}
          </div>
        ))}
      </div>

    </section>
  );
}