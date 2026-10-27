# API

Repo này **không có API nội bộ**. Đây là website tĩnh, không có backend, không có endpoint, không có database.

Tài liệu này liệt kê các dịch vụ bên ngoài mà trang web gọi tới khi chạy.

## Dịch vụ được gọi khi chạy

| Dịch vụ | Gọi từ | Mục đích | Loại |
|---|---|---|---|
| Google Fonts (`fonts.googleapis.com`) | `src/index.css` và `src/components/Landing/Landing.css` (`@import`) | Tải font Bricolage Grotesque, Inter, PT Mono, Outfit | Tải CSS và font, không gửi dữ liệu người dùng |

Không còn gọi dịch vụ nào khác. Dữ liệu GitHub và worker của pdf.js đã được gỡ cùng các trang cũ.

## Liên kết ra ngoài (không phải gọi API)

Các liên kết này chỉ mở tab mới khi người dùng bấm, không gửi dữ liệu:

- GitHub: `https://github.com/nhmanhDev`
- Facebook: `https://www.facebook.com/nhmanhAI4E/`
- LinkedIn: `https://www.linkedin.com/in/nhmanh-ai4e1208/`
- Email: `mailto:nhmanh.dev@gmail.com`

## Dữ liệu người dùng

Trang web không gửi form và không có đăng nhập. Hai giá trị được lưu trong `localStorage` của trình duyệt, chỉ trên máy người dùng:

- `lp-theme`: `"light"` hoặc `"dark"`.
- `lp-lang`: `"vi"` hoặc `"en"`.
