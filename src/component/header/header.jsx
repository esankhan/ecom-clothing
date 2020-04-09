import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./header.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase-utils";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { selectCartHidden } from "../../store/cart/cartSelector";
import { selectCurrentUser } from "../../store/user/userSelector";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div
            className="option"
            onClick={() => {
              auth.signOut();
            }}
          >
            SIGN OUT
          </div>
        ) : (
          <Link to="/signin" className="option">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {!hidden && <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
