import React, { useEffect, useState } from "react";
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
      "Nguyễn Hùng Mạnh (AI42E). Thiết kế hệ thống LLM, RAG và agent với dữ liệu tách riêng theo khách hàng, có cơ chế chặn lỗi và đánh giá tự động trước khi đến tay người dùng thật.",
    ctaProjects: "Xem dự án",
    ctaContact: "Liên hệ",
    ctaCv: "Xem CV",
    servicesEyebrow: "Dịch vụ",
    servicesTitle: "Ba mảng chuyên môn",
    projectsEyebrow: "Dự án",
    projectsTitle: "Một vài hệ thống đã xây",
    experienceEyebrow: "Kinh nghiệm",
    experienceTitle: "Quá trình làm việc",
    flowEyebrow: "Luồng xử lý",
    flowTitle: "Từ tài liệu đến câu trả lời",
    aboutEyebrow: "Giới thiệu",
    aboutTitle: "Từ dữ liệu đến hệ thống chạy thật",
    aboutBody:
      "Nguyễn Hùng Mạnh (AI42E) làm việc ở giao điểm của AI, sản phẩm và kỹ thuật: từ kiến trúc RAG và agent đến việc đưa chúng vào vận hành với dữ liệu tách riêng, kiểm soát lỗi và đánh giá tự động.",
    aboutFacts: [
      { n: "2", t: "Bằng cử nhân kép AI và Khoa học máy tính, ĐH Thăng Long" },
      { n: "20+", t: "Fanpage y tế được vận hành bằng tự động hoá đa kênh" },
      { n: "3", t: "Mảng chính: RAG, tự động hoá đa kênh, đánh giá AI" },
    ],
    skillsEyebrow: "Kỹ năng",
    skillsTitle: "Công cụ đang dùng hằng ngày",
    skillGroups: [
      { title: "LLM & agent", tone: "blue", items: ["LangGraph", "LangChain", "Agentic RAG", "OpenAI", "Anthropic"] },
      { title: "Backend & dữ liệu", tone: "white", items: ["FastAPI", "Supabase / pgvector", "Qdrant", "Redis", "Docker"] },
      { title: "Đánh giá & vận hành", tone: "yellow", items: ["DeepEval", "RAGAS", "Guardrail", "Semantic cache"] },
      { title: "Frontend & tự động hoá", tone: "coral", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "n8n", "Python"] },
    ],
    hireEyebrow: "Hợp tác",
    hireTitle: "Cách hợp tác",
    contactEyebrow: "Liên hệ",
    contactTitle: "Cùng xây hệ thống AI",
    contactDesc: "Nhận tư vấn kỹ thuật, dẫn dắt đội AI và các dự án RAG.",
    contactBtn: "Gửi email",
    footerTagline: "Đưa AI từ demo ra production.",
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
      "Nguyễn Hùng Mạnh (AI42E). Designing LLM, RAG and agent systems with per-client data isolation, guardrails and automated evaluation before real users see them.",
    ctaProjects: "See projects",
    ctaContact: "Get in touch",
    ctaCv: "View CV",
    servicesEyebrow: "Services",
    servicesTitle: "Three areas of focus",
    projectsEyebrow: "Projects",
    projectsTitle: "Selected systems built",
    experienceEyebrow: "Experience",
    experienceTitle: "Track record",
    flowEyebrow: "How it works",
    flowTitle: "From documents to answers",
    aboutEyebrow: "About",
    aboutTitle: "From data to systems that run in production",
    aboutBody:
      "Nguyễn Hùng Mạnh (AI42E) works where AI, product and engineering meet: from RAG and agent architecture to running them in production with isolated data, error control and automated evaluation.",
    aboutFacts: [
      { n: "2", t: "Double bachelor's in AI and Computer Science, Thang Long University" },
      { n: "20+", t: "Healthcare fanpages run on multi-channel automation" },
      { n: "3", t: "Core areas: RAG, multi-channel automation, AI evaluation" },
    ],
    skillsEyebrow: "Skills",
    skillsTitle: "Tools I use day to day",
    skillGroups: [
      { title: "LLM & agents", tone: "blue", items: ["LangGraph", "LangChain", "Agentic RAG", "OpenAI", "Anthropic"] },
      { title: "Backend & data", tone: "white", items: ["FastAPI", "Supabase / pgvector", "Qdrant", "Redis", "Docker"] },
      { title: "Evaluation & operations", tone: "yellow", items: ["DeepEval", "RAGAS", "Guardrail", "Semantic cache"] },
      { title: "Frontend & automation", tone: "coral", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "n8n", "Python"] },
    ],
    hireEyebrow: "Work together",
    hireTitle: "Ways to work together",
    contactEyebrow: "Contact",
    contactTitle: "Let's build AI systems together",
    contactDesc: "Technical advisory, AI team leadership and RAG projects.",
    contactBtn: "Send an email",
    footerTagline: "Taking AI from demo to production.",
    footer: "© 2026 Nguyễn Hùng Mạnh (AI42E)",
  },
};

