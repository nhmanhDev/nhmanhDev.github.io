# Bảng Tổng Hợp Toàn Bộ Nội Dung & Câu Từ Trên Website

> Tài liệu này rà soát và tập hợp **100% tất cả các đoạn văn bản (text), tiêu đề, mô tả, nhãn nút, tooltip, alt text và metadata** đang được hiển thị trên trang chủ (`/`), bao gồm cả hai phiên bản ngôn ngữ **Tiếng Việt (VI)** và **Tiếng Anh (EN)**.  
> Nội dung đã được chuẩn hóa theo phong thái **Senior AI Engineer & Techlead** (thực chiến, đĩnh đạc, loại bỏ hoàn toàn lối văn dịch máy, định nghĩa ngây ngô và lặp từ do AI sinh ra).

---

## Mục lục
1. [Metadata, Tiêu Đề Trình Duyệt & Màn Hình Tải (Preloader)](#1-metadata-tiêu-đề-trình-duyệt--màn-hình-tải-preloader)
2. [Thanh Điều Hướng (Navbar / Header)](#2-thanh-điều-hướng-navbar--header)
3. [Phần Mở Đầu (Hero Section)](#3-phần-mở-đầu-hero-section)
4. [Dải Chữ Chạy Công Nghệ (Marquee Bands)](#4-dải-chữ-chạy-công-nghệ-marquee-bands)
5. [Giới Thiệu (About Section)](#5-giới-thiệu-about-section)
6. [Luồng Xử Lý RAG (Architecture Flow Section)](#6-luồng-xử-lý-rag-architecture-flow-section)
7. [Dịch Vụ Chuyên Môn (Services Section)](#7-dịch-vụ-chuyên-môn-services-section)
8. [Dự Án Tiêu Biểu (Projects Section)](#8-dự-án-tiêu-biểu-projects-section)
9. [Kỹ Năng & Công Cụ (Skills Section)](#9-kỹ-năng--công-cụ-skills-section)
10. [Quá Trình Làm Việc & Học Vấn (Experience Section)](#10-quá-trình-làm-việc--học-vấn-experience-section)
11. [Cách Hợp Tác (Collaboration Section)](#11-cách-hợp-tác-collaboration-section)
12. [Chân Trang & Liên Hệ (Footer & Contact Section)](#12-chân-trang--liên-hệ-footer--contact-section)

---

## 1. Metadata, Tiêu Đề Trình Duyệt & Màn Hình Tải (Preloader)

| Thành phần | File / Vị trí | Tiếng Việt (VI) | Tiếng Anh (EN) | Ghi chú |
| :--- | :--- | :--- | :--- | :--- |
| **Tiêu đề tab trình duyệt** | `public/index.html` & `Landing.js` | `Nguyễn Hùng Mạnh \| AI Engineer` | `Nguyen Hung Manh \| AI Engineer` | Hiển thị trên tab trình duyệt |
| **Meta Description (SEO)** | `public/index.html` | — | `Nguyen Hung Manh — AI Engineer & Techlead. Building production-ready LLM, RAG, and Agentic AI systems.` | Thẻ meta tìm kiếm Google |
| **Open Graph Title** | `public/index.html` | — | `Nguyen Hung Manh \| AI Engineer & Techlead Portfolio` | Xem trước khi share link MXH |
| **Open Graph Description**| `public/index.html` | — | `AI Engineer & Techlead focused on building production-ready LLM, RAG, and agentic AI systems that solve real-world problems.` | |
| **Màn hình tải (Preloader)**| `src/components/Pre.js` | `Đang tải` | `Loading` | Chữ kèm 3 chấm động khi tải trang |
| **Logo preloader** | `src/components/Pre.js` | `M` | `M` | Logo squircle cam viền ray tròn xoay 50% |

---

## 2. Thanh Điều Hướng (Navbar / Header)

| Thành phần | Khóa / Biến trong code | Tiếng Việt (VI) | Tiếng Anh (EN) |
| :--- | :--- | :--- | :--- |
| **Logo thương hiệu** | Hardcode JSX (`.lp-brand`) | `Mạnh · AI42E` (Icon: `M`) | `Mạnh · AI42E` (Icon: `M`) |
| **Menu: Giới thiệu** | `copy[lang].navAbout` | Giới thiệu | About |
| **Menu: Dịch vụ** | `copy[lang].navServices` | Dịch vụ | Services |
| **Menu: Dự án** | `copy[lang].navProjects` | Dự án | Projects |
| **Menu: Kỹ năng** | `copy[lang].navSkills` | Kỹ năng | Skills |
| **Menu: Kinh nghiệm** | `copy[lang].navExperience` | Kinh nghiệm | Experience |
| **Nút đổi ngôn ngữ** | JSX toggle button | `EN` (khi đang ở VI) | `VI` (khi đang ở EN) |
| **Nút đổi theme (Aria)**| `copy[lang].themeLabel` | Đổi giao diện sáng/tối | Toggle light/dark theme |
| **Nút CTA Header** | `copy[lang].ctaContact` | Liên hệ hợp tác | Get in Touch |

---

## 3. Phần Mở Đầu (Hero Section)

| Thành phần | Khóa / Biến trong code | Tiếng Việt (VI) | Tiếng Anh (EN) |
| :--- | :--- | :--- | :--- |
| **Badge danh xưng** | `copy[lang].heroEyebrow` | `AI Engineer & Techlead` | `AI Engineer & Techlead` |
| **Tiêu đề H1 - Vế 1** | `copy[lang].heroA` | `Đưa AI từ ý tưởng demo` | `Bridging AI from demo` |
| **Tiêu đề H1 - Điểm nhấn**| `copy[lang].heroHighlight` | `vào vận hành thực tế` | `to reliable production` |
| **Tiêu đề H1 - Vế 2** | `copy[lang].heroB` | `vững chắc, chính xác và đo lường được.` | `resilient, accurate, and measurable.` |
| **Đoạn mô tả ngắn (Lead)**| `copy[lang].heroDesc` | Nguyễn Hùng Mạnh (AI42E) — Kỹ sư AI chuyên sâu về kiến trúc LLM, RAG đa tenant và hệ thống Agent tự hành. Tập trung tối ưu độ chính xác, bảo mật dữ liệu và hiệu quả chi phí cho doanh nghiệp. | Nguyen Hung Manh (AI42E) — AI Engineer & Techlead specializing in production LLM architectures, multi-tenant RAG, and autonomous agentic systems with strict evaluation and cost optimization. |
| **Nút bấm 1 (Dark CTA)** | `copy[lang].ctaProjects` | `Khám phá dự án ↓` | `Explore Projects ↓` |
| **Nút bấm 2 (Outline)** | `copy[lang].ctaContact` | `Liên hệ hợp tác` | `Get in Touch` |
| **Nút bấm 3 (Xem CV)** | `copy[lang].ctaCv` | `Xem hồ sơ (CV)` (mở `/CV_tieng_Viet.pdf`) | `Download Resume` (mở `/Nguyen_Hung_Manh_Resume.pdf`) |
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
| **Tiêu đề Section** | `copy[lang].aboutTitle` | `Tư duy kiến trúc vững vàng, tập trung vào hiệu quả vận hành` | `Robust Architecture Built for Production Reliability` |
| **Đoạn văn giới thiệu** | `copy[lang].aboutBody` | Xuất thân từ nền tảng Cử nhân kép ngành Trí tuệ Nhân tạo và Khoa học Máy tính tại Đại học Thăng Long, cùng chứng nhận xuất sắc chương trình AI Thực Chiến tại VinUniversity, tôi tiếp cận AI không dừng lại ở các bản demo thử nghiệm. Trọng tâm của tôi là giải quyết trọn vẹn các bài toán kỹ thuật cốt lõi khi đưa AI vào doanh nghiệp: kiểm soát ảo giác (hallucination), cô lập dữ liệu khách hàng, tối ưu chi phí token và giám sát chất lượng hệ thống theo thời gian thực. | With a double bachelor's degree in Artificial Intelligence and Computer Science from Thang Long University and top honors from VinUniversity's AI in Action program, I approach AI beyond toy prototypes. My focus is solving the hard engineering challenges of production AI: eliminating hallucinations, enforcing strict multi-tenant data isolation, optimizing token costs, and maintaining automated quality evaluation. |
| **Số liệu Fact 1** | `copy[lang].aboutFacts[0]` | **Số:** `2`<br>**Mô tả:** Bằng cử nhân kép AI & Khoa học máy tính, ĐH Thăng Long | **Số:** `2`<br>**Mô tả:** Double bachelor's in AI and Computer Science, Thang Long University |
| **Số liệu Fact 2** | `copy[lang].aboutFacts[1]` | **Số:** `20+`<br>**Mô tả:** Fanpage y tế vận hành hệ thống AI & tự động hóa đa kênh | **Số:** `20+`<br>**Mô tả:** Healthcare clinic channels powered by automated conversational AI |
| **Số liệu Fact 3** | `copy[lang].aboutFacts[2]` | **Số:** `3`<br>**Mô tả:** Trụ cột chuyên môn: Enterprise RAG, Automation & LLMOps | **Số:** `3`<br>**Mô tả:** Core pillars: Enterprise RAG, Omnichannel Automation & LLMOps |

---

## 6. Luồng Xử Lý RAG (Architecture Flow Section)

*Tiêu đề Section:* `copy[lang].flowTitle`:
- **VI:** `Quy trình kiến trúc từ dữ liệu đến tri thức tin cậy`
- **EN:** `End-to-End Production RAG Architecture`

*Chi tiết 6 bước trong mảng `flowSteps`:*

| Bước | Nhãn (Label) VI / EN | Chi tiết (Detail) VI | Chi tiết (Detail) EN |
| :---: | :--- | :--- | :--- |
| **01** | `Thu nạp Dữ liệu` / `Data Ingestion` | Phân tích, trích xuất & chunking tài liệu | Parse, extract & chunk multi-format docs |
| **02** | `Vector hóa Ngữ nghĩa` / `Semantic Embedding` | Chuyển đổi thành không gian vector đa chiều | Transform into dense high-dimensional vectors |
| **03** | `Tìm kiếm Kết hợp` / `Hybrid Retrieval` | Phối hợp Dense Vector & Sparse Re-ranking | Dense vector search fused with sparse re-ranking |
| **04** | `Điều phối Agent` / `Agentic Workflow` | LangGraph định tuyến luồng suy luận & công cụ | LangGraph state routing logic and tool execution |
| **05** | `Hàng rào Bảo vệ` / `Safety Guardrails` | Chặn injection, xác thực ngữ cảnh & ảo giác | Filter injections, verify context & hallucination |
| **06** | `Phản hồi Chuẩn xác` / `Grounded Response` | Streaming thời gian thực kèm trích dẫn nguồn | Real-time streaming with verifiable citations |

---

## 7. Dịch Vụ Chuyên Môn (Services Section)

*Tiêu đề Section:* `copy[lang].servicesTitle`:
- **VI:** `Năng lực chuyên môn trọng tâm`
- **EN:** `Core Engineering Capabilities`

*Chi tiết 3 dịch vụ trong mảng `services`:*

### Dịch vụ 1: Trợ lý Tri thức Doanh nghiệp (Enterprise RAG)
- **Tiêu đề (Title):**
  - **VI:** `Trợ lý Tri thức Doanh nghiệp (Enterprise RAG)`
  - **EN:** `Enterprise Knowledge Systems (RAG)`
- **Mô tả (Description):**
  - **VI:** `Xây dựng giải pháp RAG đa tenant với khả năng cô lập dữ liệu tuyệt đối giữa các tổ chức, điều phối suy luận nhiều bước bằng LangGraph và kiểm soát độ trung thực của câu trả lời.`
  - **EN:** `Production-grade multi-tenant RAG systems with strict per-tenant data isolation, multi-step LangGraph reasoning, and verifiable citation guardrails.`
- **Công nghệ (Chips):** `LangGraph`, `Qdrant`, `pgvector`, `Data Isolation`

### Dịch vụ 2: Tự động hóa Luồng Hội thoại & Lead Routing Đa Kênh
- **Tiêu đề (Title):**
  - **VI:** `Tự động hóa Luồng Hội thoại & Lead Routing Đa Kênh`
  - **EN:** `Omnichannel AI Automation & Lead Routing`
- **Mô tả (Description):**
  - **VI:** `Tích hợp AI vào Messenger, Zalo OA và CRM: tự động phân loại ý định khách hàng thời gian thực, đồng bộ lịch hẹn và chuyển tiếp tức thì các ca khẩn cho đội ngũ chuyên môn.`
  - **EN:** `Integrate conversational AI across Messenger, Zalo OA, and CRM: real-time intent classification, booking automation, and smart escalation for urgent cases.`
- **Công nghệ (Chips):** `Messenger API`, `Zalo OA`, `n8n Workflows`, `Event-Driven`

### Dịch vụ 3: Đánh giá, Tối ưu & Giám sát Hệ thống LLM (LLMOps)
- **Tiêu đề (Title):**
  - **VI:** `Đánh giá, Tối ưu & Giám sát Hệ thống LLM (LLMOps)`
  - **EN:** `LLM Evaluation, Benchmarking & Optimization`
- **Mô tả (Description):**
  - **VI:** `Thiết lập bộ đo benchmark tự động với DeepEval và RAGAS, tích hợp tầng semantic cache giúp tiết kiệm hơn 40% chi phí token và kiểm thử tải áp lực độ trễ trước khi phát hành.`
  - **EN:** `Automated evaluation pipelines with DeepEval/RAGAS, semantic caching cutting token costs by over 40%, and latency load testing prior to release.`
- **Công nghệ (Chips):** `DeepEval`, `RAGAS`, `Semantic Cache`, `Latency Testing`

---

## 8. Dự Án Tiêu Biểu (Projects Section)

*Tiêu đề Section:* `copy[lang].projectsTitle`:
- **VI:** `Các hệ thống tiêu biểu đã triển khai`
- **EN:** `Featured Production Systems`

*Chi tiết 6 dự án trong mảng `projects`:*

### Dự án 01: Trợ lý Tuyển sinh AI Đa Tenant (Multi-Tenant AI Admissions Assistant)
- **Tag:**
  - **VI:** `Enterprise Agentic RAG · 2025 – 2026`
  - **EN:** `Enterprise Agentic RAG · 2025 – 2026`
- **Tiêu đề (Title):**
  - **VI:** `Trợ lý Tuyển sinh AI Đa Tenant`
  - **EN:** `Multi-Tenant AI Admissions Assistant`
- **Mô tả (Description):**
  - **VI:** `Hệ thống Agentic RAG cấp sản phẩm cho tuyển sinh đại học: điều phối luồng truy vấn phức tạp bằng LangGraph, cô lập vector tri thức theo từng khoa/ngành trên Supabase và Qdrant, truyền dữ liệu thời gian thực qua FastAPI streaming, tích hợp Redis semantic cache và đo lường tự động độ chính xác bằng DeepEval.`
  - **EN:** `Production-grade admissions assistant: orchestrated with LangGraph, per-tenant vector isolation via Supabase pgvector and Qdrant, real-time FastAPI streaming, Redis semantic caching, and automated hallucination scoring with DeepEval.`
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
  - **VI:** `Điều phối và phân luồng tự động hàng nghìn hội thoại mỗi tháng qua Messenger và Zalo OA cho hơn 20 fanpage y tế: nhận diện nhu cầu khám tức thì, đồng bộ thông tin đặt lịch vào CRM và kích hoạt cảnh báo khẩn cấp cho bác sĩ trực.`
  - **EN:** `Automated omnichannel triage across Messenger and Zalo OA for 20+ clinic fanpages: real-time patient intent recognition, seamless CRM booking synchronization, and emergency doctor escalation alerts.`
- **Luồng xử lý (Mini-flow):**
  - **VI:** `Hội thoại Messenger & Zalo OA` $\to$ `Phân loại ý định thời gian thực` $\to$ `Đồng bộ lịch hẹn vào CRM` $\to$ `Cảnh báo ca khẩn cho bác sĩ`
  - **EN:** `Messenger & Zalo OA Conversations` $\to$ `Real-Time Intent Classification` $\to$ `Sync Bookings to CRM` $\to$ `Urgent Escalation to Doctors`
- **Công nghệ (Chips):** `LangGraph`, `Qdrant`, `n8n`, `Messenger API`, `Zalo OA`

### Dự án 03: AI42E Quantitative Trading Engine
- **Tag:**
  - **VI:** `Quant AI · Mar – Jun 2026`
  - **EN:** `Quant AI · Mar – Jun 2026`
- **Tiêu đề (Title):**
  - **VI:** `AI42E Quantitative Trading Engine`
  - **EN:** `AI42E Quantitative Trading Engine`
- **Mô tả (Description):**
  - **VI:** `Hệ thống đa agent phân tích dữ liệu thị trường định lượng: kết hợp tín hiệu kỹ thuật algorithmic với mô hình phân tích cảm xúc tin tức tài chính, hoạt động dưới các ràng buộc kiểm soát rủi ro nghiêm ngặt.`
  - **EN:** `Multi-agent quantitative research architecture: fusing algorithmic market signals with financial sentiment analysis under rigorous risk-budget constraints.`
- **Luồng xử lý (Mini-flow):**
  - **VI:** `Dữ liệu nến & sổ lệnh` $\to$ `Phân tích cảm xúc tin tài chính` $\to$ `Cụm Agent phân tích đa chiều` $\to$ `Ràng buộc quản trị rủi ro`
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
  - **VI:** `Chuỗi quy trình khép kín tự động hóa sản xuất video từ tài liệu thô: sinh kịch bản tối ưu bằng LLM, lồng tiếng biểu cảm tự nhiên với TTS, tạo phụ đề tự động bằng Whisper và render video độ phân giải cao qua FFmpeg.`
  - **EN:** `End-to-end automated multimedia production pipeline: LLM script generation, high-fidelity neural TTS narration, Whisper automated subtitle synchronization, and FFmpeg batch rendering.`
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
  - **VI:** `Giải pháp hỗ trợ nghiên cứu văn bản pháp luật: trích xuất cấu trúc văn bản từ tài liệu PDF phức tạp, giải đáp câu hỏi chuyên sâu kèm dẫn chứng chính xác từng điều khoản, số trang và đề xuất kế hoạch ôn luyện cá nhân hóa.`
  - **EN:** `Context-aware legal education assistant: parsing complex legal PDF documents, delivering precise answers grounded with exact article and page citations, and generating personalized study schedules.`
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
  - **VI:** `Ứng dụng máy tính chuyên dụng cho xử lý âm thanh tiếng Việt: tích hợp thư viện giọng đọc biểu cảm tự nhiên, công nghệ nhân bản giọng nói (voice cloning) và khả năng xử lý hoàn toàn offline đảm bảo bảo mật dữ liệu.`
  - **EN:** `Dedicated desktop solution for Vietnamese speech synthesis: featuring expressive natural voice models, rapid voice cloning capabilities, and optional offline inference for complete data privacy.`
- **Công nghệ (Chips):** `Neural TTS`, `Voice Cloning`, `Electron`, `PyTorch`
- **Alt text hình ảnh:** `Voice Studio: thư viện giọng nói để đọc văn bản tiếng Việt`

---

## 9. Kỹ Năng & Công Cụ (Skills Section)

*Tiêu đề Section:* `copy[lang].skillsTitle`:
- **VI:** `Công nghệ & Năng lực kỹ thuật`
- **EN:** `Technical Stack & Core Competencies`

*Chi tiết 4 nhóm kỹ năng trong mảng `skillGroups`:*

| Nhóm | Tiêu đề nhóm (VI) | Tiêu đề nhóm (EN) | Danh sách công nghệ (Items) |
| :---: | :--- | :--- | :--- |
| **1** | `Kiến trúc LLM & Agentic AI` | `LLM & Agentic Architectures` | `LangGraph Orchestration`, `Agentic RAG`, `Prompt & Guardrail Engineering`, `OpenAI & Anthropic API`, `Multi-Agent Systems` |
| **2** | `Backend & Hệ thống dữ liệu` | `Backend & Data Infrastructure` | `FastAPI (Async & Streaming)`, `Supabase (pgvector & RLS)`, `Qdrant Vector Database`, `Redis (Semantic Cache)`, `Docker Containerization` |
| **3** | `Đánh giá, Vận hành & MLOps` | `Evaluation & MLOps Reliability` | `DeepEval & RAGAS Benchmarks`, `Hallucination Control`, `Semantic Caching Optimization`, `p95 Latency Load Testing`, `CI/CD Deployment` |
| **4** | `Giao diện & Tự động hoá` | `Frontend & Process Automation` | `Next.js & React (Hooks, SSR)`, `TypeScript`, `Tailwind CSS & Modern UI`, `n8n Workflow Automation`, `Python (Asyncio, OOP)` |

---

## 10. Quá Trình Làm Việc & Học Vấn (Experience Section)

*Tiêu đề Section:* `copy[lang].experienceTitle`:
- **VI:** `Quá trình làm việc & học vấn`
- **EN:** `Professional Experience & Education`

*Chi tiết 4 mốc kinh nghiệm trong mảng `milestones`:*

### Mốc 1: VinSmart Future (GSM)
- **Vai trò:** `PM Intern`
- **Đơn vị:** `VinSmart Future (GSM)`
- **Thời gian:**
  - **VI:** `09/2026 – Hiện tại`
  - **EN:** `Sep 2026 – Present`
- **Mô tả chi tiết:**
  - **VI:** `Hỗ trợ quản lý, theo dõi tiến độ và phối hợp các bên liên quan trong dự án AI; Nghiên cứu thị trường và đối thủ cho bài toán Express; Xây dựng và cập nhật tài liệu dự án chuẩn hóa.`
  - **EN:** `Support project planning, progress tracking, and coordination among stakeholders in AI projects; conduct market and competitor research for Express delivery service; develop and maintain project documentation.`

### Mốc 2: Trung Anh Group
- **Vai trò:** `AI Engineer`
- **Đơn vị:** `Trung Anh Group`
- **Thời gian:**
  - **VI:** `05/2026 – 07/2026`
  - **EN:** `May 2026 – Jul 2026`
- **Mô tả chi tiết:**
  - **VI:** `Xây dựng và triển khai chatbot RAG cho hơn 20 fanpage y tế và hơn 5 bác sĩ bằng LangGraph, Qdrant và n8n; tự động hoá hàng nghìn hội thoại trên Messenger, Zalo OA và Zalo cá nhân; thiết kế workflow phân loại lead cho telesales.`
  - **EN:** `Built and deployed RAG chatbots for 20+ healthcare fanpages and 5+ doctors using LangGraph, Qdrant and n8n; automated thousands of interactions across Facebook Messenger, Zalo OA, and personal Zalo; designed lead qualification workflows.`

### Mốc 3: Appen
- **Vai trò:** `Data Annotator`
- **Đơn vị:** `Appen`
- **Thời gian:**
  - **VI:** `06/2025 – 04/2026`
  - **EN:** `Jun 2025 – Apr 2026`
- **Mô tả chi tiết:**
  - **VI:** `Gán nhãn và chú thích dữ liệu văn bản, hình ảnh, âm thanh cho huấn luyện và đánh giá mô hình ML; kiểm tra và đánh giá chất lượng dữ liệu gán nhãn đảm bảo độ chính xác và tính nhất quán.`
  - **EN:** `Labeled and annotated text, image, and audio datasets for machine learning model training and evaluation; conducted data validation and QA to maintain dataset consistency and accuracy.`

### Mốc 4: Trường Đại học Thăng Long
- **Vai trò:**
  - **VI:** `Cử nhân kép AI & Khoa học máy tính`
  - **EN:** `Double Bachelor's in AI & CS`
- **Đơn vị:**
  - **VI:** `Trường Đại học Thăng Long`
  - **EN:** `Thang Long University`
- **Thời gian:**
  - **VI:** `2021 – 12/2025`
  - **EN:** `2021 – Dec 2025`
- **Mô tả chi tiết:**
  - **VI:** `Tốt nghiệp cử nhân kép ngành Trí tuệ Nhân tạo (GPA 8.3/10) và Khoa học Máy tính (GPA 8.2/10). Nhận chứng nhận của trường về hoạt động nghiên cứu khoa học.`
  - **EN:** `Graduated with double bachelor's degrees in Artificial Intelligence (GPA 8.3/10) and Computer Science (GPA 8.2/10). University certificate for scientific research.`

---

## 11. Cách Hợp Tác (Collaboration Section)

*Tiêu đề Section:* `copy[lang].hireTitle`:
- **VI:** `Các hình thức hợp tác chuyên môn`
- **EN:** `Ways We Can Collaborate`

*Chi tiết 3 phương thức trong mảng `hireCards`:*

| Thẻ | Tiêu đề (VI) / (EN) | Mô tả (VI) | Mô tả (EN) |
| :---: | :--- | :--- | :--- |
| **01** | `Tư vấn Kiến trúc AI & RAG`<br>`AI Architecture Advisory` | Đánh giá toàn diện kiến trúc LLM, luồng xử lý RAG và mô hình triển khai của doanh nghiệp trước khi đưa lên production nhằm tối ưu chi phí và độ an toàn. | In-depth architecture review for LLM, RAG, and agent systems prior to production release, ensuring cost efficiency, scalability, and security. |
| **02** | `Dẫn dắt Đội ngũ Kỹ thuật AI`<br>`AI Engineering Team Leadership` | Hoạch định roadmap sản phẩm AI, thiết lập tiêu chuẩn kỹ thuật, xây dựng bộ đo đánh giá tự động và dẫn dắt đội ngũ kỹ sư hiện thực hóa giải pháp. | Lead AI product roadmap and engineering delivery, define evaluation standards, and mentor engineering teams to build production-ready systems. |
| **03** | `Triển khai Dự án RAG & Agent`<br>`End-to-End RAG & Agent Delivery` | Xây dựng giải pháp AI may đo theo bài toán doanh nghiệp: cô lập dữ liệu đa tenant, tích hợp hệ thống sẵn có, thiết lập guardrail và chuyển giao hoàn thiện. | Build tailor-made enterprise AI systems: multi-tenant data isolation, seamless integration with existing systems, strict guardrails, and full operational handover. |

---

## 12. Chân Trang & Liên Hệ (Footer & Contact Section)

| Thành phần | Khóa / Biến trong code | Tiếng Việt (VI) | Tiếng Anh (EN) |
| :--- | :--- | :--- | :--- |
| **Tiêu đề Footer** | `copy[lang].contactTitle` | `Cùng hiện thực hóa các giải pháp AI giá trị` | `Let's Build Impactful Production AI Systems` |
| **Mô tả Footer** | `copy[lang].contactDesc` | `Sẵn sàng trao đổi về tư vấn kiến trúc, dẫn dắt đội ngũ kỹ thuật hoặc triển khai các dự án RAG và Agentic AI cấp sản phẩm.` | `Available for technical architecture advisory, engineering team leadership, or executing production-grade RAG and Agentic AI projects.` |
| **Nút bấm Email** | `copy[lang].contactBtn` | `Gửi email trao đổi` (href: `mailto:nhmanh.dev@gmail.com`) | `Start a Conversation` (href: `mailto:nhmanh.dev@gmail.com`) |
| **Khẩu hiệu thương hiệu**| `copy[lang].footerTagline` | `Đưa AI từ demo vào vận hành tin cậy và bền vững.` | `Taking AI from demo to reliable production.` |
| **Dòng bản quyền** | `copy[lang].footer` | `© 2026 Nguyễn Hùng Mạnh (AI42E)` | `© 2026 Nguyễn Hùng Mạnh (AI42E)` |
| **Logo chân trang** | JSX (`.lp-brand-mark`) | `M` | `M` |
| **Chữ nền watermark chìm**| JSX (`.lp-footer-wordmark`)| `AI42E` | `AI42E` |

### Thông tin mạng xã hội liên kết (Mảng `socials`):
1. **GitHub:** `@nhmanhDev` — `https://github.com/nhmanhDev`
2. **LinkedIn:** `@nhmanh-ai4e1208` — `https://www.linkedin.com/in/nhmanh-ai4e1208/`
3. **Facebook:** `@nhmanhAI4E` — `https://www.facebook.com/nhmanhAI4E/`
4. **Email:** `nhmanh.dev@gmail.com` — `mailto:nhmanh.dev@gmail.com`
