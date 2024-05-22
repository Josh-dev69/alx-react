import React from "react";
import { shallow } from 'enzyme';
import App from "./App";

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
