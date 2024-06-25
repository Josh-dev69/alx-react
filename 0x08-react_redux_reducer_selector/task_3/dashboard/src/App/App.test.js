import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import AppContext from "../App/AppContext";

StyleSheetTestUtils.suppressStyleInjection();

describe("App tests", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should render Header component", () => {
    expect(wrapper.find("Header").exists()).toBe(true);
  });

  it("should render Footer component", () => {
    expect(wrapper.find("Footer").exists()).toBe(true);
  });

  it("does not render CourseList if logged out", () => {
    expect(wrapper.find("CourseList").exists()).toBe(false);
  });

  it("renders CourseList if logged in", () => {
    wrapper.setState({ user: { isLoggedIn: true } });
    expect(wrapper.find("CourseList").exists()).toBe(true);
  });

  it("initial state for displayDrawer is false", () => {
    expect(wrapper.state("displayDrawer")).toBe(false);
  });

  it("handleDisplayDrawer updates state to true", () => {
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state("displayDrawer")).toBe(true);
  });

  it("handleHideDrawer updates state to false", () => {
    wrapper.setState({ displayDrawer: true });
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state("displayDrawer")).toBe(false);
  });

  it("updates state correctly when logIn function is called", () => {
    const email = "test@example.com";
    const password = "password";
    wrapper.find(AppContext.Provider).prop("value").logIn(email, password);
    expect(wrapper.state("user")).toEqual({
      email: email,
      password: password,
      isLoggedIn: true,
    });
  });

  it("updates state correctly when logOut function is called", () => {
    wrapper.setState({
      user: {
        email: "test@example.com",
        password: "password",
        isLoggedIn: true,
      },
    });
    wrapper.find(AppContext.Provider).prop("value").logOut();
    expect(wrapper.state("user")).toEqual({
      email: "",
      password: "",
      isLoggedIn: false,
    });
  });
});

describe("App tests", () => {
  let wrapper;
  let logOutMock;
  let alertSpy;

  beforeEach(() => {
    logOutMock = jest.fn();
    alertSpy = jest.spyOn(window, "alert").mockImplementation(() => {});
    wrapper = shallow(<App logOut={logOutMock} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
    alertSpy.mockRestore();
  });

  it("calls logOut function and displays alert on Ctrl+h when pressed", () => {
    const event = new KeyboardEvent("keydown", {
      ctrlKey: true,
      key: "h",
    });
    document.dispatchEvent(event);

    expect(logOutMock).toHaveBeenCalled();

    expect(window.alert).toHaveBeenCalledWith("Logging you out");
  });

  it("should mark notification as read", () => {
    const mockNotifications = [
      { id: 1, type: "urgent", value: "Notification 1" },
      { id: 2, type: "urgent", value: "Notification 2" },
      { id: 3, type: "default", value: "Notification 3" },
    ];
    const wrapper = shallow(<App />);

    wrapper.setState({ listNotifications: mockNotifications });

    const notificationId = 2;
    wrapper.instance().markNotificationAsRead(notificationId);

    const updatedState = wrapper.state();

    expect(updatedState.listNotifications).toHaveLength(2);
    expect(
      updatedState.listNotifications.some(
        (notification) => notification.id === notificationId
      )
    ).toBe(false);
  });
});
