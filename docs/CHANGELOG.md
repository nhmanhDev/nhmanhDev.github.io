# Changelog

Tất cả các thay đổi, sửa lỗi, và cập nhật tính năng quan trọng của repository được ghi lại tại đây theo thời gian (mới nhất lên đầu).

| Ngày | Hạng mục / Lỗi | Nguyên nhân gốc | Giải pháp |
| --- | --- | --- | --- |
| 2026-10-15 | Dọn dẹp toàn bộ dữ liệu, tệp tin và thông tin mẫu của tác giả cũ | Repo khởi tạo từ template portfolio nhưng vẫn còn sót lại các tệp PDF resume của Soumyajit Behera, các ảnh dự án cũ (Chatify, Bits-0f-C0de, Editor.io, Plant AI, Suicide, Emotion), logo tác giả cũ, preloader gif, 23 icon công nghệ không dùng, metadata webmanifest mặc định và comment bản quyền | 1. Xóa toàn bộ PDF của tác giả cũ (`Soumyajit_Behera-BIT_MESRA.pdf`, `Soumyajit_Behera.pdf`).<br>2. Xóa 6 ảnh dự án thừa (`blog.png`, `chatify.png`, `codeEditor.png`, `emotion.png`, `leaf.png`, `suicide.png`).<br>3. Xóa `logo.png` và `pre.gif` thừa.<br>4. Dọn 23 icon TechIcons không sử dụng.<br>5. Xóa comment tác giả cũ trong `pre.svg`.<br>6. Cập nhật `manifest.json` và `site.webmanifest` sang thông tin của Nguyễn Hùng Mạnh.<br>7. Dọn ignore server cũ trong `.gitignore`.<br>8. Fix cảnh báo eslint `===` trong `ThemeSwitcher.js`. |
