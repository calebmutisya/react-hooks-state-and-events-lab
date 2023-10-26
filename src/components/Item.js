import React,{useState} from "react";

function Item({ name, category }) {
  // Create a state variable to track whether the item is in the cart or not
  const [inCart, setInCart]= useState(false);
  // Function to handle adding or removing the item from the cart
  const toggleCartStatus=()=>{setInCart(!inCart)};
  return (
    <li className={inCart ? "in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleCartStatus}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
