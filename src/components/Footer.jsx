import React from "react";
import PropTypes from "prop-types";
import AppLink from "./AppLink";
import { footerLinks, contactInfo, tagline } from "../data";

const socialIcons = [
  { label: "Twitter", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z", viewBox: "0 0 24 24" },
  { label: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z", viewBox: "0 0 24 24" },
  { label: "YouTube", path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z", viewBox: "0 0 24 24" },
];

const Footer = () => {
  return (
    <footer className="bg-red-600 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8">
        {/* Wordmark */}
        <h1 className="font-mono font-black text-5xl sm:text-6xl lg:text-7xl leading-none mb-2">TEKNIC EUCHNER</h1>
        <p className="font-mono text-sm sm:text-base text-white/80 mb-10 max-w-lg">{tagline}</p>

        {/* Link columns + contact */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/30 pt-8 mb-8">
          {/* Blurb + contact */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="font-display font-bold text-base mb-2">Discover our range of industrial equipment.</h3>
            <p className="text-sm text-white/80 leading-relaxed mb-4">Crafting durable machinery for reliable performance in tough environments.</p>
            <address className="not-italic text-sm text-white/80 space-y-1">
              <p>{contactInfo.address}</p>
              <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">{contactInfo.email}</a>
              <p><a href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, "")}`} className="hover:text-white transition-colors">{contactInfo.phone}</a></p>
            </address>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([col, links]) => (
            <nav key={col} aria-label={`${col} links`}>
              <h4 className="font-mono text-sm font-bold mb-4 tracking-wider">{col.toUpperCase()}</h4>
              <ul className="space-y-2">
                {links.map((l) => (
                  <AppLink key={l} href="#">{l}</AppLink>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Social + Copyright */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/30">
          <div className="flex gap-4" aria-label="Social media links">
            {socialIcons.map(({ label, path, viewBox }) => (
              <a key={label} href="#" className="text-white/70 hover:text-white transition-colors" aria-label={label}>
                <svg className="w-5 h-5" fill="currentColor" viewBox={viewBox} aria-hidden="true">
                  <path d={path} />
                </svg>
              </a>
            ))}
          </div>
          <p className="text-xs text-white/70">© {new Date().getFullYear()} TEKNIC EUCHNER. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
