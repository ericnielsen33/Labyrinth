import React from "react";
import { Row, Col, CardPanel} from 'react-materialize';
import img from "../images/SplitShire_road_illuminated_by_moon.jpg";


const Home = () => {
  return (
    <div>
      <img alt=""  className="responsive-img" src={img} />
      <Row className="transparent">
        <Col className="transparent" s={12} m={5}>
          <CardPanel className="transparent black-text">
            <span>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively. I am similar to what is called a panel in other
              frameworks.
            </span>
          </CardPanel>
        </Col>
        <Col s={12} m={7}>
          For a simpler card with less markup, try using a card panel which just
          has padding and a shadow effect
        </Col>
      </Row>
    </div>
  );
};

export default Home;
