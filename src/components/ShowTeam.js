import React, { useEffect } from "react";
import ChampionCard from "./ChampionCard";

function ShowTeam({
  team,
  setTeam,
  className,
  selectedAlliesChamps,
  selectedEnemiesChamps,
  bannedChamps,
  iconClass,
  setSelectedAlliesChamps,
  setSelectedEnemiesChamps,
  setBannedChamps,
}) {
  return (
    <div className={`h-[100%] ${className}`}>
      <button onClick={() => setTeam(team)}>Select for {team} </button>
      <br />
      {team === "allies" &&
        selectedAlliesChamps.map((champ) => (
          <ChampionCard
            id={champ}
            className={iconClass}
            team="showing"
            setSelectedAlliesChamps={setSelectedAlliesChamps}
            setSelectedEnemiesChamps={setSelectedEnemiesChamps}
            setBannedChamps={setBannedChamps}
          />
        ))}
      {team === "enemies" &&
        selectedEnemiesChamps.map((champ) => (
          <ChampionCard
            id={champ}
            className={iconClass}
            team="showing"
            setSelectedAlliesChamps={setSelectedAlliesChamps}
            setSelectedEnemiesChamps={setSelectedEnemiesChamps}
            setBannedChamps={setBannedChamps}
          />
        ))}
      {team === "bans" &&
        bannedChamps.map((champ) => (
          <ChampionCard
            id={champ}
            className={iconClass}
            team="showing"
            setSelectedAlliesChamps={setSelectedAlliesChamps}
            setSelectedEnemiesChamps={setSelectedEnemiesChamps}
            setBannedChamps={setBannedChamps}
          />
        ))}
    </div>
  );
}

export default ShowTeam;
