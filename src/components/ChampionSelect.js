import React, { useState, useEffect } from "react";
import ChampionCard from "./ChampionCard";
function ChampionSelect({ champList, findStats }) {
  useEffect(() => console.log("RERENDER FOR WHOLE SELECT"));
  const [selectedChamp, setSelectedChamp] = useState(["zac"]);
  const [searchValue, setSearchValue] = useState("");
  const filteredChampList = champList.filter((champ) =>
    champ.includes(searchValue)
  );

  return (
    <>
      <div className="w-full h-[40px] flex justify-evenly bg-gray-400 drop-shadow-2xl shadow-2xl">
        <input
          className="my-[5px] w-[50vw] rounded-md px-3"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        ></input>
        <button
          className="bg-white my-[5px] rounded-md px-3"
          onClick={() => setSelectedChamp([])}
        >
          Deselect all
        </button>
      </div>
      <div className="w-full h-[70vh] bg-gray-500 flex flex-shrink-0 flex-wrap items-center overflow-y-scroll ">
        {filteredChampList.map((champ) => {
          console.log(selectedChamp.includes(champ));
          return (
            <ChampionCard
              id={champ}
              setSelectedChamp={setSelectedChamp}
              selected={selectedChamp.includes(champ)}
            />
          );
        })}
      </div>
      <div className=" flex justify-center w-full h-[40px] bg-gray-400 drop-shadow-2xl shadow-2xl">
        {" "}
        <button
          className="bg-white my-[5px] rounded-md px-3 "
          onClick={() => findStats()}
        >
          Find perfect champ
        </button>
      </div>
      {selectedChamp.map((item) => {
        return <span>{item}, </span>;
      })}
    </>
  );
}

export default ChampionSelect;
