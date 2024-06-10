import React from "react";
import { shallow } from "enzyme";
import WithLogging from "./WithLogging";
import { StyleSheetTestUtils } from "aphrodite";
StyleSheetTestUtils.suppressStyleInjection();

describe("Withlogging HOC tests", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log");
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it("should call console.log on mount and unmount with 'Component'", () => {
    const WrappedComponent = () => <p>Hello</p>;
    const WithLoggingComponent = WithLogging({ WrappedComponent });
    const wrapper = shallow(<WithLoggingComponent />);
    expect(consoleSpy).toHaveBeenCalledWith(
      "Component WrappedComponent is mounted"
    );
    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledWith(
      "Component WrappedComponentis going to unmount"
    );
  });

  it("should call console.log on mount and unmount with component name", () => {
    const login = () => <div>Login component</div>;
    login.displayName = "Login";
    const WithLoggingLogin = WithLogging({ WrappedComponent: login });
    const wrapper = shallow(<WithLoggingLogin />);
    wrapper.unmount();

    expect(consoleSpy).toHaveBeenCalledWith("Component Login is mounted");
    expect(consoleSpy).toHaveBeenCalledWith(
      "Component Login is going to unmount"
    );
  });
});
