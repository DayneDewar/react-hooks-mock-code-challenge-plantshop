import React, { useState } from "react";

function PlantCard({name, image="https://via.placeholder.com/400", price}) {
  const [stock, setStock] = useState(true);

  function handleStock() {
    setStock(false)
  }
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stock ? (
        <button className="primary" onClick={handleStock}>In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
