import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPytorch,
  SiTensorflow,
  SiKeras,
  SiFastapi,
  SiDocker,
  SiGit,
  SiPython,
  SiOpencv,
  SiApachespark,
  SiPostgresql,
  SiPowerbi,
} from "react-icons/si";
import { FaBrain, FaDatabase, FaRobot } from "react-icons/fa";
import { BiNetworkChart } from "react-icons/bi";

function Techstack() {
  const techs = [
    { icon: <SiPython fontSize={"24px"} />, label: "Python" },
    { icon: <SiPytorch fontSize={"24px"} />, label: "PyTorch" },
    { icon: <SiTensorflow fontSize={"24px"} />, label: "TensorFlow" },
    { icon: <SiKeras fontSize={"24px"} />, label: "Keras" },
    { icon: <FaRobot fontSize={"24px"} />, label: "Hugging Face" },
    { icon: <FaBrain fontSize={"24px"} />, label: "Transformers" },
    { icon: <SiOpencv fontSize={"24px"} />, label: "OpenCV" },
    { icon: <BiNetworkChart fontSize={"24px"} />, label: "RAG / LLMs" },
    { icon: <SiFastapi fontSize={"24px"} />, label: "FastAPI" },
    { icon: <SiDocker fontSize={"24px"} />, label: "Docker" },
    { icon: <SiGit fontSize={"24px"} />, label: "Git" },
    { icon: <SiApachespark fontSize={"24px"} />, label: "PySpark" },
    { icon: <SiPostgresql fontSize={"24px"} />, label: "SQL" },
    { icon: <SiPowerbi fontSize={"24px"} />, label: "Power BI" },
    { icon: <FaDatabase fontSize={"24px"} />, label: "Vector DBs" },
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
