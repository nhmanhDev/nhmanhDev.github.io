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
                <b className="purple">AI-focused developer</b>
              </i>{" "}
              passionate about building intelligent systems that bridge the gap
              between research and real-world impact.
              <br />
              <br />
              I'm proficient in{" "}
              <i>
                <b className="purple">
                  Python, PyTorch, TensorFlow, and Hugging Face Transformers{" "}
                </b>
              </i>
              — with hands-on experience in model fine-tuning, NLP pipelines,
              and computer vision architectures.
              <br />
              <br />
              My key areas of interest include{" "}
              <i>
                <b className="purple">
                  Retrieval-Augmented Generation (RAG), Named Entity
                  Recognition,{" "}
                </b>
              </i>
              and building production-ready AI APIs using{" "}
              <b className="purple">FastAPI</b> and{" "}
              <b className="purple">Docker</b>.
              <br />
              <br />
              I believe that the most powerful technology is the kind that{" "}
              <b className="purple">empowers people</b> — and I'm here to build
              exactly that.
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
