import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
} from "./uiActionCreators";
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN,
  LOGOUT,
} from "./uiActionTypes";

describe("test for uiActionCreators", () => {
  it("test for login", () => {
    const email = "test@gmail.com";
    const password = "password";
    expect(login(email, password)).toEqual({
      type: LOGIN,
      user: { email: "test@gmail.com", password: "password" },
    });
  });

  it("test for logout", () => {
    expect(logout()).toEqual({ type: LOGOUT });
  });

  it("test for notification drawer", () => {
    expect(displayNotificationDrawer()).toEqual({
      type: DISPLAY_NOTIFICATION_DRAWER,
    });
  });

  it("test for hide Notification", () => {
    expect(hideNotificationDrawer()).toEqual({
      type: HIDE_NOTIFICATION_DRAWER,
    });
  });
});
