import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiExpressvpn } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
} from "react-icons/di";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     
      <Col xs={4} md={2} className="tech-icons">
      <FaHtml5 />
      <h6>HTML5</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaCss3Alt />
      <h6>CSS3</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1/>
      <h6>JavaScript</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h6>Node.Js</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h6>React.Js</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiExpressvpn />
      <h6>Express.Js</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h6>MongoDB</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaBootstrap />
      <h6>Bootstrap</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiTailwindcss />
      <h6>Tailwind CSS</h6>
      </Col>
    </Row>
  );
}

export default Techstack;
