import React from "react";
import { useLocation } from "react-router-dom";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkoutform from "../components/Checkoutform";

const stripePromise = loadStripe(
  "pk_test_51HCscrFDoU6oyL7Cqg0wjM7QzvVOu4lDPDqutpldgS4uyvhUnGACci46qpCFKrRVjVJ7heBe5GUkEqJlmyl7kOGU00Xy8AS1jD"
);

const Payment = () => {
  const location = useLocation();
  console.log("location est egal a", location.state);
  const { title, price, picture } = location.state;
};
handleSubmit = async (event) => {
  event.preventDefault();

  return (
    <div style={{ marginLeft: 60 }}>
      {title}

      {price}
      <Elements stripe={stripePromise}>
        <Checkoutform title={title} price={price} picture={picture} />

        {picture}
      </Elements>
    </div>
  );
};
export default Payment;
