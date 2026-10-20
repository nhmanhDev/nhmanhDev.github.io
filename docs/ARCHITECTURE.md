# Kiến trúc hiện tại

> Ảnh chụp trạng thái hiện tại của codebase. Khi đổi cấu trúc, sửa đè tại chỗ, không ghi theo ngày (lịch sử nằm ở [CHANGELOG.md](CHANGELOG.md)).

## Tổng quan

Website portfolio tĩnh, một trang ứng dụng (SPA) viết bằng React 17 và Create React App. Không có backend, không có database. Toàn bộ nội dung được viết cứng trong component. Build ra file tĩnh và deploy lên GitHub Pages.

## Cấu trúc thư mục

```
.
├── public/                  # File tĩnh copy nguyên vào build (index.html, favicon, robots.txt, site.webmanifest)
├── scripts/
│   └── copy-404.js          # Chạy sau build: tạo build/404.html để GitHub Pages hỗ trợ deep link
├── src/
│   ├── index.js             # Điểm vào: render <App /> vào #root, gọi reportWebVitals
│   ├── App.js               # Router, preloader 1.2s, khung layout (Navbar, routes, Footer)
│   ├── style.css            # CSS chính (theme, section, card, timeline...)
│   ├── App.css, index.css   # CSS phụ
│   ├── Assets/              # Ảnh, SVG, PDF CV (Nguyen_Hung_Manh_Resume.pdf)
│   └── components/
│       ├── Navbar.js        # Thanh điều hướng, đổi nền khi cuộn
│       ├── ThemeSwitcher.js # Chọn 4 màu theme và bật/tắt chế độ sáng
│       ├── Pre.js           # Lớp preloader
│       ├── ScrollToTop.js   # Cuộn về đầu trang khi đổi route
│       ├── Particle.js      # Hiệu ứng hạt nền (react-tsparticles), dùng chung nhiều trang
│       ├── Footer.js
│       ├── Home/            # Home.js (hero), Home2.js (giới thiệu + avatar), Type.js (typewriter)
│       ├── About/           # About.js, AboutCard.js, Techstack.js, Toolstack.js, Github.js (lịch đóng góp)
│       ├── Experience/      # Experience.js (timeline kinh nghiệm và học vấn)
│       ├── Projects/        # Projects.js (danh sách dự án), ProjectCards.js (thẻ dự án)
│       └── Resume/          # ResumeNew.js (xem CV PDF và tải về)
├── docs/                    # Tài liệu dự án (xem README)
└── package.json
```

## Routing

Dùng `react-router-dom` v6 với `BrowserRouter`. Định nghĩa tại [src/App.js](../src/App.js).

| Đường dẫn | Component | Ghi chú |
|---|---|---|
| `/` | `Home` | Hero, giới thiệu, liên kết mạng xã hội |
| `/about` | `About` | Thông tin cá nhân, kỹ năng, công cụ, lịch GitHub |
| `/project` | `Projects` | Ba dự án AI |
| `/experience` | `Experience` | Timeline kinh nghiệm và học vấn |
| `/resume` | `ResumeNew` | Xem trước và tải CV PDF |
| `*` | redirect về `/` | |

Trên GitHub Pages, truy cập trực tiếp một route con cần file `404.html`. File này do bước `postbuild` tạo từ `index.html`, nên React Router xử lý được route khi người dùng mở link hoặc F5.

## Luồng render và trạng thái

- `App` giữ state `load`, đặt `true` lúc đầu, chuyển `false` sau 1.2 giây. Khi `load` còn `true`, `Preloader` hiển thị và `App` có id `no-scroll`.
- `Navbar` giữ hai state: `expand` (menu mobile mở hay đóng) và `navColour` (đổi nền khi cuộn quá 20px). Listener `scroll` được đăng ký trong `useEffect` và gỡ khi unmount.
- `ResumeNew` giữ `width` theo `window.innerWidth`, cập nhật khi resize, để chọn scale của trang PDF.
- Không dùng state management toàn cục (Redux, Context). Mỗi component tự giữ state của nó.

## Theme và giao diện

[ThemeSwitcher.js](../src/components/ThemeSwitcher.js) có hai lựa chọn độc lập:

1. **Màu theme (4 màu):** Blue (mặc định), Green, Purple, Orange. Chọn màu sẽ ghi các CSS variable lên `document.documentElement`, gồm `--imp-text-color`, `--section-background-color`, `--nav-active-color`, `--tech-pill-bg`, `--tech-pill-border`, `--about-bg`. Lưu index theme trong `localStorage` với key `portfolio-theme`.
2. **Chế độ sáng/tối:** thêm class `light-mode` vào `body`. Lưu trong `localStorage` với key `portfolio-light-mode`.

Các section dùng CSS variable nên đổi theme không cần đổi CSS từng component.

## Nguồn dữ liệu

Không có API nội bộ. Nội dung là dữ liệu viết cứng trong component:

- Thông tin cá nhân, giới thiệu: `Home2.js`, `AboutCard.js`, `Type.js`
- Kinh nghiệm và học vấn: `Experience.js`
- Dự án: `Projects.js` (dữ liệu truyền vào `ProjectCards.js` qua props)
- Kỹ năng và công cụ: `Techstack.js`, `Toolstack.js`
- CV: file PDF `src/Assets/Nguyen_Hung_Manh_Resume.pdf`, cùng nội dung với các component trên

Lưu ý: cùng một thông tin CV nằm ở nhiều chỗ. Khi CV đổi, phải sửa đồng thời các file trên và file PDF.

## Dịch vụ bên ngoài

Chi tiết xem [API.md](API.md). Các phụ thuộc runtime gọi ra ngoài gồm: dữ liệu đóng góp GitHub (`react-github-calendar`), worker của pdf.js trên cdnjs (`ResumeNew.js`), và các liên kết mạng xã hội.

## Build và deploy

1. `npm run build` (`react-scripts build`) tạo thư mục `build/`.
2. `postbuild` chạy `scripts/copy-404.js`, copy `build/index.html` thành `build/404.html`.
3. `npm run deploy` (`predeploy` chạy build trước) đẩy nội dung `build/` lên nhánh `gh-pages` bằng `gh-pages`.
4. GitHub Pages phục vụ nhánh `gh-pages` tại `https://nhmanhDev.github.io`.

`package.json` đặt `homepage` là domain gốc, nên đường dẫn tài nguyên là `/`.

## Kiểm thử

Có một test trong [src/App.test.js](../src/App.test.js), kiểm tra app render và có chữ thương hiệu "AI42E". Chưa có test cho route, theme hay form. Chạy bằng `npm test`.

## Hạn chế đã biết

- Nội dung và thông tin liên hệ viết cứng trong code, chưa tách thành file dữ liệu riêng.
- Các thẻ dự án trỏ tới trang profile GitHub, chưa trỏ tới repo của từng dự án.
- Test chỉ kiểm tra render cơ bản.
