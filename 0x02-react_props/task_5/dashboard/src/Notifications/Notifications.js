import React from "react";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import "./Notifications.css";

function btnClick() {
  console.log("Close button has been clicked");
}

function Notification({ displayDrawer, listNotifications }) {
  return (
    <>
      <div className="wrapper">
        <div className="menuItem">
          <p>Your notifications</p>
        </div>
        {displayDrawer && (
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
              {listNotifications.length === 0 ? (
                <li>No new notification for now</li>
              ) : (
                listNotifications.map(({ id, html, type, value }) => (
                  <NotificationItem
                    key={id}
                    type={type}
                    html={html}
                    value={value}
                  />
                ))
              )}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

Notification.defaultProps = {
  displayDrawer: true,
  listNotifications: [],
};

Notification.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notification;
