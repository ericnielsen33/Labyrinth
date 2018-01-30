import React from "react";
import { Footer } from "react-materialize";

const PageFooter = () => {
  return (
    <Footer
      className="grey darken-4"
      links={
        <ul>
          <h6 className="bold white-text accent-3">More</h6>
          <li>
            <a className="thin white-text accent-1" href="#!">
              Legal
            </a>
          </li>
          <li>
            <a className="thin white-text accent-1" href="#!">
              FAQ
            </a>
          </li>
        </ul>
      }
    >
      <h5 className="thin white-text accent-3">Labyrinth Digital</h5>
      <p className="thin white-text accent-1">
        This is a cool slogan. Think about it. It is.
      </p>
    </Footer>
  );
};

export default PageFooter;
