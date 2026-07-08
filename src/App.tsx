import Navbar from "../components/Navbar";
import "./index.css";
import bg from "./assets/background.png";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Navbar />
    </div>
  );
}

export default App;
