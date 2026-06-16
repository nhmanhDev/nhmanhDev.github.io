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
            I'm a B.Sc. graduate in Artificial Intelligence and Computer Science from{" "}
            <span className="purple">Thang Long University</span> (graduated in December 2025).
            <br />
            Currently working as an{" "}
            <span className="purple">AI Intern at Trung Anh Group</span>, I'm passionate
            about building intelligent systems that solve real-world problems — from
            RAG chatbots to automated pipelines.
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
