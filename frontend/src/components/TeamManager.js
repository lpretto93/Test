
import React, { useState } from "react";

const TeamManager = () => {
  const [team, setTeam] = useState([
    { name: "Player 1", skill: 80 },
    { name: "Player 2", skill: 75 },
    { name: "Player 3", skill: 70 },
  ]);

  return (
    <div>
      <h2>Your Team</h2>
      <ul>
        {team.map((player, index) => (
          <li key={index}>
            {player.name} - Skill: {player.skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamManager;
