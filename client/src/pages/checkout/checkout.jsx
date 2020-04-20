import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cartSelector";
import {
  selectCurrentUser
} from "../../store/user/userSelector";

import CheckoutItem from "../../component/checkout-item/checkout-item";
import "./checkout.scss";
import StripeButton from "../../component/stripe-button/stripe-button";

const Checkout = ({ cartItems, cartTotal,currentUser }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${cartTotal}</div>
      {cartTotal!==0 && currentUser ? <StripeButton price={cartTotal} />:null}
      {!currentUser &&<div className="header-block">
          <span>Please Login to Purchase items</span>
        </div>
      }
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
  currentUser:selectCurrentUser

});

export default connect(mapStateToProps, null)(Checkout);