const services = [
  {
    tone: "blue",
    span: 6,
    title: { vi: "Trợ lý tra cứu tài liệu nội bộ", en: "Internal document assistant" },
    desc: {
      vi: "Thu thập, vector hoá và cô lập dữ liệu theo từng khách hàng, điều phối bằng LangGraph kèm guardrail.",
      en: "Ingest and vectorize knowledge with per-tenant isolation, orchestrated with LangGraph and guardrails.",
    },
    chips: ["LangGraph", "Qdrant", "pgvector"],
  },
  {
    tone: "white",
    span: 6,
    title: { vi: "Tự động trả lời khách trên Messenger và Zalo", en: "Automated replies on Messenger and Zalo" },
    desc: {
      vi: "Nối Messenger, Zalo OA với CRM và lịch hẹn: phân loại tin nhắn, chuyển đúng người, không để lead rơi.",
      en: "Connect Messenger and Zalo OA to CRM and booking: triage messages, route to the right person, no lead left behind.",
    },
    chips: ["Messenger", "Zalo OA", "n8n"],
  },
  {
    tone: "yellow",
    span: 12,
    title: { vi: "Kiểm tra chất lượng AI trước khi ra mắt", en: "AI quality checks before launch" },
    desc: {
      vi: "Benchmark tự động bằng DeepEval/RAGAS, cache ngữ nghĩa để giảm chi phí, kiểm tra độ trễ trước mỗi lần phát hành.",
      en: "Automated benchmarks with DeepEval/RAGAS, semantic caching to cut cost, latency checks before every release.",
    },
    chips: ["DeepEval", "RAGAS", "Semantic cache"],
  },
];

