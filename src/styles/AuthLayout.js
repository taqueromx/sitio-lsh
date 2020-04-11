import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Header } from "./AuthStyles";
export default function AuthLayout({ children }) {
  console.log(children);
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
    </>
  );
}
AuthLayout.propTypes = {
  children: PropTypes.element.isRequired
};