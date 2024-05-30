import React from "react";
import NotificationItem from "./NotificationItem";
import { getLatestNotification } from "../utils/utils";
import PropTypes from "prop-types";
import "./Notifications.css";

function btnClick() {
  console.log("Close button has been clicked");
}

function Notification({ displayDrawer }) {
  return (
    <>
      <div className="wrapper">
        <div className="menuItem">Your notifications</div>
        {displayDrawer && ( // Render div.Notification only if displayDrawer is true
          <div className="Notification">
            <p>Here is the list of notifications</p>
            <button
              style={{
                position: "absolute",
                top: "0.8rem",
                right: "0.4rem",
                border: "none",
                outline: "none",
                background: "transparent",
                fontWeight: "bold",
                fontSize: "1.2rem",
              }}
              aria-label="Close"
              onClick={btnClick}
            >
              x
            </button>
            <ul>
              <NotificationItem type="urgent" value="New course Available" />
              <NotificationItem type="urgent" value="New resume Available" />
              <NotificationItem html={{ __html: getLatestNotification() }} />
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

Notification.defaultProps = {
  displayDrawer: true,
};

Notification.propTypes = {
  displayDrawer: PropTypes.bool,
};

export default Notification;
