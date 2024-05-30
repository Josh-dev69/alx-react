import React from "react";
import { getLatestNotification } from "../utils/utils";
import "./Notifications.css";

function btnClick() {
  console.log("Close button has been clicked");
}

function Notification() {
  return (
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
        <li data-priority="default">New course Available</li>
        <li data-priority="urgent">New resume Available</li>
        <li
          dangerouslySetInnerHTML={{ __html: `${getLatestNotification()}` }}
        />
      </ul>
    </div>
  );
}

export default Notification;
