import Navbar from "./components/Navbar";
import "./index.css";
import bg from "./assets/background.png";

import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Techstack from "./components/Techstack";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App" id="top">
      <div
        className="page-background"
        style={{ backgroundImage: `url(${bg})` }}
      />

      <Navbar />
      <Hero />

      <section className="quote-section" aria-label="A little about my approach">
        <blockquote>
          “Turning coffee, curiosity, and a few bugs into better builds.”
        </blockquote>
      </section>

      <Projects />
      <Techstack />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;