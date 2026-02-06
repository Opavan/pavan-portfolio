import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiNextdotjs } from "react-icons/si";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Redux from "../../Assets/TechIcons/Redux.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="javascript" />
        <div className="tech-icons-text">JavaScript</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Typescript} alt="typescript" />
        <div className="tech-icons-text">TypeScript</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react" />
        <div className="tech-icons-text">React.js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs fontSize={"24px"} />
        <div className="tech-icons-text">Next.js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="node" />
        <div className="tech-icons-text">Node.js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Mongo} alt="mongoDb" />
        <div className="tech-icons-text">MongoDB</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="sql" />
        <div className="tech-icons-text">PostgreSQL</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Redux} alt="redux" />
        <div className="tech-icons-text">Redux</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Firebase} alt="firebase" />
        <div className="tech-icons-text">Firebase</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git & GitHub</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="tailwind" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={AWS} alt="aws" style={{ height: '1.6rem', width: 'auto' }}/>
        <div className="tech-icons-text">AWS </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="python" />
        <div className="tech-icons-text">Python</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="java" />
        <div className="tech-icons-text">Java</div>
      </Col>

    </Row>
  );
}

export default Techstack;
