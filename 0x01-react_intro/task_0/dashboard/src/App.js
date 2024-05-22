import React from "react";
import getFullYear from "./utils";
import getFooterCopy from "./utils";

import logo from "./holberton-logo.jpg";
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
      </div>
      <div className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(false)}
        </p>
      </div>
    </div>
  );
}

export default App;
