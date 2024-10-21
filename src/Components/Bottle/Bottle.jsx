import React from "react";
import "./Bottle.css";
import PropTypes from "prop-types";
const Bottle = ({ bottle, handleAddToCart }) => {
  const { img, name, seller, stock, price } = bottle;
  return (
    <div className="bottle-container">
      <img className="bottle-img" src={img} alt="" />

      <h3>Bottle Name: {name}</h3>

      <p>Price: {price}</p>

      <p>Seller: {seller}</p>

      <p>Stock: {stock}</p>

      <button onClick={() => handleAddToCart(bottle)}>Parches</button>
    </div>
  );
};

Bottle.PropTypes = {
  bottle: PropTypes.object.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};
export default Bottle;
