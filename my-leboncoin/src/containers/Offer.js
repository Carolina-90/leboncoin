import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import axios from "axios";

const Offer = () => {
  const params = useParams();

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://leboncoin-api.herokuapp.com/offer/${params.id}`
      );
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [params.id]);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div>
      <p>{data.title}</p>
      <p>{data.description}</p>
      <button
        onClick={() => {
          hystory.push("/payment", {
            title: data.title,
            price: data.price,
            picture: data.picture,
          });
        }}
      >
        Acheter
      </button>
    </div>
  );
};

export default Offer;
