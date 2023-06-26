import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Scientists from "./Scientists";
import Favorites from "./Favorites";
import MostRated from "./MostRated";
import Home from "./Home";
import {Footer} from "./Footer"

function App() {
  return (
    <div className="body">
      <NavBar />
      <Switch>
        <Route exact path="/scientists">
          <Scientists />
        </Route>
        <Route exact path="/most_rated">
          <MostRated />
        </Route>
        <Route exact path="/favorite">
          <Favorites />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
