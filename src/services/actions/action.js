import { ADD_TO_CART, REMOVE_TO_CART } from "../Constant";

const addToCart = (data) => {
  // console.log("action", data);
  return {
    type: ADD_TO_CART,
    data,
  };
};

const removeToCart = () => {
  // console.log("action");
  return {
    type: REMOVE_TO_CART,
  };
};

export { addToCart, removeToCart };
