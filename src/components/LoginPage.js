import React, { useState } from "react";

export default function LoginPage({ setActiveUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  return (
    <div>
      <div>
        <label htmlFor="Username">Username</label>
        <input
          id="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        {error &&
          username.length < 4 &&
          "Username must be atleast than 4 characters"}
      </div>
      <div>
        <label htmlFor="Password">Password</label>
        <input
          id="password"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        {error &&
          password.length < 4 &&
          "Password must be atleast than 4 characters"}
      </div>
      <button
        onClick={() => {
          if (username.length < 4 || password.length < 4) {
            setError(true);
            return;
          }
          setActiveUser(username);
        }}
      >
        Login
      </button>
    </div>
  );
}
