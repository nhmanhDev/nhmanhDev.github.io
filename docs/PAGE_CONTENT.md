# Bảng Tổng Hợp Toàn Bộ Nội Dung & Câu Từ Trên Website

> Tài liệu này rà soát và tập hợp **100% tất cả các đoạn văn bản (text), tiêu đề, mô tả, nhãn nút, tooltip, alt text và metadata** đang được hiển thị trên trang chủ (`/`), bao gồm cả hai phiên bản ngôn ngữ **Tiếng Việt (VI)** và **Tiếng Anh (EN)**.  
> Các vị trí biến code tương ứng trong file `src/components/Landing/Landing.js` được ghi chú rõ ràng để anh Mạnh có thể rà soát, chỉnh sửa câu từ và cập nhật lại bất cứ lúc nào.

---

## Mục lục
1. [Metadata, Tiêu Đề Trình Duyệt & Màn Hình Tải (Preloader)](#1-metadata-tiêu-đề-trình-duyệt--màn-hình-tải-preloader)
2. [Thanh Điều Hướng (Navbar / Header)](#2-thanh-điều-hướng-navbar--header)
3. [Phần Mở Đầu (Hero Section)](#3-phần-mở-đầu-hero-section)
4. [Dải Chữ Chạy Công Nghệ (Marquee Bands)](#4-dải-chữ-chạy-công-nghệ-marquee-bands)
5. [Giới Thiệu (About Section)](#5-giới-thiệu-about-section)
6. [Luồng Xử Lý RAG (How It Works / Flow Section)](#6-luồng-xử-lý-rag-how-it-works--flow-section)
7. [Dịch Vụ Chuyên Môn (Services Section)](#7-dịch-vụ-chuyên-môn-services-section)
8. [Dự Án Tiêu Biểu (Projects Section)](#8-dự-án-tiêu-biểu-projects-section)
9. [Kỹ Năng & Công Cụ (Skills Section)](#9-kỹ-năng--công-cụ-skills-section)
10. [Quá Trình Làm Việc (Experience Section)](#10-quá-trình-làm-việc-experience-section)
11. [Cách Hợp Tác (Hire / Collaboration Section)](#11-cách-hợp-tác-hire--collaboration-section)
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
| **Logo preloader** | `src/components/Pre.js` | `M` | `M` | Ký tự nhận diện thương hiệu |

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
| **Nút CTA Header** | `copy[lang].ctaContact` | Liên hệ | Get in touch |

---

## 3. Phần Mở Đầu (Hero Section)

| Thành phần | Khóa / Biến trong code | Tiếng Việt (VI) | Tiếng Anh (EN) |
| :--- | :--- | :--- | :--- |
| **Badge danh xưng** | `copy[lang].heroEyebrow` | `AI Engineer` | `AI Engineer` |
| **Tiêu đề H1 - Vế 1** | `copy[lang].heroA` | `Đưa AI từ demo` | `Take AI from demo` |
| **Tiêu đề H1 - Điểm nhấn**| `copy[lang].heroHighlight` | `ra vận hành thật` | `to real use` |
| **Tiêu đề H1 - Vế 2** | `copy[lang].heroB` | `có kiểm soát và đo được.` | `measurable and under control.` |
| **Đoạn mô tả ngắn (Lead)**| `copy[lang].heroDesc` | Nguyễn Hùng Mạnh (AI42E). AI Engineer tập trung xây dựng các hệ thống LLM, RAG và Agentic AI sẵn sàng triển khai thực tế, vận hành ổn định và giải quyết bài toán thực tiễn. | Nguyen Hung Manh (AI42E). AI Engineer focused on building production-ready LLM, RAG, and agentic AI systems that solve real-world problems and deliver meaningful impact. |
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
| **Tiêu đề Section** | `copy[lang].aboutTitle` | `Từ dữ liệu đến hệ thống chạy thật` | `From data to systems that run in production` |
| **Đoạn văn giới thiệu** | `copy[lang].aboutBody` | Nguyễn Hùng Mạnh (AI42E) là AI Engineer tập trung xây dựng các hệ thống LLM, RAG và Agentic AI sẵn sàng triển khai trong môi trường thực tế. Tốt nghiệp cử nhân kép ngành Trí tuệ Nhân tạo (GPA 8.3) và Khoa học Máy tính (GPA 8.2) tại Đại học Thăng Long, hoàn thành xuất sắc chương trình AI Thực Chiến tại VinUniversity. | Nguyen Hung Manh (AI42E) is an AI Engineer focused on building production-ready LLM, RAG, and agentic AI systems. Double bachelor's in Artificial Intelligence (GPA 8.3) and Computer Science (GPA 8.2) from Thang Long University, with certificate of excellent completion from the AI in Action program at VinUniversity. |
| **Số liệu Fact 1** | `copy[lang].aboutFacts[0]` | **Số:** `2`<br>**Mô tả:** Bằng cử nhân kép AI và Khoa học máy tính, ĐH Thăng Long | **Số:** `2`<br>**Mô tả:** Double bachelor's in AI and Computer Science, Thang Long University |
| **Số liệu Fact 2** | `copy[lang].aboutFacts[1]` | **Số:** `20+`<br>**Mô tả:** Fanpage y tế được vận hành bằng tự động hoá đa kênh | **Số:** `20+`<br>**Mô tả:** Healthcare fanpages run on multi-channel automation |
| **Số liệu Fact 3** | `copy[lang].aboutFacts[2]` | **Số:** `3`<br>**Mô tả:** Mảng chính: RAG, tự động hoá đa kênh, đánh giá AI | **Số:** `3`<br>**Mô tả:** Core areas: RAG, multi-channel automation, AI evaluation |

---

## 6. Luồng Xử Lý RAG (How It Works / Flow Section)

*Tiêu đề Section:* `copy[lang].flowTitle`:
- **VI:** `Từ tài liệu đến câu trả lời`
- **EN:** `From documents to answers`

*Chi tiết 6 bước trong mảng `flowSteps`:*

| Bước | Nhãn (Label) VI / EN | Chi tiết (Detail) VI | Chi tiết (Detail) EN |
| :---: | :--- | :--- | :--- |
| **01** | `Tài liệu` / `Documents` | Dữ liệu nguồn của khách hàng | Client source data |
| **02** | `Embedding` / `Embedding` | Đổi văn bản thành vector | Turn text into vectors |
| **03** | `Vector DB` / `Vector DB` | Tìm đoạn liên quan theo ngữ nghĩa | Find related passages by meaning |
| **04** | `LangGraph` / `LangGraph` | Điều phối từng bước và agent | Orchestrate steps and agents |
| **05** | `Guardrail` / `Guardrail` | Chặn lỗi, kiểm soát đầu ra | Catch errors, control output |
| **06** | `Trả lời` / `Answer` | Kèm trích dẫn nguồn | With source citations |

---

## 7. Dịch Vụ Chuyên Môn (Services Section)

*Tiêu đề Section:* `copy[lang].servicesTitle`:
- **VI:** `Ba mảng chuyên môn`
- **EN:** `Three areas of focus`

*Chi tiết 3 dịch vụ trong mảng `services`:*

### Dịch vụ 1: Trợ lý tra cứu tài liệu nội bộ
- **Tiêu đề (Title):**
  - **VI:** `Trợ lý tra cứu tài liệu nội bộ`
  - **EN:** `Internal document assistant`
- **Mô tả (Description):**
  - **VI:** `Thu thập, vector hoá và cô lập dữ liệu theo từng khách hàng, điều phối bằng LangGraph kèm guardrail.`
  - **EN:** `Ingest and vectorize knowledge with per-tenant isolation, orchestrated with LangGraph and guardrails.`
- **Công nghệ (Chips):** `LangGraph`, `Qdrant`, `pgvector`

### Dịch vụ 2: Tự động trả lời khách trên Messenger và Zalo
- **Tiêu đề (Title):**
  - **VI:** `Tự động trả lời khách trên Messenger và Zalo`
  - **EN:** `Automated replies on Messenger and Zalo`
- **Mô tả (Description):**
  - **VI:** `Nối Messenger, Zalo OA với CRM và lịch hẹn: phân loại tin nhắn, chuyển đúng người, không để lead rơi.`
  - **EN:** `Connect Messenger and Zalo OA to CRM and booking: triage messages, route to the right person, no lead left behind.`
- **Công nghệ (Chips):** `Messenger`, `Zalo OA`, `n8n`

### Dịch vụ 3: Kiểm tra chất lượng AI trước khi ra mắt
- **Tiêu đề (Title):**
  - **VI:** `Kiểm tra chất lượng AI trước khi ra mắt`
  - **EN:** `AI quality checks before launch`
- **Mô tả (Description):**
  - **VI:** `Benchmark tự động bằng DeepEval/RAGAS, cache ngữ nghĩa để giảm chi phí, kiểm tra độ trễ trước mỗi lần phát hành.`
  - **EN:** `Automated benchmarks with DeepEval/RAGAS, semantic caching to cut cost, latency checks before every release.`
- **Công nghệ (Chips):** `DeepEval`, `RAGAS`, `Semantic cache`

---

## 8. Dự Án Tiêu Biểu (Projects Section)

*Tiêu đề Section:* `copy[lang].projectsTitle`:
- **VI:** `Một vài hệ thống đã xây`
- **EN:** `Selected systems built`

*Chi tiết 6 dự án trong mảng `projects`:*

### Dự án 01: Trợ lý tuyển sinh AI (Admissions Assistant)
- **Tag:**
  - **VI:** `Agentic RAG · 2025 – 2026`
  - **EN:** `Agentic RAG · 2025 – 2026`
- **Tiêu đề (Title):**
  - **VI:** `Trợ lý tuyển sinh AI`
  - **EN:** `AI Admissions Assistant`
- **Mô tả (Description):**
  - **VI:** `Trợ lý tuyển sinh đa tenant: LangGraph, FastAPI streaming, Supabase cô lập vector, cache ngữ nghĩa và fallback có kiểm soát.`
  - **EN:** `Multi-tenant admissions assistant: LangGraph, FastAPI streaming, Supabase vector isolation, semantic cache and controlled fallbacks.`
- **Công nghệ (Chips):** `LangGraph`, `FastAPI`, `Supabase`, `Qdrant`, `Redis`, `DeepEval`
- **Alt text hình ảnh:** `Giao diện trợ lý tuyển sinh AI, câu trả lời có trích dẫn từ đề án tuyển sinh`

### Dự án 02: Điều phối tin nhắn phòng khám (Healthcare Omnichannel Routing)
- **Tag:**
  - **VI:** `Tự động hoá · 2026`
  - **EN:** `Automation · 2026`
- **Tiêu đề (Title):**
  - **VI:** `Điều phối tin nhắn phòng khám`
  - **EN:** `Healthcare omnichannel routing`
- **Mô tả (Description):**
  - **VI:** `Phân luồng tin nhắn Messenger và Zalo OA cho nhiều fanpage phòng khám, đẩy lead có ý định cao sang CRM và cảnh báo ca cần bác sĩ.`
  - **EN:** `Routes Messenger and Zalo OA messages across clinic fanpages, pushes high-intent leads to CRM and flags urgent cases for doctors.`
- **Luồng xử lý (Mini-flow):**
  - **VI:** `Messenger và Zalo OA` $\to$ `Phân luồng theo ý định` $\to$ `Lead có ý định cao → CRM` $\to$ `Ca cần bác sĩ → cảnh báo`
  - **EN:** `Messenger and Zalo OA` $\to$ `Route by intent` $\to$ `High-intent leads → CRM` $\to$ `Urgent cases → doctor alert`
- **Công nghệ (Chips):** `LangGraph`, `Qdrant`, `n8n`, `Messenger API`, `Zalo OA`

### Dự án 03: AI42E Trading Engine
- **Tag:**
  - **VI:** `Quant AI · Mar – Jun 2026`
  - **EN:** `Quant AI · Mar – Jun 2026`
- **Tiêu đề (Title):**
  - **VI:** `AI42E Trading Engine`
  - **EN:** `AI42E Trading Engine`
- **Mô tả (Description):**
  - **VI:** `Nhóm agent nghiên cứu tín hiệu kỹ thuật kết hợp phân tích cảm xúc tài chính, có ràng buộc rủi ro.`
  - **EN:** `Research agents combining technical signals with financial sentiment, under strict risk limits.`
- **Luồng xử lý (Mini-flow):**
  - **VI:** `Tín hiệu kỹ thuật` $\to$ `Phân tích cảm xúc tài chính` $\to$ `Nhóm agent nghiên cứu` $\to$ `Ràng buộc rủi ro`
  - **EN:** `Technical signals` $\to$ `Financial sentiment analysis` $\to$ `Research agent group` $\to$ `Risk constraints`
- **Công nghệ (Chips):** `Python`, `Multi-agent`, `Supabase`

### Dự án 04: Pipeline tổng hợp video (Video Synthesis Pipeline)
- **Tag:**
  - **VI:** `Tự động hoá media · Jan – Apr 2026`
  - **EN:** `Media automation · Jan – Apr 2026`
- **Tiêu đề (Title):**
  - **VI:** `Pipeline tổng hợp video`
  - **EN:** `Video Synthesis Pipeline`
- **Mô tả (Description):**
  - **VI:** `Từ kịch bản do LLM viết, TTS, dịch và phụ đề đến đăng tự động.`
  - **EN:** `From LLM scripts and TTS to translated captions and automatic publishing.`
- **Công nghệ (Chips):** `TTS`, `FFmpeg`, `Whisper`, `FastAPI`
- **Alt text hình ảnh:** `AI42E Video Studio: tạo video AI tự động từ mô tả hoặc mẫu có sẵn`

### Dự án 05: VLearn: trợ lý học luật (Law Study Assistant)
- **Tag:**
  - **VI:** `Hackathon · RAG giáo dục`
  - **EN:** `Hackathon · Education RAG`
- **Tiêu đề (Title):**
  - **VI:** `VLearn: trợ lý học luật`
  - **EN:** `VLearn: law study assistant`
- **Mô tả (Description):**
  - **VI:** `Trợ lý học theo ngữ cảnh: đọc học liệu PDF, trả lời kèm trích dẫn đúng trang và tạo kế hoạch ôn tập.`
  - **EN:** `A context-aware study tutor: reads PDF course material, answers with page citations and builds study plans.`
- **Công nghệ (Chips):** `RAG`, `PDF`, `Gemini`, `Telegram`
- **Alt text hình ảnh:** `VLearn: trợ lý học luật trả lời kèm trích dẫn trang trong tài liệu PDF`

### Dự án 06: Voice Studio
- **Tag:**
  - **VI:** `Sản phẩm · TTS`
  - **EN:** `Product · TTS`
- **Tiêu đề (Title):**
  - **VI:** `Voice Studio`
  - **EN:** `Voice Studio`
- **Mô tả (Description):**
  - **VI:** `Đọc văn bản tiếng Việt bằng thư viện giọng nói AI, có thể tạo giọng riêng và chạy ngay trên máy tính.`
  - **EN:** `Vietnamese text-to-speech with a voice library and custom voices, running as a desktop app.`
- **Công nghệ (Chips):** `TTS`, `Voice clone`, `Electron`
- **Alt text hình ảnh:** `Voice Studio: thư viện giọng nói để đọc văn bản tiếng Việt`

---

## 9. Kỹ Năng & Công Cụ (Skills Section)

*Tiêu đề Section:* `copy[lang].skillsTitle`:
- **VI:** `Công cụ đang dùng hằng ngày`
- **EN:** `Tools I use day to day`

*Chi tiết 4 nhóm kỹ năng trong mảng `skillGroups`:*

| Nhóm | Tiêu đề nhóm (VI) | Tiêu đề nhóm (EN) | Danh sách công nghệ (Items) |
| :---: | :--- | :--- | :--- |
| **1** | `LLM & agent` | `LLM & agents` | `LangGraph`, `LangChain`, `Agentic RAG`, `OpenAI`, `Anthropic` |
| **2** | `Backend & dữ liệu` | `Backend & data` | `FastAPI`, `Supabase / pgvector`, `Qdrant`, `Redis`, `Docker` |
| **3** | `Đánh giá & vận hành` | `Evaluation & operations` | `DeepEval`, `RAGAS`, `Guardrail`, `Semantic cache` |
| **4** | `Frontend & tự động hoá` | `Frontend & automation` | `Next.js`, `React`, `TypeScript`, `Tailwind CSS`, `n8n`, `Python` |

---

## 10. Quá Trình Làm Việc (Experience Section)

*Tiêu đề Section:* `copy[lang].experienceTitle`:
- **VI:** `Quá trình làm việc`
- **EN:** `Track record`

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

## 11. Cách Hợp Tác (Hire / Collaboration Section)

*Tiêu đề Section:* `copy[lang].hireTitle`:
- **VI:** `Cách hợp tác`
- **EN:** `Ways to work together`

*Chi tiết 3 phương thức trong mảng `hireCards`:*

| Thẻ | Tiêu đề (VI) / (EN) | Mô tả (VI) | Mô tả (EN) |
| :---: | :--- | :--- | :--- |
| **01** | `Tư vấn kiến trúc`<br>`Architecture review` | Rà soát kiến trúc LLM, RAG và agent trước khi đưa lên production. | Review LLM, RAG and agent architecture before it goes to production. |
| **02** | `Dẫn dắt đội AI`<br>`Lead an AI team` | Điều phối roadmap sản phẩm AI và đội kỹ thuật, đặt tiêu chuẩn đánh giá. | Run the AI product roadmap and engineering team, with evaluation standards. |
| **03** | `Dự án RAG & agent`<br>`RAG & agent projects` | Xây hệ thống có cô lập dữ liệu, guardrail và đánh giá tự động. | Build systems with data isolation, guardrails and automated evaluation. |

---

## 12. Chân Trang & Liên Hệ (Footer & Contact Section)

| Thành phần | Khóa / Biến trong code | Tiếng Việt (VI) | Tiếng Anh (EN) |
| :--- | :--- | :--- | :--- |
| **Tiêu đề Footer** | `copy[lang].contactTitle` | `Cùng xây hệ thống AI` | `Let's build AI systems together` |
| **Mô tả Footer** | `copy[lang].contactDesc` | `Nhận tư vấn kỹ thuật, dẫn dắt đội AI và các dự án RAG.` | `Technical advisory, AI team leadership and RAG projects.` |
| **Nút bấm Email** | `copy[lang].contactBtn` | `Gửi email` (href: `mailto:nhmanh.dev@gmail.com`) | `Send an email` (href: `mailto:nhmanh.dev@gmail.com`) |
| **Khẩu hiệu thương hiệu**| `copy[lang].footerTagline` | `Đưa AI từ demo ra production.` | `Taking AI from demo to production.` |
| **Dòng bản quyền** | `copy[lang].footer` | `© 2026 Nguyễn Hùng Mạnh (AI42E)` | `© 2026 Nguyễn Hùng Mạnh (AI42E)` |
| **Logo chân trang** | JSX (`.lp-brand-mark`) | `M` | `M` |
| **Chữ nền watermark chìm**| JSX (`.lp-footer-wordmark`)| `AI42E` | `AI42E` |

### Thông tin mạng xã hội liên kết (Mảng `socials`):
1. **GitHub:** `@nhmanhDev` — `https://github.com/nhmanhDev`
2. **LinkedIn:** `@nhmanh-ai4e1208` — `https://www.linkedin.com/in/nhmanh-ai4e1208/`
3. **Facebook:** `@nhmanhAI4E` — `https://www.facebook.com/nhmanhAI4E/`
4. **Email:** `nhmanh.dev@gmail.com` — `mailto:nhmanh.dev@gmail.com`
