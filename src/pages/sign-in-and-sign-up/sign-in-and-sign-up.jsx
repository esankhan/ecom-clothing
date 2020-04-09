import React from "react";

import SignIn from "../../component/sign-in/sign-in";
import SignUp from "../../component/sign-up/sign-up";
import "./sign-in-and-sign-up.scss";

const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
