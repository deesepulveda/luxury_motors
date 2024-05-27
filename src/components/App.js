import "./App.css";
import Hero from "./hero/Hero";

function App() {
  return (
    <div className="App">
      <Hero />
      <div
        style={{
          width: "100%",
          height: "100rem",
          overflowX: "hidden",
          background: "#000",
        }}
      >
        sections
      </div>
    </div>
  );
}

export default App;
