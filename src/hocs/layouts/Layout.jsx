import React from "react";
import { connect } from "react-redux";

export const Layout = ({children}) => {
  return <div>{children}</div>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
