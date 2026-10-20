# Nguyen Hung Manh - AI Engineer & Techlead Portfolio

This is my personal portfolio, built to showcase my AI engineering leadership, projects, skills, and experience in building production-ready LLM, RAG, and Agentic AI systems.

## ✨ Features

- **Modern & Dark UI**: Sleek, professional design tailored for an AI developer with customizable theme switcher and light/dark modes.
- **Experience Timeline**: Vertical timeline highlighting professional roles (VinUniversity PM & Techlead, Trung Anh Group AI Engineer, Appen) and double-degree academic journey at Thang Long University.
- **Projects Showcase**: Interactive cards demonstrating Algorithmic Trading Systems, Automated Video Pipelines, and Advanced Multi-tenant RAG Chatbots.
- **Fully Responsive**: Optimized for desktop and mobile devices.

## 🛠 Tech Stack

- **Frontend**: React.js, React Bootstrap, CSS3
- **Animations**: react-tsparticles, react-parallax-tilt, react-vertical-timeline-component
- **Routing**: react-router-dom

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm start
```

## 📚 Documentation

- [Architecture](docs/ARCHITECTURE.md): cấu trúc thư mục, routing, theme, luồng build và deploy
- [API](docs/API.md): không có API nội bộ, liệt kê các dịch vụ bên ngoài
- [Changelog](docs/CHANGELOG.md): lịch sử thay đổi và lý do

## 🌐 Deployment

This project is configured to automatically deploy to GitHub Pages.
```bash
npm run deploy
```

`npm run build` tự chạy thêm bước `postbuild` để tạo `build/404.html`, giúp các route như `/about` mở trực tiếp được trên GitHub Pages.

---
*Designed & Built by Nguyen Hung Manh*
