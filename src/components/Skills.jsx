export default function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "SQL", "JavaScript", "Java"],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        "FastAPI",
        "Flask",
        "React.js",
        "Node.js",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "SQLAlchemy",
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
      title: "Data Analytics",
      skills: [
        "Microsoft Excel",
        "Power BI",
        "Jupyter Notebook",
      ],
    },
    {
      title: "Tools",
      skills: [
        "Git",
        "GitHub",
        "Docker",
        "Postman",
        "VS Code",
        "GitHub Actions",
      ],
    },
    {
      title: "Cloud & Testing",
      skills: [
        "AWS S3",
        "REST APIs",
        "Pytest",
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
        Technologies I use to build AI, Machine Learning, Data Analytics,
        and Full-Stack applications.
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