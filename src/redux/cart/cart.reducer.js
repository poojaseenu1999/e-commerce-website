import { cartTypes } from "./cart.types";
import { addItemToCart, reduceItem } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case cartTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case cartTypes.REDUCE_ITEM:
      return {
        ...state,
        cartItems: reduceItem(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};
