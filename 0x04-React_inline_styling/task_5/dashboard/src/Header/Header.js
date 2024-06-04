import React from "react";
import { StyleSheet, css } from "aphrodite";
import logo from "../../assets/holberton-logo.jpg";
import "./Header.css";
const style = StyleSheet.create({
  hr: {
    fontWeight: "800",
    height: "0.3rem",
    backgroundColor: "rgb(226, 70, 70)",
    outline: "none",
    border: "none",
  },
});
function Header() {
  return (
    <>
      <header className="App-header">
        <img src={logo} alt="holberton logo" height="200" width="200" />
        <h1>School dashboard</h1>
      </header>
      <hr className={css(style.hr)} />
    </>
  );
}

export default Header;
