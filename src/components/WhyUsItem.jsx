import React from "react";
import PropTypes from "prop-types";

const WhyUsItem = ({ title, desc }) => (
  <div className="grid grid-cols-[1fr_2fr] gap-6 py-6 first:pt-0">
    <h3 className="font-display font-bold text-base sm:text-lg self-start">{title}</h3>
    <p className="text-sm text-neutral-700 leading-relaxed">{desc}</p>
  </div>
);

WhyUsItem.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default WhyUsItem;
