import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
           <p>
  I’m a Software Engineer with a strong focus on{" "}
  <span className="purple" style={{ fontStyle: "italic" }}>Frontend Development</span>, passionate about building
  clean, scalable, and user-friendly web applications.  
  <br />
  <br />
  I specialize in building modern user interfaces using{" "}
  <span className="purple" style={{ fontStyle: "italic" }}>JavaScript</span>,{" "}
  <span className="purple" style={{ fontStyle: "italic" }}>React</span>, and modern CSS frameworks like{" "}
  <span className="purple" style={{ fontStyle: "italic" }}>Tailwind CSS</span>, with an emphasis on performance,
  accessibility, and maintainable code.
  <br />
  <br />
  Alongside frontend development, I have experience with programming languages
  such as{" "}
  <span className="purple" style={{ fontStyle: "italic" }}>Python</span> and{" "}
  <span className="purple" style={{ fontStyle: "italic" }}>C</span>, and I continuously strengthen my foundation
  in core computer science concepts.
  <br />
  <br />
  My areas of interest include developing{" "}
  <span className="purple" style={{ fontStyle: "italic" }}>Web Applications</span>, building reusable UI
  components, and creating solutions that are scalable and production-ready.
</p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
