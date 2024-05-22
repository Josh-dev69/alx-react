import React from "react";
import { renderToString } from "react-dom/server";

function getFullYear() {
  return new Date().getFullYear();
}

function getFooterCopy(isIndex) {
  return isIndex ? "Holberton School" : "Holberton School main dashboard";
}

function getLatestNotification() {
  return renderToString(
    <p>
      <strong>Urgent requirement</strong> - complete by EOD
    </p>
  );
}

export { getFullYear, getFooterCopy, getLatestNotification };
