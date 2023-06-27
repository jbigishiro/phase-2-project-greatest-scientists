import React, { useEffect, useState } from "react";

const Home = ({ people }) => {
  const [randomScientist, setRandomScientist] = useState(null);

  useEffect(() => {
    const scientistArray = people;
    const randomIndex = Math.floor(Math.random() * scientistArray.length);
    const selectedScientist = scientistArray[randomIndex];
    setRandomScientist(selectedScientist);
  }, [people]);

  if (randomScientist === null || randomScientist === undefined) {
    return <h2>Loading ...</h2>;
  }

  return (
    <div className="home">
      <h1> This is One of the Greatest Scientists </h1>
      <h2>{randomScientist.name}</h2>
      <h3> Lived {randomScientist.year}</h3>
      <img  className="homeImage"   src={randomScientist.image} alt={randomScientist.name} />
      <p>
        Country: <b>{randomScientist.country}</b>
      </p>
      <p>
        Field: <b>{randomScientist.field}</b>
      </p>
      <div className="homeList">
        <h4> Achievements</h4>
        <ul>
          {randomScientist.achievements.map((achievement) => (
            <li key={achievement}>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