const projects = [
  {
    tone: "blue",
    span: 7,
    image: { src: admissionsImg, alt: "Giao diện trợ lý tuyển sinh AI, câu trả lời có trích dẫn từ đề án tuyển sinh" },
    tag: { vi: "Agentic RAG · 2025 – 2026", en: "Agentic RAG · 2025 – 2026" },
    title: { vi: "Trợ lý tuyển sinh AI", en: "AI Admissions Assistant" },
    desc: {
      vi: "Trợ lý tuyển sinh đa tenant: LangGraph, FastAPI streaming, Supabase cô lập vector, cache ngữ nghĩa và fallback có kiểm soát.",
      en: "Multi-tenant admissions assistant: LangGraph, FastAPI streaming, Supabase vector isolation, semantic cache and controlled fallbacks.",
    },
    chips: ["LangGraph", "FastAPI", "Supabase", "Qdrant", "Redis", "DeepEval"],
  },
  {
    tone: "coral",
    span: 5,
    tag: { vi: "Tự động hoá · 2026", en: "Automation · 2026" },
    title: { vi: "Điều phối tin nhắn phòng khám", en: "Healthcare omnichannel routing" },
    desc: {
      vi: "Phân luồng tin nhắn Messenger và Zalo OA cho nhiều fanpage phòng khám, đẩy lead có ý định cao sang CRM và cảnh báo ca cần bác sĩ.",
      en: "Routes Messenger and Zalo OA messages across clinic fanpages, pushes high-intent leads to CRM and flags urgent cases for doctors.",
    },
    flow: {
      vi: ["Messenger và Zalo OA", "Phân luồng theo ý định", "Lead có ý định cao → CRM", "Ca cần bác sĩ → cảnh báo"],
      en: ["Messenger and Zalo OA", "Route by intent", "High-intent leads → CRM", "Urgent cases → doctor alert"],
    },
    chips: ["LangGraph", "Qdrant", "n8n", "Messenger API", "Zalo OA"],
  },
  {
    tone: "white",
    span: 5,
    tag: { vi: "Quant AI · Mar – Jun 2026", en: "Quant AI · Mar – Jun 2026" },
    title: { vi: "AI42E Trading Engine", en: "AI42E Trading Engine" },
    desc: {
      vi: "Nhóm agent nghiên cứu tín hiệu kỹ thuật kết hợp phân tích cảm xúc tài chính, có ràng buộc rủi ro.",
      en: "Research agents combining technical signals with financial sentiment, under strict risk limits.",
    },
    flow: {
      vi: ["Tín hiệu kỹ thuật", "Phân tích cảm xúc tài chính", "Nhóm agent nghiên cứu", "Ràng buộc rủi ro"],
      en: ["Technical signals", "Financial sentiment analysis", "Research agent group", "Risk constraints"],
    },
    chips: ["Python", "Multi-agent", "Supabase"],
  },
  {
    tone: "white",
    span: 7,
    image: { src: videoStudioImg, alt: "AI42E Video Studio: tạo video AI tự động từ mô tả hoặc mẫu có sẵn" },
    tag: { vi: "Tự động hoá media · Jan – Apr 2026", en: "Media automation · Jan – Apr 2026" },
    title: { vi: "Pipeline tổng hợp video", en: "Video Synthesis Pipeline" },
    desc: {
      vi: "Từ kịch bản do LLM viết, TTS, dịch và phụ đề đến đăng tự động.",
      en: "From LLM scripts and TTS to translated captions and automatic publishing.",
    },
    chips: ["TTS", "FFmpeg", "Whisper", "FastAPI"],
  },
  {
    tone: "white",
    span: 6,
    image: { src: vlearnImg, alt: "VLearn: trợ lý học luật trả lời kèm trích dẫn trang trong tài liệu PDF" },
    tag: { vi: "Hackathon · RAG giáo dục", en: "Hackathon · Education RAG" },
    title: { vi: "VLearn: trợ lý học luật", en: "VLearn: law study assistant" },
    desc: {
      vi: "Trợ lý học theo ngữ cảnh: đọc học liệu PDF, trả lời kèm trích dẫn đúng trang và tạo kế hoạch ôn tập.",
      en: "A context-aware study tutor: reads PDF course material, answers with page citations and builds study plans.",
    },
    chips: ["RAG", "PDF", "Gemini", "Telegram"],
  },
  {
    tone: "white",
    span: 6,
    image: { src: voiceStudioImg, alt: "Voice Studio: thư viện giọng nói để đọc văn bản tiếng Việt" },
    tag: { vi: "Sản phẩm · TTS", en: "Product · TTS" },
    title: { vi: "Voice Studio", en: "Voice Studio" },
    desc: {
      vi: "Đọc văn bản tiếng Việt bằng thư viện giọng nói AI, có thể tạo giọng riêng và chạy ngay trên máy tính.",
      en: "Vietnamese text-to-speech with a voice library and custom voices, running as a desktop app.",
    },
    chips: ["TTS", "Voice clone", "Electron"],
  },
];

const hireCards = [
  {
    Icon: FiCompass,
    tone: "blue",
    title: { vi: "Tư vấn kiến trúc", en: "Architecture review" },
    desc: {
      vi: "Rà soát kiến trúc LLM, RAG và agent trước khi đưa lên production.",
      en: "Review LLM, RAG and agent architecture before it goes to production.",
    },
  },
  {
    Icon: FiUsers,
    tone: "yellow",
    title: { vi: "Dẫn dắt đội AI", en: "Lead an AI team" },
    desc: {
      vi: "Điều phối roadmap sản phẩm AI và đội kỹ thuật, đặt tiêu chuẩn đánh giá.",
      en: "Run the AI product roadmap and engineering team, with evaluation standards.",
    },
  },
  {
    Icon: FiLayers,
    tone: "coral",
    title: { vi: "Dự án RAG & agent", en: "RAG & agent projects" },
    desc: {
      vi: "Xây hệ thống có cô lập dữ liệu, guardrail và đánh giá tự động.",
      en: "Build systems with data isolation, guardrails and automated evaluation.",
    },
  },
];

