import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Offers = () => {
  const [data, setdata] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fechData = async () => {
    const response = await axios.get(
      "https://leboncoin-api.herokuapp.com/offer/with-count"
    );
    setdata(response.data);
    setIsLoading(false);
  };
  useEffect(() => {
    fechData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div>
      {data.offers.map((offer, index) => {
        return (
          <Link key={offer._id} to={`/offer/${offer._id}`}>
            <div
              style={{ border: "1px solid black", width: 600, marginLeft: 70 }}
            >
              <p>{offer.title}</p>
              <p>{offer.price}</p>
              <p>{new Date(offer.created).toLocaleString()} </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Offers;
