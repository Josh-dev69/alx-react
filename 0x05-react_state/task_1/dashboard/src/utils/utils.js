import React from "react";

function getFullYear() {
  return new Date().getFullYear();
}

function getFooterCopy(isIndex) {
  return isIndex ? "Holberton School" : "Holberton School main dashboard";
}

function getLatestNotification() {
  return "<p><strong>Urgent requirement</strong> - complete by EOD</p>";
}

console.log(getLatestNotification());

export { getFullYear, getFooterCopy, getLatestNotification };
