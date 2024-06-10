import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";
import AppContext from "../App/AppContext";
import { StyleSheetTestUtils } from "aphrodite";
StyleSheetTestUtils.suppressStyleInjection();

describe("Header Component", () => {
  it("Render without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });

  it("Should render h1", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists("img")).toEqual(true);
    expect(wrapper.containsMatchingElement("<h1>School dashboard</h1>"));
  });

  it("Does not render logoutSection with default context value", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("#logoutSection").exists()).toBe(false);
  });

  it("Renders logoutSection with user defined context value", () => {
    const user = { email: "example@example.com", isLoggedIn: true };
    const wrapper = shallow(
      <AppContext.Provider value={{ user }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find("#logoutSection").exists()).toBe(true);
  });

  it("Calls logOut function when logout link is clicked", () => {
    const logOutMock = jest.fn();
    const user = { email: "example@example.com", isLoggedIn: true };
    const wrapper = shallow(
      <AppContext.Provider value={{ user, logOut: logOutMock }}>
        <Header />
      </AppContext.Provider>
    );

    wrapper.find(".logoutLink").simulate("click");

    expect(logOutMock).toHaveBeenCalled();
  });
});
