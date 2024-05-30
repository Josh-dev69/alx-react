import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";

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
});
