import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>User Login</h2>
        <label>
          Username <span>*</span>
          <input type="text" value={username} onChange={e=>setUsername(e.target.value) } />
        </label>{" "}
        <br />
        <label>
          Password <span>*</span>
          <input type="password" value={password} onChange={e=>setPassword(e.target.value) }/>
        </label>{" "}
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
