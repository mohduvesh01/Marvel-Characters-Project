import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./pages/Home.jsx";
import Overview from "./pages/Overview.jsx";
import About from "./pages/About.jsx";
import OpenToWork from "./pages/OpenToWork.jsx";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/about" element={<About />} />
        <Route path="/opentowork" element={<OpenToWork />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
