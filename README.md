<div align="center">

# 🐒 MONKEYPOX SCREENING SYSTEM 🐒
### 🩺 Real-Time Computer Vision & Deep Learning Skin Lesion Detection
*Hệ Thống Trợ Lý Thị Giác Máy Tính Sàng Lọc Tổn Thương Da Bệnh Đậu Mùa Khỉ Thời Gian Thực*

[![Python](https://img.shields.io/badge/Python-3.8%2B-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org)
[![OpenCV](https://img.shields.io/badge/OpenCV-Computer%20Vision-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white)](https://opencv.org/)
[![Deep Learning](https://img.shields.io/badge/Deep%20Learning-Feature%20Extraction-FF6F00?style=for-the-badge&logo=pytorch&logoColor=white)](https://github.com/baolam/monkey-smallpox)
[![Socket.IO](https://img.shields.io/badge/Network-Socket.IO%20Client-010101?style=for-the-badge&logo=socketdotio&logoColor=white)](https://socket.io/)

---

</div>

> [!IMPORTANT]
> **Monkeypox Screening System** ứng dụng mạng nơ-ron trích xuất đặc trưng hình thái da và OpenCV để hỗ trợ sàng lọc sơ bộ dấu hiệu tổn thương da nghi ngờ do bệnh đậu mùa khỉ (Monkeypox), kết hợp giao tiếp Socket.IO truyền dữ liệu tức thời đến trung tâm y tế.

---

## 📑 Mục Lục (Table of Contents)
- [✨ Tính Năng Nổi Bật](#-tính-năng-nổi-bật)
- [🏗️ Kiến Trúc Hoạt Động](#️-kiến-trúc-hoạt-động)
- [📂 Cấu Trúc Dự Án](#-cấu-trúc-dự-án)
- [⚙️ Công Nghệ Sử Dụng](#️-công-nghệ-sử-dụng)
- [🚀 Hướng Dẫn Cài Đặt & Khởi Chạy](#-hướng-dẫn-cài-đặt--khởi-chạy)
- [📜 Giấy Phép (License)](#-giấy-phép-license)

---

## ✨ Tính Năng Nổi Bật

| Biểu Tượng | Tính Năng | Mô Tả Chi Tiết |
| :---: | :--- | :--- |
| 🔬 | **Trích Xuất Đặc Trưng Hình Ảnh Sâu** | Module `modify_deepface` trích xuất vector biểu diễn đặc trưng vùng da có nốt mụn/ban sần. |
| ⚡ | **Giao Tiếp Thời Gian Thực Qua Socket.IO** | Tự động đồng bộ kết quả quét qua WebSocket đến dashboard của bác sĩ/chuyên gia. |
| 📹 | **Quét Qua Camera Y Tế Trực Tiếp** | Xử lý khung hình mượt mà từ webcam hoặc kính hiển vi soi da kỹ thuật số. |

---

## 🏗️ Kiến Trúc Hoạt Động

```mermaid
flowchart LR
    A["🎥 Camera / Kính Soi Da"] --> B["🔍 Tiền Xử Lý & Crop Vùng Tổn Thương"]
    B --> C["🧠 Feature Representation (modify_deepface)"]
    C --> D["⚖️ So Khớp & Phân Loại Mức Độ Rủi Ro"]
    D --> E["⚡ Socket.IO Client
(Truyền dữ liệu lên Server)"]
```

---

## 📂 Cấu Trúc Dự Án

```bash
monkey-smallpox/
├── 📄 index.py            # Chương trình chính thu hình và phát hiện qua camera
├── 📂 utils/              # Bộ công cụ xử lý ảnh và trích xuất đặc trưng sâu
│   └── 📄 modify_deepface.py # Tinh chỉnh mô hình trích xuất vector đặc trưng
├── 📄 requirements.txt    # Danh mục thư viện phụ thuộc
└── 📄 README.md           # Hướng dẫn chi tiết dự án
```

---

## ⚙️ Công Nghệ Sử Dụng

- **Language**: Python 3.8+
- **Vision & Deep Learning**: OpenCV, DeepFace, NumPy
- **Communication Protocol**: Python-SocketIO, Requests

---

## 🚀 Hướng Dẫn Cài Đặt & Khởi Chạy

```bash
# 1. Clone repository
git clone https://github.com/baolam/monkey-smallpox.git
cd monkey-smallpox

# 2. Cài đặt thư viện
pip install opencv-python python-socketio requests

# 3. Khởi chạy ứng dụng
python index.py
```

---

<div align="center">

## 📜 Giấy Phép (License)

Dự án được phân phối dưới giấy phép **MIT License**.

---
**Made with ❤️ by [Bảo Lâm](https://github.com/baolam)**

</div>
