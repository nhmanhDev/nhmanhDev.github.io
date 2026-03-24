import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ner from "../../Assets/Projects/ner_project.png";
import scoring from "../../Assets/Projects/scoring_project.png";
import ragTlu from "../../Assets/Projects/rag_tlu_project.png";
import ragLegal from "../../Assets/Projects/rag_legal_project.png";

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
              imgPath={ner}
              isBlog={false}
              title="Named Entity Recognition (NER) System"
              description="A Vietnamese Named Entity Recognition system using Transformer architecture. Fine-tuned on a custom annotated dataset, achieving 80% F1-score. Served via a production-ready REST API with Docker containerization."
              techStack={["Python", "PyTorch", "Hugging Face", "SpaCy", "FastAPI", "Docker"]}
              ghLink="https://github.com/nhmanhDev"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={scoring}
              isBlog={false}
              title="Automated Test Scoring System"
              description="A computer vision system that automatically grades multiple-choice answer sheets using image processing. Reduced grading time from 2 hours to just 5 minutes — a 24x speedup — with high accuracy on real student sheets."
              techStack={["Python", "OpenCV", "FastAPI", "Docker"]}
              ghLink="https://github.com/nhmanhDev"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={ragTlu}
              isBlog={false}
              title="RAG Chatbot — University Admission (TLU)"
              description="A Retrieval-Augmented Generation chatbot for Thang Long University's admission queries. Designed a full document processing pipeline: ingestion, cleaning, chunking, and semantic search using vector embeddings."
              techStack={["Python", "LangChain", "FastAPI", "Vector DB", "Docker"]}
              ghLink="https://github.com/nhmanhDev"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={ragLegal}
              isBlog={false}
              title="RAG Chatbot — Legal Consultation"
              description="An API-based legal chatbot that retrieves relevant legal documents and generates accurate, context-aware answers using LLMs. Integrated into a web interface with improved response quality through RAG architecture."
              techStack={["Python", "RAG", "LLM", "FastAPI", "Docker", "Web UI"]}
              ghLink="https://github.com/nhmanhDev"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
