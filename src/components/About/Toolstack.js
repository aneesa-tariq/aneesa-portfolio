import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiSublimetext } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import {
  SiPostman,
  SiSlack,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <SiSublimetext />
      <h6>Sublime Text</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <TbBrandVscode />
      <h6>VS Code</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <h6>Slack</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiPostman/>
      <h6>Postman</h6>
      </Col>
    </Row>
  );
}

export default Toolstack;
