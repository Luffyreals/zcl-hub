# ZCL Hub

<div align="center">

![ZCL Hub Logo](assets/logo.svg)

### Nhanh hơn · Mượt mà hơn · Hoàn toàn riêng tư
**Gửi nhận file dung lượng lớn và điều khiển máy tính tức thì qua mạng Wi-Fi chung**

[![Mã nguồn mở GPL-3.0](https://img.shields.io/badge/license-GPL--3.0-blue.svg)](LICENSE)
[![Zero-Dependency](https://img.shields.io/badge/dependencies-zero-brightgreen.svg)]()
[![PWA Ready](https://img.shields.io/badge/PWA-ready-purple.svg)]()
[![Platform](https://img.shields.io/badge/Windows-10%20%7C%2011-0078D6.svg)]()

[Mở Trang Web](https://luffyreals.github.io/zcl-hub/) · [Dùng thử trên Web](https://luffyreals.github.io/zcl-hub/#studio) · [Tải về ứng dụng](https://luffyreals.github.io/zcl-hub/#download)

</div>

---

## Điểm Nổi Bật

- **Gửi file siêu tốc:** Chuyển file ảnh, video, tài liệu hàng chục GB giữa 2 máy tính trong phòng chỉ mất vài giây.
- **Chuột bấm ăn ngay:** Điều khiển máy tính từ xa mượt mà như đang ngồi trước máy thật, không bị gián đoạn.
- **Không cần Internet:** Mất mạng hay đứt cáp quang biển vẫn dùng bình thường qua cục phát Wi-Fi chung.
- **Riêng tư tuyệt đối:** Dữ liệu truyền thẳng giữa 2 máy, không gửi lên bất kỳ máy chủ bên ngoài nào.

---

## Các Ứng Dụng

| Ứng dụng | Chức năng | Trạng thái | Tải về |
| :--- | :--- | :--- | :--- |
| **ZCL Teleport** | Gửi nhận file lớn và đồng bộ văn bản nhanh giữa 2 máy | Thử nghiệm v0.1 | [Tải về](https://luffyreals.github.io/zcl-hub/#download) |
| **ZCL Remote** | Điều khiển máy tính từ xa siêu mượt qua Wi-Fi | Thử nghiệm v0.1 | [Tải về](https://luffyreals.github.io/zcl-hub/#download) |
| **ZCL Cast** | Chiếu màn hình không dây lên TV hoặc máy chiếu | Đang phát triển | Sắp ra mắt |
| **ZCL Chat** | Nhắn tin và gọi thoại nội bộ an toàn | Lên ý tưởng | Sắp ra mắt |

---

## Tài Liệu Dự Án (Docs)

Toàn bộ tài liệu chi tiết được lưu trong thư mục [`docs/`](docs/README.md):
- [**Hướng dẫn sử dụng chi tiết**](docs/user-guide.md): Từng bước tải, cài đặt và kết nối hai máy tính.
- [**Nguyên lý hoạt động**](docs/architecture.md): Cách truyền file và điều khiển chuột mượt mà qua Wi-Fi chung.
- [**Hỏi đáp & Xử lý sự cố**](docs/faq.md): Tường lửa Windows, mạng riêng tư và mẹo đạt tốc độ cao nhất.
- [**Lộ trình phát triển**](docs/roadmap.md): Kế hoạch cho ZCL Cast, ZCL Chat và ZCL Sync.

---

## Cấu Trúc Repository

```text
hub/
├── assets/               # Hình ảnh và logo nhận diện ZCL
│   └── logo.svg
├── docs/                 # Thư mục tài liệu dự án
│   ├── README.md         # Tổng quan tài liệu
│   ├── user-guide.md     # Hướng dẫn sử dụng chi tiết
│   ├── architecture.md   # Nguyên lý hoạt động
│   ├── faq.md            # Hỏi đáp & xử lý sự cố
│   └── roadmap.md        # Lộ trình phát triển
├── src/                  # Mã nguồn giao diện và xử lý
│   ├── styles.css        # Giao diện Dark Modern Tech, tối ưu máy tính & điện thoại
│   └── app.js            # Xử lý chuyển tab, song ngữ (VI/EN) & bản dùng thử trên Web
├── index.html            # Trang chủ phân chia 5 tab trực quan, không dồn 1 trang
├── 404.html              # Trang 404 tùy chỉnh Dark Modern Tech cho GitHub Pages
├── manifest.json         # Cấu hình PWA để cài đặt ứng dụng vào máy
├── sw.js                 # Service Worker lưu trữ bộ nhớ đệm dùng offline
├── .nojekyll             # Tương thích máy chủ tĩnh GitHub Pages
├── LICENSE               # Giấy phép mã nguồn mở GPL-3.0
└── README.md             # Giới thiệu tổng quan dự án
```

---

## Xem Thử Trên Máy (Local Preview)

Chỉ cần mở trực tiếp file `index.html` bằng trình duyệt web hoặc mở qua web server nội bộ:

```bash
python -m http.server 8000
```
Sau đó truy cập địa chỉ: `http://localhost:8000`

---

## Hướng Dẫn Xuất Bản Lên GitHub (@Luffyreals)

Trong thư mục `hub`, bạn có thể đẩy lên repository GitHub cá nhân:

```bash
cd "C:\Users\Dell\Documents\NhaCongDong\Zero-Cloud LAN Hub\hub"

# 1. Tạo liên kết với repository của bạn trên GitHub
git remote add origin https://github.com/Luffyreals/zcl-hub.git

# 2. Đẩy lên nhánh main
git branch -M main
git push -u origin main
```

Sau khi đẩy mã nguồn lên GitHub:
1. Vào mục **Settings** của repository -> chọn thẻ **Pages**.
2. Tại phần **Build and deployment**, chọn Branch: `main` / `root` -> bấm **Save**.
3. Trang web sẽ tự động xuất bản tại: `https://luffyreals.github.io/zcl-hub/`.

---

## Tác Giả

Phát triển bởi **Nguyễn Hoàng Tùng** ([@Luffyreals](https://github.com/Luffyreals)).

---

## Giấy Phép

Dự án phát hành dưới giấy phép mã nguồn mở **GNU General Public License v3.0 (GPL-3.0)**. Xem tệp [LICENSE](LICENSE) để biết thêm chi tiết.
