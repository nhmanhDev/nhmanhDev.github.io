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
            I hold a Double Bachelor's Degree in Artificial Intelligence and Computer Science from{" "}
            <span className="purple">Thang Long University</span> (Graduated Dec 2025 · GPA: AI 8.3/10 | CS 8.2/10).
            <br />
            Currently serving as{" "}
            <span className="purple">PM & Techlead at VinUniversity</span> (and formerly AI Engineer at Trung Anh Group), I'm focused on building production-ready LLM, RAG, and agentic AI systems that solve real-world problems and deliver meaningful impact.
            <br />
            <br />
            Outside of engineering AI systems, I enjoy:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess ♟️ (secondary school award winner)
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Mathematics & Scientific Research 🧮
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling & Meeting New People 🌏
            </li>
            <li className="about-activity">
              <ImPointRight /> Experimenting with Agentic Workflows & Multi-Agent Architectures 🤖
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
