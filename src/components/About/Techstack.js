import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPytorch,
  SiTensorflow,
  SiFastapi,
  SiDocker,
  SiGit,
  SiPython,
  SiOpencv,
  SiApachespark,
  SiPostgresql,
  SiPowerbi,
  SiRedis,
  SiCplusplus,
  SiScikitlearn,
  SiChainlink,
} from "react-icons/si";
import { FaBrain, FaDatabase, FaRobot, FaNetworkWired, FaCogs } from "react-icons/fa";
import { BiNetworkChart } from "react-icons/bi";

function Techstack() {
  const techs = [
    { icon: <SiPython fontSize={"24px"} />, label: "Python" },
    { icon: <SiCplusplus fontSize={"24px"} />, label: "C++" },
    { icon: <SiChainlink fontSize={"24px"} />, label: "LangChain" },
    { icon: <FaNetworkWired fontSize={"24px"} />, label: "LangGraph" },
    { icon: <SiPytorch fontSize={"24px"} />, label: "PyTorch" },
    { icon: <SiTensorflow fontSize={"24px"} />, label: "TensorFlow" },
    { icon: <SiScikitlearn fontSize={"24px"} />, label: "Scikit-Learn" },
    { icon: <FaBrain fontSize={"24px"} />, label: "Transformers" },
    { icon: <FaRobot fontSize={"24px"} />, label: "Hugging Face" },
    { icon: <SiOpencv fontSize={"24px"} />, label: "OpenCV" },
    { icon: <BiNetworkChart fontSize={"24px"} />, label: "RAG / LLMs" },
    { icon: <SiFastapi fontSize={"24px"} />, label: "FastAPI" },
    { icon: <SiDocker fontSize={"24px"} />, label: "Docker" },
    { icon: <SiRedis fontSize={"24px"} />, label: "Redis" },
    { icon: <FaCogs fontSize={"24px"} />, label: "n8n" },
    { icon: <FaDatabase fontSize={"24px"} />, label: "Qdrant / FAISS" },
    { icon: <SiApachespark fontSize={"24px"} />, label: "PySpark" },
    { icon: <SiPostgresql fontSize={"24px"} />, label: "SQL" },
    { icon: <SiPowerbi fontSize={"24px"} />, label: "Power BI" },
    { icon: <SiGit fontSize={"24px"} />, label: "Git" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech, idx) => (
        <Col xs={4} md={2} className="tech-icons" key={idx}>
          {tech.icon}
          <div className="tech-icons-text">{tech.label}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
