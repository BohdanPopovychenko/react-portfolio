import "./styles/main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/scrollToTop";

import Navbar from "./components/navbar/Navbar";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
