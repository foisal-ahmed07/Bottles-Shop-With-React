import "./Cart.css";
import PropTypes from "prop-types";
const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div>
      <h3>Bottles Added: {cart.length}</h3>
      <div className="cart-container">
        {cart.map((Bottle) => (
          <div key={Bottle.id}>
            <img src={Bottle.img}></img>
            <button onClick={() => handleRemoveFromCart(Bottle.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

Cart.PropTypes = {
  cart: PropTypes.array.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired
};
export default Cart;
