import React from "react";
import { FooterComp } from "./styled";

const Footer = () => {
  return (
    <FooterComp>
      <a href="https://github.com/savwiley/mockSite/blob/master/README.md">
        About
      </a>{" "}
      ⋅ <a href="https://github.com/savwiley/mockSite/issues">Bug Report</a> ⋅{" "}
      <a href="https://github.com/savwiley/mockSite">Code</a> ⋅{" "}
      <a href="https://savwiley.com/">Creator&apos;s Portfolio</a>
    </FooterComp>
  );
};

export default Footer;
