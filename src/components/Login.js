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
    <div className="login">
      <h2 >Admin Login</h2>

      <div className="loginForm " >
      <p style={{ color: "red" }}>{errorMessage}</p>
      <form onSubmit={handleSubmit}>
        <input className="loginInput"
          type="text"
          placeholder="Enter username"
          value={username}
          autoComplete="off"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />  <br />

        <input className="loginInput"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />  <br />

        <button id="button"  type="submit">Login</button>
      </form>
      </div>
    </div>
  );
}
