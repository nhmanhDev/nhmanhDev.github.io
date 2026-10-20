import React from "react";
import { Container } from "react-bootstrap";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";

const contentStyle = {
  background: "rgba(30, 15, 50, 0.85)",
  color: "#fff",
  border: "1px solid rgba(199, 112, 240, 0.3)",
  boxShadow: "0 4px 15px rgba(119, 53, 136, 0.3)",
};
const contentArrowStyle = { borderRight: "7px solid rgba(199, 112, 240, 0.5)" };
const iconStyle = { background: "var(--imp-text-color)", color: "#fff" };
const bulletListStyle = { marginTop: "12px", paddingLeft: "18px", color: "#ddd", textAlign: "left" };
const subtitleStyle = { color: "#aaa", marginTop: "6px" };
const titleStyle = { color: "var(--imp-text-color)" };

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
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            date="July 2026 – Present"
            iconStyle={iconStyle}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title" style={titleStyle}>
              PM & Techlead
            </h3>
            <h4 className="vertical-timeline-element-subtitle" style={subtitleStyle}>
              VinUniversity · Hanoi, Vietnam
            </h4>
            <ul style={bulletListStyle}>
              <li>Led product development and launch, securing Top 10 among 250 teams at Build Showcase.</li>
              <li>Built a multi-tenant AI Admissions Assistant using LangGraph, FastAPI, and Supabase with strict tenant isolation.</li>
              <li>Implemented an agentic RAG pipeline with Guardrails, semantic caching, and LLM fallback.</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            date="Apr 2026 – July 2026"
            iconStyle={iconStyle}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title" style={titleStyle}>
              AI Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle" style={subtitleStyle}>
              Trung Anh Group · Hanoi, Vietnam
            </h4>
            <ul style={bulletListStyle}>
              <li>Built and deployed RAG chatbots for 20+ healthcare fanpages and 5+ doctors using LangGraph, Qdrant and n8n.</li>
              <li>Automated thousands of customer interactions across Facebook Messenger, Zalo OA, and personal Zalo accounts.</li>
              <li>Designed AI workflows for lead qualification, telesales routing and fragmented conversation recovery.</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            date="Jun 2025 – Apr 2026"
            iconStyle={iconStyle}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title" style={titleStyle}>
              Data Annotator
            </h3>
            <h4 className="vertical-timeline-element-subtitle" style={subtitleStyle}>
              Appen · Hanoi, Vietnam
            </h4>
            <ul style={bulletListStyle}>
              <li>Labeled and annotated text, image, and audio datasets for machine learning model training and evaluation.</li>
              <li>Conducted data validation and quality assurance to maintain dataset consistency and accuracy.</li>
              <li>Contributed to improving AI model performance through high-quality annotated datasets.</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            date="2021 – Dec 2025"
            iconStyle={iconStyle}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title" style={titleStyle}>
              Double Bachelor's Degree in Artificial Intelligence & Computer Science
            </h3>
            <h4 className="vertical-timeline-element-subtitle" style={subtitleStyle}>
              Thang Long University · Hanoi, Vietnam
            </h4>
            <ul style={bulletListStyle}>
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
