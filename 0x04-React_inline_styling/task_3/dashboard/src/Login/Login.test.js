import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";
import { StyleSheetTestUtils } from "aphrodite";
StyleSheetTestUtils.suppressStyleInjection();

describe("Login component", () => {
  it("Renders Login without crashinh", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("number of input and label Render", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("input")).toHaveLength(2);
    expect(wrapper.find("label")).toHaveLength(2);
  });
});
