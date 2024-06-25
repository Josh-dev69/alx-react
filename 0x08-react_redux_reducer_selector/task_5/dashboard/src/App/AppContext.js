import React, { createContext } from "react";

const user = {
  email: "",
  password: "",
  isLoggedIn: false,
};

const logOut = () => {};

const AppContext = createContext({
  user: user,
  logOut: logOut,
});

export default AppContext;
