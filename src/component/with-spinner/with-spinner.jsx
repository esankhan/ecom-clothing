import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner-style";

const WithSpinner = (WrappedComponent) => {
  console.log();
  const Spinner = ({ loading, ...otherProps }) => {
    return loading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;
