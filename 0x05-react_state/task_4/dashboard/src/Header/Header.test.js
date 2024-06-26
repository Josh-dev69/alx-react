import React from "react";
import Header from "./Header";
import { shallow, mount } from "enzyme";
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

  it(`Tests that logoutSection is not rendered with default context values`, () => {
    const context = {
      user: {
        email: "",
        password: "",
        isLoggedIn: false,
      },
      logOut: jest.fn(),
    };

    const wrapper = mount(
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>
    );

    expect(wrapper.find("#logoutSection").length).toBe(0);
    expect(wrapper.find("#logoutSection").exists()).toBe(false);
    wrapper.unmount();
  });

  it(`Tests that logoutSection is rendered with context values`, () => {
    const context = {
      user: {
        email: "test@test.com",
        password: "123",
        isLoggedIn: true,
      },
      logOut: jest.fn(),
    };

    const wrapper = mount(
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>
    );

    expect(wrapper.find("#logoutSection").length).toBe(1);
    expect(wrapper.find("#logoutSection").exists()).toBe(true);
    wrapper.unmount();
  });

  it(`Verifies that the logOut function is called when clicking on logOut link`, () => {
    const context = {
      user: {
        email: "test@test.com",
        password: "123",
        isLoggedIn: true,
      },
      logOut: jest.fn(),
    };

    const spy = jest.spyOn(context, "logOut");

    const wrapper = mount(
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>
    );

    wrapper.find(".logoutLink").simulate("click");

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
    wrapper.unmount();
  });
});
