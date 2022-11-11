import React, { useState, useEffect } from "react";

function ChampionCard({ id, setSelectedChamp, selected }) {
  const [disabled, setDisabled] = useState();

  useEffect(() => {
    // console.log(`rerender for ${id}`);
    setDisabled(selected);
  });
  return (
    <div
      className={`border border-black w-[100px] h-[100px] m-2 ${
        disabled &&
        "opacity-40  m-2 p-[1px] bg-black transition-all duration-75"
      }`}
      onClick={() => {
        if (disabled === false) setSelectedChamp((prev) => [...prev, id]);
        else {
          setSelectedChamp((prev) => prev.filter((champ) => champ !== id));
        }
        setDisabled(!disabled);
        // go((prev) => !prev);
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
