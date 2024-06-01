import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.webp";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">My Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Ecommerce Website"
              description="My MERN stack e-commerce website, dynamic platforms with secure authentication, product management systems, payment gateway, and responsive interface."
              ghLink="https://github.com/aneesa-tariq/Ecommerce-project"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="NewsCrowd"
              description="My News Website showing all categories of news such as entertainment, Business, General, Science, Sports, Health and Technology by using React.js and external API."
              ghLink="https://github.com/aneesa-tariq/NewsCrowd"
              demoLink="/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Movies Website"
              description="Developed a Netflix-inspired movie streaming platform with external API integration for content aggregation and enhanced user experience. Implemented intuitive user interface design, user authentication, and personalized profiles. Employed modern web technologies for responsive design, ensuring seamless access across devices."
              ghLink="https://github.com/aneesa-tariq/MoviesWebsite"
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Social Media Website With Theme Customization"
              description="Developed a user-friendly social media site with profiles, newsfeeds, and messaging using HTML, CSS, and JavaScript.Incorporated responsive design for seamless viewing on alldevices, enhancing user engagement"
              ghLink="https://github.com/aneesa-tariq/Social-Media-Website"
              demoLink="https://socialmediasitee.netlify.app"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="TextUtils"
              description="Text Editor Website which can convert text into UpperCase, LowerCase, Remove spaces, Clear text, Count words and charaters, Copy text with dark and light mode"
              ghLink="https://github.com/AneesaTariq/TextUtils"
              demoLink="https://text-utils-tau-five.vercel.app/"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Chat Application"
              description="Working on it...."
              ghLink=""
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
