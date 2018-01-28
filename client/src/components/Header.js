import React from "react";
import { Navbar, NavItem, Icon } from "react-materialize";

const Header = () => {
  return (
    <div>
      <Navbar className="teal lighten-2">
        <NavItem href="/">
          <Icon>home</Icon>
        </NavItem>
        <NavItem href="/about">
          <Icon>info</Icon>
        </NavItem>
        <NavItem href="/contact">
          <Icon>phone</Icon>
        </NavItem>
      </Navbar>
    </div>
  );
};

export default Header;
