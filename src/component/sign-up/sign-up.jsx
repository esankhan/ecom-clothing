import React, { useState } from "react";

import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { auth, createUserProfileDocument } from "../../firebase/firebase-utils";

import "./sign-up.scss";

const SignUp = () => {
  const [register, setRegister] = useState({
    displayName: "",
    email: "",
    password: "",
    consfirmPassword: "",
  });
  const { displayName, email, password, consfirmPassword } = register;

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name);
    setRegister({ ...register, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== consfirmPassword) {
      alert("Password don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      createUserProfileDocument(user, { displayName });
      setRegister({
        displayName: "",
        email: "",
        password: "",
        consfirmPassword: "",
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>

      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="consfirmPassword"
          value={consfirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
