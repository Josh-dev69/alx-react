import {
  markAsAread,
  setNotificationFilter,
} from "./notificationActionCreators";

import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";
describe("Test for notificationActionCreator", () => {
  it("test for markRead", () => {
    const result = {
      type: MARK_AS_READ,
      index: 1,
    };
    expect(markAsAread(1)).toEqual(result);
  });

  it("test fot setNotificationFilter", () => {
    const result = {
      type: SET_TYPE_FILTER,
      filter: "DEFAULT",
    };
    expect(setNotificationFilter("DEFAULT")).toEqual(result);
  });
});
