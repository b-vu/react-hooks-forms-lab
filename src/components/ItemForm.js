import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [newItem, setNewItem] = useState(
    {
      name: "",
      category: "Produce"
    }
    );

  const handleItemChange = event => {
    setNewItem(
      {
        ...newItem,
        [event.target.name]: event.target.value
      }
    )
  }

  const handleSubmit = event => {
    event.preventDefault();
    onItemFormSubmit(
      {
        id: uuid(),
        ...newItem
      }
    )
    
    setNewItem(
      {
        ...newItem,
        name: ""
      }
    )
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleItemChange} value={newItem.name}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleItemChange} value={newItem.category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
