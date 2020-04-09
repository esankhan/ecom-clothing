import React, { useState } from "react";

import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { auth, signInWithGoogle } from "../../firebase/firebase-utils";

import "./sign-in.scss";

const SignIn = () => {
  const [signIn, setSignIn] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = signIn;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setSignIn({ ...signIn, email: "", password: "" });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setSignIn({ ...signIn, [name]: value });
  };
  return (
    <div className="sign-in">
      <h2>I already have a account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={signIn.email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={signIn.password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In with google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
