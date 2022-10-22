import React from "react";
import "./App.css";
import AtomCircle from "./components/AtomCircle/AtomCircle";
import HologramCircle from "./components/HologramCircle/HologramCircle";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AtomCircle />
        <HologramCircle />
      </header>
    </div>
  );
}

export default App;
