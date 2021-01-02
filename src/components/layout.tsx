import React from "react";
import PropTypes from "prop-types";

import layoutStyles from "./layout.module.scss";

const Layout = ({ children }) => (
  <div className={ layoutStyles.container }>{children}</div>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
