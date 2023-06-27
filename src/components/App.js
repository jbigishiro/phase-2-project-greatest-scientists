import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Scientists from "./Scientists";
import Favorites from "./Favorites";
import MostRated from "./MostRated";
import Home from "./Home";
import {Footer} from "./Footer"

function App() {

  const [people, setPeople] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/scientists")
      .then((r) => r.json())
      .then((scientists) => setPeople(scientists));
  }, []);

  return (
    <div className="body">
      <NavBar />
      <Switch>
        <Route exact path="/scientists">
          <Scientists people={people} />
        </Route>

        <Route exact path="/most_rated">
          <MostRated />
        </Route>

        <Route exact path="/favorite">
          <Favorites />
        </Route>

        <Route exact path="/">
          <Home  people={people} />
        </Route>

      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
