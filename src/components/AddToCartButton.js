import React from "react";

function AddToCartButton({ onClick }) {
  return (
    <button className="add" onClick={onClick}>
      Add to Cart
    </button>
  );
}

export default AddToCartButton;