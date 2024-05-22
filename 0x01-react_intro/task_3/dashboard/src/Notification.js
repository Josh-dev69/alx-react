import React from "react";
import { getLatestNotification } from "./utils";
import "./Notification.css";

function btnClick() {
  console.log("Close button has been clicked");
}

function Notification() {
  return (
    <div className="Notification">
      <p>Here is the list of notifications</p>
      <button
        style={{ display: "inline", float: "right" }}
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

export { Notification };
