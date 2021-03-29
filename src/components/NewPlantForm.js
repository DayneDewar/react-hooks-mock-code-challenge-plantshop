import React, { useState } from "react";

function NewPlantForm({ addNewPlant }) {

  const [newName, setNewName] = useState("")
  const [newImage, setNewImage] = useState("")
  const [newPrice, setNewPrice] = useState("")

  function handleNameChange(e) {
    setNewName(e.target.value)
  }
  function handleImageChange(e) {
    setNewImage(e.target.value)
  }

  function handlePriceChange(e) {
    setNewPrice(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newPlant = {
      name: newName,
      image: newImage,
      price: newPrice
    }

    fetch('http://localhost:6001/plants', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
    .then(res => res.json())
    .then(data => addNewPlant(data))
    setNewName('')
    setNewImage('')
    setNewPrice('')
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={handleNameChange} value={newName}/>
        <input type="text" name="image" placeholder="Image URL" onChange={handleImageChange} value={newImage}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handlePriceChange} value={newPrice}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
