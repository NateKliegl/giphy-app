import React, { useState } from "react";
import { CLEAR_SEARCH, CLEAR_USER, SET_USER } from "../shared/rootReducer";
export default function LoginPage({ dispatch }) {
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
          dispatch({ type: SET_USER, user: username });
        }}
      >
        Login
      </button>
    </div>
  );
}
