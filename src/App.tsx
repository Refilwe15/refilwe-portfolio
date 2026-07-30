import Navbar from "./components/Navbar";
import "./index.css";
import bg from "./assets/background.png";

import Services from "./components/Services";
import Experience from "./components/Experience";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <div
        className="page-background"
        style={{ backgroundImage: `url(${bg})` }}
      />

      <Navbar />
      <Hero />

      <Services />

      <Experience />
    </div>
  );
}

export default App;