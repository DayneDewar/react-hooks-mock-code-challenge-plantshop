import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

const API = "http://localhost:6001/plants"

function App() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => setPlants(data))
  },[]);

  function addNewPlant(plantData) {
    setPlants([...plants, plantData])
  }

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} addNewPlant={addNewPlant}/>
    </div>
  );
}

export default App;
