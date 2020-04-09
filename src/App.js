import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/shop";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import Checkout from "./pages/checkout/checkout";
import Header from "./component/header/header";
import { setCurrentUser } from "./store/user/userActions";
import { selectCurrentUser } from "./store/user/userSelector";
import { auth, createUserProfileDocument } from "./firebase/firebase-utils";

const App = (props) => {
  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      const userRef = await createUserProfileDocument(userAuth);
      if (userAuth) {
        userRef.onSnapshot((snapshot) => {
          props.setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        props.setCurrentUser(userAuth);
      }
    });
  }, []);
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={Checkout} />
        <Route
          exact
          path="/signin"
          render={() =>
            props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
