import React, { useEffect, useRef, useState } from "react";
import { Badge, Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { FaEnvelope, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import {
  FiCompass,
  FiCpu,
  FiDatabase,
  FiFileText,
  FiGitBranch,
  FiLayers,
  FiMessageSquare,
  FiMoon,
  FiShield,
  FiSun,
  FiUsers,
} from "react-icons/fi";
import "./Landing.css";
import admissionsImg from "../../Assets/Projects/admissions-app-screenshot.png";
import vlearnImg from "../../Assets/Projects/vlearn-tutor.png";
import voiceStudioImg from "../../Assets/Projects/voice-studio-library.png";
import videoStudioImg from "../../Assets/Projects/video-studio-home.png";
import portraitImg from "../../Assets/manh-portrait.jpg";

const copy = {
  vi: {
    navAbout: "Giới thiệu",
    navSkills: "Kỹ năng",
    navServices: "Dịch vụ",
    navProjects: "Dự án",
    navExperience: "Kinh nghiệm",
    navContact: "Liên hệ",
    themeLabel: "Đổi giao diện sáng/tối",
    heroEyebrow: "AI Engineer",
    heroA: "Đưa AI từ demo",
    heroHighlight: "ra vận hành thật",
    heroB: "có kiểm soát và đo được.",
    heroDesc:
      "Nguyễn Hùng Mạnh (AI42E) — AI Engineer tập trung xây dựng các hệ thống LLM, RAG và Agentic AI sẵn sàng vận hành thực tế, bảo mật dữ liệu và đo lường được.",
    ctaProjects: "Xem dự án",
    ctaContact: "Liên hệ",
    ctaCv: "Xem CV",
    servicesEyebrow: "Năng lực",
    servicesTitle: "Năng lực chuyên môn trọng tâm",
    projectsEyebrow: "Dự án",
    projectsTitle: "Các hệ thống tiêu biểu đã triển khai",
    experienceEyebrow: "Kinh nghiệm",
    experienceTitle: "Quá trình làm việc & học vấn",
    flowEyebrow: "Kiến trúc",
    flowTitle: "Quy trình kiến trúc từ dữ liệu đến tri thức tin cậy",
    aboutEyebrow: "Giới thiệu",
    aboutTitle: "Tư duy kiến trúc vững vàng, tập trung vào hiệu quả vận hành",
    aboutBody:
      "Xuất thân từ nền tảng Cử nhân kép ngành Trí tuệ Nhân tạo và Khoa học Máy tính tại Đại học Thăng Long, cùng chứng nhận xuất sắc chương trình AI Thực Chiến tại VinUniversity, tôi tiếp cận AI không dừng lại ở các bản demo thử nghiệm. Trọng tâm của tôi là giải quyết trọn vẹn các bài toán kỹ thuật cốt lõi khi đưa AI vào doanh nghiệp: kiểm soát ảo giác (hallucination), cô lập dữ liệu khách hàng, tối ưu chi phí token và giám sát chất lượng hệ thống theo thời gian thực.",
    aboutFacts: [
      { n: "2", t: "Bằng cử nhân kép AI & Khoa học máy tính, ĐH Thăng Long" },
      { n: "20+", t: "Fanpage y tế vận hành hệ thống AI & tự động hóa đa kênh" },
      { n: "3", t: "Trụ cột chuyên môn: Enterprise RAG, Automation & LLMOps" },
    ],
    skillsEyebrow: "Công nghệ",
    skillsTitle: "Công nghệ & Năng lực kỹ thuật",
    skillGroups: [
      { title: "Kiến trúc LLM & Agentic AI", tone: "blue", items: ["LangGraph Orchestration", "Agentic RAG", "Prompt & Guardrail Engineering", "OpenAI & Anthropic API", "Multi-Agent Systems"] },
      { title: "Backend & Hệ thống dữ liệu", tone: "white", items: ["FastAPI (Async & Streaming)", "Supabase (pgvector & RLS)", "Qdrant Vector Database", "Redis (Semantic Cache)", "Docker Containerization"] },
      { title: "Đánh giá, Vận hành & MLOps", tone: "yellow", items: ["DeepEval & RAGAS Benchmarks", "Hallucination Control", "Semantic Caching Optimization", "p95 Latency Load Testing", "CI/CD Deployment"] },
      { title: "Giao diện & Tự động hoá", tone: "coral", items: ["Next.js & React (Hooks, SSR)", "TypeScript", "Tailwind CSS & Modern UI", "n8n Workflow Automation", "Python (Asyncio, OOP)"] },
    ],
    hireEyebrow: "Hợp tác",
    hireTitle: "Các hình thức hợp tác chuyên môn",
    contactEyebrow: "Liên hệ",
    contactTitle: "Cùng hiện thực hóa các giải pháp AI giá trị",
    contactDesc: "Sẵn sàng trao đổi về tư vấn kiến trúc, dẫn dắt đội ngũ kỹ thuật hoặc triển khai các dự án RAG và Agentic AI cấp sản phẩm.",
    contactBtn: "Gửi email trao đổi",
    footerTagline: "Đưa AI từ demo vào vận hành tin cậy và bền vững.",
    footer: "© 2026 Nguyễn Hùng Mạnh (AI42E)",
  },
  en: {
    navAbout: "About",
    navSkills: "Skills",
    navServices: "Services",
    navProjects: "Projects",
    navExperience: "Experience",
    navContact: "Contact",
    themeLabel: "Toggle light/dark theme",
    heroEyebrow: "AI Engineer",
    heroA: "Take AI from demo",
    heroHighlight: "to real use",
    heroB: "measurable and under control.",
    heroDesc:
      "Nguyen Hung Manh (AI42E) — AI Engineer focused on building production-ready LLM, RAG, and agentic AI systems that solve real problems.",
    ctaProjects: "See projects",
    ctaContact: "Get in touch",
    ctaCv: "View CV",
    servicesEyebrow: "Capabilities",
    servicesTitle: "Core Engineering Capabilities",
    projectsEyebrow: "Projects",
    projectsTitle: "Featured Production Systems",
    experienceEyebrow: "Track Record",
    experienceTitle: "Professional Experience & Education",
    flowEyebrow: "Architecture",
    flowTitle: "End-to-End Production RAG Architecture",
    aboutEyebrow: "About",
    aboutTitle: "Robust Architecture Built for Production Reliability",
    aboutBody:
      "With a double bachelor's degree in Artificial Intelligence and Computer Science from Thang Long University and top honors from VinUniversity's AI in Action program, I approach AI beyond toy prototypes. My focus is solving the hard engineering challenges of production AI: eliminating hallucinations, enforcing strict multi-tenant data isolation, optimizing token costs, and maintaining automated quality evaluation.",
    aboutFacts: [
      { n: "2", t: "Double bachelor's in AI and Computer Science, Thang Long University" },
      { n: "20+", t: "Healthcare clinic channels powered by automated conversational AI" },
      { n: "3", t: "Core pillars: Enterprise RAG, Omnichannel Automation & LLMOps" },
    ],
    skillsEyebrow: "Skills",
    skillsTitle: "Technical Stack & Core Competencies",
    skillGroups: [
      { title: "LLM & Agentic Architectures", tone: "blue", items: ["LangGraph Orchestration", "Agentic RAG", "Prompt & Guardrail Engineering", "OpenAI & Anthropic API", "Multi-Agent Systems"] },
      { title: "Backend & Data Infrastructure", tone: "white", items: ["FastAPI (Async & Streaming)", "Supabase (pgvector & RLS)", "Qdrant Vector Database", "Redis (Semantic Cache)", "Docker Containerization"] },
      { title: "Evaluation & MLOps Reliability", tone: "yellow", items: ["DeepEval & RAGAS Benchmarks", "Hallucination Control", "Semantic Caching Optimization", "p95 Latency Load Testing", "CI/CD Deployment"] },
      { title: "Frontend & Process Automation", tone: "coral", items: ["Next.js & React (Hooks, SSR)", "TypeScript", "Tailwind CSS & Modern UI", "n8n Workflow Automation", "Python (Asyncio, OOP)"] },
    ],
    hireEyebrow: "Collaboration",
    hireTitle: "Ways We Can Collaborate",
    contactEyebrow: "Contact",
    contactTitle: "Let's Build Impactful Production AI Systems",
    contactDesc: "Available for technical architecture advisory, engineering team leadership, or executing production-grade RAG and Agentic AI projects.",
    contactBtn: "Start a Conversation",
    footerTagline: "Taking AI from demo to reliable production.",
    footer: "© 2026 Nguyễn Hùng Mạnh (AI42E)",
  },
};

const services = [
  {
    tone: "blue",
    span: 6,
    title: {
      vi: "Trợ lý Tri thức Doanh nghiệp (Enterprise RAG)",
      en: "Enterprise Knowledge Systems (RAG)",
    },
    desc: {
      vi: "Xây dựng giải pháp RAG đa tenant với khả năng cô lập dữ liệu tuyệt đối giữa các tổ chức, điều phối suy luận nhiều bước bằng LangGraph và kiểm soát độ trung thực của câu trả lời.",
      en: "Production-grade multi-tenant RAG systems with strict per-tenant data isolation, multi-step LangGraph reasoning, and verifiable citation guardrails.",
    },
    chips: ["LangGraph", "Qdrant", "pgvector", "Data Isolation"],
  },
  {
    tone: "white",
    span: 6,
    title: {
      vi: "Tự động hóa Luồng Hội thoại & Lead Routing Đa Kênh",
      en: "Omnichannel AI Automation & Lead Routing",
    },
    desc: {
      vi: "Tích hợp AI vào Messenger, Zalo OA và CRM: tự động phân loại ý định khách hàng thời gian thực, đồng bộ lịch hẹn và chuyển tiếp tức thì các ca khẩn cho đội ngũ chuyên môn.",
      en: "Integrate conversational AI across Messenger, Zalo OA, and CRM: real-time intent classification, booking automation, and smart escalation for urgent cases.",
    },
    chips: ["Messenger API", "Zalo OA", "n8n Workflows", "Event-Driven"],
  },
  {
    tone: "yellow",
    span: 12,
    title: {
      vi: "Đánh giá, Tối ưu & Giám sát Hệ thống LLM (LLMOps)",
      en: "LLM Evaluation, Benchmarking & Optimization",
    },
    desc: {
      vi: "Thiết lập bộ đo benchmark tự động với DeepEval và RAGAS, tích hợp tầng semantic cache giúp tiết kiệm hơn 40% chi phí token và kiểm thử tải áp lực độ trễ trước khi phát hành.",
      en: "Automated evaluation pipelines with DeepEval/RAGAS, semantic caching cutting token costs by over 40%, and latency load testing prior to release.",
    },
    chips: ["DeepEval", "RAGAS", "Semantic Cache", "Latency Testing"],
  },
];

const projects = [
  {
    tone: "blue",
    span: 7,
    image: { src: admissionsImg, alt: "Giao diện trợ lý tuyển sinh AI, câu trả lời có trích dẫn từ đề án tuyển sinh" },
    tag: { vi: "Enterprise Agentic RAG · 2025 – 2026", en: "Enterprise Agentic RAG · 2025 – 2026" },
    title: { vi: "Trợ lý Tuyển sinh AI Đa Tenant", en: "Multi-Tenant AI Admissions Assistant" },
    desc: {
      vi: "Hệ thống Agentic RAG cấp sản phẩm cho tuyển sinh đại học: điều phối luồng truy vấn phức tạp bằng LangGraph, cô lập vector tri thức theo từng khoa/ngành trên Supabase và Qdrant, truyền dữ liệu thời gian thực qua FastAPI streaming, tích hợp Redis semantic cache và đo lường tự động độ chính xác bằng DeepEval.",
      en: "Production-grade admissions assistant: orchestrated with LangGraph, per-tenant vector isolation via Supabase pgvector and Qdrant, real-time FastAPI streaming, Redis semantic caching, and automated hallucination scoring with DeepEval.",
    },
    chips: ["LangGraph", "FastAPI Streaming", "Supabase pgvector", "Qdrant", "Redis Semantic Cache", "DeepEval"],
  },
  {
    tone: "coral",
    span: 5,
    tag: { vi: "Omnichannel Automation · 2026", en: "Omnichannel Automation · 2026" },
    title: { vi: "Điều phối Tin nhắn Phòng khám Đa Kênh", en: "Healthcare Omnichannel Routing & Triage" },
    desc: {
      vi: "Điều phối và phân luồng tự động hàng nghìn hội thoại mỗi tháng qua Messenger và Zalo OA cho hơn 20 fanpage y tế: nhận diện nhu cầu khám tức thì, đồng bộ thông tin đặt lịch vào CRM và kích hoạt cảnh báo khẩn cấp cho bác sĩ trực.",
      en: "Automated omnichannel triage across Messenger and Zalo OA for 20+ clinic fanpages: real-time patient intent recognition, seamless CRM booking synchronization, and emergency doctor escalation alerts.",
    },
    flow: {
      vi: ["Hội thoại Messenger & Zalo OA", "Phân loại ý định thời gian thực", "Đồng bộ lịch hẹn vào CRM", "Cảnh báo ca khẩn cho bác sĩ"],
      en: ["Messenger & Zalo OA Conversations", "Real-Time Intent Classification", "Sync Bookings to CRM", "Urgent Escalation to Doctors"],
    },
    chips: ["LangGraph", "Qdrant", "n8n", "Messenger API", "Zalo OA"],
  },
  {
    tone: "white",
    span: 5,
    tag: { vi: "Quant AI · Mar – Jun 2026", en: "Quant AI · Mar – Jun 2026" },
    title: { vi: "AI42E Quantitative Trading Engine", en: "AI42E Quantitative Trading Engine" },
    desc: {
      vi: "Hệ thống đa agent phân tích dữ liệu thị trường định lượng: kết hợp tín hiệu kỹ thuật algorithmic với mô hình phân tích cảm xúc tin tức tài chính, hoạt động dưới các ràng buộc kiểm soát rủi ro nghiêm ngặt.",
      en: "Multi-agent quantitative research architecture: fusing algorithmic market signals with financial sentiment analysis under rigorous risk-budget constraints.",
    },
    flow: {
      vi: ["Dữ liệu nến & sổ lệnh", "Phân tích cảm xúc tin tài chính", "Cụm Agent phân tích đa chiều", "Ràng buộc quản trị rủi ro"],
      en: ["Market OHLCV & Orderbook", "Financial Sentiment Analysis", "Multi-Agent Reasoning Cluster", "Risk Management Constraints"],
    },
    chips: ["Python Core", "Multi-Agent Systems", "Supabase", "Risk Management"],
  },
  {
    tone: "white",
    span: 7,
    image: { src: videoStudioImg, alt: "AI42E Video Studio: tạo video AI tự động từ mô tả hoặc mẫu có sẵn" },
    tag: { vi: "Media Automation · Jan – Apr 2026", en: "Media Automation · Jan – Apr 2026" },
    title: { vi: "Pipeline Tự động hóa Sản xuất Video", en: "Automated Video Synthesis Pipeline" },
    desc: {
      vi: "Chuỗi quy trình khép kín tự động hóa sản xuất video từ tài liệu thô: sinh kịch bản tối ưu bằng LLM, lồng tiếng biểu cảm tự nhiên với TTS, tạo phụ đề tự động bằng Whisper và render video độ phân giải cao qua FFmpeg.",
      en: "End-to-end automated multimedia production pipeline: LLM script generation, high-fidelity neural TTS narration, Whisper automated subtitle synchronization, and FFmpeg batch rendering.",
    },
    chips: ["Neural TTS", "FFmpeg", "OpenAI Whisper", "FastAPI"],
  },
  {
    tone: "white",
    span: 6,
    image: { src: vlearnImg, alt: "VLearn: trợ lý học luật trả lời kèm trích dẫn trang trong tài liệu PDF" },
    tag: { vi: "EdTech RAG · 2025", en: "EdTech RAG · 2025" },
    title: { vi: "VLearn — Trợ lý Học & Tra cứu Luật", en: "VLearn: Legal Study & Research Assistant" },
    desc: {
      vi: "Giải pháp hỗ trợ nghiên cứu văn bản pháp luật: trích xuất cấu trúc văn bản từ tài liệu PDF phức tạp, giải đáp câu hỏi chuyên sâu kèm dẫn chứng chính xác từng điều khoản, số trang và đề xuất kế hoạch ôn luyện cá nhân hóa.",
      en: "Context-aware legal education assistant: parsing complex legal PDF documents, delivering precise answers grounded with exact article and page citations, and generating personalized study schedules.",
    },
    chips: ["Agentic RAG", "Document Parsing", "Gemini API", "Telegram Bot"],
  },
  {
    tone: "white",
    span: 6,
    image: { src: voiceStudioImg, alt: "Voice Studio: thư viện giọng nói để đọc văn bản tiếng Việt" },
    tag: { vi: "Desktop AI Product · 2025 – 2026", en: "Desktop AI Product · 2025 – 2026" },
    title: { vi: "Voice Studio — Nền tảng Giọng nói AI", en: "Voice Studio: Neural Vietnamese Text-to-Speech" },
    desc: {
      vi: "Ứng dụng máy tính chuyên dụng cho xử lý âm thanh tiếng Việt: tích hợp thư viện giọng đọc biểu cảm tự nhiên, công nghệ nhân bản giọng nói (voice cloning) và khả năng xử lý hoàn toàn offline đảm bảo bảo mật dữ liệu.",
      en: "Dedicated desktop solution for Vietnamese speech synthesis: featuring expressive natural voice models, rapid voice cloning capabilities, and optional offline inference for complete data privacy.",
    },
    chips: ["Neural TTS", "Voice Cloning", "Electron", "PyTorch"],
  },
];

const hireCards = [
  {
    Icon: FiCompass,
    tone: "blue",
    title: { vi: "Tư vấn Kiến trúc AI & RAG", en: "AI Architecture Advisory" },
    desc: {
      vi: "Đánh giá toàn diện kiến trúc LLM, luồng xử lý RAG và mô hình triển khai của doanh nghiệp trước khi đưa lên production nhằm tối ưu chi phí và độ an toàn.",
      en: "In-depth architecture review for LLM, RAG, and agent systems prior to production release, ensuring cost efficiency, scalability, and security.",
    },
  },
  {
    Icon: FiUsers,
    tone: "yellow",
    title: { vi: "Dẫn dắt Đội ngũ Kỹ thuật AI", en: "AI Engineering Team Leadership" },
    desc: {
      vi: "Hoạch định roadmap sản phẩm AI, thiết lập tiêu chuẩn kỹ thuật, xây dựng bộ đo đánh giá tự động và dẫn dắt đội ngũ kỹ sư hiện thực hóa giải pháp.",
      en: "Lead AI product roadmap and engineering delivery, define evaluation standards, and mentor engineering teams to build production-ready systems.",
    },
  },
  {
    Icon: FiLayers,
    tone: "coral",
    title: { vi: "Triển khai Dự án RAG & Agent", en: "End-to-End RAG & Agent Delivery" },
    desc: {
      vi: "Xây dựng giải pháp AI may đo theo bài toán doanh nghiệp: cô lập dữ liệu đa tenant, tích hợp hệ thống sẵn có, thiết lập guardrail và chuyển giao hoàn thiện.",
      en: "Build tailor-made enterprise AI systems: multi-tenant data isolation, seamless integration with existing systems, strict guardrails, and full operational handover.",
    },
  },
];

const milestones = [
  {
    role: "PM Intern",
    org: "VinSmart Future (GSM)",
    time: "09/2026 – Hiện tại",
    timeEn: "Sep 2026 – Present",
    desc: {
      vi: "Hỗ trợ quản lý, theo dõi tiến độ và phối hợp các bên liên quan trong dự án AI; Nghiên cứu thị trường và đối thủ cho bài toán Express; Xây dựng và cập nhật tài liệu dự án chuẩn hóa.",
      en: "Support project planning, progress tracking, and coordination among stakeholders in AI projects; conduct market and competitor research for Express delivery service; develop and maintain project documentation.",
    },
  },
  {
    role: "AI Engineer",
    org: "Trung Anh Group",
    time: "05/2026 – 07/2026",
    timeEn: "May 2026 – Jul 2026",
    desc: {
      vi: "Xây dựng và triển khai chatbot RAG cho hơn 20 fanpage y tế và hơn 5 bác sĩ bằng LangGraph, Qdrant và n8n; tự động hoá hàng nghìn hội thoại trên Messenger, Zalo OA và Zalo cá nhân; thiết kế workflow phân loại lead cho telesales.",
      en: "Built and deployed RAG chatbots for 20+ healthcare fanpages and 5+ doctors using LangGraph, Qdrant and n8n; automated thousands of interactions across Facebook Messenger, Zalo OA, and personal Zalo; designed lead qualification workflows.",
    },
  },
  {
    role: "Data Annotator",
    org: "Appen",
    time: "06/2025 – 04/2026",
    timeEn: "Jun 2025 – Apr 2026",
    desc: {
      vi: "Gán nhãn và chú thích dữ liệu văn bản, hình ảnh, âm thanh cho huấn luyện và đánh giá mô hình ML; kiểm tra và đánh giá chất lượng dữ liệu gán nhãn đảm bảo độ chính xác và tính nhất quán.",
      en: "Labeled and annotated text, image, and audio datasets for machine learning model training and evaluation; conducted data validation and QA to maintain dataset consistency and accuracy.",
    },
  },
  {
    role: "Cử nhân kép AI & Khoa học máy tính",
    roleEn: "Double Bachelor's in AI & CS",
    org: "Trường Đại học Thăng Long",
    orgEn: "Thang Long University",
    time: "2021 – 12/2025",
    timeEn: "2021 – Dec 2025",
    desc: {
      vi: "Tốt nghiệp cử nhân kép ngành Trí tuệ Nhân tạo (GPA 8.3/10) và Khoa học Máy tính (GPA 8.2/10). Nhận chứng nhận của trường về hoạt động nghiên cứu khoa học.",
      en: "Graduated with double bachelor's degrees in Artificial Intelligence (GPA 8.3/10) and Computer Science (GPA 8.2/10). University certificate for scientific research.",
    },
  },
];

// Two tilted bands, scrolling in opposite directions (Kairn style).
const bands = [
  {
    tone: "coral",
    dir: "left",
    items: [
      "LangGraph Orchestration",
      "FastAPI Async",
      "Qdrant Vector DB",
      "Supabase (pgvector)",
      "DeepEval / RAGAS",
      "Docker Containerization",
    ],
  },
  {
    tone: "yellow",
    dir: "right",
    items: [
      "Redis Semantic Cache",
      "Next.js & React",
      "Python Core",
      "n8n Workflows",
      "OpenAI & Anthropic",
    ],
  },
];

const socials = [
  { platform: "GitHub", handle: "@nhmanhDev", url: "https://github.com/nhmanhDev", Icon: FaGithub },
  { platform: "LinkedIn", handle: "@nhmanh-ai4e1208", url: "https://www.linkedin.com/in/nhmanh-ai4e1208/", Icon: FaLinkedinIn },
  { platform: "Facebook", handle: "@nhmanhAI4E", url: "https://www.facebook.com/nhmanhAI4E/", Icon: FaFacebookF },
  { platform: "Email", handle: "nhmanh.dev@gmail.com", url: "mailto:nhmanh.dev@gmail.com", Icon: FaEnvelope },
];

// Pointer-driven 3D tilt. Writes CSS variables instead of state, so moving the mouse never re-renders the page.
const tiltHandlers = {
  onPointerMove(e) {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--ry", `${(x - 0.5) * 12}deg`);
    el.style.setProperty("--rx", `${(0.5 - y) * 10}deg`);
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
  },
  onPointerLeave(e) {
    e.currentTarget.style.setProperty("--rx", "0deg");
    e.currentTarget.style.setProperty("--ry", "0deg");
  },
};

const flowSteps = [
  {
    Icon: FiFileText,
    label: { vi: "Thu nạp Dữ liệu", en: "Data Ingestion" },
    detail: { vi: "Phân tích, trích xuất & chunking tài liệu", en: "Parse, extract & chunk multi-format docs" },
  },
  {
    Icon: FiCpu,
    label: { vi: "Vector hóa Ngữ nghĩa", en: "Semantic Embedding" },
    detail: { vi: "Chuyển đổi thành không gian vector đa chiều", en: "Transform into dense high-dimensional vectors" },
  },
  {
    Icon: FiDatabase,
    label: { vi: "Tìm kiếm Kết hợp", en: "Hybrid Retrieval" },
    detail: { vi: "Phối hợp Dense Vector & Sparse Re-ranking", en: "Dense vector search fused with sparse re-ranking" },
  },
  {
    Icon: FiGitBranch,
    label: { vi: "Điều phối Agent", en: "Agentic Workflow" },
    detail: { vi: "LangGraph định tuyến luồng suy luận & công cụ", en: "LangGraph state routing logic and tool execution" },
  },
  {
    Icon: FiShield,
    label: { vi: "Hàng rào Bảo vệ", en: "Safety Guardrails" },
    detail: { vi: "Chặn injection, xác thực ngữ cảnh & ảo giác", en: "Filter injections, verify context & hallucination" },
  },
  {
    Icon: FiMessageSquare,
    label: { vi: "Phản hồi Chuẩn xác", en: "Grounded Response" },
    detail: { vi: "Streaming thời gian thực kèm trích dẫn nguồn", en: "Real-time streaming with verifiable citations" },
  },
];

function readStored(key, fallback) {
  try {
    return window.localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
}

function writeStored(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Private mode or blocked storage: the page still works without it.
  }
}

// Splits text into words, each animated with its own index so the reveal can stagger word by word.
function Words({ text, offset = 0 }) {
  return text.split(" ").map((word, i, all) => (
    <React.Fragment key={i}>
      <span className="lp-w" style={{ "--i": offset + i }}>{word}</span>
      {i < all.length - 1 ? " " : null}
    </React.Fragment>
  ));
}

// Scroll-linked 3D: each [data-scale] element grows and turns flat as it enters the viewport, and turns away as it leaves.
// Uses the individual `scale` and `rotate` properties, so it does not clash with reveal or tilt transforms.
function useScrollScale(selector) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      document.querySelectorAll(selector).forEach((el) => {
        const { top, bottom } = el.getBoundingClientRect();
        const enter = (vh - top) / (vh * 0.6);
        const exit = bottom / (vh * 0.4);
        const k = Math.max(0, Math.min(1, enter, exit));
        el.style.scale = String(0.84 + 0.16 * k);
        el.style.rotate = `x ${(1 - k) * 16}deg`;
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [selector]);
}

// `ready` turns true once the boot loader has gone, so entrance animations start where people can see them.
function Landing({ ready = true }) {
  const [lang, setLang] = useState(() => readStored("lp-lang", "vi"));
  const [theme, setTheme] = useState(() => readStored("lp-theme", "light"));
  const [activeSection, setActiveSection] = useState(() =>
    typeof window !== "undefined" && window.location.hash
      ? window.location.hash.replace("#", "")
      : ""
  );
  const isClickScrollingRef = useRef(false);
  const clickTimeoutRef = useRef(null);
  const t = copy[lang];
  useScrollScale("[data-scale]");

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    isClickScrollingRef.current = true;
    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    clickTimeoutRef.current = setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 900);
  };

  useEffect(() => {
    const updateNavHeight = () => {
      const nav = document.querySelector(".lp-nav");
      if (nav) {
        const h = Math.max(0, Math.floor(nav.getBoundingClientRect().height) - 1);
        document.documentElement.style.setProperty("--lp-nav-height", `${h}px`);
      }
    };
    updateNavHeight();
    window.addEventListener("resize", updateNavHeight);
    return () => window.removeEventListener("resize", updateNavHeight);
  }, []);

  useEffect(() => {
    const sectionIds = ["about", "services", "projects", "skills", "experience"];
    let frame = 0;

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (isClickScrollingRef.current) return;

        const nav = document.querySelector(".lp-nav");
        const navBottom = nav ? nav.getBoundingClientRect().bottom : 80;
        const scrollY = window.scrollY;

        if (scrollY < 200) {
          setActiveSection("");
          return;
        }

        const contactEl = document.getElementById("contact");
        if (contactEl && contactEl.getBoundingClientRect().top <= navBottom + 80) {
          setActiveSection("");
          return;
        }

        let current = "";
        for (const id of sectionIds) {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= navBottom + 80) {
              current = id;
            }
          }
        }
        if (current) {
          setActiveSection(current);
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    document.title = "Nguyễn Hùng Mạnh | AI Engineer";
  }, []);

  useEffect(() => {
    writeStored("lp-lang", lang);
  }, [lang]);

  useEffect(() => {
    writeStored("lp-theme", theme);
  }, [theme]);

  useEffect(() => {
    const nodes = document.querySelectorAll(".lp-reveal");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`lp-root${ready ? " lp-ready" : ""}`} data-bs-theme={theme} lang={lang} spellCheck="false">
      <Navbar className="lp-nav" sticky="top" expand="lg">
        <Container>
          <Navbar.Brand href="#hero" className="lp-brand" onClick={() => handleNavClick("")}>
            <span className="lp-brand-mark">M</span>
            <span>Mạnh · AI42E</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="lp-nav-collapse" />
          <Navbar.Collapse id="lp-nav-collapse">
            <Nav className="mx-auto align-items-lg-center gap-lg-4">
              <Nav.Link
                href="#about"
                active={activeSection === "about"}
                onClick={() => handleNavClick("about")}
              >
                {t.navAbout}
              </Nav.Link>
              <Nav.Link
                href="#services"
                active={activeSection === "services"}
                onClick={() => handleNavClick("services")}
              >
                {t.navServices}
              </Nav.Link>
              <Nav.Link
                href="#projects"
                active={activeSection === "projects"}
                onClick={() => handleNavClick("projects")}
              >
                {t.navProjects}
              </Nav.Link>
              <Nav.Link
                href="#skills"
                active={activeSection === "skills"}
                onClick={() => handleNavClick("skills")}
              >
                {t.navSkills}
              </Nav.Link>
              <Nav.Link
                href="#experience"
                active={activeSection === "experience"}
                onClick={() => handleNavClick("experience")}
              >
                {t.navExperience}
              </Nav.Link>
            </Nav>
            <div className="lp-tools d-flex align-items-center gap-2">
              <button
                type="button"
                className="lp-tool-btn"
                onClick={() => setLang(lang === "vi" ? "en" : "vi")}
              >
                {lang === "vi" ? "EN" : "VI"}
              </button>
              <button
                type="button"
                className="lp-tool-btn"
                aria-label={t.themeLabel}
                title={t.themeLabel}
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                {theme === "light" ? <FiMoon /> : <FiSun />}
              </button>
              <Button
                href="#contact"
                className="lp-btn-dark lp-btn-sm ms-lg-2"
                onClick={() => handleNavClick("")}
              >
                {t.ctaContact}
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section id="hero" className="lp-hero">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6} className="lp-rise">
              <Badge pill className="lp-pill lp-rise">{t.heroEyebrow}</Badge>
              <h1 className="lp-h1">
                <Words text={t.heroA} />{" "}
                <mark className="lp-mark">
                  <Words text={t.heroHighlight} offset={t.heroA.split(" ").length} />
                </mark>{" "}
                <Words text={t.heroB} offset={t.heroA.split(" ").length + t.heroHighlight.split(" ").length} />
              </h1>
              <p className="lp-lead lp-rise" style={{ animationDelay: "0.75s" }}>{t.heroDesc}</p>
              <div className="d-flex flex-wrap gap-3 lp-rise" style={{ animationDelay: "0.85s" }}>
                <Button href="#projects" className="lp-btn-dark">{t.ctaProjects} ↓</Button>
                <Button href="#contact" className="lp-btn-outline">{t.ctaContact}</Button>
                <Button href={lang === "vi" ? "/CV_tieng_Viet.pdf" : "/Nguyen_Hung_Manh_Resume.pdf"} target="_blank" rel="noopener noreferrer" className="lp-btn-outline">{t.ctaCv}</Button>
              </div>
            </Col>
            <Col lg={6} className="lp-rise lp-rise-delay">
              <div className="lp-arch-wrap" {...tiltHandlers}>
                <div className="lp-scene">
                  <div className="lp-arch">
                    <img className="lp-arch-img" src={portraitImg} alt="Nguyễn Hùng Mạnh" />
                  </div>
                  <span className="lp-float lp-float-1">LangGraph</span>
                  <span className="lp-float lp-float-2">Qdrant</span>
                  <span className="lp-float lp-float-3">DeepEval</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <div className="lp-bands" aria-hidden="true">
        {bands.map((band) => (
          <div key={band.tone} className={`lp-band lp-band-${band.tone}`}>
            <div className={`lp-band-track lp-band-${band.dir}`}>
              {[...band.items, ...band.items].map((item, i) => (
                <span key={i} className="lp-band-item">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <section id="about" className="lp-section lp-about">
        <Container>
          <Row className="g-5 align-items-center">
            <Col lg={6} className="lp-reveal">
              <h2 className="lp-h2 lp-about-title">{t.aboutTitle}</h2>
              <p className="lp-about-body">{t.aboutBody}</p>
            </Col>
            <Col lg={{ span: 5, offset: 1 }}>
              <div className="lp-facts">
                {t.aboutFacts.map((f, i) => (
                  <div key={f.n} className="lp-fact lp-reveal" style={{ "--d": `${i * 120}ms` }}>
                    <span className="lp-fact-num">{f.n}</span>
                    <span className="lp-fact-text">{f.t}</span>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="lp-section lp-section-band lp-flow-sec">
        <Container>
          <div className="lp-sec-head lp-reveal">
            <h2 className="lp-h2">{t.flowTitle}</h2>
          </div>
          <div className="lp-flow">
            {flowSteps.map(({ Icon, label, detail }, i) => (
              <div
                key={label.en}
                className="lp-flow-node lp-reveal"
                style={{ "--d": `${i * 120}ms`, "--i": i }}
              >
                <span className="lp-flow-icon" aria-hidden="true">
                  <Icon />
                </span>
                <span className="lp-flow-index">{String(i + 1).padStart(2, "0")}</span>
                <span className="lp-flow-label">{label[lang]}</span>
                <span className="lp-flow-detail">{detail[lang]}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="services" className="lp-section">
        <Container>
          <div className="lp-sec-head">
            <h2 className="lp-h2">{t.servicesTitle}</h2>
          </div>
          <Row className="g-4">
            {services.map((s, i) => (
              <Col md={4} key={s.title.en} className="lp-reveal" style={{ "--d": `${i * 100}ms` }}>
                <article {...tiltHandlers} className={`lp-card lp-tilt lp-tone-${s.tone} lp-pad lp-compact`}>
                  <h3 className="lp-card-title">{s.title[lang]}</h3>
                  <p className="lp-card-desc">{s.desc[lang]}</p>
                  <div className="lp-chips">
                    {s.chips.map((c) => (
                      <Badge pill key={c} className="lp-chip">{c}</Badge>
                    ))}
                  </div>
                </article>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section id="projects" className="lp-section lp-section-band lp-section-dots">
        <Container>
          <div className="lp-sec-head">
            <h2 className="lp-h2">{t.projectsTitle}</h2>
          </div>
          <Row className="g-4 lp-persp">
            {projects.map((p, i) => (
              <Col lg={p.span} key={p.title.en} className="lp-reveal lp-project-col" data-scale style={{ "--d": `${(i % 2) * 120}ms` }}>
                <article {...tiltHandlers} className={`lp-card lp-tilt lp-tone-${p.tone} lp-pad lp-project`}>
                  <span className="lp-proj-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  {p.image && <img className="lp-project-img" src={p.image.src} alt={p.image.alt} />}
                  <span className="lp-tag">{p.tag[lang]}</span>
                  <h3 className="lp-card-title">{p.title[lang]}</h3>
                  <p className="lp-card-desc">{p.desc[lang]}</p>
                  {p.flow && (
                    <ol className="lp-mini-flow" aria-label={p.title[lang]}>
                      {p.flow[lang].map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>
                  )}
                  <div className="lp-chips">
                    {p.chips.map((c) => (
                      <Badge pill key={c} className="lp-chip">{c}</Badge>
                    ))}
                  </div>
                </article>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section id="skills" className="lp-section">
        <Container>
          <div className="lp-sec-head">
            <h2 className="lp-h2">{t.skillsTitle}</h2>
          </div>
          <Row className="g-4">
            {t.skillGroups.map((g, i) => (
              <Col md={6} key={g.title} className="lp-reveal" style={{ "--d": `${(i % 2) * 120}ms` }}>
                <article {...tiltHandlers} className={`lp-card lp-tilt lp-tone-${g.tone} lp-pad h-100`}>
                  <h3 className="lp-card-title lp-card-title-sm">{g.title}</h3>
                  <div className="lp-chips">
                    {g.items.map((item) => (
                      <Badge pill key={item} className="lp-chip">{item}</Badge>
                    ))}
                  </div>
                </article>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section id="experience" className="lp-section lp-section-band">
        <Container>
          <div className="lp-sec-head">
            <h2 className="lp-h2">{t.experienceTitle}</h2>
          </div>
          <ol className="lp-timeline">
            {milestones.map((m) => (
              <li key={m.org} className="lp-timeline-item lp-reveal">
                <div className="lp-timeline-head">
                  <span className="lp-timeline-role">
                    {(lang === "vi" ? m.role : (m.roleEn || m.role))} · <span className="lp-timeline-org">{(lang === "vi" ? m.org : (m.orgEn || m.org))}</span>
                  </span>
                  <span className="lp-timeline-time">{lang === "vi" ? m.time : m.timeEn}</span>
                </div>
                <p className="lp-timeline-desc">{m.desc[lang]}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="lp-dark">
        <Container>
          <div className="lp-sec-head text-center">
            <h2 className="lp-h2">{t.hireTitle}</h2>
          </div>
          <Row className="g-4">
            {hireCards.map((h, i) => (
              <Col md={4} key={h.title.en} className="lp-reveal" style={{ "--d": `${i * 120}ms` }}>
                <article {...tiltHandlers} className={`lp-card lp-tilt lp-tone-${h.tone} lp-pad h-100`}>
                  <span className="lp-hire-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  <span className="lp-hire-icon" aria-hidden="true">
                    <h.Icon />
                  </span>
                  <h3 className="lp-card-title">{h.title[lang]}</h3>
                  <p className="lp-card-desc">{h.desc[lang]}</p>
                </article>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <footer id="contact" className="lp-footer">
        <Container>
          <Row className="gy-5 align-items-end">
            <Col lg={6}>
              <h2 className="lp-footer-title">{t.contactTitle}</h2>
              <p className="lp-footer-desc">{t.contactDesc}</p>
              <Button href="mailto:nhmanh.dev@gmail.com" className="lp-btn-light">
                {t.contactBtn}
              </Button>
            </Col>
            <Col lg={{ span: 5, offset: 1 }}>
              <ul className="lp-contact-list">
                {socials.map(({ platform, handle, url, Icon }) => (
                  <li key={platform}>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="lp-contact-link">
                      <Icon className="lp-contact-icon" aria-hidden="true" />
                      <span className="lp-contact-platform">{platform}</span>
                      <span className="lp-contact-handle">{handle}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
          <div className="lp-footer-bottom">
            <div className="lp-footer-brand">
              <span className="lp-brand-mark">M</span>
              <span className="lp-footer-tagline">{t.footerTagline}</span>
            </div>
            <div className="lp-footer-copy">{t.footer}</div>
          </div>
          <div className="lp-footer-wordmark" aria-hidden="true">AI42E</div>
        </Container>
      </footer>
    </div>
  );
}

export default Landing;
