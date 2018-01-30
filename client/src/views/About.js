import React from "react";
import { Parallax } from "react-materialize";
import img from "../images/SplitShire_road_illuminated_by_moon.jpg";
import jQuery from "jquery";
global.jQuery = jQuery;
global.jquery = jQuery;
global.$ = jQuery;

const styles = {
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  overflow: 'scroll'
  };

const About = () => {
  return (
    <div>
      <Parallax imageSrc={img} style={styles} height="2000px"/>
      <div className="transparent">
        <div className="row container">
          <h2 className="thin header">Info</h2>
          <p className="flow-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
           ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
             culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <Parallax imageSrc={img} />
    </div>
  );
};

export default About;
