# Kiến trúc hiện tại

> Ảnh chụp trạng thái hiện tại của codebase. Khi đổi cấu trúc, sửa đè tại chỗ, không ghi theo ngày (lịch sử nằm ở [CHANGELOG.md](CHANGELOG.md)).

## Tổng quan

Website portfolio tĩnh một trang, viết bằng React 17 và Create React App. Không có backend, không có database. Nội dung viết cứng trong component. Build ra file tĩnh và deploy lên GitHub Pages.

## Cấu trúc thư mục

```
.
├── public/                        # File tĩnh copy nguyên vào build
│   ├── index.html, robots.txt, site.webmanifest, favicon
│   └── Nguyen_Hung_Manh_Resume.pdf   # CV (chưa có link trên trang)
├── scripts/
│   └── copy-404.js                # Sau build: tạo build/404.html cho GitHub Pages
├── src/
│   ├── index.js                   # Điểm vào: render <App /> vào #root
│   ├── App.js                     # Router, bootloader, route "/" và redirect còn lại
│   ├── index.css                  # Font và nền toàn trang
│   ├── Assets/
│   │   ├── manh-portrait.jpg      # Ảnh chân dung ở hero
│   │   └── Projects/              # Ảnh chụp sản phẩm thật dùng trong thẻ dự án
│   └── components/
│       ├── Pre.js, Pre.css        # Bootloader: hiện khi tải trang, ẩn khi trang và font sẵn sàng
│       └── Landing/
│           ├── Landing.js         # Toàn bộ trang chủ: dữ liệu, các section, logic cuộn và 3D
│           └── Landing.css        # Style trang chủ, dùng biến màu trên `.lp-root`
├── docs/
└── package.json
```

## Routing

Dùng `react-router-dom` v6 với `BrowserRouter`. Định nghĩa tại [src/App.js](../src/App.js).

| Đường dẫn | Component | Ghi chú |
|---|---|---|
| `/` | `Landing` | Toàn bộ nội dung |
| `*` | redirect về `/` | Các đường dẫn cũ như `/about` cũng về trang chủ |

Trên GitHub Pages, truy cập trực tiếp một đường dẫn con cần file `404.html`. File này do bước `postbuild` tạo từ `index.html`.

## Trang chủ (Landing)

Thứ tự các section trong `Landing.js`:

1. Thanh menu dính (`sticky`), gồm link tới các section (Giới thiệu, Dự án, Kinh nghiệm), nút đổi ngôn ngữ VI/EN, nút đổi sáng/tối và nút "Liên hệ".
2. Hero: tiêu đề tách từng từ và lật 3D có highlight cam thương hiệu, mô tả, ba nút CTA (Xem dự án, Liên hệ, Xem CV), ảnh chân dung trong khung vòm có chip công nghệ nổi.
3. Hai dải marquee nghiêng chạy ngược chiều (công nghệ).
4. Giới thiệu: đoạn mô tả kiến trúc và ba số liệu kỹ thuật.
5. Dự án đã triển khai: sáu thẻ lệch 7/5, mỗi thẻ có ảnh sản phẩm thật hoặc sơ đồ luồng, số thứ tự, chip công nghệ.
6. Kinh nghiệm & Năng lực thực chiến: dải Marquee Ticker công nghệ vô tận và timeline kinh nghiệm kèm chip công nghệ ngữ cảnh.
7. Cách hợp tác: ba thẻ hình thức làm việc.
8. Liên hệ và footer: nút gửi email, danh sách liên kết, chữ "AI42E" lớn ở cuối.

Dữ liệu của từng section là mảng khai báo ở đầu `Landing.js`: `copy` (văn bản VI và EN), `projects`, `hireCards`, `milestones`, `bands`, `socials`.

Hiệu ứng:
- Thẻ dự án và thẻ hợp tác nghiêng 3D theo con trỏ (`tiltHandlers`, ghi CSS variable, không re-render).
- Thẻ dự án phóng và xoay theo vị trí cuộn (`useScrollScale`, dùng `requestAnimationFrame`).
- Marquee Ticker dừng khi hover chuột, viền gradient fade êm ái hai bên.
- Các khối hiện dần khi vào khung nhìn (`IntersectionObserver`, class `.is-visible`).
- Mọi hiệu ứng tắt khi người dùng bật `prefers-reduced-motion`.

## Bootloader và trạng thái

- `App` giữ state `load`. Bootloader ẩn khi trang đã tải xong, font đã sẵn sàng, và đã hiện đủ 0.9 giây. Nếu quá 5 giây thì ẩn luôn.
- Khi `load` còn `true`, `Landing` không có class `lp-ready`, nên các animation vào trang (hero, chữ) chưa chạy để không bị bootloader che.
- Không dùng state management toàn cục. Chỉ `Landing` giữ state ngôn ngữ và theme.

## Theme và ngôn ngữ

- Theme sáng/tối: thuộc tính `data-bs-theme` trên `.lp-root`. Màu lấy từ CSS variable khai báo trong `Landing.css`.
- Ngôn ngữ: VI (mặc định) hoặc EN, đổi bằng nút trên menu.
- Hai lựa chọn được lưu trong `localStorage` với khóa `lp-theme` và `lp-lang`, bọc trong `try/catch`.

## Nguồn dữ liệu

Không có API nội bộ. Nội dung là dữ liệu viết cứng trong `Landing.js`. Khi thông tin đổi (chức danh, công ty, số liệu, dự án), phải sửa đồng thời:

- `Landing.js`: mảng `copy`, `milestones`, `projects`.
- `public/Nguyen_Hung_Manh_Resume.pdf`: CV.
- `public/index.html`: tiêu đề và meta mô tả.

## Build và deploy

1. `npm run build` (`react-scripts build`) tạo thư mục `build/`.
2. `postbuild` chạy `scripts/copy-404.js`, copy `build/index.html` thành `build/404.html`.
3. `npm run deploy` (`predeploy` chạy build trước) đẩy nội dung `build/` lên nhánh `gh-pages`.
4. GitHub Pages phục vụ nhánh `gh-pages`. Merge vào `main` không tự đổi trang đang public.

`package.json` đặt `homepage` là domain gốc, nên đường dẫn tài nguyên là `/`.

## Kiểm thử

Hiện chưa có test tự động. Kiểm tra bằng `npm start` (phát triển) và `npm run build` (production). Các điểm cần xem sau mỗi thay đổi: không tràn ngang, thanh menu dính, ảnh tải đủ, không có lỗi trên trang.

## Hạn chế đã biết

- Nội dung và thông tin liên hệ viết cứng trong code, chưa tách thành file dữ liệu riêng.
- Trang chưa có link tải CV, dù file CV vẫn nằm trong `public/`.
- Hai thẻ dự án "Điều phối tin nhắn phòng khám" và "AI42E Trading Engine" chưa có ảnh chụp sản phẩm thật, đang dùng sơ đồ luồng thay thế.
- Các thẻ dự án trỏ tới trang profile GitHub, chưa trỏ tới repo của từng dự án.
