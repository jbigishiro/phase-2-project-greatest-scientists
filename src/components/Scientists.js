import React, { useEffect, useState } from "react";

function Scientists() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/scientists")
      .then((r) => r.json())
      .then((scientists) => setPeople(scientists));
  }, []);

  const scientistList = people.map((person) => (
    <li key={person.id}>
      <h3>{person.name}</h3>
      <img scr={person.image} alt={person.name} />
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
