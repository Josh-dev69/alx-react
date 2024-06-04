import PropTypes from "prop-types";
import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import BodySection from "./BodySection";

class BodySectionWithMarginBottom extends Component {
  render() {
    return (
      <div className={css(style.margin)}>
        <BodySection {...this.props} />
      </div>
    );
  }
}

const style = StyleSheet.create({
  margin: {
    marginBottom: "40px",
  },
});

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default BodySectionWithMarginBottom;
