import React, { useState } from "react";
import axios from "axios";

const AddScientist = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");
  const [country, setCountry] = useState("");
  const [field, setField] = useState("");

  const handleAddScientist = async (e) => {
    e.preventDefault();

    try {
      const newScientist = {
        name,
        image,
        description,
        year,
        country,
        field,
      };

      const response = await axios.post(
        "http://localhost:3001/scientists",
        newScientist
      );

      console.log("New scientist added:", response.data);

      // Reset form fields
      setName("");
      setField("");
      setImage("");
      setYear("");
      setCountry("");
      setDescription("");
    } catch (error) {
      console.error("Error adding scientist:", error);
    }
  };

  return (
    <div>
      <h2>Add Scientist</h2>
      <form onSubmit={handleAddScientist}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Image:
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <label>
          Year:
          <input
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </label>
        <br />
        <label>
          Country:
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </label>
        <br />
        <label>
          Field:
          <input
            type="text"
            value={field}
            onChange={(e) => setField(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Add Scientist</button>
      </form>
    </div>
  );
};

export default AddScientist;
