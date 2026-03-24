import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! I'm <span className="purple">Nguyen Hung Manh</span>{" "}
            from <span className="purple">Hanoi, Vietnam</span>.
            <br />
            I'm a final-year AI student at{" "}
            <span className="purple">Thang Long University</span>, majoring in{" "}
            <span className="purple">Artificial Intelligence & Computer Science</span>.
            <br />
            Currently working as a{" "}
            <span className="purple">Data Annotator at Appen</span>, I'm passionate
            about building intelligent systems that solve real-world problems — from
            RAG chatbots to automated computer vision pipelines.
            <br />
            <br />
            Outside of building AI, I enjoy:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess ♟️ (middle school award winner)
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Math & Algorithms 🧮
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling & Meeting New People 🌏
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning about Emerging AI Technologies 🤖
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build systems that think — so humans can do more."{" "}
          </p>
          <footer className="blockquote-footer">Manh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
