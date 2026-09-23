import React from "react";
import PropTypes from "prop-types";

const ApplicationCard = ({ name, desc, img }) => (
  <div className="border-b border-neutral-200 pb-6 hover:border-red-600 transition-colors duration-200">
    <img src={img} alt={name} className="w-full h-40 sm:h-48 object-cover rounded mb-4" loading="lazy" />
    <h3 className="font-display font-bold text-red-600 mb-2 text-sm sm:text-base">{name}</h3>
    <p className="text-sm text-neutral-600 leading-relaxed">{desc}</p>
  </div>
);

ApplicationCard.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default ApplicationCard;
