import React from "react";
import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test("year output", function () {
  expect(getFullYear()).toBe(2024);
});

test("getfootercopy with false input", function () {
  expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});

test("getfootercopy with true input", function () {
  expect(getFooterCopy(true)).toBe("Holberton School");
});

test("getLatestNotification function", () => {
  const expectedNotification =
    "<p><strong>Urgent requirement</strong> - complete by EOD</p>";
  expect(getLatestNotification()).toEqual(expectedNotification);
});
