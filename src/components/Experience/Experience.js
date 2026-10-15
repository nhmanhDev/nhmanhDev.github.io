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
            date="July 2026 – Present"
            iconStyle={{ background: "var(--imp-text-color)", color: "#fff" }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title" style={{ color: "var(--imp-text-color)" }}>
              PM & Techlead
            </h3>
            <h4 className="vertical-timeline-element-subtitle" style={{ color: "#aaa", marginTop: "6px" }}>
              VinUniversity · Hanoi, Vietnam
            </h4>
            <ul style={{ marginTop: "12px", paddingLeft: "18px", color: "#ddd", textAlign: "left" }}>
              <li>Led product development and launch, securing Top 10 among 250 teams at Build Showcase.</li>
              <li>Built a multi-tenant AI Admissions Assistant using LangGraph, FastAPI, and Supabase with strict tenant isolation.</li>
              <li>Implemented an agentic RAG pipeline with Guardrails, semantic caching, and LLM fallback.</li>
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
            date="Apr 2026 – July 2026"
            iconStyle={{ background: "var(--imp-text-color)", color: "#fff" }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title" style={{ color: "var(--imp-text-color)" }}>
              AI Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle" style={{ color: "#aaa", marginTop: "6px" }}>
              Trung Anh Group · Hanoi, Vietnam
            </h4>
            <ul style={{ marginTop: "12px", paddingLeft: "18px", color: "#ddd", textAlign: "left" }}>
              <li>Built and deployed RAG chatbots for 20+ healthcare fanpages and 5+ doctors using LangGraph, Qdrant and n8n.</li>
              <li>Automated thousands of customer interactions across Facebook Messenger, Zalo OA, and personal Zalo accounts.</li>
              <li>Designed AI workflows for lead qualification, telesales routing and fragmented conversation recovery.</li>
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
              Double Bachelor's Degree in Artificial Intelligence & Computer Science
            </h3>
            <h4 className="vertical-timeline-element-subtitle" style={{ color: "#aaa", marginTop: "6px" }}>
              Thang Long University · Hanoi, Vietnam
            </h4>
            <ul style={{ marginTop: "12px", paddingLeft: "18px", color: "#ddd", textAlign: "left" }}>
              <li>GPA: Artificial Intelligence — 8.3/10 · Computer Science — 8.2/10</li>
              <li>Graduation: December 2025</li>
              <li>Awarded university certificate for participation in scientific research</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Container>
    </Container>
  );
}

export default Experience;
