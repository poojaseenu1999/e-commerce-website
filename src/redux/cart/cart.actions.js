import { cartTypes } from "./cart.types";

export const toggleCart = () => ({
  type: cartTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: cartTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: cartTypes.REMOVE_ITEM,
  payload: item,
})

export const reduceItem = (item) => ({
  type: cartTypes.REDUCE_ITEM,
  payload: item,
})