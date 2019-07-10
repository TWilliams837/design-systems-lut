import React from "react";
import logo from "../logo.svg";
import styled from "styled-components";
import { purple, elevation, fixed } from "../utilities";

const Header = ({ className }) => (
  <header className={className}>
    <img src={logo} alt="logo" className="logo" />
  </header>
);

export default styled(Header)`
  background: ${purple};
  padding: 10px 5%;
  ${elevation[2]};
  ${fixed()};
  width: 100%;
  .logo {
    width: 60px;
  }
`;
