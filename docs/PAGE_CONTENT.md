# Bảng Tổng Hợp Toàn Bộ Nội Dung & Câu Từ Trên Website (Bản Chuẩn Hóa)

> Tài liệu này rà soát và tập hợp **100% tất cả các đoạn văn bản (text), tiêu đề, mô tả, nhãn nút, tooltip, alt text và metadata** đang được hiển thị trên trang chủ (`/`), bao gồm cả hai phiên bản ngôn ngữ **Tiếng Việt (VI)** và **Tiếng Anh (EN)**.  
> Nội dung đã được chuẩn hóa theo phong thái **AI Engineer & Product Builder (Full-stack AI)** — thực chiến, tự nhiên, tập trung vào giải quyết bài toán vận hành thực tế và loại bỏ hoàn toàn lối văn dịch máy (word-for-word) hay cấu trúc câu rập khuôn.

---

## Mục lục
1. [Metadata, Tiêu Đề Trình Duyệt & Màn Hình Tải (Preloader)](#1-metadata-tiêu-đề-trình-duyệt--màn-hình-tải-preloader)
2. [Thanh Điều Hướng (Navbar / Header)](#2-thanh-điều-hướng-navbar--header)
3. [Phần Mở Đầu (Hero Section)](#3-phần-mở-đầu-hero-section)
4. [Dải Chữ Chạy Công Nghệ (Marquee Bands)](#4-dải-chữ-chạy-công-nghệ-marquee-bands)
5. [Giới Thiệu (About Section)](#5-giới-thiệu-about-section)
6. [Dự Án Đã Triển Khai (Projects Section)](#6-dự-án-đã-triển-khai-projects-section)
7. [Kinh Nghiệm & Năng Lực (Experience & Competencies Section)](#7-kinh-nghiệm--năng-lực-experience--competencies-section)
8. [Cách Hợp Tác (Collaboration Section)](#8-cách-hợp-tác-collaboration-section)
9. [Chân Trang & Liên Hệ (Footer & Contact Section)](#9-chân-trang--liên-hệ-footer--contact-section)

---

## 1. Metadata, Tiêu Đề Trình Duyệt & Màn Hình Tải (Preloader)

| Thành phần | File / Vị trí | Tiếng Việt (VI) | Tiếng Anh (EN) | Ghi chú |
| :--- | :--- | :--- | :--- | :--- |
| **Tiêu đề tab trình duyệt** | `public/index.html` & `Landing.js` | `Nguyễn Hùng Mạnh \| AI Engineer` | `Nguyen Hung Manh \| AI Engineer` | Hiển thị trên tab trình duyệt |
| **Meta Description (SEO)** | `public/index.html` | — | `Nguyen Hung Manh — AI Engineer & Product Builder. Designing and shipping production-ready LLM, RAG, and Agentic AI systems.` | Thẻ meta tìm kiếm Google |
| **Open Graph Title** | `public/index.html` | — | `Nguyen Hung Manh \| AI Engineer & Product Builder Portfolio` | Xem trước khi share link MXH |
| **Open Graph Description**| `public/index.html` | — | `AI Engineer specializing in building end-to-end LLM, RAG, and agentic AI systems engineered for accuracy, low latency, and real business impact.` | |
| **Màn hình tải (Preloader)**| `src/components/Pre.js` | `Đang tải` | `Loading` | Chữ kèm 3 chấm động khi tải trang |

---

## 2. Thanh Điều Hướng (Navbar / Header)

| Thành phần | Khóa / Biến trong code | Tiếng Việt (VI) | Tiếng Anh (EN) |
| :--- | :--- | :--- | :--- |
| **Logo thương hiệu** | Hardcode JSX (`.lp-brand`) | `AI42E` (Icon: `M`) | `AI42E` (Icon: `M`) |
| **Menu: Giới thiệu** | `copy[lang].navAbout` | `Giới thiệu` | `About` |
| **Menu: Dự án** | `copy[lang].navProjects` | `Dự án` | `Projects` |
| **Menu: Kinh nghiệm** | `copy[lang].navExperience` | `Kinh nghiệm` | `Experience` |
| **Nút đổi ngôn ngữ** | JSX toggle button | `EN` (khi đang ở VI) | `VI` (khi đang ở EN) |
| **Nút đổi theme (Aria)**| `copy[lang].themeLabel` | `Đổi giao diện sáng/tối` | `Toggle light/dark theme` |
| **Nút CTA Header** | `copy[lang].ctaContact` | `Liên hệ` | `Get in touch` |

---

## 3. Phần Mở Đầu (Hero Section)

| Thành phần | Khóa / Biến trong code | Tiếng Việt (VI) | Tiếng Anh (EN) |
| :--- | :--- | :--- | :--- |
| **Badge danh xưng** | `copy[lang].heroEyebrow` | `Nguyễn Hùng Mạnh - AI Engineer` | `Nguyen Hung Manh - AI Engineer` |
| **Tiêu đề H1 - Vế 1** | `copy[lang].heroA` | `Đưa AI từ bản mẫu` | `Taking AI from prototype` |
| **Tiêu đề H1 - Điểm nhấn**| `copy[lang].heroHighlight` | `vào vận hành thực tế` | `to real-world production` |
| **Tiêu đề H1 - Vế 2** | `copy[lang].heroB` | `— ổn định, an toàn và đo lường được.` | `— reliable, measurable, and cost-controlled.` |
| **Đoạn mô tả ngắn (Lead)**| `copy[lang].heroDesc` | `Chào bạn, mình là Mạnh (AI42E). Mình thiết kế và xây dựng các hệ thống LLM, RAG và AI Agent hoàn chỉnh (end-to-end) — giải quyết bài toán nghiệp vụ thực tế với độ chính xác cao và chi phí tối ưu.` | `Hi, I'm Manh (AI42E) — an AI Engineer specializing in end-to-end LLM, RAG, and Agentic workflows built for accuracy, low latency, and real business impact.` |
| **Nút bấm 1 (Dark CTA)** | `copy[lang].ctaProjects` | `Xem dự án ↓` | `See projects ↓` |
| **Nút bấm 2 (Outline)** | `copy[lang].ctaContact` | `Liên hệ` | `Get in touch` |
| **Nút bấm 3 (Xem CV)** | `copy[lang].ctaCv` | `Xem CV` (mở `/CV_tieng_Viet.pdf`) | `View CV` (mở `/Nguyen_Hung_Manh_Resume.pdf`) |
| **Thẻ nổi cạnh ảnh chân dung**| Hardcode JSX (`.lp-float`) | 1. `LangGraph`<br>2. `Qdrant`<br>3. `DeepEval` | 1. `LangGraph`<br>2. `Qdrant`<br>3. `DeepEval` |
| **Alt text ảnh chân dung**| Hardcode JSX | `Nguyễn Hùng Mạnh` | `Nguyễn Hùng Mạnh` |

---

## 4. Dải Chữ Chạy Công Nghệ (Marquee Bands)

*Vị trí mảng: `bands` trong `Landing.js`*

### Dải trên (Màu cam coral, chạy sang trái):
1. `LangGraph Orchestration`
2. `FastAPI Async`
3. `Qdrant Vector DB`
4. `Supabase (pgvector)`
5. `DeepEval / RAGAS`
6. `Docker Containerization`

### Dải dưới (Màu vàng gold, chạy sang phải):
1. `Redis Semantic Cache`
2. `Next.js & React`
3. `Python Core`
4. `n8n Workflows`
5. `OpenAI & Anthropic`

---

## 5. Giới Thiệu (About Section)

| Thành phần | Khóa / Biến trong code | Tiếng Việt (VI) | Tiếng Anh (EN) |
| :--- | :--- | :--- | :--- |
| **Eyebrow phụ** | `copy[lang].aboutEyebrow` | `Giới thiệu` | `About` |
| **Tiêu đề Section** | `copy[lang].aboutTitle` | `Không chỉ dừng ở mô hình — tập trung vào bài toán vận hành` | `Engineering AI Systems Built for Production Reliability` |
| **Đoạn văn giới thiệu** | `copy[lang].aboutBody` | `Một bản demo AI có thể làm trong vài giờ, nhưng một hệ thống chạy ổn định cần kiến trúc bài bản. Tôi tập trung giải quyết 3 bài toán cốt lõi khi đưa AI vào doanh nghiệp: kiểm soát ảo giác (hallucination), phân tách dữ liệu an toàn và tối ưu chi phí token cùng độ trễ.` | `Building an AI demo takes hours; making it reliable in production takes solid engineering. I focus on the hard parts of enterprise AI: minimizing hallucinations, enforcing strict multi-tenant data isolation, and optimizing latency and token costs.` |
| **Số liệu Fact 1** | `copy[lang].aboutFacts[0]` | **Số:** `6+`<br>**Mô tả:** `Hệ thống AI & sản phẩm thực tế đã xây dựng từ con số 0 (End-to-End)` | **Số:** `6+`<br>**Mô tả:** `End-to-end AI systems & products built and deployed from scratch` |
| **Số liệu Fact 2** | `copy[lang].aboutFacts[1]` | **Số:** `20+`<br>**Mô tả:** `Fanpage y tế vận hành hệ thống AI & tự động hóa đa kênh` | **Số:** `20+`<br>**Mô tả:** `Healthcare clinic channels powered by automated conversational AI` |
| **Số liệu Fact 3** | `copy[lang].aboutFacts[2]` | **Số:** `8.3`<br>**Mô tả:** `GPA Cử nhân kép ngành Trí tuệ Nhân tạo & Khoa học Máy tính (ĐH Thăng Long)` | **Số:** `8.3`<br>**Mô tả:** `GPA across Double Bachelor's in AI & Computer Science (Thang Long Univ)` |

---

## 6. Dự Án Đã Triển Khai (Projects Section)

| Thành phần | Khóa / Biến trong code | Tiếng Việt (VI) | Tiếng Anh (EN) |
| :--- | :--- | :--- | :--- |
| **Eyebrow phụ** | `copy[lang].projectsEyebrow` | `Dự án tiêu biểu` | `Featured Work` |
| **Tiêu đề Section** | `copy[lang].projectsTitle` | `Các hệ thống & sản phẩm đã xây dựng` | `Production Systems & AI Products` |

*Chi tiết 6 dự án trong mảng `projects`:*

### Dự án 01: Trợ lý Tuyển sinh AI Đa Tenant (Multi-Tenant AI Admissions Assistant)
- **Tag:**
  - **VI:** `Enterprise Agentic RAG · 2025 – 2026`
  - **EN:** `Enterprise Agentic RAG · 2025 – 2026`
- **Tiêu đề (Title):**
  - **VI:** `Trợ lý Tuyển sinh AI Đa Tenant`
  - **EN:** `Multi-Tenant AI Admissions Assistant`
- **Mô tả (Description):**
  - **VI:** `Hệ thống Agentic RAG phục vụ tư vấn tuyển sinh đại học với kiến trúc Multi-Tenant, giúp phân tách độc lập dữ liệu của từng khoa/ngành trên Qdrant và Supabase. Sử dụng LangGraph để điều phối truy vấn phức tạp, kết hợp FastAPI streaming và Redis semantic cache để giảm độ trễ phản hồi, đồng thời kiểm soát chất lượng câu trả lời tự động qua DeepEval.`
  - **EN:** `Production-ready multi-tenant Agentic RAG system for university admissions. Orchestrates complex queries via LangGraph with strict per-department vector isolation on Qdrant and Supabase pgvector. Engineered for low latency using FastAPI streaming and Redis semantic caching, backed by automated hallucination testing with DeepEval.`
- **Công nghệ (Chips):** `LangGraph`, `FastAPI Streaming`, `Supabase pgvector`, `Qdrant`, `Redis Semantic Cache`, `DeepEval`
- **Alt text hình ảnh:** `Giao diện trợ lý tuyển sinh AI, câu trả lời có trích dẫn từ đề án tuyển sinh`

### Dự án 02: Điều phối Tin nhắn Phòng khám Đa Kênh (Healthcare Omnichannel Routing)
- **Tag:**
  - **VI:** `Omnichannel Automation · 2026`
  - **EN:** `Omnichannel Automation · 2026`
- **Tiêu đề (Title):**
  - **VI:** `Điều phối Tin nhắn Phòng khám Đa Kênh`
  - **EN:** `Healthcare Omnichannel Routing & Triage`
- **Mô tả (Description):**
  - **VI:** `Hệ thống chatbot và phân luồng tự động xử lý hàng nghìn tin nhắn mỗi tháng trên Messenger và Zalo OA cho chuỗi hơn 20 fanpage phòng khám. Tự động nhận diện nhu cầu bệnh nhân, trích xuất thông tin đặt lịch đẩy thẳng về CRM và gửi cảnh báo tức thì cho bác sĩ trực khi phát hiện ca khẩn cấp.`
  - **EN:** `Automated omnichannel triage system handling thousands of monthly patient inquiries across Messenger and Zalo OA for 20+ healthcare fanpages. Detects patient intent in real time, syncs qualified booking leads directly to the CRM, and triggers instant escalation alerts for on-call doctors.`
- **Luồng xử lý (Mini-flow):**
  - **VI:** `Hội thoại Messenger & Zalo OA` $\to$ `Phân loại nhu cầu thời gian thực` $\to$ `Đồng bộ lịch hẹn vào CRM` $\to$ `Cảnh báo ca khẩn cho bác sĩ`
  - **EN:** `Messenger & Zalo OA Inquiries` $\to$ `Real-Time Intent Classification` $\to$ `Sync Bookings to CRM` $\to$ `Urgent Escalation to Doctors`
- **Công nghệ (Chips):** `LangGraph`, `Qdrant`, `n8n`, `Messenger API`, `Zalo OA`

### Dự án 03: AI42E Quantitative Trading Engine
- **Tag:**
  - **VI:** `Quant AI · Mar – Jun 2026`
  - **EN:** `Quant AI · Mar – Jun 2026`
- **Tiêu đề (Title):**
  - **VI:** `AI42E Quantitative Trading Engine`
  - **EN:** `AI42E Quantitative Trading Engine`
- **Mô tả (Description):**
  - **VI:** `Hệ thống Multi-Agent hỗ trợ phân tích giao dịch định lượng. Kết hợp dữ liệu chỉ báo kỹ thuật (OHLCV, sổ lệnh) với mô hình đánh giá sắc thái tin tức tài chính (Sentiment Analysis) để đưa ra tín hiệu giao dịch, đi kèm bộ quy tắc kiểm soát rủi ro và giới hạn vốn chặt chẽ.`
  - **EN:** `Multi-agent quantitative trading analysis engine that fuses technical market indicators (OHLCV, orderbook depth) with real-time financial news sentiment, operating under strict automated risk-management and position-sizing rules.`
- **Luồng xử lý (Mini-flow):**
  - **VI:** `Dữ liệu nến & sổ lệnh` $\to$ `Phân tích sắc thái tin tài chính` $\to$ `Cụm Agent phân tích đa chiều` $\to$ `Ràng buộc quản trị rủi ro`
  - **EN:** `Market OHLCV & Orderbook` $\to$ `Financial Sentiment Analysis` $\to$ `Multi-Agent Reasoning Cluster` $\to$ `Risk Management Constraints`
- **Công nghệ (Chips):** `Python Core`, `Multi-Agent Systems`, `Supabase`, `Risk Management`

### Dự án 04: Pipeline Tự động hóa Sản xuất Video (Video Synthesis Pipeline)
- **Tag:**
  - **VI:** `Media Automation · Jan – Apr 2026`
  - **EN:** `Media Automation · Jan – Apr 2026`
- **Tiêu đề (Title):**
  - **VI:** `Pipeline Tự động hóa Sản xuất Video`
  - **EN:** `Automated Video Synthesis Pipeline`
- **Mô tả (Description):**
  - **VI:** `Pipeline tự động hóa toàn bộ quy trình tạo video từ văn bản thô: dùng LLM viết kịch bản, chuyển thành giọng đọc tự nhiên qua Neural TTS, đồng bộ phụ đề chính xác tới từng khung hình bằng Whisper và tự động ghép, xuất video hàng loạt qua FFmpeg.`
  - **EN:** `End-to-end automated video production pipeline transforming raw text into finished videos: combines LLM scriptwriting, expressive Neural TTS voiceovers, frame-accurate Whisper subtitle syncing, and batch rendering via FFmpeg.`
- **Công nghệ (Chips):** `Neural TTS`, `FFmpeg`, `OpenAI Whisper`, `FastAPI`
- **Alt text hình ảnh:** `AI42E Video Studio: tạo video AI tự động từ mô tả hoặc mẫu có sẵn`

### Dự án 05: VLearn — Trợ lý Học & Tra cứu Luật (Law Study Assistant)
- **Tag:**
  - **VI:** `EdTech RAG · 2025`
  - **EN:** `EdTech RAG · 2025`
- **Tiêu đề (Title):**
  - **VI:** `VLearn — Trợ lý Học & Tra cứu Luật`
  - **EN:** `VLearn: Legal Study & Research Assistant`
- **Mô tả (Description):**
  - **VI:** `Trợ lý AI hỗ trợ sinh viên và người làm luật tra cứu, ôn tập văn bản pháp quy. Xử lý các file PDF luật có cấu trúc phức tạp, trả lời câu hỏi tình huống kèm trích dẫn chính xác đến từng điều khoản, số trang và tự động lên lộ trình ôn tập cá nhân hóa.`
  - **EN:** `RAG-powered legal study assistant that parses complex statutory PDFs to answer legal queries with exact article and page citations, while generating personalized study schedules via Telegram and web interfaces.`
- **Công nghệ (Chips):** `Agentic RAG`, `Document Parsing`, `Gemini API`, `Telegram Bot`
- **Alt text hình ảnh:** `VLearn: trợ lý học luật trả lời kèm trích dẫn trang trong tài liệu PDF`

### Dự án 06: Voice Studio — Nền tảng Giọng nói AI (Neural Text-to-Speech)
- **Tag:**
  - **VI:** `Desktop AI Product · 2025 – 2026`
  - **EN:** `Desktop AI Product · 2025 – 2026`
- **Tiêu đề (Title):**
  - **VI:** `Voice Studio — Nền tảng Giọng nói AI`
  - **EN:** `Voice Studio: Neural Vietnamese Text-to-Speech`
- **Mô tả (Description):**
  - **VI:** `Ứng dụng Desktop chuyển văn bản thành giọng nói (TTS) tối ưu riêng cho tiếng Việt. Cung cấp kho giọng đọc tự nhiên, tính năng nhân bản giọng nói nhanh (Voice Cloning) và hỗ trợ chạy mô hình trực tiếp trên máy (Offline Inference) giúp bảo mật tuyệt đối dữ liệu âm thanh.`
  - **EN:** `Desktop application for Vietnamese speech synthesis featuring natural expressive voices, rapid voice cloning, and local offline inference for complete audio data privacy.`
- **Công nghệ (Chips):** `Neural TTS`, `Voice Cloning`, `Electron`, `PyTorch`
- **Alt text hình ảnh:** `Voice Studio: thư viện giọng nói để đọc văn bản tiếng Việt`

---

## 7. Kinh Nghiệm & Năng Lực (Experience & Competencies Section)

| Thành phần | Khóa / Biến trong code | Tiếng Việt (VI) | Tiếng Anh (EN) |
| :--- | :--- | :--- | :--- |
| **Eyebrow phụ** | `copy[lang].experienceEyebrow` | `Hành trình & Kỹ năng` | `Career & Stack` |
| **Tiêu đề Section** | `copy[lang].experienceTitle` | `Kinh nghiệm làm việc & Học vấn` | `Experience & Education` |

### 7.1. Dải Ticker Công Nghệ Cốt Lõi (Skills Marquee Ticker)
Dải chữ chạy ngang vô tận 16 công nghệ ngay dưới tiêu đề trong mảng `coreSkills`:  
`LangGraph Orchestration` • `Multi-Tenant RAG` • `Agentic Workflows` • `Hybrid Search (Dense + BM25)` • `FastAPI Async` • `Qdrant Vector DB` • `Supabase (pgvector)` • `DeepEval & RAGAS` • `Semantic Caching` • `LLM Guardrails` • `Docker Containerization` • `Next.js & TypeScript` • `n8n Automation` • `Python Asyncio` • `PostgreSQL & RLS` • `Redis Cache`

### 7.2. Chi tiết 4 mốc kinh nghiệm gắn thẻ công nghệ (Contextual Skills) trong mảng `milestones`:

### Mốc 1: VinSmart Future (GSM)
- **Vai trò:** `PM Intern`
- **Đơn vị:** `VinSmart Future (GSM)`
- **Thời gian:**
  - **VI:** `09/2026 – Hiện tại`
  - **EN:** `Sep 2026 – Present`
- **Mô tả chi tiết:**
  - **VI:** `Điều phối tiến độ và làm việc trực tiếp với các bên liên quan (stakeholders) trong các dự án sản phẩm AI; phân tích thị trường, đối thủ cạnh tranh cho bài toán giao hàng siêu tốc (Express) và xây dựng hệ thống tài liệu đặc tả sản phẩm (PRD/Specs) chuẩn hóa.`
  - **EN:** `Coordinate project timelines and cross-functional stakeholders for AI product initiatives; conduct market and competitor analysis for Express delivery services, and author standardized product specifications.`
- **Kỹ năng thực chiến gắn liền (Contextual Skills):** `AI Product Management`, `Express Delivery AI`, `PRD & Specs`, `Market Research`

### Mốc 2: Trung Anh Group
- **Vai trò:** `AI Engineer`
- **Đơn vị:** `Trung Anh Group`
- **Thời gian:**
  - **VI:** `05/2026 – 07/2026`
  - **EN:** `May 2026 – Jul 2026`
- **Mô tả chi tiết:**
  - **VI:** `Thiết kế và triển khai hệ thống chatbot RAG cho hơn 20 fanpage y tế và hơn 5 bác sĩ bằng LangGraph, Qdrant và n8n; tự động hóa hàng nghìn hội thoại mỗi tháng trên Messenger, Zalo OA và Zalo cá nhân; xây dựng luồng phân loại và chấm điểm khách hàng tiềm năng (lead qualification) cho đội ngũ telesales.`
  - **EN:** `Designed and deployed RAG chatbots for 20+ healthcare fanpages and 5+ doctors using LangGraph, Qdrant, and n8n; automated thousands of monthly conversations across Messenger, Zalo OA, and personal Zalo; built automated lead qualification workflows for telesales teams.`
- **Kỹ năng thực chiến gắn liền (Contextual Skills):** `LangGraph`, `Qdrant Vector DB`, `n8n Automation`, `Zalo OA & Messenger API`, `Multi-Tenant RAG`

### Mốc 3: Appen
- **Vai trò:** `Data Annotator`
- **Đơn vị:** `Appen`
- **Thời gian:**
  - **VI:** `06/2025 – 04/2026`
  - **EN:** `Jun 2025 – Apr 2026`
- **Mô tả chi tiết:**
  - **VI:** `Xử lý, gán nhãn dữ liệu đa phương thức (văn bản, hình ảnh, âm thanh) phục vụ huấn luyện và tinh chỉnh mô hình ngôn ngữ/AI; kiểm soát chất lượng (QA) tập dữ liệu nhằm đảm bảo độ chính xác và tính nhất quán theo tiêu chuẩn đánh giá mô hình.`
  - **EN:** `Annotated multimodal datasets (text, image, audio) for ML/LLM training and fine-tuning; performed rigorous data validation and QA to ensure high accuracy and consistency across evaluation benchmarks.`
- **Kỹ năng thực chiến gắn liền (Contextual Skills):** `LLM RLHF Annotation`, `Data Quality QA`, `Model Evaluation`, `Multimodal Datasets`

### Mốc 4: Trường Đại học Thăng Long
- **Vai trò:**
  - **VI:** `Cử nhân kép AI & Khoa học máy tính`
  - **EN:** `Double Bachelor's in AI & CS`
- **Đơn vị:**
  - **VI:** `Trường Đại học Thăng Long`
  - **EN:** `Thang Long University`
- **Thời gian:**
  - **VI:** `10/2020 – 12/2025`
  - **EN:** `Oct 2020 – Dec 2025`
- **Mô tả chi tiết:**
  - **VI:** `Tốt nghiệp Cử nhân kép ngành Trí tuệ Nhân tạo (GPA 8.3/10) và Khoa học Máy tính (GPA 8.2/10). Đạt chứng nhận Nghiên cứu Khoa học xuất sắc của trường.`
  - **EN:** `Graduated with Double Bachelor's degrees in Artificial Intelligence (GPA 8.3/10) and Computer Science (GPA 8.2/10). Awarded university certificate for excellence in scientific research.`
- **Kỹ năng thực chiến gắn liền (Contextual Skills):** `AI & Computer Science`, `GPA 8.3 & 8.2`, `Machine Learning`, `Scientific Research`

---

## 8. Cách Hợp Tác (Collaboration Section)

| Thành phần | Khóa / Biến trong code | Tiếng Việt (VI) | Tiếng Anh (EN) |
| :--- | :--- | :--- | :--- |
| **Eyebrow phụ** | `copy[lang].hireEyebrow` | `Hợp tác` | `Collaboration` |
| **Tiêu đề Section** | `copy[lang].hireTitle` | `Các hình thức hợp tác` | `Ways We Can Work Together` |

*Chi tiết 3 phương thức trong mảng `hireCards`:*

| Thẻ | Tiêu đề (VI) / (EN) | Mô tả (VI) | Mô tả (EN) |
| :---: | :--- | :--- | :--- |
| **01** | `Toàn thời gian (Full-time / In-house)`<br>`Full-Time AI Engineer (In-House)` | Gia nhập đội ngũ kỹ thuật trong vai trò AI Engineer hoặc Product Builder: trực tiếp nghiên cứu, thiết kế kiến trúc và đưa các hệ thống AI cốt lõi (LLM, RAG, Agent) vào vận hành ổn định lâu dài. | Join your engineering team as a full-time AI Engineer or Product Builder to architect, ship, and scale core AI capabilities in production. |
| **02** | `Triển khai theo Dự án (Project-based / MVP)`<br>`Project-Based Delivery (AI MVP)` | Đồng hành cùng startup và doanh nghiệp xây dựng trọn gói hệ thống RAG, AI Agent hoặc sản phẩm AI từ con số 0 đến production với tiến độ rõ ràng, kiến trúc chuẩn và bàn giao hoàn chỉnh. | End-to-end delivery of custom RAG systems, Agentic workflows, or AI MVPs from scratch to production with clear milestones and clean handover. |
| **03** | `Cố vấn Kỹ thuật & Tối ưu (Advisory & Optimization)`<br>`Technical Advisory & Optimization` | Rà soát, đánh giá kiến trúc hệ thống AI hiện tại; tư vấn giải pháp kiểm soát ảo giác (hallucination), cô lập dữ liệu an toàn và tối ưu chi phí token cùng độ trễ (latency). | Audit existing AI systems, advise on strict data isolation and hallucination guardrails, and optimize token costs and p95 latency. |

---

## 9. Chân Trang & Liên Hệ (Footer & Contact Section)

| Thành phần | Khóa / Biến trong code | Tiếng Việt (VI) | Tiếng Anh (EN) |
| :--- | :--- | :--- | :--- |
| **Eyebrow phụ** | `copy[lang].contactEyebrow`| `Liên hệ` | `Contact` |
| **Tiêu đề Footer** | `copy[lang].contactTitle` | `Cùng đưa ý tưởng AI vào vận hành thực tế` | `Let's Build Reliable Production AI Together` |
| **Mô tả Footer** | `copy[lang].contactDesc` | `Đang tìm kiếm cơ hội toàn thời gian ở vị trí AI Engineer / Product Builder, cũng như sẵn sàng hợp tác triển khai các dự án RAG, AI Agent và tự động hóa thực tế.` | `Open to full-time AI Engineer roles and freelance partnerships for building production RAG, Agentic AI, and automation systems.` |
| **Nút bấm Email** | `copy[lang].contactBtn` | `Gửi email trao đổi` (href: `mailto:nhmanh.dev@gmail.com`) | `Start a Conversation` (href: `mailto:nhmanh.dev@gmail.com`) |
| **Khẩu hiệu thương hiệu**| `copy[lang].footerTagline` | `Đưa AI từ bản mẫu vào vận hành thực tế — tin cậy và hiệu quả.` | `Taking AI from prototype to reliable production.` |
| **Dòng bản quyền** | `copy[lang].footer` | `© 2026 Nguyễn Hùng Mạnh (AI42E)` | `© 2026 Nguyễn Hùng Mạnh (AI42E)` |
| **Logo chân trang** | JSX (`.lp-brand-mark`) | `M` | `M` |
| **Chữ nền watermark chìm**| JSX (`.lp-footer-wordmark`)| `AI42E` | `AI42E` |

### Thông tin mạng xã hội liên kết (Mảng `socials`):
1. **GitHub:** `@nhmanhDev` — `https://github.com/nhmanhDev`
2. **LinkedIn:** `@nhmanh-ai4e1208` — `https://www.linkedin.com/in/nhmanh-ai4e1208/`
3. **Facebook:** `@nhmanhAI4E` — `https://www.facebook.com/nhmanhAI4E/`
4. **Email:** `nhmanh.dev@gmail.com` — `mailto:nhmanh.dev@gmail.com`