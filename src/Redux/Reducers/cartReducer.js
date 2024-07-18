import { ADD_TO_CART } from "../actions/actionsType";

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = action.payload;
      const existItem = state.cart.find(x => x.product._id === newItem.product._id);

      if (existItem) {
        return {
          ...state,
          cart: state.cart.map(x =>
            x.product._id === existItem.product._id
              ? { ...x, quantity: x.quantity + newItem.quantity }
              : x
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, newItem],
        };
      }
    default:
      return state;
  }
};

export default cartReducer;
