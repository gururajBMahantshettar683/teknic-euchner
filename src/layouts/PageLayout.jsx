import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PageLayout = ({ children }) => (
  <div className="font-sans text-neutral-900">
    <Header />
    <main id="main-content">{children}</main>
    <Footer />
  </div>
);

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLayout;
