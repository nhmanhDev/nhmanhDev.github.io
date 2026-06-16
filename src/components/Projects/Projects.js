import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ragProject from "../../Assets/Projects/rag_legal_project.png";
import videoAutomation from "../../Assets/Projects/video_automation.png";
import tradingSystem from "../../Assets/Projects/trading_system.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few AI projects I've led and built from scratch.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={ragProject}
              isBlog={false}
              title="Legal & University Admission RAG Chatbot"
              description="Built end-to-end RAG systems for legal and university admission consulting using Gemini 2.5, FAISS, and FastAPI. Indexed 10,000+ documents into tens of thousands of chunks with hybrid retrieval. Applied advanced RAG techniques including query expansion, multi-query, reranking, and context compression to ensure high-accuracy responses."
              techStack={["Python", "Gemini 2.5", "FAISS", "FastAPI", "LangChain", "RAG"]}
              ghLink="https://github.com/nhmanhDev"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={videoAutomation}
              isBlog={false}
              title="Video Automation System"
              description="Architected an automated video pipeline integrating Large Language Models for script generation and editing. Built a robust API service using FastAPI to process large-scale video requests asynchronously. Deployed dockerized microservices to integrate AI processing cores with web interfaces."
              techStack={["Python", "FastAPI", "LLMs", "Docker", "Microservices"]}
              ghLink="https://github.com/nhmanhDev"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={tradingSystem}
              isBlog={false}
              title="AI42E Trading System"
              description="Designed an algorithmic engine analyzing real-time market data for automated investment strategies. Implemented high-frequency data ingestion and caching using Redis to support low-latency decision-making. Integrated machine learning models analyzing market sentiment to improve strategy accuracy."
              techStack={["Python", "Redis", "Machine Learning", "FastAPI", "Market Sentiment"]}
              ghLink="https://github.com/nhmanhDev"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
