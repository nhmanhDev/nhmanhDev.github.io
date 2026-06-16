import React from "react";
import { Container } from "react-bootstrap";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Container>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          My <strong className="purple">Experience </strong>
        </h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(30, 15, 50, 0.85)",
              color: "#fff",
              border: "1px solid rgba(199, 112, 240, 0.3)",
              boxShadow: "0 4px 15px rgba(119, 53, 136, 0.3)",
            }}
            contentArrowStyle={{ borderRight: "7px solid rgba(199, 112, 240, 0.5)" }}
            date="May 2026 – Aug 2026"
            iconStyle={{ background: "var(--imp-text-color)", color: "#fff" }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title" style={{ color: "var(--imp-text-color)" }}>
              AI Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle" style={{ color: "#aaa", marginTop: "6px" }}>
              Trung Anh Group · Hanoi, Vietnam
            </h4>
            <ul style={{ marginTop: "12px", paddingLeft: "18px", color: "#ddd", textAlign: "left" }}>
              <li>Built and deployed RAG chatbots for 20+ healthcare fanpages and 5+ doctors using LangGraph, Qdrant and n8n.</li>
              <li>Automated thousands of customer interactions across Facebook Messenger, Zalo OA, and personal Zalo accounts.</li>
              <li>Designed AI workflows for lead qualification, telesales routing and fragmented conversation recovery.</li>
              <li>Achieved near-fully automated customer support with human handoff for exceptional cases.</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(30, 15, 50, 0.85)",
              color: "#fff",
              border: "1px solid rgba(199, 112, 240, 0.3)",
              boxShadow: "0 4px 15px rgba(119, 53, 136, 0.3)",
            }}
            contentArrowStyle={{ borderRight: "7px solid rgba(199, 112, 240, 0.5)" }}
            date="Jun 2025 – Apr 2026"
            iconStyle={{ background: "var(--imp-text-color)", color: "#fff" }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title" style={{ color: "var(--imp-text-color)" }}>
              Data Annotator
            </h3>
            <h4 className="vertical-timeline-element-subtitle" style={{ color: "#aaa", marginTop: "6px" }}>
              Appen · Hanoi, Vietnam
            </h4>
            <ul style={{ marginTop: "12px", paddingLeft: "18px", color: "#ddd", textAlign: "left" }}>
              <li>Labeled and annotated text, image, and audio datasets for machine learning model training and evaluation.</li>
              <li>Applied detailed annotation guidelines to ensure high-quality labeled data.</li>
              <li>Conducted data validation and quality assurance to maintain dataset consistency and accuracy.</li>
              <li>Contributed to improving AI model performance through high-quality annotated datasets.</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{
              background: "rgba(30, 15, 50, 0.85)",
              color: "#fff",
              border: "1px solid rgba(199, 112, 240, 0.3)",
              boxShadow: "0 4px 15px rgba(119, 53, 136, 0.3)",
            }}
            contentArrowStyle={{ borderRight: "7px solid rgba(199, 112, 240, 0.5)" }}
            date="2021 – Dec 2025"
            iconStyle={{ background: "var(--imp-text-color)", color: "#fff" }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title" style={{ color: "var(--imp-text-color)" }}>
              B.Sc. Artificial Intelligence & Computer Science
            </h3>
            <h4 className="vertical-timeline-element-subtitle" style={{ color: "#aaa", marginTop: "6px" }}>
              Thang Long University · Hanoi, Vietnam
            </h4>
            <ul style={{ marginTop: "12px", paddingLeft: "18px", color: "#ddd", textAlign: "left" }}>
              <li>GPA: AI — 8.3/10 · CS — 8.2/10</li>
              <li>Relevant Coursework: ML, NLP, Computer Vision, Data Mining, Big Data, Data Structures & Algorithms</li>
              <li>Graduation: December 2025</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Container>
    </Container>
  );
}

export default Experience;
