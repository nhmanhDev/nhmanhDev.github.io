# Nguyen Hung Manh - AI Engineer & Techlead Portfolio

This is my personal portfolio, built to showcase my AI engineering leadership, projects, skills, and experience in building production-ready LLM, RAG, and Agentic AI systems.

## ✨ Features

- **One-page landing**: hero, projects with real product screenshots, experience timeline with tech stack, and contact in a single scrollable page.
- **Light/dark theme and VI/EN language**: switchable from the header, remembered in the browser.
- **Motion**: word-by-word hero reveal, 3D tilt on cards, scroll-linked card motion. All motion turns off when reduced motion is requested.
- **Fully Responsive**: checked at desktop and mobile widths.

## 🛠 Tech Stack

- **Frontend**: React 17, React Bootstrap, react-icons, CSS3
- **Routing**: react-router-dom (single route, unknown paths redirect to home)

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

`npm run build` tự chạy thêm bước `postbuild` để tạo `build/404.html`, giúp mở trực tiếp các đường dẫn con trên GitHub Pages. Merge vào `main` không tự đổi trang đang public: cần `npm run deploy` để đưa bản mới lên `gh-pages`.

---
*Designed & Built by Nguyen Hung Manh*
