import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleHiddenCart } from "../../store/cart/cartActions";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.scss";
import { selectCartItemsCount } from "../../store/cart/cartSelector";
const CartIcon = ({ toggleHiddenCart, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleHiddenCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleHiddenCart: () => dispatch(toggleHiddenCart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
