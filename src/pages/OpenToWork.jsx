const OpenToWork = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 otwHeading">🚀 Open to Work</h2>

      <section className="mb-4 developerSection">
        <p>
          Hi, I'm <strong>Mohd Uvesh</strong>, a passionate frontend developer
          currently pursuing B.Tech in Computer Science Engineering from COER
          College of Engineering, Roorkee.
        </p>
        <p>
          I’m actively looking for opportunities where I can apply my skills in
          React, JavaScript, and web development to build clean, scalable, and
          responsive web applications.
        </p>
      </section>

      <section className="mb-4">
        <div class="card" style={{ width: "18rem" }}>
          <div class="card-header">🛠️ Skills</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">React.js, JavaScript, ES6+</li>
            <li class="list-group-item">Git & GitHub, Node.js (Basic)</li>
            <li class="list-group-item">Responsive Web Design</li>
          </ul>
        </div>
      </section>

      <section className="mb-4">
        <div class="card">
          <div class="card-header">📂 Projects</div>
          <div class="card-body">
            <figure>
              <blockquote class="blockquote">
                <ul>
                  <li>
                    <strong>Marvel Character App</strong> – A React app showing
                    Marvel character cards with search functionality and
                    routing.
                  </li>
                  <li>
                    <strong>ChatHub</strong> – Real-time chat app using React,
                    Socket.io, Node.js, and MongoDB supporting 10,000+ users.
                  </li>
                </ul>
              </blockquote>
            </figure>
          </div>
        </div>
      </section>

      <section className="mb-4 developerSection">
        <h4>🔍 Looking For</h4>
        <p>
          I'm open to frontend internships, freelance work, or full-time junior
          roles. Remote opportunities are also welcome.
        </p>
      </section>

      <section>
        <h4>📬 Let’s Connect</h4>
        <p>
          📧 Email:{" "}
          <a href="mailto:mohduvesh01@example.com">mohduvesh01@gmail.com</a>{" "}
          <br />
          💼 LinkedIn:{" "}
          <a href="https://linkedin.com/in/mohduvesh01">
            linkedin.com/in/mohduvesh01
          </a>{" "}
          <br />
          🔗 GitHub:{" "}
          <a href="https://github.com/mohduvesh01">github.com/mohduvesh01</a>
        </p>
      </section>
    </div>
  );
};

export default OpenToWork;
