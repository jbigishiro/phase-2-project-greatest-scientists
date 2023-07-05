import React from "react";
import AddScientist from "./AddScientist";
import DeleteScientist from "../data/DeleteScientist";

function Admin() {
  return (
    <div>
      <h2>Administor Page</h2>
      <DeleteScientist />
      <AddScientist />
    </div>
  );
}

export default Admin;
