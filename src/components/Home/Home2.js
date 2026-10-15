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
            <p className="home-about-body">
              I'm an{" "}
              <i>
                <b className="purple">AI Engineer & Techlead</b>
              </i>{" "}
              focused on building production-ready LLM, RAG, and agentic AI systems that solve real-world problems.
              <br />
              <br />
              I have hands-on expertise with{" "}
              <i>
                <b className="purple">
                  LangGraph, LangChain, PyTorch, Transformers, and Vector Databases{" "}
                </b>
              </i>
              — from multi-tenant RAG systems with strict tenant isolation to fine-tuning, model serving, and agentic workflows.
              <br />
              <br />
              My core areas of focus include{" "}
              <i>
                <b className="purple">
                  Agentic RAG (Guardrails, Semantic Caching, Reranking), LLM Evaluation,{" "}
                </b>
              </i>
              and building scalable, low-latency microservices using{" "}
              <b className="purple">FastAPI</b>,{" "}
              <b className="purple">Supabase</b>, and{" "}
              <b className="purple">Docker</b>.
              <br />
              <br />
              I believe that the most powerful technology is the kind that{" "}
              <b className="purple">empowers people</b> — and I'm driven to build intelligent products that deliver meaningful impact.
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
