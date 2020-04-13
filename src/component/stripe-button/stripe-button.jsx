import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const finalPrice = price * 100;
  const publishableKey = "pk_test_IMOXgHieZaK0pjbbh4XRFrse00oMX9XPLX";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Ecom-CLothing"
      billingAddress
      shippingAddress
      image="https://freesvg.org/img/GoGreenShoppingBag.png"
      description={`your total is $ ${price}`}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
