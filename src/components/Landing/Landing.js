import React, { useEffect, useRef, useState } from "react";
import { Badge, Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { FaEnvelope, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import {
  FiCompass,
  FiLayers,
  FiMoon,
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
    navProjects: "Dự án",
    navExperience: "Kinh nghiệm",
    navContact: "Liên hệ",
    themeLabel: "Đổi giao diện sáng/tối",
    heroEyebrow: "Nguyễn Hùng Mạnh - AI Engineer",
    heroA: "Đưa AI từ bản mẫu",
    heroHighlight: "vào vận hành thực tế",
    heroB: "— ổn định, an toàn và đo lường được.",
    heroDesc:
      "Chào bạn, mình là Mạnh (AI42E). Mình thiết kế và xây dựng các hệ thống LLM, RAG và AI Agent hoàn chỉnh (end-to-end) — giải quyết bài toán nghiệp vụ thực tế với độ chính xác cao và chi phí tối ưu.",
    ctaProjects: "Xem dự án",
    ctaContact: "Liên hệ",
    ctaCv: "Xem CV",
    projectsEyebrow: "Dự án tiêu biểu",
    projectsTitle: "Các hệ thống & sản phẩm đã xây dựng",
    experienceEyebrow: "Hành trình & Kỹ năng",
    experienceTitle: "Kinh nghiệm làm việc & Học vấn",
    aboutEyebrow: "Giới thiệu",
    aboutTitle: "Không chỉ dừng ở mô hình — tập trung vào bài toán vận hành",
    aboutBody:
      "Một bản demo AI có thể làm trong vài giờ, nhưng một hệ thống chạy ổn định cần kiến trúc bài bản. Tôi tập trung giải quyết 3 bài toán cốt lõi khi đưa AI vào doanh nghiệp: kiểm soát ảo giác (hallucination), phân tách dữ liệu an toàn và tối ưu chi phí token cùng độ trễ.",
    aboutFacts: [
      { n: "6+", t: "Hệ thống AI & sản phẩm thực tế đã xây dựng từ con số 0 (End-to-End)" },
      { n: "20+", t: "Fanpage y tế vận hành hệ thống AI & tự động hóa đa kênh" },
      { n: "8.3", t: "GPA Cử nhân kép ngành Trí tuệ Nhân tạo & Khoa học Máy tính (ĐH Thăng Long)" },
    ],
    hireEyebrow: "Hợp tác",
    hireTitle: "Các hình thức hợp tác",
    contactEyebrow: "Liên hệ",
    contactTitle: "Cùng đưa ý tưởng AI vào vận hành thực tế",
    contactDesc:
      "Đang tìm kiếm cơ hội toàn thời gian ở vị trí AI Engineer / Product Builder, cũng như sẵn sàng hợp tác triển khai các dự án RAG, AI Agent và tự động hóa thực tế.",
    contactBtn: "Gửi email trao đổi",
    footerTagline: "Đưa AI từ bản mẫu vào vận hành thực tế — tin cậy và hiệu quả.",
    footer: "© 2026 Nguyễn Hùng Mạnh (AI42E)",
  },
  en: {
    navAbout: "About",
    navProjects: "Projects",
    navExperience: "Experience",
    navContact: "Contact",
    themeLabel: "Toggle light/dark theme",
    heroEyebrow: "Nguyen Hung Manh - AI Engineer",
    heroA: "Taking AI from prototype",
    heroHighlight: "to real-world production",
    heroB: "— reliable, measurable, and cost-controlled.",
    heroDesc:
      "Hi, I'm Manh (AI42E) — an AI Engineer specializing in end-to-end LLM, RAG, and Agentic workflows built for accuracy, low latency, and real business impact.",
    ctaProjects: "See projects",
    ctaContact: "Get in touch",
    ctaCv: "View CV",
    projectsEyebrow: "Featured Work",
    projectsTitle: "Production Systems & AI Products",
    experienceEyebrow: "Career & Stack",
    experienceTitle: "Experience & Education",
    aboutEyebrow: "About",
    aboutTitle: "Engineering AI Systems Built for Production Reliability",
    aboutBody:
      "Building an AI demo takes hours; making it reliable in production takes solid engineering. I focus on the hard parts of enterprise AI: minimizing hallucinations, enforcing strict multi-tenant data isolation, and optimizing latency and token costs.",
    aboutFacts: [
      { n: "6+", t: "End-to-end AI systems & products built and deployed from scratch" },
      { n: "20+", t: "Healthcare clinic channels powered by automated conversational AI" },
      { n: "8.3", t: "GPA across Double Bachelor's in AI & Computer Science (Thang Long Univ)" },
    ],
    hireEyebrow: "Collaboration",
    hireTitle: "Ways We Can Work Together",
    contactEyebrow: "Contact",
    contactTitle: "Let's Build Reliable Production AI Together",
    contactDesc:
      "Open to full-time AI Engineer roles and freelance partnerships for building production RAG, Agentic AI, and automation systems.",
    contactBtn: "Start a Conversation",
    footerTagline: "Taking AI from prototype to reliable production.",
    footer: "© 2026 Nguyễn Hùng Mạnh (AI42E)",
  },
};

const projects = [
  {
    tone: "blue",
    span: 7,
    image: { src: admissionsImg, alt: "Giao diện trợ lý tuyển sinh AI, câu trả lời có trích dẫn từ đề án tuyển sinh" },
    tag: { vi: "Enterprise Agentic RAG · 2025 – 2026", en: "Enterprise Agentic RAG · 2025 – 2026" },
    title: { vi: "Trợ lý Tuyển sinh AI Đa Tenant", en: "Multi-Tenant AI Admissions Assistant" },
    desc: {
      vi: "Hệ thống Agentic RAG phục vụ tư vấn tuyển sinh đại học với kiến trúc Multi-Tenant, giúp phân tách độc lập dữ liệu của từng khoa/ngành trên Qdrant và Supabase. Sử dụng LangGraph để điều phối truy vấn phức tạp, kết hợp FastAPI streaming và Redis semantic cache để giảm độ trễ phản hồi, đồng thời kiểm soát chất lượng câu trả lời tự động qua DeepEval.",
      en: "Production-ready multi-tenant Agentic RAG system for university admissions. Orchestrates complex queries via LangGraph with strict per-department vector isolation on Qdrant and Supabase pgvector. Engineered for low latency using FastAPI streaming and Redis semantic caching, backed by automated hallucination testing with DeepEval.",
    },
    chips: ["LangGraph", "FastAPI Streaming", "Supabase pgvector", "Qdrant", "Redis Semantic Cache", "DeepEval"],
  },
  {
    tone: "coral",
    span: 5,
    tag: { vi: "Omnichannel Automation · 2026", en: "Omnichannel Automation · 2026" },
    title: { vi: "Điều phối Tin nhắn Phòng khám Đa Kênh", en: "Healthcare Omnichannel Routing & Triage" },
    desc: {
      vi: "Hệ thống chatbot và phân luồng tự động xử lý hàng nghìn tin nhắn mỗi tháng trên Messenger và Zalo OA cho chuỗi hơn 20 fanpage phòng khám. Tự động nhận diện nhu cầu bệnh nhân, trích xuất thông tin đặt lịch đẩy thẳng về CRM và gửi cảnh báo tức thì cho bác sĩ trực khi phát hiện ca khẩn cấp.",
      en: "Automated omnichannel triage system handling thousands of monthly patient inquiries across Messenger and Zalo OA for 20+ healthcare fanpages. Detects patient intent in real time, syncs qualified booking leads directly to the CRM, and triggers instant escalation alerts for on-call doctors.",
    },
    flow: {
      vi: ["Hội thoại Messenger & Zalo OA", "Phân loại nhu cầu thời gian thực", "Đồng bộ lịch hẹn vào CRM", "Cảnh báo ca khẩn cho bác sĩ"],
      en: ["Messenger & Zalo OA Inquiries", "Real-Time Intent Classification", "Sync Bookings to CRM", "Urgent Escalation to Doctors"],
    },
    chips: ["LangGraph", "Qdrant", "n8n", "Messenger API", "Zalo OA"],
  },
  {
    tone: "white",
    span: 5,
    tag: { vi: "Quant AI · Mar – Jun 2026", en: "Quant AI · Mar – Jun 2026" },
    title: { vi: "AI42E Quantitative Trading Engine", en: "AI42E Quantitative Trading Engine" },
    desc: {
      vi: "Hệ thống Multi-Agent hỗ trợ phân tích giao dịch định lượng. Kết hợp dữ liệu chỉ báo kỹ thuật (OHLCV, sổ lệnh) với mô hình đánh giá sắc thái tin tức tài chính (Sentiment Analysis) để đưa ra tín hiệu giao dịch, đi kèm bộ quy tắc kiểm soát rủi ro và giới hạn vốn chặt chẽ.",
      en: "Multi-agent quantitative trading analysis engine that fuses technical market indicators (OHLCV, orderbook depth) with real-time financial news sentiment, operating under strict automated risk-management and position-sizing rules.",
    },
    flow: {
      vi: ["Dữ liệu nến & sổ lệnh", "Phân tích sắc thái tin tài chính", "Cụm Agent phân tích đa chiều", "Ràng buộc quản trị rủi ro"],
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
      vi: "Pipeline tự động hóa toàn bộ quy trình tạo video từ văn bản thô: dùng LLM viết kịch bản, chuyển thành giọng đọc tự nhiên qua Neural TTS, đồng bộ phụ đề chính xác tới từng khung hình bằng Whisper và tự động ghép, xuất video hàng loạt qua FFmpeg.",
      en: "End-to-end automated video production pipeline transforming raw text into finished videos: combines LLM scriptwriting, expressive Neural TTS voiceovers, frame-accurate Whisper subtitle syncing, and batch rendering via FFmpeg.",
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
      vi: "Trợ lý AI hỗ trợ sinh viên và người làm luật tra cứu, ôn tập văn bản pháp quy. Xử lý các file PDF luật có cấu trúc phức tạp, trả lời câu hỏi tình huống kèm trích dẫn chính xác đến từng điều khoản, số trang và tự động lên lộ trình ôn tập cá nhân hóa.",
      en: "RAG-powered legal study assistant that parses complex statutory PDFs to answer legal queries with exact article and page citations, while generating personalized study schedules via Telegram and web interfaces.",
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
      vi: "Ứng dụng Desktop chuyển văn bản thành giọng nói (TTS) tối ưu riêng cho tiếng Việt. Cung cấp kho giọng đọc tự nhiên, tính năng nhân bản giọng nói nhanh (Voice Cloning) và hỗ trợ chạy mô hình trực tiếp trên máy (Offline Inference) giúp bảo mật tuyệt đối dữ liệu âm thanh.",
      en: "Desktop application for Vietnamese speech synthesis featuring natural expressive voices, rapid voice cloning, and local offline inference for complete audio data privacy.",
    },
    chips: ["Neural TTS", "Voice Cloning", "Electron", "PyTorch"],
  },
];

const hireCards = [
  {
    Icon: FiUsers,
    tone: "blue",
    title: { vi: "Toàn thời gian (Full-time / In-house)", en: "Full-Time AI Engineer (In-House)" },
    desc: {
      vi: "Gia nhập đội ngũ kỹ thuật trong vai trò AI Engineer hoặc Product Builder: trực tiếp nghiên cứu, thiết kế kiến trúc và đưa các hệ thống AI cốt lõi (LLM, RAG, Agent) vào vận hành ổn định lâu dài.",
      en: "Join your engineering team as a full-time AI Engineer or Product Builder to architect, ship, and scale core AI capabilities in production.",
    },
  },
  {
    Icon: FiLayers,
    tone: "yellow",
    title: { vi: "Triển khai theo Dự án (Project-based / MVP)", en: "Project-Based Delivery (AI MVP)" },
    desc: {
      vi: "Đồng hành cùng startup và doanh nghiệp xây dựng trọn gói hệ thống RAG, AI Agent hoặc sản phẩm AI từ con số 0 đến production với tiến độ rõ ràng, kiến trúc chuẩn và bàn giao hoàn chỉnh.",
      en: "End-to-end delivery of custom RAG systems, Agentic workflows, or AI MVPs from scratch to production with clear milestones and clean handover.",
    },
  },
  {
    Icon: FiCompass,
    tone: "coral",
    title: { vi: "Cố vấn Kỹ thuật & Tối ưu (Advisory & Optimization)", en: "Technical Advisory & Optimization" },
    desc: {
      vi: "Rà soát, đánh giá kiến trúc hệ thống AI hiện tại; tư vấn giải pháp kiểm soát ảo giác (hallucination), cô lập dữ liệu an toàn và tối ưu chi phí token cùng độ trễ (latency).",
      en: "Audit existing AI systems, advise on strict data isolation and hallucination guardrails, and optimize token costs and p95 latency.",
    },
  },
];

const coreSkills = [
  "LangGraph Orchestration",
  "Multi-Tenant RAG",
  "Agentic Workflows",
  "Hybrid Search (Dense + BM25)",
  "FastAPI Async",
  "Qdrant Vector DB",
  "Supabase (pgvector)",
  "DeepEval & RAGAS",
  "Semantic Caching",
  "LLM Guardrails",
  "Docker Containerization",
  "Next.js & TypeScript",
  "n8n Automation",
  "Python Asyncio",
  "PostgreSQL & RLS",
  "Redis Cache",
];

const milestones = [
  {
    role: "PM Intern",
    org: "VinSmart Future (GSM)",
    time: "09/2026 – Hiện tại",
    timeEn: "Sep 2026 – Present",
    desc: {
      vi: "Điều phối tiến độ và làm việc trực tiếp với các bên liên quan (stakeholders) trong các dự án sản phẩm AI; phân tích thị trường, đối thủ cạnh tranh cho bài toán giao hàng siêu tốc (Express) và xây dựng hệ thống tài liệu đặc tả sản phẩm (PRD/Specs) chuẩn hóa.",
      en: "Coordinate project timelines and cross-functional stakeholders for AI product initiatives; conduct market and competitor analysis for Express delivery services, and author standardized product specifications.",
    },
    skills: ["AI Product Management", "Express Delivery AI", "PRD & Specs", "Market Research"],
  },
  {
    role: "AI Engineer",
    org: "Trung Anh Group",
    time: "05/2026 – 07/2026",
    timeEn: "May 2026 – Jul 2026",
    desc: {
      vi: "Thiết kế và triển khai hệ thống chatbot RAG cho hơn 20 fanpage y tế và hơn 5 bác sĩ bằng LangGraph, Qdrant và n8n; tự động hóa hàng nghìn hội thoại mỗi tháng trên Messenger, Zalo OA và Zalo cá nhân; xây dựng luồng phân loại và chấm điểm khách hàng tiềm năng (lead qualification) cho đội ngũ telesales.",
      en: "Designed and deployed RAG chatbots for 20+ healthcare fanpages and 5+ doctors using LangGraph, Qdrant, and n8n; automated thousands of monthly conversations across Messenger, Zalo OA, and personal Zalo; built automated lead qualification workflows for telesales teams.",
    },
    skills: ["LangGraph", "Qdrant Vector DB", "n8n Automation", "Zalo OA & Messenger API", "Multi-Tenant RAG"],
  },
  {
    role: "Data Annotator",
    org: "Appen",
    time: "06/2025 – 04/2026",
    timeEn: "Jun 2025 – Apr 2026",
    desc: {
      vi: "Xử lý, gán nhãn dữ liệu đa phương thức (văn bản, hình ảnh, âm thanh) phục vụ huấn luyện và tinh chỉnh mô hình ngôn ngữ/AI; kiểm soát chất lượng (QA) tập dữ liệu nhằm đảm bảo độ chính xác và tính nhất quán theo tiêu chuẩn đánh giá mô hình.",
      en: "Annotated multimodal datasets (text, image, audio) for ML/LLM training and fine-tuning; performed rigorous data validation and QA to ensure high accuracy and consistency across evaluation benchmarks.",
    },
    skills: ["LLM RLHF Annotation", "Data Quality QA", "Model Evaluation", "Multimodal Datasets"],
  },
  {
    role: "Cử nhân kép AI & Khoa học máy tính",
    roleEn: "Double Bachelor's in AI & CS",
    org: "Trường Đại học Thăng Long",
    orgEn: "Thang Long University",
    time: "10/2020 – 12/2025",
    timeEn: "Oct 2020 – Dec 2025",
    desc: {
      vi: "Tốt nghiệp Cử nhân kép ngành Trí tuệ Nhân tạo (GPA 8.3/10) và Khoa học Máy tính (GPA 8.2/10). Đạt chứng nhận Nghiên cứu Khoa học xuất sắc của trường.",
      en: "Graduated with Double Bachelor's degrees in Artificial Intelligence (GPA 8.3/10) and Computer Science (GPA 8.2/10). Awarded university certificate for excellence in scientific research.",
    },
    skills: ["AI & Computer Science", "GPA 8.3 & 8.2", "Machine Learning", "Scientific Research"],
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
    const sectionIds = ["about", "projects", "experience"];
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
            <span>AI42E</span>
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
                href="#projects"
                active={activeSection === "projects"}
                onClick={() => handleNavClick("projects")}
              >
                {t.navProjects}
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

      <section id="experience" className="lp-section lp-section-band">
        <Container>
          <div className="lp-sec-head">
            <h2 className="lp-h2">{t.experienceTitle}</h2>
          </div>
          <div className="lp-skills-ticker lp-reveal">
            <div className="lp-ticker-track">
              {[...coreSkills, ...coreSkills].map((skill, idx) => (
                <span key={`${skill}-${idx}`} className="lp-ticker-pill">
                  {skill}
                </span>
              ))}
            </div>
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
                {m.skills && (
                  <div className="lp-timeline-skills d-flex flex-wrap gap-2 mt-2">
                    {m.skills.map((s) => (
                      <span key={s} className="lp-timeline-chip">
                        {s}
                      </span>
                    ))}
                  </div>
                )}
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
