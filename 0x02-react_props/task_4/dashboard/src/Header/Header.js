import React from "react";
import logo from "../../assets/holberton-logo.jpg";
import "./Header.css";
function Header() {
  return (
    <>
      <header className="App-header">
        <img src={logo} alt="holberton logo" height="200" width="200" />
        <h1>School dashboard</h1>
      </header>
      <hr />
    </>
  );
}

export default Header;
