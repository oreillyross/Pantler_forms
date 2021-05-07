import "./styles.css";
// import "./debug.css";
import React, { useState } from "react";
import { TextInput } from "@mantine/core"

import sorter from "@faktor10/sorter";

console.log(sorter())

export default function App() {
  const [ingredientName, setIngredientName] = useState("");

  return (
    <div className="App">
      <h1>Pantler - forms</h1>

      <form>
        <label>
          Ingredient name
          <TextInput
            id="ingredient_name"
            name="ingredient_name"
            value={ingredientName}
            onChange={(e) => setIngredientName(e.target.value)}
          />
        </label>
        <label>
          Quantity
          <TextInput type="number" name="ingredient_quantity" />
        </label>
        <button
          type="button"
          name="submitButton"
          onClick={() => {
            console.log(ingredientName);
          }}
        >
          Check
        </button>
      </form>
    </div>
  );
}
