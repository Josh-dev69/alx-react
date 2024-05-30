import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notification from "../Notifications/Notifications";
import "./App.css";
import CourseList from "../CourseList/CourseList";
import PropTypes from "prop-types";

function App({ isLoggedIn }) {
  return (
    <>
      <Notification />
      <div className="App">
        <Header />
        {isLoggedIn ? <CourseList /> : <Login />}
        <Footer />
      </div>
    </>
  );
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
