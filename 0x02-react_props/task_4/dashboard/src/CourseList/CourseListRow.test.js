import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe("CourseListRow component", () => {
  it("renders one cell with colspan = 2 when textSecondCell does not exist", () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="Header" />
    );
    expect(wrapper.find("th")).toHaveLength(1);
    expect(wrapper.find("th").prop("colSpan")).toBe(2);
  });

  it("renders two cells when textSecondCell is present and isHeader is true", () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell="Header1"
        textSecondCell="Header2"
      />
    );
    expect(wrapper.find("th")).toHaveLength(2);
  });

  it("renders correctly two td elements within a tr element when isHeader is false", () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={false}
        textFirstCell="Data1"
        textSecondCell="Data2"
      />
    );
    expect(wrapper.find("tr")).toHaveLength(1);
    expect(wrapper.find("td")).toHaveLength(2);
  });
});