const milestones = [
  {
    role: "PM & Techlead",
    org: "VinUniversity",
    time: "07/2026 – nay",
    timeEn: "07/2026 – Present",
    desc: {
      vi: "Dẫn dắt roadmap sản phẩm AI và đội kỹ thuật, xây hệ thống Agentic RAG đa tenant có tiêu chuẩn đánh giá.",
      en: "Lead the AI product roadmap and engineering team; build multi-tenant Agentic RAG systems with evaluation standards.",
    },
  },
  {
    role: "AI Engineer",
    org: "Trung Anh Group",
    time: "04/2026 – 07/2026",
    timeEn: "04/2026 – 07/2026",
    desc: {
      vi: "Xây lớp tự động hoá đa kênh cho 20+ fanpage y tế và 5+ bác sĩ.",
      en: "Built multi-channel automation for 20+ healthcare fanpages and 5+ doctors.",
    },
  },
  {
    role: "Data Annotator & QA Specialist",
    org: "Appen",
    time: "06/2025 – 04/2026",
    timeEn: "06/2025 – 04/2026",
    desc: {
      vi: "Đánh giá và gán nhãn tập dữ liệu chất lượng cao cho tinh chỉnh mô hình và RLHF.",
      en: "Evaluated and annotated high-precision datasets for model fine-tuning and RLHF.",
    },
  },
  {
    role: "Double Bachelor's in AI & CS",
    org: "Thang Long University",
    time: "2021 – 2025",
    timeEn: "2021 – 2025",
    desc: {
      vi: "Cử nhân kép AI (GPA 8.3/10) và Khoa học máy tính (GPA 8.2/10).",
      en: "Double bachelor's in AI (GPA 8.3/10) and Computer Science (GPA 8.2/10).",
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
    label: { vi: "Tài liệu", en: "Documents" },
    detail: { vi: "Dữ liệu nguồn của khách hàng", en: "Client source data" },
  },
  {
    Icon: FiCpu,
    label: { vi: "Embedding", en: "Embedding" },
    detail: { vi: "Đổi văn bản thành vector", en: "Turn text into vectors" },
  },
  {
    Icon: FiDatabase,
    label: { vi: "Vector DB", en: "Vector DB" },
    detail: { vi: "Tìm đoạn liên quan theo ngữ nghĩa", en: "Find related passages by meaning" },
  },
  {
    Icon: FiGitBranch,
    label: { vi: "LangGraph", en: "LangGraph" },
    detail: { vi: "Điều phối từng bước và agent", en: "Orchestrate steps and agents" },
  },
  {
    Icon: FiShield,
    label: { vi: "Guardrail", en: "Guardrail" },
    detail: { vi: "Chặn lỗi, kiểm soát đầu ra", en: "Catch errors, control output" },
  },
  {
    Icon: FiMessageSquare,
    label: { vi: "Trả lời", en: "Answer" },
    detail: { vi: "Kèm trích dẫn nguồn", en: "With source citations" },
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
  const t = copy[lang];
  useScrollScale("[data-scale]");

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
          <Navbar.Brand href="#hero" className="lp-brand">
            <span className="lp-brand-mark">M</span>
            <span>Mạnh · AI42E</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="lp-nav-collapse" />
          <Navbar.Collapse id="lp-nav-collapse">
            <Nav className="mx-auto align-items-lg-center gap-lg-4">
              <Nav.Link href="#about">{t.navAbout}</Nav.Link>
              <Nav.Link href="#services">{t.navServices}</Nav.Link>
              <Nav.Link href="#projects">{t.navProjects}</Nav.Link>
              <Nav.Link href="#skills">{t.navSkills}</Nav.Link>
              <Nav.Link href="#experience">{t.navExperience}</Nav.Link>
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
              <Button href="#contact" className="lp-btn-dark lp-btn-sm ms-lg-2">
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
                <Button href="/Nguyen_Hung_Manh_Resume.pdf" target="_blank" rel="noopener noreferrer" className="lp-btn-outline">{t.ctaCv}</Button>
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
              <span className="lp-eyebrow">{t.aboutEyebrow}</span>
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
            <span className="lp-eyebrow">{t.flowEyebrow}</span>
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
            <span className="lp-eyebrow">{t.servicesEyebrow}</span>
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
            <span className="lp-eyebrow">{t.projectsEyebrow}</span>
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
            <span className="lp-eyebrow">{t.skillsEyebrow}</span>
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
            <span className="lp-eyebrow">{t.experienceEyebrow}</span>
            <h2 className="lp-h2">{t.experienceTitle}</h2>
          </div>
          <ol className="lp-timeline">
            {milestones.map((m) => (
              <li key={m.org} className="lp-timeline-item lp-reveal">
                <div className="lp-timeline-head">
                  <span className="lp-timeline-role">
                    {m.role} · <span className="lp-timeline-org">{m.org}</span>
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
            <span className="lp-eyebrow">{t.hireEyebrow}</span>
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
              <span className="lp-eyebrow">{t.contactEyebrow}</span>
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
