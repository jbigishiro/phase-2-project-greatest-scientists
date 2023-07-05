import React, { useState } from "react";

function Scientists({ people }) {
  const [showDetails, setShowDetails] = useState({});

  const handleToggle = (personId) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [personId]: !prevState[personId]
    }));
  };

  const scientistList = people.map((person) => (
    <li key={person.id}>
      <h3>
        {person.name}
      </h3>

      <img src={person.image} alt={person.name} />

      <div>
        <button onClick={()=> handleToggle(person.id)}>
          {showDetails[person.id] ? "Hide Details" : "Show Details"}
        </button>
        {showDetails[person.id]  && (
          <div>
             <h3> Lived:{person.year}</h3>
            <h3>Field: {person.field}</h3>
            <h3>Country of Origin: {person.country}  </h3>
            <p> <i><b>Description: </b></i> {person.description}  </p>
            
          </div>
        )}
      </div>
    </li>
  ));

  return (
    <div>
      <h2>Scientists</h2>
      <ul>{scientistList} </ul>
    </div>
  );
}

export default Scientists;
