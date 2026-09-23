import React from "react";
import PropTypes from "prop-types";

const AppLink = ({ href, children }) => (
  <li>
    <a href={href} className="hover:text-white transition-colors text-sm text-white/90">
      {children}
    </a>
  </li>
);

AppLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};

AppLink.defaultProps = { href: "#" };

export default AppLink;
