import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios'

const StripeButton = ({ price }) => {
  const finalPrice = price * 100;
  const publishableKey = "pk_test_IMOXgHieZaK0pjbbh4XRFrse00oMX9XPLX";

  const onToken = (token) => {
  axios({
    url:'payment',
    method:'POST',
    data:{
      amount:finalPrice,
      token
    }
  }).then(response=>{
    alert('Payment SuccessFul')
  }).catch(error=>{
    console.log('Payment Error '+JSON.parse(error))
    alert('There was an issue with the payment')
  })
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
      amount={finalPrice}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
