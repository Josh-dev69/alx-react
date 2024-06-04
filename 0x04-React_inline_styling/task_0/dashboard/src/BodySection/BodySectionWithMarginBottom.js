import PropTypes from "prop-types";
import React, { Component } from "react";
import BodySection from "./BodySection";

class BodySectionWithMarginBottom extends Component {
  render() {
    return (
      <div className="BodySectionWithMargin">
        <BodySection {...this.props} />
      </div>
    );
  }
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default BodySectionWithMarginBottom;
