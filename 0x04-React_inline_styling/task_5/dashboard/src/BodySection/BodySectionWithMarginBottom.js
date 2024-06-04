import PropTypes from "prop-types";
import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import BodySection from "./BodySection";

const style = StyleSheet.create({
  margin: {
    marginBottom: "40px",
  },
});

class BodySectionWithMarginBottom extends Component {
  render() {
    return (
      <div className={css(style.margin)}>
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
