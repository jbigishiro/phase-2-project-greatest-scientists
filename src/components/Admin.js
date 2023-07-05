import React from "react";
import AddScientist from "./AddScientist";
import DeleteScientist from "../data/DeleteScientist";

function Admin() {
  return (
    <div>
      <DeleteScientist />
      <AddScientist />
    </div>
  );
}

export default Admin;
