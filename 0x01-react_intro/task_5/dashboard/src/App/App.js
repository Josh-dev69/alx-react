import React from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";
import logo from "../../assets/holberton-logo.jpg";
import "./App.css";

function App() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} alt="holberton logo" height="200" width="200" />
        <h1>School dashboard</h1>
      </header>
      <hr />
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        <button type="button">OK</button>
      </div>
      <div className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </div>
    </div>
  );
}

export default App;
