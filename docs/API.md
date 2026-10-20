# API

Repo này **không có API nội bộ**. Đây là website tĩnh, không có backend, không có endpoint, không có database.

Tài liệu này liệt kê các dịch vụ bên ngoài mà trang web gọi tới khi chạy.

## Dịch vụ được gọi khi chạy

| Dịch vụ | Gọi từ | Mục đích | Loại |
|---|---|---|---|
| Dữ liệu đóng góp GitHub của `nhmanhDev` | [src/components/About/Github.js](../src/components/About/Github.js) qua `react-github-calendar` | Vẽ lịch đóng góp | Đọc, không cần khóa API |
| Worker của pdf.js trên cdnjs (`cdnjs.cloudflare.com`) | [src/components/Resume/ResumeNew.js](../src/components/Resume/ResumeNew.js) | Chạy worker để render PDF | Tải script, phiên bản cố định theo `pdfjs.version` |

## Liên kết ra ngoài (không phải gọi API)

Các liên kết này chỉ mở tab mới khi người dùng bấm, không gửi dữ liệu:

- GitHub: `https://github.com/nhmanhDev`
- Facebook: `https://www.facebook.com/nhmanhAI4E/`
- LinkedIn: `https://www.linkedin.com/in/nhmanh-ai4e1208/`
- Email: `mailto:nhmanh.dev@gmail.com`

## Dữ liệu người dùng

Trang web không gửi form và không có đăng nhập. Hai giá trị được lưu trong `localStorage` của trình duyệt, chỉ trên máy người dùng:

- `portfolio-theme`: chỉ số màu theme đã chọn.
- `portfolio-light-mode`: `"true"` hoặc `"false"`.
