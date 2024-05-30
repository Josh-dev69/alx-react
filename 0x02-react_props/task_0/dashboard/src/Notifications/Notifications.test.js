import React from "react";
import { shallow } from 'enzyme';
import Notification from './Notifications';

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
