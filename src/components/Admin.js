import React from "react";
import AddScientist from "./AddScientist";
import DeleteScientist from "../data/DeleteScientist";

function Admin() {
  return (
    <div  className="admin" >
 <AddScientist />

      <DeleteScientist />
      
     
    </div>
  );
}

export default Admin;
