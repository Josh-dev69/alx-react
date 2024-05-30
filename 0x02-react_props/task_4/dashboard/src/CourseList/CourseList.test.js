import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";

describe("CourseList component", () => {
  it("renders CourseList component without crashing", () => {
    shallow(<CourseList />);
  });

  it("renders the 5 different rows", () => {
    const wrapper = shallow(<CourseList />);
    // Check if all 5 rows are rendered
    expect(wrapper.find("CourseListRow")).toHaveLength(5);
  });
});
