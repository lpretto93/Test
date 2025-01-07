
import React from "react";
import "./styles/App.css";
import TeamManager from "./components/TeamManager";
import MatchSimulator from "./components/MatchSimulator";

function App() {
  return (
    <div className="App">
      <h1>Game Manager</h1>
      <TeamManager />
      <MatchSimulator />
    </div>
  );
}

export default App;
