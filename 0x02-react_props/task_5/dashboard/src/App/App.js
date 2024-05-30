import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications"; // Corrected import
import "./App.css";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";
import PropTypes from "prop-types";

function App({ isLoggedIn }) {
  const listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];

  const listNotifications = [
    { id: 1, type: "urgent", value: "New course Available" },
    { id: 2, type: "urgent", value: "New resume Available" },
    { id: 3, type: "default", html: { __html: getLatestNotification() } },
  ];

  return (
    <>
      {/* Corrected the prop name to listNotifications and the component name to Notifications */}
      <Notifications listNotifications={listNotifications} />
      <div className="App">
        <Header />
        {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
        <Footer />
      </div>
    </>
  );
}

App.defaultProps = {
  isLoggedIn: true,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
