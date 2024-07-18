// Redux/actions/cartActions.js

import { ADD_TO_CART } from "./actionsType";

export const addToCart = (product, quantity) => {
  return {
    type: ADD_TO_CART,
    payload: {
      product,
      quantity,
    },
  };
};
