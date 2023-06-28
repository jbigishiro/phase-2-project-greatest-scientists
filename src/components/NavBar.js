import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",

  padding: "6px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>

      <NavLink
        to="/scientists"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Greatest Scientists
      </NavLink>

      <NavLink
        to="/high_rated"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        High Rated Scientists
      </NavLink>

      <NavLink
        to="/favorite"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        My Favorite Scientists
      </NavLink>
    </div>
  );
}

export default NavBar;