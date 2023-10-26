import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // Create a state variable and a function to update it
  const [isDarkMode, setDarkMode]= useState(false);
  // this will be used for the Dark Mode Toggle feature
  // Function to toggle dark mode
  const toggleDarkMode =()=>{
    setDarkMode(!isDarkMode);
  }
  // Conditionally set the class name for the 'div' based on the state
  const appClass = isDarkMode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
