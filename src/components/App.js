import React from "react";
import scientists from "../data/db.json"
import Navbar from "./Navbar"
import Scientists from "./Scientists"
import Favorites from "./Favorites"
import MostRated from "./MostRated"

function App() {
  return (
    <div>
    Welcome to my app
    <Navbar/>
    <Scientists/>
    <Favorites/>
    <MostRated/>
    </div>
  );
}

export default App;
