import Navbar from "./components/Navbar";
import "./index.css";
import bg from "./assets/background.png";
import Profile from "./components/profile";
import About from "./components/About";
function App() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      />
      <div className="App" style={{ minHeight: "100vh" }}>
        <Navbar />
        <div className="content">
          <Profile />
          <About />
        </div>
      </div>
    </>
  );
}

export default App;
