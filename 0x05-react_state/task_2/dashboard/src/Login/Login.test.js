import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";
import { StyleSheetTestUtils } from "aphrodite";
StyleSheetTestUtils.suppressStyleInjection();

describe("Login component", () => {
  it("Renders Login without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("number of input and label Render", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("input")).toHaveLength(3);
    expect(wrapper.find("label")).toHaveLength(2);
  });

  it("Submit button is disabled by default", () => {
    const wrapper = shallow(<Login />);
    const submitButton = wrapper.find("input[type='submit']");
    expect(submitButton.props().disabled).toEqual(true);
  });

  it("Enables submit button after changing input values", () => {
    const wrapper = shallow(<Login />);
    // Simulate changing email input
    wrapper.find("input[type='email']").simulate("change", {
      target: { value: "test@example.com" },
    });
    // Simulate changing password input
    wrapper.find("input[type='password']").simulate("change", {
      target: { value: "password123" },
    });
    const submitButton = wrapper.find("input[type='submit']");
    expect(submitButton.props().disabled).toEqual(false);
  });

  it("Changes isLoggedIn state to true after clicking submit button", () => {
    const wrapper = shallow(<Login />);
    // Simulate changing email input
    wrapper.find("input[type='email']").simulate("change", {
      target: { value: "test@example.com" },
    });
    // Simulate changing password input
    wrapper.find("input[type='password']").simulate("change", {
      target: { value: "password123" },
    });
    // Simulate clicking submit button
    wrapper.find("form").simulate("submit", {
      preventDefault: () => {},
    });
    expect(wrapper.state().isLoggedIn).toEqual(true);
  });
});
