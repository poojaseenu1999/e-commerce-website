export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existing = cartItems.find((cartItem) => {
    return cartItem.id === cartItemToAdd.id;
  });
  if (existing) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const reduceItem = (cartItems, cartItemToRemove) => {
  const existing = cartItems.find((cartItem) => {
    return cartItem.id === cartItemToRemove.id;
  });
  if (existing.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
