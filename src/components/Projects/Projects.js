import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import calculator from "../../Assets/Projects/calculator.png";
import game from "../../Assets/Projects/game.png";
import quiz from "../../Assets/Projects/quiz.png";
import Dashboard from "../../Assets/Projects/Dashboard.png";
import EcoShop from "../../Assets/Projects/EcoShop.png";
import chatify from "../../Assets/Projects/chatify.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chat-app-ui"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/Opavan/chat-app.git"
              demoLink="https://chat-app-three-jet.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dashboard}
              isBlog={false}
              title="Dashboard"
              description="A modern Admin Dashboard Web Application built using React, Vite, Tailwind CSS, and React Router. This project demonstrates real-world frontend architecture, authentication flow, role-based navigation, and clean UI/UX practices."
             ghLink="https://github.com/Opavan/react-admin-dashboard.git"
              demoLink="https://react-admin-dashboard-five-gamma.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EcoShop}
              isBlog={false}
              title="Eco-store"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/Opavan/eco-store.git"
              demoLink="https://eco-store-gray.vercel.app"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Calculator"
              description="A lightweight calculator built with HTML, CSS, and JavaScript featuring a clean UI, responsive design, and real-time calculation functionality."
              ghLink="https://github.com/Opavan/calculator.git"
              demoLink="https://opavan.github.io/calculator/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={game}
              isBlog={false}
              title="Rock-paper-scissor"
              description="An interactive Rock-Paper-Scissors game built with HTML, CSS, and JavaScript, featuring real-time gameplay, score tracking, and a clean, responsive UI for desktop and mobile users."
             ghLink="https://github.com/Opavan/Rock-paper-scissor.git"
               demoLink="https://opavan.github.io/Rock-paper-scissor/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="quiz App"
              description="An interactive Quiz App built with HTML, CSS, and JavaScript, featuring multiple-choice questions, real-time feedback, and score tracking."
              ghLink="https://github.com/Opavan/Quiz-app.git"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
