import React from "react";
import PropTypes from "prop-types";

const StatCard = ({ label, desc }) => (
  <div className="border-t border-white/20 pt-6">
    <h3 className="font-mono font-bold text-lg sm:text-xl mb-2">{label}</h3>
    <p className="text-sm text-neutral-300 leading-relaxed">{desc}</p>
  </div>
);

StatCard.propTypes = {
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default StatCard;
