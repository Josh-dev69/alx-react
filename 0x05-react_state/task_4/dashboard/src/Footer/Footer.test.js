import React from "react";
import { shallow, mount } from "enzyme";
import Footer from "./Footer";
import { StyleSheetTestUtils } from "aphrodite";
import AppContext from "../App/AppContext";

StyleSheetTestUtils.suppressStyleInjection();

describe("Footer Component", () => {
  it("renders Footer without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("renders Copyright", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find("p").text()).toContain("Copyright");
  });

  it("Tests that there is no link rendered when user is logged out within context", () => {
    const context = {
      user: {
        email: "",
        password: "",
        isLoggedIn: false,
      },
    };

    const wrapper = mount(
      <AppContext.Provider value={context}>
        <Footer />
      </AppContext.Provider>
    );

    expect(wrapper.find("a").length).toBe(0);
    expect(wrapper.find("a").exists()).toBe(false);
    expect(wrapper.text()).not.toContain("Contact us");

    wrapper.unmount();
  });

  it("Tests that there is a link rendered when user is logged in within context", () => {
    const context = {
      user: {
        email: "",
        password: "",
        isLoggedIn: true,
      },
    };

    const wrapper = mount(
      <AppContext.Provider value={context}>
        <Footer />
      </AppContext.Provider>
    );

    expect(wrapper.find("a").length).toBe(1);
    expect(wrapper.find("a").exists()).toBe(true);
    expect(wrapper.text()).toContain("Contact us");

    wrapper.unmount();
  });
});
