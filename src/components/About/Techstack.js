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
  SiPostgresql,
  SiRedis,
  SiCplusplus,
  SiScikitlearn,
  SiChainlink,
  SiSupabase,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { FaBrain, FaDatabase, FaRobot, FaNetworkWired, FaCogs } from "react-icons/fa";
import { BiNetworkChart } from "react-icons/bi";

function Techstack() {
  const techs = [
    { icon: <SiPython fontSize={"24px"} />, label: "Python" },
    { icon: <FaNetworkWired fontSize={"24px"} />, label: "LangGraph" },
    { icon: <SiChainlink fontSize={"24px"} />, label: "LangChain" },
    { icon: <BiNetworkChart fontSize={"24px"} />, label: "Agentic AI / RAG" },
    { icon: <FaBrain fontSize={"24px"} />, label: "Transformers" },
    { icon: <FaRobot fontSize={"24px"} />, label: "Hugging Face" },
    { icon: <SiPytorch fontSize={"24px"} />, label: "PyTorch" },
    { icon: <SiFastapi fontSize={"24px"} />, label: "FastAPI" },
    { icon: <SiSupabase fontSize={"24px"} />, label: "Supabase" },
    { icon: <FaDatabase fontSize={"24px"} />, label: "Qdrant / FAISS" },
    { icon: <SiPostgresql fontSize={"24px"} />, label: "PostgreSQL / SQL" },
    { icon: <SiRedis fontSize={"24px"} />, label: "Redis" },
    { icon: <SiDocker fontSize={"24px"} />, label: "Docker" },
    { icon: <SiNextdotjs fontSize={"24px"} />, label: "Next.js" },
    { icon: <SiReact fontSize={"24px"} />, label: "React" },
    { icon: <SiTypescript fontSize={"24px"} />, label: "TypeScript" },
    { icon: <SiTailwindcss fontSize={"24px"} />, label: "Tailwind CSS" },
    { icon: <SiCplusplus fontSize={"24px"} />, label: "C++" },
    { icon: <SiTensorflow fontSize={"24px"} />, label: "TensorFlow" },
    { icon: <SiScikitlearn fontSize={"24px"} />, label: "Scikit-Learn" },
    { icon: <SiOpencv fontSize={"24px"} />, label: "OpenCV" },
    { icon: <FaCogs fontSize={"24px"} />, label: "n8n" },
    { icon: <SiGit fontSize={"24px"} />, label: "Git / CI/CD" },
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
