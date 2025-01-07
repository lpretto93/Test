
import React, { useState } from "react";

const MatchSimulator = () => {
  const [result, setResult] = useState("");

  const simulateMatch = () => {
    const randomOutcome = Math.random();
    if (randomOutcome > 0.5) {
      setResult("You Win!");
    } else {
      setResult("You Lose!");
    }
  };

  return (
    <div>
      <h2>Match Simulator</h2>
      <button onClick={simulateMatch}>Simulate Match</button>
      {result && <p>Result: {result}</p>}
    </div>
  );
};

export default MatchSimulator;
