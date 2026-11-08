# Lộ trình phát triển các ứng dụng ZCL

Tài liệu này ghi nhận kế hoạch phát triển và mở rộng bộ ứng dụng ZCL trong thời gian tới.

---

## 🚀 Giai đoạn hiện tại (Hiện có)

* [x] **ZCL Teleport (v0.1.0)**:
  * Truyền file không giới hạn dung lượng với tốc độ tối đa qua Wi-Fi và dây LAN.
  * Tự động nhận diện các máy tính đang mở ứng dụng trong phòng.
  * Đồng bộ sao chép (Copy - Paste) văn bản và hình ảnh tức thì giữa 2 máy tính.
* [x] **ZCL Remote (v0.1.0-alpha)**:
  * Điều khiển máy tính từ xa siêu mượt qua mạng nội bộ.
  * Công nghệ phản hồi chuột tức thì không độ trễ.
  * Nút dừng khẩn cấp (Kill-switch) giúp máy được điều khiển luôn giữ quyền tự chủ.
* [x] **ZCL Hub Portal & Web Studio**:
  * Trang giới thiệu đa tab độc lập, giao diện Dark Modern Tech.
  * Mô phỏng dùng thử gửi file và điều khiển chuột ngay trên trình duyệt mà không cần cài đặt.
  * Hỗ trợ cài đặt ứng dụng độc lập chuẩn PWA chạy offline.

---

## 🔮 Kế hoạch sắp tới

### 1. ZCL Cast (Chiếu màn hình không dây)
* **Mục tiêu**: Chiếu trực tiếp màn hình máy tính lên TV, máy chiếu trong phòng họp hoặc màn hình phụ mà không cần cắm cáp HDMI.
* **Đặc điểm**: Giữ nguyên độ phân giải sắc nét và truyền kèm âm thanh chất lượng cao.

### 2. ZCL Chat (Nhắn tin nội bộ an toàn)
* **Mục tiêu**: Nhắn tin và gọi thoại nhanh giữa các máy tính trong cùng phòng làm việc hoặc trong gia đình.
* **Đặc điểm**: Dữ liệu chỉ tồn tại trong phiên làm việc, tự động biến mất khi đóng ứng dụng, không lưu log trên máy chủ.

### 3. ZCL Sync (Tự động đồng bộ thư mục)
* **Mục tiêu**: Giúp bạn luôn có tài liệu mới nhất trên cả hai máy tính (ví dụ: máy tính bàn tại phòng làm việc và laptop mang đi họp).
* **Đặc điểm**: Khi bạn lưu file ở máy này, ứng dụng sẽ tự động cập nhật sang máy kia qua Wi-Fi mà không cần phải cắm USB copy thủ công.

### 4. Mở rộng hỗ trợ hệ điều hành
* Dự kiến phát triển thêm phiên bản cho máy tính Mac (macOS), Linux và thiết bị di động (Android).

---

## 👤 Tác giả

Phát triển bởi **Nguyễn Hoàng Tùng** ([@Luffyreals](https://github.com/Luffyreals)).
Mã nguồn mở theo giấy phép **GPL-3.0**.
