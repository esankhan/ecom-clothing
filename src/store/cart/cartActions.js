import cartTypes from "./cartTypes";

export const toggleHiddenCart = () => ({
  type: cartTypes.TOGGLE_CART_HIDDEN,
});

export const addCartItem = (item) => ({
  type: cartTypes.ADD_CART_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: cartTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const removeCartItem = (item) => ({
  type: cartTypes.REMOVE_CART_ITEM,
  payload: item,
});

export const clearCart = () => ({
  type: cartTypes.CLEAR_CART,
});
