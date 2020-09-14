import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Navgation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navgation />
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </div>
  );
}

export default App;
