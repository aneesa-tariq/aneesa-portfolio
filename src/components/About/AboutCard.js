import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            AOA, I am <span className="purple">ANEESA TARIQ </span>
            from <span className="purple"> Islamabad, Pakistan.</span>
            <br />
            Recently graduated from The Islamia University of Bahawalpur.
            <br />
            I have completed Bachelor of Information Technology by getting 3.70 GPA.
            <br />
            <br />
             My Hobbies
          </p>
          <ul>
          <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Dramas
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
