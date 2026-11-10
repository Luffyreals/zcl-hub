# Lộ trình phát triển các ứng dụng ZCL

Tài liệu này ghi nhận kế hoạch phát triển và mở rộng bộ ứng dụng ZCL trong thời gian tới.

---

## Giai đoạn hiện tại (Hiện có)

* [x] **ZCL Teleport (v0.1.0)**:
  * Truyền file không giới hạn dung lượng với tốc độ tối đa qua Wi-Fi và dây LAN.
  * Tự động nhận diện các máy tính đang mở ứng dụng trong phòng.
  * Đồng bộ sao chép (Copy - Paste) văn bản và hình ảnh tức thì giữa 2 máy tính.
* [x] **ZCL Remote (v0.1.0-alpha)**:
  * Điều khiển máy tính từ xa siêu mượt qua mạng nội bộ.
  * Công nghệ phản hồi chuột tức thì không độ trễ.
  * Nút dừng khẩn cấp (Kill-switch) giúp máy được điều khiển luôn giữ quyền tự chủ.
* [x] **ZCL Mind (v0.1.0-alpha — Đang phát triển)**:
  * Trợ lý thấu hiểu cá nhân chạy 100% trên máy tính cá nhân.
  * Bản đồ thấu hiểu 6 chiều: hồ sơ, thói quen, lịch trình, mối quan hệ, tính cách, điểm mạnh/yếu.
  * Tối ưu chạy trực tiếp bằng bộ vi xử lý (CPU), không cần card đồ họa, 100% offline.
* [x] **ZCL Hub Portal & Web Studio**:
  * Trang giới thiệu đa tab độc lập, giao diện Dark Modern Tech.
  * Mô phỏng dùng thử gửi file và điều khiển chuột ngay trên trình duyệt mà không cần cài đặt.
  * Hỗ trợ cài đặt ứng dụng độc lập chuẩn PWA chạy offline.

---

## Kế hoạch phát triển ZCL Mind

### 1. Thu thập thông minh kết hợp
* **Mục tiêu**: Cung cấp bài trắc nghiệm / biểu mẫu nhập nhanh ban đầu, đồng thời tự động nhận biết và ghi nhớ thêm thói quen, lịch hẹn mới qua trò chuyện thường ngày.
* **Đặc điểm**: Dữ liệu lưu dưới dạng sổ tay cá nhân cục bộ, người dùng toàn quyền xem, sửa hoặc xóa.

### 2. Tra cứu chung trong mạng nội bộ
* **Mục tiêu**: Máy tính lưu trữ kho kiến thức cá nhân hoặc gia đình, các thiết bị khác trong phòng kết nối qua Wi-Fi chung để tra cứu và hỏi đáp.

### 3. Mở rộng hỗ trợ hệ điều hành
* Dự kiến phát triển thêm phiên bản cho máy tính Mac (macOS), Linux và thiết bị di động.

---

## Tác giả

Phát triển bởi **Nguyễn Hoàng Tùng** ([@Luffyreals](https://github.com/Luffyreals)).
Mã nguồn mở theo giấy phép **GPL-3.0**.
