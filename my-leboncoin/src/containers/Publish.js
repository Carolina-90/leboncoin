import React, { useState } from "react";
import Cookies from "js-cookie";
import { Redirect } from "react-router-dom";

import axios from "axios";

const Publish = () => {
  const token = Cookies.get("token");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("file", file);

    const response = await axios.post(
      "https://leboncoin-api.herokuapp.com/offer/publish",
      formData,
      { headers: { authorization: "Bearer " + token } }
    );
    console.log(response.data);
  };

  return token ? (
    <div style={{ marginLeft: 100 }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <br />
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <br />
        <input
          value={price}
          type="number"
          onChange={(event) => setPrice(event.target.value)}
        />
        <br />
        <input
          type="file"
          onChange={(event) => setFile(event.target.files[0])}
        />
        <br />
        <input type="submit" value="Valider" />
      </form>
    </div>
  ) : (
    <Redirect to="login" />
  );
};

export default Publish;
