import CartItem from "../../component/cart-item/cart-tem";

export const addItemToCart = (cartItems, newItem) => {
  const itemExist = cartItems.find((cartItem) => cartItem.id === newItem.id);
  if (itemExist) {
    return cartItems.map((cartItem) =>
      cartItem.id === newItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : { ...cartItem }
    );
  }

  return [...cartItems, { ...newItem, quantity: 1 }];
};

export const clearItemFromCart = (cartItems, removeableItem) => {
  return [...cartItems.filter((cartItem) => cartItem.id !== removeableItem.id)];
};

export const removeItemFromCart = (cartItems, removeableItem) => {
  if (removeableItem.quantity === 1) {
    return [
      ...cartItems.filter((cartItem) => cartItem.id !== removeableItem.id),
    ];
  } else {
    return cartItems.map((cartItem) =>
      cartItem.id === removeableItem.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : { ...cartItem }
    );
  }
};
