import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, addNewPlant }) {
  const [search, setSearch] = useState("");

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant}/>
      <Search search={search} setSearch={setSearch}/>
      <PlantList plants={plants} search={search}/>
    </main>
  );
}

export default PlantPage;
