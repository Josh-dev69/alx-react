import React from "react";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
StyleSheetTestUtils.suppressStyleInjection();

describe("App tests", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("should render Header component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Header />)).toBe(true);
  });
  it("should render Login Component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Login />)).toBe(false);
  });
  it("should render Footer component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Footer />)).toBe(true);
  });
  it("does not render courselist if logged out", () => {
    const component = shallow(<App />);

    component.setProps({ isLogedIn: false });

    expect(component.contains(<CourseList />)).toBe(false);
  });
  it("renders courselist if logged in", () => {
    const component = shallow(<App isLoggedIn={true} />);

    expect(component.containsMatchingElement(<CourseList />)).toEqual(true);
    expect(component.contains(<Login />)).toBe(false);
  });
});

describe("App event component", () => {
  let wrapper;
  let originalAlert;

  beforeEach(() => {
    originalAlert = window.alert;
    window.alert = jest.fn();
    wrapper = shallow(<App />);
  });

  afterEach(() => {
    window.alert = originalAlert;
  });

  it("calls logout fucntion and display alert on Ctrl+h when pressed", () => {
    const logOutMock = jest.fn();
    wrapper.setProps({ logOut: logOutMock });

    const event = new KeyboardEvent("keydown", {
      ctrlKey: true,
      key: "h",
    });

    document.dispatchEvent(event);
    expect(logOutMock).toHaveBeenCalled();

    expect(window.alert).toHaveBeenCalledWith("Logging you out");
  });

  it("removes event lsitener on unmout", () => {
    const logOutMock = jest.fn();
    wrapper.unmount();

    const event = new KeyboardEvent("keydown", {
      ctrlKey: true,
      key: "h",
    });

    document.dispatchEvent(event);

    expect(logOutMock).not.toHaveBeenCalled();
    expect(logOutMock).not.toHaveBeenCalledWith();
  });
});

describe("testing the state component", () => {
  it("initial state for displayDrawer is false", () => {
    const component = shallow(<App />);
    expect(component.state("displayDrawer")).toBe(false);
  });

  it("handleDisplayDrawer updates state to true", () => {
    const component = shallow(<App />);
    component.instance().handleDisplayDrawer();
    expect(component.state("displayDrawer")).toBe(true);
  });

  it("handleHideDrawer updates state to false", () => {
    const component = shallow(<App />);
    component.instance().handleHideDrawer();
    expect(component.state("displayDrawer")).toBe(false);
  });
});
