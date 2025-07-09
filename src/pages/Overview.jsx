function Overview() {
  return (
    <>
      <div className="main">
        <p className="text-center mt-5 mb-5 overviewText ">
          <span>CineVerse</span> is a responsive and interactive web application
          that presents popular fictional and real-life characters, along with
          detailed movie information related to each.
        </p>
        <p className="text-center mt-5 mb-5 overviewText ">
          🧑‍🎤 The homepage features a dynamic grid of character cards, each
          linked to a dedicated detail page displaying character bio and a list
          of iconic films. 🎥 Each movie entry includes a poster, title, release
          year, and short summary.
        </p>
        <p className="text-center mt-5 mb-5 overviewText ">
          💻 Built using{" "}
          <span className="lang">React.js, Bootstrap 5, and JavaScript</span>,
          the application follows a component-based structure for better
          scalability and code reusability. React Router is implemented for
          smooth navigation between dynamic character pages.{" "}
        </p>
        <p className="text-center mt-5 mb-5 overviewText ">
          📱 The layout is fully responsive, styled using Bootstrap utility
          classes to ensure compatibility across devices. The navigation bar,
          search input, and footer are customized for a clean and consistent
          user interface.
        </p>
        <p className="text-center mt-5 mb-5 overviewText ">
          The footer is fixed at the bottom using CSS for a seamless visual
          layout. 📌 🔗 Project is version-controlled using Git, hosted on
          GitHub, and deployed on Netlify for public access.
        </p>
        <p className="text-center mt-5 mb-5 overviewText ">
          🚀CineVerse highlights modern frontend practices including reusable
          components, responsive design, dynamic routing, and UI/UX consistency
          — making it a standout project in any development portfolio. 🏆
        </p>
      </div>
    </>
  );
}
export default Overview;
