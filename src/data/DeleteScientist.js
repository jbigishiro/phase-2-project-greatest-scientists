import React, { useState } from "react";
import axios from "axios";

const DeleteScientist = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [scientists, setScientists] = useState([]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchScientist = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:3001/scientists?name_like=${searchTerm}`
      );

      setScientists(response.data);
    } catch (error) {
      console.error("Error searching scientists:", error);
      setScientists([]);
    }
  };

  const handleDeleteScientist = async (scientistId) => {
    try {
      await axios.delete(`http://localhost:3001/scientists/${scientistId}`);

      console.log("Scientist deleted:", scientistId);

      // Remove the deleted scientist from the state
      setScientists((prevScientists) =>
        prevScientists.filter((scientist) => scientist.id !== scientistId)
      );
    } catch (error) {
      console.error("Error deleting scientist:", error);
    }
  };

  return (
    <div>
      <h2>Delete Scientist</h2>
      <form onSubmit={handleSearchScientist}>
        <label>
          Search by Name:
          <input type="text" value={searchTerm} onChange={handleSearchChange} />
        </label>
        <br />
        <button type="submit">Search</button>
      </form>

      {scientists.length > 0 ? (
        <div>
          <h3>Search Results:</h3>
          {scientists.map((scientist) => (
            <div key={scientist.id}>
              <p>Name: {scientist.name}</p>
              <button onClick={() => handleDeleteScientist(scientist.id)}>
                Delete Scientist
              </button>
              <hr />
            </div>
          ))}
        </div>
      ) : (
        <p>No scientists found.</p>
      )}
    </div>
  );
};

export default DeleteScientist;
