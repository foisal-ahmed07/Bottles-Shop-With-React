import { jsx } from "react/jsx-runtime";

const getStoredCart = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    return JSON.parse(storedCartString);
  }
  return [];
};

const saveCartToLs = (cart) => {
  const cartStringiFied = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringiFied);
};
const addToLs = (id) => {
  const cart = getStoredCart();
  cart.push(id);
  saveCartToLs(cart);
};

const removeLocalStorage = (id) => {
  const cart = getStoredCart();
  const remaing = cart.filter((idx) => idx !== id);
saveCartToLs(remaing)
};

export { addToLs, getStoredCart, removeLocalStorage };
