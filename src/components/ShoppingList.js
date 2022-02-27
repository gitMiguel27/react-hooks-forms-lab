import React, { useState } from "react";
import ItemForm from "./ItemForm";
import { v4 as uuid } from "uuid";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchFilter, setSearchFilter] = useState("");

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  }).filter(item => (item.name.toLowerCase().includes(searchFilter.toLowerCase())) );

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearchFilter(event.target.value);
    // console.log(searchFilter);
  }

  function handleFormSubmit(name, category) {
    setItems([...items, {id: uuid(), name: name, category: category}]);
  }

  ///////////////////

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList
