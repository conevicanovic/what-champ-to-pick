import React, { useState, useEffect } from "react";
import ChampionSelect from "./components/ChampionSelect";
import data from "./data/lol_counters.json";

function App() {
  console.log(data);

  const champList = [];
  data
    .filter(
      (item, index, array) =>
        array.findIndex((i) => i.player === item.player) === index
    )
    .forEach((item) =>
      champList.push(item.player.slice(27, item.player.length - 10))
    );
  function findStats() {}
  return (
    <>
      <ChampionSelect champList={champList} findStats={findStats} />
      {/* <button onClick={() => console.log()}>TEST</button> */}
    </>
  );
}

export default App;
