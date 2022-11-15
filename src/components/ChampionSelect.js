import React, { useState, useEffect } from "react";
import ChampionCard from "./ChampionCard";
import ShowTeam from "./ShowTeam";
function ChampionSelect({ champList, findStats }) {
  useEffect(() => console.log("RERENDER FOR WHOLE SELECT"));
  const [selectedAlliesChamps, setSelectedAlliesChamps] = useState([]);
  const [selectedEnemiesChamps, setSelectedEnemiesChamps] = useState([]);
  const [bannedChamps, setBannedChamps] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [team, setTeam] = useState("allies");
  const filteredChampList = champList.filter((champ) =>
    champ.includes(searchValue)
  );
  function resetSelectedChamps() {
    setSelectedAlliesChamps([]);
    setSelectedEnemiesChamps([]);
    setBannedChamps([]);
  }
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
          onClick={() => resetSelectedChamps()}
        >
          Deselect all
        </button>
      </div>

      <div className="border flex flex-wrap h-[70vh] justify-between flex-grow-0">
        <ShowTeam
          team={"allies"}
          setTeam={setTeam}
          selectedAlliesChamps={selectedAlliesChamps}
          selectedEnemiesChamps={selectedEnemiesChamps}
          bannedChamps={bannedChamps}
          className="w-[12%] overflow-scroll"
          setSelectedAlliesChamps={setSelectedAlliesChamps}
          setSelectedEnemiesChamps={setSelectedEnemiesChamps}
          setBannedChamps={setBannedChamps}
        />

        <div className="h-[70vh] w-[75%] bg-gray-500 flex flex-shrink-0 justify-start items-start place-items-start flex-wrap overflow-y-scroll ">
          <div className=" w-full h-[60px] flex justify-start bg-gray-600 drop-shadow-2xl shadow-2xl overflow-hidden">
            <ShowTeam
              team={"bans"}
              setTeam={setTeam}
              selectedAlliesChamps={selectedAlliesChamps}
              selectedEnemiesChamps={selectedEnemiesChamps}
              bannedChamps={bannedChamps}
              className="w-full flex overflow-hidden"
              iconClass="w-[50px] h-[50px] border-red-900 overflow-hidden"
              setSelectedAlliesChamps={setSelectedAlliesChamps}
              setSelectedEnemiesChamps={setSelectedEnemiesChamps}
              setBannedChamps={setBannedChamps}
            />
          </div>
          {filteredChampList.map((champ) => {
            return (
              <ChampionCard
                team={team}
                id={champ}
                setSelectedAlliesChamps={setSelectedAlliesChamps}
                setSelectedEnemiesChamps={setSelectedEnemiesChamps}
                setBannedChamps={setBannedChamps}
                selected={
                  selectedAlliesChamps.includes(champ) ||
                  selectedEnemiesChamps.includes(champ) ||
                  bannedChamps.includes(champ)
                }
              />
            );
          })}
        </div>
        <ShowTeam
          team={"enemies"}
          setTeam={setTeam}
          selectedAlliesChamps={selectedAlliesChamps}
          selectedEnemiesChamps={selectedEnemiesChamps}
          bannedChamps={bannedChamps}
          className="w-[12%] overflow-scroll"
          setSelectedAlliesChamps={setSelectedAlliesChamps}
          setSelectedEnemiesChamps={setSelectedEnemiesChamps}
          setBannedChamps={setBannedChamps}
        />
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
      {selectedAlliesChamps
        .concat(selectedEnemiesChamps, bannedChamps)
        .map((item) => {
          return <span>{item}, </span>;
        })}
    </>
  );
}

export default ChampionSelect;
