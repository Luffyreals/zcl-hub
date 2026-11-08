# ZCL Hub — Zero-Cloud LAN Ecosystem

<div align="center">

![ZCL Hub Logo](assets/logo.svg)

### Cổng thông tin & Web Studio cho Hệ sinh thái Zero-Cloud LAN
**Làm chủ mạng LAN · Không Cloud · Không Độ Trễ · Bảo Mật Tuyệt Đối**

[![Mã nguồn mở GPL-3.0](https://img.shields.io/badge/license-GPL--3.0-blue.svg)](LICENSE)
[![Zero-Dependency](https://img.shields.io/badge/dependencies-zero-brightgreen.svg)]()
[![PWA Ready](https://img.shields.io/badge/PWA-ready-purple.svg)]()

[🌐 Mở Trang Web](https://luffyreals.github.io/zcl-hub/) · [⚡ ZCL Web Studio](#-tính-năng-nổi-bật) · [📦 Các ứng dụng lõi](#-các-ứng-dụng-trong-hệ-sinh-thái)

</div>

---

## 💡 Giới thiệu

**ZCL (Zero-Cloud LAN)** là hệ sinh thái các ứng dụng truyền thông và điều khiển ngang hàng (Peer-to-Peer) hoạt động thuần túy trong mạng nội bộ (Wi-Fi / LAN), giải phóng người dùng khỏi sự phụ thuộc vào các dịch vụ đám mây trung gian:

* **Không qua máy chủ relay đám mây**: Dữ liệu đi thẳng giữa các máy trong phòng ở tốc độ tối đa của card mạng (100MB/s – 1GB/s).
* **Độ trễ tiệm cận 0**: Điều khiển máy tính từ xa với cảm giác chuột tức thì (0ms perceived lag).
* **Hoạt động 100% khi mất Internet**: Đứt cáp quang biển hay mất mạng diện rộng, các máy tính cạnh nhau vẫn làm việc bình thường.
* **Quyền riêng tư tuyệt đối**: Không tài khoản, không theo dõi (no telemetry), mã hóa trực tiếp TLS 1.3 / DTLS.

---

## 🌟 Các ứng dụng trong Hệ sinh thái

| Ứng dụng | Mục đích | Tốc độ / Độ trễ | Trạng thái | Mã nguồn |
| :--- | :--- | :--- | :--- | :--- |
| **ZCL Teleport** | Truyền file chục GB & đồng bộ Clipboard | 100MB/s – 1GB/s (Max LAN) | Thử nghiệm v0.1 | [GitHub](https://github.com/Nha-Cong-Dong/zero-cloud-lan-teleport) |
| **ZCL Remote** | Điều khiển máy tính từ xa 60 FPS @ 1080p | &lt; 50ms (LAN &lt; 5ms) | Alpha v0.1.0 | [GitHub](https://github.com/Luffyreals/zero-cloud-lan-remote) |
| **ZCL Cast** | Chiếu màn hình & âm thanh không dây | Full HD / 4K không nén | Sắp ra mắt | Roadmap |
| **ZCL Chat** | Tin nhắn & gọi thoại nội bộ bảo mật | Tức thì, không log máy chủ | Lên ý tưởng | Roadmap |
| **ZCL Sync** | Tự động đồng bộ thư mục 2 chiều | Thời gian thực (Realtime) | Lên ý tưởng | Roadmap |

---

## ✨ Điểm nổi bật của Website này

1. **Vừa là Landing Page, vừa là Web Studio (Dùng thử ngay)**:
   - Tích hợp **Teleport Web**: Thao tác kéo thả chia sẻ file mô phỏng và chuẩn bị sẵn module WebRTC DataChannel.
   - Tích hợp **Remote Web Viewer**: Mô phỏng màn hình điều khiển với Canvas, HUD đo đạc FPS / Latency thời gian thực, thử nghiệm công nghệ *Local Cursor Rendering*.
2. **Kiến trúc Zero-Dependency (Đúng tinh thần ZCL)**:
   - Thuần HTML5, CSS3, ES6+ Javascript.
   - Không cần `npm`, không cần `node_modules`, không bước build phức tạp.
   - Tải tức thì (&lt; 50ms), dung lượng siêu nhẹ.
3. **PWA (Progressive Web App)**:
   - Có sẵn `manifest.json` và Service Worker `sw.js`.
   - Có thể cài đặt trực tiếp vào màn hình chính (Desktop / Mobile) để sử dụng ngoại tuyến (Offline).
4. **Song ngữ hoàn chỉnh (Vietnamese / English)**:
   - Chuyển đổi 1-click tức thì không cần tải lại trang.
5. **Giao diện Dark Modern Tech**:
   - Hệ màu tối sâu (`#0a090d`), phối các điểm nhấn Neon Mint (`#85edca`), Lilac (`#cea3f3`), Pink (`#fdaab3`) đặc trưng của ZCL.

---

## 🚀 Xem thử trên máy (Local Preview)

Chỉ cần mở trực tiếp file `index.html` bằng bất kỳ trình duyệt nào:

```bash
# Hoặc chạy một web server tĩnh siêu nhanh bằng Python:
cd "hub"
python -m http.server 8000
```
Sau đó truy cập: `http://localhost:8000`

---

## 📤 Hướng dẫn đẩy lên GitHub cá nhân (@Luffyreals)

Trong thư mục `hub`, bạn có thể đẩy lên repo mới trên tài khoản GitHub của mình:

```bash
cd "C:\Users\Dell\Documents\NhaCongDong\Zero-Cloud LAN Hub\hub"

# 1. Thêm commit đầu tiên
git add .
git commit -m "feat: initial release of ZCL Hub ecosystem website and web studio"

# 2. Tạo repository trên GitHub cá nhân (ví dụ tên repo là zcl-hub hoặc zero-cloud-lan)
# 3. Liên kết remote và đẩy lên nhánh main:
git branch -M main
git remote add origin https://github.com/Luffyreals/zcl-hub.git
git push -u origin main
```

Sau khi đẩy lên, bạn vào:
**Repo Settings -> Pages -> Build and deployment -> Branch: `main` / `root` -> Save**.
Website sẽ được xuất bản tự động tại: `https://luffyreals.github.io/zcl-hub/`.

---

## ⚖️ Giấy phép

Phát hành theo giấy phép **GPL-3.0-or-later**. Xem chi tiết tại [LICENSE](LICENSE).  
Bản quyền © 2026 **Luffyreals** & **Nhà Cộng Đồng**.
