import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, handleItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filter, setFilter] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const categoryFilter = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const searchFilter = categoryFilter.filter(item => {
    if(!filter.length) return true;
    else if(item.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1) return true;
    return null;
  })

  const handleSearchChange = event => {
    setFilter(event.target.value);
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={filter}/>
      <ul className="Items">
        {searchFilter.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
