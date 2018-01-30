import React from "react";
import { Navbar, NavItem } from "react-materialize";
   

const Header = () => {
  return (
    <div>
      <Navbar fixed={true} brand="Labyrinth Digital" right className="thin transparent z-depth-0">
        <NavItem 
          href="/" 
          className="hoverable thin transparent">
          Home
        </NavItem>
        <NavItem 
          href="/blog"
          className="hoverable thin transparent">
          Blog
        </NavItem>
        <NavItem 
          href="/about"
          className="hoverable thin transparent">
          About
        </NavItem>
      </Navbar>
    </div>
  );
};

export default Header;
