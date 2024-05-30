import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

describe("NotificationItem Component", () => {
  it("Renders NotificationItem without crashing", () => {
    shallow(<NotificationItem />);
  });

  it("Renders correct type and value props", () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.find('[data-notification-type="default"]').text()).toEqual(
      "test"
    );
  });

  it("Renders correct HTML content from html prop", () => {
    const wrapper = shallow(<NotificationItem />);
    wrapper.setProps({ html: { __html: "<u>test</u>" } });
    expect(wrapper.html()).toEqual('<li data-urgent="true"><u>test</u></li>');
  });
});
