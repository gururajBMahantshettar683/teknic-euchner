import React from "react";
import PropTypes from "prop-types";

const Eyebrow = ({ children, className = "" }) => (
  <p className={`text-red-600 font-mono text-xs sm:text-sm tracking-widest uppercase mb-3 ${className}`}>
    {children}
  </p>
);

Eyebrow.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Eyebrow;
