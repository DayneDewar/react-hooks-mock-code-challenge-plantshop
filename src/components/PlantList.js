import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, search }) {

  const filtered = plants.filter(plant => {
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })

  const allPlants = filtered.map(plant => {
    return <PlantCard key={plant.id} name={plant.name} image={plant.image} price={plant.price}/>
  })
  return (
    <ul className="cards">{allPlants}</ul>
  );
}

export default PlantList;
