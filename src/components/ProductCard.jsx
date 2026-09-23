import React from "react";
import PropTypes from "prop-types";
import Eyebrow from "./Eyebrow";
import Button from "./Button";

const ProductCard = ({ name, tag, desc, img }) => (
  <div className="p-6 sm:p-8 border-b border-neutral-200 last:border-b-0 hover:bg-neutral-50 transition-colors duration-200">
    <Eyebrow>{name}</Eyebrow>
    <p className="text-sm text-neutral-600 mb-3">{tag}</p>
    <img src={img} alt={name} className="w-full h-40 sm:h-48 object-contain mb-4" loading="lazy" />
    <div className="flex items-start justify-between gap-4">
      <p className="text-sm text-neutral-600 leading-relaxed max-w-md">{desc}</p>
      <Button variant="outline" className="shrink-0 text-xs sm:text-sm whitespace-nowrap">
        Explore →
      </Button>
    </div>
  </div>
);

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default ProductCard;
