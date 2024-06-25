import React from "react";
import CourseListRow from "./CourseListRow";
import CourseShape from "./CourseShape";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

function CourseList({ listCourses }) {
  const style = StyleSheet.create({
    table: {
      margin: "3rem auto 0",
      textAlign: "left",
      width: "80%",
      border: "1px solid #ccc",
      borderCollapse: "collapse",
      padding: "0.5rem",
    },
    th: {
      textAlign: "center",
      padding: "0.5rem",
      borderBottom: "1px solid #ccc",
    },
    tr: {
      borderBottom: "1px solid #ccc",
      padding: "0.5rem",
    },
    td: {
      padding: "0.5rem",
    },
  });

  return (
    <table id="CourseList" className={css(style.table)}>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow
          textFirstCell="Course name"
          textSecondCell="Credit"
          isHeader={true}
        />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <tr>
            <td colSpan="2">No Course Available</td>
          </tr>
        ) : (
          listCourses.map((course) => (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={course.credit}
            />
          ))
        )}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
