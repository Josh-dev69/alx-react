import React from "react";
import propTypes, { string } from "prop-types";

const CourseShape = propTypes.shape({
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  credit: propTypes.number.isRequired,
});

export default CourseShape;
