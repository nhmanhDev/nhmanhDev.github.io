import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Tech Stack Pills */}
        {props.techStack && (
          <div className="tech-stack-pills">
            {props.techStack.map((tech, idx) => (
              <span className="tech-pill" key={idx}>
                {tech}
              </span>
            ))}
          </div>
        )}

        <div style={{ marginTop: "12px" }}>
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp; GitHub
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
