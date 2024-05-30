import React from "react";
import { shallow } from "enzyme";
import Notification from "./Notifications";

describe("Notification Component", () => {
  it("renders without crashing", () => {
    shallow(<Notification />);
  });

  it("renders three list items", () => {
    const wrapper = shallow(<Notification />);
    expect(wrapper.find("ul").children()).toHaveLength(3);
  });

  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notification />);
    expect(wrapper.find(".Notification p").text()).toBe(
      "Here is the list of notifications"
    );
  });

  it("displays menu item when displayDrawer is false", () => {
    const wrapper = shallow(<Notification displayDrawer={false} />);
    expect(wrapper.exists(".menuItem")).toBe(true);
  });

  it("does not display div.Notifications when displayDrawer is false", () => {
    const wrapper = shallow(<Notification displayDrawer={false} />);
    expect(wrapper.exists(".Notification")).toBe(false);
  });

  it("displays menu item when displayDrawer is true", () => {
    const wrapper = shallow(<Notification displayDrawer={true} />);
    expect(wrapper.exists(".menuItem")).toBe(true);
  });

  it("displays div.Notifications when displayDrawer is true", () => {
    const wrapper = shallow(<Notification displayDrawer={true} />);
    expect(wrapper.exists(".Notification")).toBe(true);
  });
});
