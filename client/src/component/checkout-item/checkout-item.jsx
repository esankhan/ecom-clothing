import React from "react";

import { connect } from "react-redux";
import {
  clearItemFromCart,
  addCartItem,
  removeCartItem,
} from "../../store/cart/cartActions";
import "./checkout-item.scss";

const CheckoutItem = ({
  cartItem,
  clearItemFromCart,
  addCartItem,
  removeCartItem,
}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeCartItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addCartItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (cartItem) => dispatch(clearItemFromCart(cartItem)),
  addCartItem: (cartItem) => dispatch(addCartItem(cartItem)),
  removeCartItem: (cartItem) => dispatch(removeCartItem(cartItem)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
