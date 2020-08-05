import React, { useState } from "react";
import Cookies from "js-cookie";

import axios from "axios";

import { useHistory } from "react-router-dom";

const Login = ({ setUser }) => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://leboncoin-api.herokuapp.com/user/log_in",
        {
          email: email,
          password: password,
        }
      );
      if (response.data.token) {
        Cookies.set("token", response.data.token);

        setUser({ token: response.data.token });

        history.push("/");
      }
    } catch (error) {
      if (error.response.status === 401) {
        alert("Mauvais email et/ou mot de passe");
      }
    }
  };
  return (
    <div>
      Formulaire Connexion
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
