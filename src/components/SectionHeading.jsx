import React from "react";
import PropTypes from "prop-types";
import Eyebrow from "./Eyebrow";

const SectionHeading = ({ eyebrow, children, className = "" }) => (
  <div className={className}>
    <Eyebrow>{eyebrow}</Eyebrow>
    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
      {children}
    </h2>
  </div>
);

SectionHeading.propTypes = {
  eyebrow: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default SectionHeading;
