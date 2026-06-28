export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        <div className="about-content">
          <span className="about-badge">About Me</span>

          <h2>
             Aspiring Data Scientist & Data Analyst
          </h2>

          <p>
            I'm Aravind Kumar, a B.Tech CSE (AI & ML) student at Parul
            University passionate about Data Science, Data Analytics,
            Machine Learning, and Artificial Intelligence. I enjoy
            transforming raw data into meaningful insights using Python,
            SQL, Power BI, Excel, and Machine Learning.
          </p>

          <p>
            I build end-to-end data analytics projects, predictive machine
            learning models, interactive dashboards, and AI-powered
            applications while continuously improving my analytical and
            problem-solving skills.
          </p>

          <div className="about-skills">
            <span>Python</span>
            <span>SQL</span>
            <span>Pandas</span>
            <span>NumPy</span>
            <span>Scikit-Learn</span>
            <span>Excel</span>
            <span>Power BI</span>
            <span>Machine Learning</span>
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