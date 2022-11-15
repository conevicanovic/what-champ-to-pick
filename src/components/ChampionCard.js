import React, { useState, useEffect } from "react";

function ChampionCard({
  id,
  setSelectedAlliesChamps,
  setSelectedEnemiesChamps,
  setBannedChamps,
  selected,
  team,
  className,
}) {
  const [disabled, setDisabled] = useState();
  function setSelectedChamp() {
    if (team === "allies") {
      if (disabled === false) setSelectedAlliesChamps((prev) => [...prev, id]);
      else {
        setSelectedAlliesChamps((prev) => prev.filter((champ) => champ !== id));
      }
      setDisabled(!disabled);
    } else if (team === "enemies") {
      if (disabled === false) setSelectedEnemiesChamps((prev) => [...prev, id]);
      else {
        setSelectedEnemiesChamps((prev) =>
          prev.filter((champ) => champ !== id)
        );
      }
      setDisabled(!disabled);
    } else if (team === "bans") {
      if (disabled === false) setBannedChamps((prev) => [...prev, id]);
      else {
        setBannedChamps((prev) => prev.filter((champ) => champ !== id));
      }
      setDisabled(!disabled);
    } else if (team === "showing") {
      setSelectedAlliesChamps((prev) => prev.filter((champ) => champ !== id));
      setSelectedEnemiesChamps((prev) => prev.filter((champ) => champ !== id));
      setBannedChamps((prev) => prev.filter((champ) => champ !== id));
      setDisabled(!disabled);
    }
  }
  useEffect(() => {
    // console.log(`rerender for ${id}`);
    setDisabled(selected);
  });
  return (
    <div
      className={`border border-black w-[100px] h-[100px] m-2 ${className} ${
        disabled &&
        "opacity-40  m-2 p-[1px] bg-black transition-all duration-75"
      }`}
      onClick={() => {
        setSelectedChamp();
      }}
    >
      <img
        className={` border-gray-900 ${!disabled && "hover:border"}`}
        src={`https://cdn.lolalytics.com/generated/champion232px/${id}.jpg`}
        alt={id}
      ></img>
    </div>
  );
}

export default ChampionCard;
