export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        "Java",
        "JavaScript",
        "Python",
        "SQL",
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        "React.js",
        "Node.js",
        "Express.js",
        "Spring Boot",
        "FastAPI",
        "Flask",
      ],
    },
    {
      title: "Databases",
      skills: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
      ],
    },
    {
      title: "Tools & DevOps",
      skills: [
        "Git",
        "GitHub",
        "Docker",
        "Postman",
        "VS Code",
        "GitHub Actions (CI/CD)",
      ],
    },
    {
      title: "Core Concepts",
      skills: [
        "REST APIs",
        "JWT Authentication",
        "Data Structures & Algorithms",
        "Object-Oriented Programming (OOP)",
        "MVC Architecture",
      ],
    },
    {
      title: "Cloud",
      skills: [
        "AWS",
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">

      <span className="skills-tag">
        💻 My Skills
      </span>

      <h2 className="skills-title">
        Technologies & Tools
      </h2>

      <p className="skills-subtitle">
        Technologies I use to build modern, scalable, and secure Full-Stack web applications.
      </p>

      {skillCategories.map((category) => (
        <div key={category.title} className="skill-category">

          <h3>{category.title}</h3>

          <div className="skills-grid">
            {category.skills.map((skill) => (
              <div key={skill} className="skill-card">
                {skill}
              </div>
            ))}
          </div>

        </div>
      ))}

    </section>
  );
}