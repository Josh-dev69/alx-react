import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { Notification } from "./Notification";

describe("App Component", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("render div with class App-heder", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App-header").exists()).toBe(true);
  });

  it("render div with class App-body", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App-body").exists()).toBe(true);
  });

  it("render div with class App-footer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App-footer").exists()).toBe(true);
  });
});

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
});
