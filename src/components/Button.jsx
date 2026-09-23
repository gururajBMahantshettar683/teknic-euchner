import React from "react";
import PropTypes from "prop-types";

const baseStyles =
  "inline-flex items-center justify-center font-mono text-sm sm:text-base tracking-wide transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 active:scale-[0.98]";

const variants = {
  solid: "bg-red-600 hover:bg-red-700 text-white px-6 py-3",
  outline: "border border-red-600 hover:bg-red-600 hover:text-white text-red-600 px-6 py-3",
  ghost: "hover:bg-neutral-100 text-neutral-700 px-6 py-3",
};

const Button = ({ children, variant = "solid", href, className = "", ...props }) => {
  const cls = `${baseStyles} ${variants[variant] || variants.solid} ${className}`;

  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["solid", "outline", "ghost"]),
  href: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
