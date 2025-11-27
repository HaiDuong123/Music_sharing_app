# 🎵 Music Sharing App (MERN Stack)

Ứng dụng chia sẻ nhạc chất lượng cao, giúp người dùng tải lên các tệp âm thanh (MP3), lưu trữ trên đám mây và tạo liên kết chia sẻ cho bạn bè tải xuống hoặc nghe trực tuyến.

[cite_start]Dự án được xây dựng để giải quyết vấn đề chia sẻ file âm thanh khó khăn qua tin nhắn hoặc email, vốn thường làm giảm chất lượng âm thanh[cite: 17, 18].

## 🚀 Tính năng chính

* [cite_start]**Tải lên nhạc:** Hỗ trợ tải lên các định dạng âm thanh (MP3, WAV, M4A)[cite: 26].
* [cite_start]**Lưu trữ Đám mây:** Tích hợp **Cloudinary** để lưu trữ file an toàn và lâu dài[cite: 21].
* **Nghe trực tuyến:** Tự động phát nhạc (Preview) ngay sau khi tải lên thành công.
* **Chia sẻ liên kết:** Tự động tạo đường dẫn (Link) để gửi cho bạn bè.
* [cite_start]**Giao diện Tải xuống:** Trang download riêng biệt hiển thị tên bài hát, dung lượng và nút tải về[cite: 20].

## 🛠️ Công nghệ sử dụng

**Backend:**
* Node.js & Express
* [cite_start]MongoDB & Mongoose (Lưu thông tin file) [cite: 22]
* [cite_start]Cloudinary (Lưu trữ file vật lý) [cite: 21]
* Multer & Multer-storage-cloudinary (Xử lý upload)

**Frontend:**
* ReactJS
* Axios (Gọi API)
* React-icons (Giao diện)

## 📂 Cấu trúc thư mục

```text
MusicSharingApp/
├── server/       # Mã nguồn Backend (Node.js)
├── client/       # Mã nguồn Frontend (ReactJS)
└── README.md     # Tài liệu hướng dẫn

Hướng dẫn cài đặt và chạy (Localhost)
Để chạy dự án này trên máy cá nhân, bạn cần cài đặt Node.js và có tài khoản MongoDB Atlas + Cloudinary.

1. Cài đặt Backend (Server)
Mở terminal (cửa sổ lệnh) tại thư mục server:
cd server
npm install

Dưới đây là toàn bộ file README.md cho dự án Music Sharing App, được viết lại đầy đủ theo phong cách và trích dẫn bạn yêu cầu, kết hợp với phần hướng dẫn cài đặt chi tiết.

Bạn hãy copy toàn bộ nội dung này vào file README.md nhé.

Markdown

# 🎵 Music Sharing App (MERN Stack)

Đây là ứng dụng chia sẻ nhạc chất lượng cao, giúp người dùng tải lên các tệp âm thanh (MP3), lưu trữ trên đám mây và tạo liên kết chia sẻ cho bạn bè tải xuống hoặc nghe trực tuyến.

[cite_start][cite: 17, 18] Dự án được xây dựng để giải quyết vấn đề chia sẻ file âm thanh khó khăn qua tin nhắn hoặc email, vốn thường làm giảm chất lượng âm thanh và gây bất tiện cho các nhà sáng tạo nội dung.

## 🚀 Tính năng chính

* [cite_start]**Tải lên nhạc:** Giao diện kéo thả hoặc chọn tệp, hỗ trợ các định dạng âm thanh như MP3[cite: 25, 26].
* [cite_start]**Lưu trữ Đám mây:** Tích hợp **Cloudinary** để lưu trữ file đã tải lên, giúp việc chia sẻ trở nên dễ dàng[cite: 21].
* **Nghe trực tuyến:** Tự động phát nhạc (Preview) ngay sau khi tải lên thành công.
* [cite_start]**Chia sẻ liên kết:** Hệ thống tự động tạo link tải xuống để người dùng chia sẻ với bạn bè[cite: 31, 33].
* [cite_start]**Giao diện Tải xuống:** Cung cấp giao diện riêng biệt để người nhận tải xuống tệp từ máy chủ[cite: 20, 23].

## 🛠️ Công nghệ sử dụng

[cite_start]Dự án này được xây dựng bằng ngăn xếp công nghệ **MERN** (MongoDB, Express, React, Node.js)[cite: 19].

**Backend:**
* [cite_start]Node.js & Express: Xử lý server và API tải xuống[cite: 22, 23].
* [cite_start]MongoDB & Mongoose: Hỗ trợ việc lưu trữ thông tin tệp tải lên[cite: 22].
* [cite_start]Cloudinary: Dịch vụ lưu trữ tệp tin đám mây[cite: 21].
* Multer & Multer-storage-cloudinary: Middleware xử lý việc upload file.

**Frontend:**
* ReactJS
* Axios (Gọi API)
* React-icons (Giao diện icon)

## 📂 Cấu trúc thư mục

```text
MusicSharingApp/
├── server/       # Mã nguồn Backend (Node.js & Express)
├── client/       # Mã nguồn Frontend (ReactJS)
└── README.md     # Tài liệu hướng dẫn
⚙️ Hướng dẫn cài đặt và chạy (Localhost)
Để chạy dự án này trên máy cá nhân, bạn cần cài đặt Node.js và có tài khoản MongoDB Atlas + Cloudinary.

1. Cài đặt Backend (Server)
Mở terminal (cửa sổ lệnh) tại thư mục server:

```Bash

cd server
npm install
```
Cấu hình kết nối:

Mở file server/index.js.

Điền thông tin Cloudinary (Cloud Name, API Key, API Secret) và đường dẫn MongoDB vào các dòng tương ứng trong code.

Chạy Server:
```Bash
npm start
```
Server sẽ chạy tại: http://localhost:5000

2. Cài đặt Frontend (Client)
Mở một terminal mới (giữ nguyên terminal server đang chạy) tại thư mục client:
```bash
cd client
npm install
```
Chạy React App:
```Bash
npm start
```
