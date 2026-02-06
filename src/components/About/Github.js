import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="Opavan"
        blockSize={30}
        blockMargin={10}
        color="#c084f5"
        fontSize={20}
      />
      <p style={{ color: "white", textAlign: "center", paddingTop: "10px" }}>
        These are my GitHub contributions so far. I am continuously contributing and more projects will be added in the future!
      </p>
    </Row>
  );
}

export default Github;
