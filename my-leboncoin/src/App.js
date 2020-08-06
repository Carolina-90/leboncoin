import React from "react";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Offers from "./containers/Offerss";
import Offer from "./containers/Offer";
import LogIn from "./containers/LogIn";
import Publish from "./containers/Publish";
import Payment from "./containers/Payment";
import Header from "./components/Header";

import Cookies from "js-cookie";

function App() {
  const token = Cookies.get("token");

  const [user, setUser] = useState(token || null);

  return (
    <div className="App">
      <Router>
        <Header user={user} setUser={setUser} />
        <Switch>
          <Route path="/offer/:id/">
            <Offer />
          </Route>
          <Route path="/login">
            <LogIn setUser={setUser} />
          </Route>
          <Route path="/publish">
            <LogIn setUser={setUser} />
          </Route>
          <Route path="/payment">
            <LogIn setUser={setUser} />
          </Route>

          <Route exact path="/">
            <Offers />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
