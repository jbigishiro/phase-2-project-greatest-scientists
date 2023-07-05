import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setErrorMessage("");
  }, [username, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername("");
    setPassword("");

    validateCredentials(username, password)
      .then((isValid) => {
        if (isValid) {
          history.push("/admin");
        } else {
          setErrorMessage("Invalid username or password");
        }
      })
      .catch((error) => {
        setErrorMessage("Invalid username or password");
      });
  };

  const validateCredentials = async (username, password) => {
    try {
      const response = await axios.get("http://localhost:3001/adminLogin");
      const adminLogin = response.data;
  
      const admin = adminLogin.find(
        (admin) =>
          admin.username === username && admin.password === password
      );
  
      return admin != null;
    } catch (error) {
      console.error(error);
      return false;
    }
  };
  
  return (
    <div>
      <h2>User Login</h2>
      <p style={{ color: "red" }}>{errorMessage}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          autoComplete="off"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
