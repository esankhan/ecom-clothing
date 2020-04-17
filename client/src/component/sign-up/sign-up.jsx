import React, { useState } from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { signUpStart } from "../../store/user/userActions";

import "./sign-up.scss";

const SignUp = ({ signUpStart }) => {
  const [register, setRegister] = useState({
    displayName: "",
    email: "",
    password: "",
    consfirmPassword: "",
  });
  const { displayName, email, password, consfirmPassword } = register;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegister({ ...register, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== consfirmPassword) {
      alert("Password don't match");
      return;
    }
    signUpStart({ email, password, displayName });
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

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
