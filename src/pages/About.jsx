const About = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 aboutHeading">About This Project</h2>

      <section className="mb-4 ProjectOverview">
        <h4>📘 Project Overview</h4>
        <p>
          This web app displays detailed information about Marvel movie
          characters including real-life actors, character bios, and movie
          appearances. It's designed for fans and developers who want a clean,
          searchable catalog of Marvel heroes.
        </p>
      </section>

      <section className="mb-4 developerSection">
        <h4>🧑‍💻 Developer</h4>
        <p>
          Developed by <strong>Mohd Uvesh</strong>, a passionate frontend
          developer currently pursuing B.Tech in Computer Science Engineering at
          COER College of Engineering, Roorkee.
        </p>
      </section>

      <section className="mb-4">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-header">🧰 Technologies Used</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">React.js</li>
            <li className="list-group-item">React Router DOM</li>
            <li className="list-group-item">Bootstrap 5</li>{" "}
            <li className="list-group-item">Custom CSS</li>{" "}
            <li className="list-group-item">JSON data</li>
          </ul>
        </div>
      </section>
      <section className="mb-4">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-header">🚀 Key Features</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Search characters by name</li>
            <li className="list-group-item">
              Dynamic routing using React Router
            </li>
            <li className="list-group-item">Responsive card-based layout 5</li>{" "}
            <li className="list-group-item">Well-structured JSON data</li>{" "}
          </ul>
        </div>
      </section>
      <section className="mb-4">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-header">📈 Future Enhancements</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Connect to a live Marvel API</li>
            <li className="list-group-item">
              Add character filtering by movie
            </li>
            <li className="list-group-item">Add animations and dark mode</li>{" "}
          </ul>
        </div>
      </section>
      <section className="mb-4">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-header">🔗 Contact</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              {" "}
              GitHub:{" "}
              <a href="https://github.com/mohduvesh01">
                github.com/mohduvesh01
              </a>{" "}
            </li>
            <li className="list-group-item">
              Email:{" "}
              <a href="mailto:mohduvesh01@gmail.com">mohduvesh01@gmail.com</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
