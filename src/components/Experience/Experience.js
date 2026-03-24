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
            date="Jun 2025 – Present"
            iconStyle={{ background: "#c770f0", color: "#fff" }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title" style={{ color: "#c770f0" }}>
              Data Annotator
            </h3>
            <h4 className="vertical-timeline-element-subtitle" style={{ color: "#aaa", marginTop: "6px" }}>
              Appen · Hanoi, Vietnam
            </h4>
            <ul style={{ marginTop: "12px", paddingLeft: "18px", color: "#ddd" }}>
              <li>Annotated text, image, and audio data for ML training pipelines</li>
              <li>Ensured data quality through strict annotation guidelines</li>
              <li>Performed validation and QA on curated datasets</li>
              <li>Contributed to improving AI model performance through high-quality labeled data</li>
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
            iconStyle={{ background: "#7b2d9e", color: "#fff" }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title" style={{ color: "#c770f0" }}>
              B.Sc. Artificial Intelligence & Computer Science
            </h3>
            <h4 className="vertical-timeline-element-subtitle" style={{ color: "#aaa", marginTop: "6px" }}>
              Thang Long University · Hanoi, Vietnam
            </h4>
            <ul style={{ marginTop: "12px", paddingLeft: "18px", color: "#ddd" }}>
              <li>GPA: AI — 8.3/10 · CS — 8.2/10</li>
              <li>Relevant: ML, NLP, Computer Vision, Data Mining, Big Data</li>
              <li>Expected Graduation: December 2025</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Container>
    </Container>
  );
}

export default Experience;
