import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { navItems, aboutDropdownItems } from "../data";
import { useMediaQuery } from "../hooks/useMediaQuery";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const toggleMobile = () => setMobileOpen((prev) => !prev);
  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="bg-black text-white" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
        {/* Logo */}
        <a href="#" className="font-mono font-bold text-xl sm:text-2xl tracking-wider" aria-label="Teknic Euchner home">
          TEKNIC <span className="text-red-600">EUCHNER</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-mono" aria-label="Main navigation">
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-red-600 transition-colors" aria-expanded="false">
              About Us ▾
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-black border border-gray-800 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-1">
              {aboutDropdownItems.map((item) => (
                <a key={item} href="#" className="block px-4 py-3 text-sm font-mono text-white hover:bg-red-600 transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
          {navItems.slice(1).map((item) => (
            <a key={item} href="#" className="hover:text-red-600 transition-colors">
              {item}
            </a>
          ))}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-4">
          <Button href="#contact">Talk to an Expert</Button>
          <button
            className="md:hidden text-white p-2"
            onClick={toggleMobile}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && <MobileMenu onClose={closeMobile} />}
    </header>
  );
};

const MobileMenu = ({ onClose }) => (
  <div className="md:hidden bg-black border-t border-gray-800" role="menu">
    <div className="px-4 py-4 space-y-2 font-mono text-sm">
      {navItems.map((item) => (
        <a key={item} href="#" className="block py-3 text-white hover:text-red-600 border-b border-gray-800" onClick={onClose} role="menuitem">
          {item}
        </a>
      ))}
      <Button href="#contact" className="w-full mt-4" onClick={onClose}>
        Talk to an Expert
      </Button>
    </div>
  </div>
);

export default Header;
