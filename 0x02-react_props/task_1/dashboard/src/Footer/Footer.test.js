import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

describe("Footer Component", () => {
  it("Render Footer without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("renders Copyright", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find("p").text()).toContain("Copyright");
  });
});
