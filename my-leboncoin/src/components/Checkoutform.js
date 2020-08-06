import React from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

import Cookies from "js-cockie";

const Checkoutform = ({ title, price, picture }) => {
  const stripe = useStripe();
  const elements = useElements();

  const token = Cookies.get("token");

  handleSubmit = async ({ event }) => {
    event.preventDefault();
    const cardElement = elements.getElement(CardElement);

    const stripeResponse = await stripe.createToken(cardElement, {
      name: token,
    });
    console.log(stripeResponse);

    const response = await axios.post(
      "https://leboncoin-api.herokuapp.com/payment",
      {
        token: stripeResponse.token.id,
        title: title,
        price: price,
        picture: picture,
      }
    );
  };

  return (
    <from onSubmit={handleSubmit}>
      <button type="submit"> Valider </button>
    </from>
  );
};
export default Checkoutform;
