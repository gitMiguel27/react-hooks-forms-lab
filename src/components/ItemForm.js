import React, { useState } from "react";

function ItemForm({ onItemFormSubmit }) {
  const [newItemName, setNewItemName] = useState('');
  const [newItemCategory, setNewItemCategory] = useState('Produce');

  function handleNameChange(event) {
    setNewItemName(event.target.value);
  }

  function handleCategoryChange(event) {
    setNewItemCategory(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onItemFormSubmit(newItemName, newItemCategory);
    setNewItemName('');
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit} >
      <label>
        Name:
        <input type="text" name="name" value={newItemName} onChange={handleNameChange} />
      </label>

      <label>
        Category:
        <select name="category" value={newItemCategory} onChange={handleCategoryChange} >
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
