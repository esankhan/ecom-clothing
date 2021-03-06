import cartTypes from "./cartTypes";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartTypes.ADD_CART_ITEM: {
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    }
    case cartTypes.CLEAR_ITEM_FROM_CART: {
      return {
        ...state,
        cartItems: clearItemFromCart(state.cartItems, action.payload),
      };
    }

    case cartTypes.REMOVE_CART_ITEM: {
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    }

    case cartTypes.CLEAR_CART: {
      return {
        ...state,
        cartItems: [],
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
