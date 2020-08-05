import React from "react";
import { Link, useHistory } from "react-router-dom";
import Cookies from "js-cookie";

const Header = ({ user, setUser }) => {
  const history = useHistory();
  console.log(history);
  return (
    <div style={{ padding: 100 }}>
      {user === null ? (
        <Link to="/login">Se connecter</Link>
      ) : (
        <button
          onClick={() => {
            Cookies.remove("token");

            setUser(null);

            history.push("/login");
          }}
        >
          Se déconnecter
        </button>
      )}
    </div>
  );
};

export default Header;
