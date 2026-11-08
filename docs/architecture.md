# Nguyên lý hoạt động của ZCL Hub

Tài liệu này giải thích cách ZCL Hub đạt được tốc độ truyền file vượt trội và khả năng điều khiển máy tính mượt mà mà không phụ thuộc vào mạng Internet.

---

## 1. Sự khác biệt giữa truyền qua Internet và truyền qua mạng Wi-Fi nội bộ

### Cách truyền thống (Qua máy chủ Internet):
* Khi bạn gửi file hoặc điều khiển máy tính qua các phần mềm thông thường, toàn bộ dữ liệu phải:
  1. Tải từ máy tính của bạn lên một máy chủ đặt trên đám mây (thường ở nước ngoài).
  2. Máy chủ xử lý và gửi ngược trở lại máy tính thứ hai (ngồi ngay cạnh bạn).
* **Nhược điểm**: Bị giới hạn bởi tốc độ gói cước Internet, dễ bị đơ lag khi mạng chập chờn, và có nguy cơ lộ lọt dữ liệu bí mật lên máy chủ bên ngoài.

### Cách thức của ZCL Hub (Ngang hàng trong phòng):
* ZCL Hub kết nối trực tiếp hai máy tính qua sóng Wi-Fi hoặc dây cáp mạng trong phòng:
  1. Máy tính gửi truyền trực tiếp gói tin sang cục phát Wi-Fi/Switch trong phòng.
  2. Cục phát chuyển ngay lập tức đến máy tính nhận.
* **Ưu điểm**:
  * Tốc độ kịch trần theo khả năng của card mạng (thường từ 100 MB/s đến 1 GB/s).
  * Độ trễ cực thấp, chuột bấm ăn ngay.
  * Hoạt động 100% độc lập khi mất mạng Internet.
  * Dữ liệu hoàn toàn riêng tư, không rời khỏi phòng của bạn.

---

## 2. Cách hai máy tính tự tìm thấy nhau

Bạn không cần phải nhớ địa chỉ số phức tạp hay đăng ký tài khoản:
1. Khi bạn mở ZCL Teleport hoặc ZCL Remote, ứng dụng sẽ gửi một tín hiệu chào hỏi nhẹ nhàng trong mạng Wi-Fi nội bộ.
2. Các máy tính khác trong phòng đang mở ứng dụng sẽ nghe thấy tín hiệu này và hiển thị tên máy lên màn hình của nhau.
3. Khi bạn bấm kết nối, hai máy sẽ tự động tạo một đường truyền riêng được bảo vệ để bắt đầu gửi file hoặc điều khiển.

---

## 3. Vì sao điều khiển chuột trên ZCL Remote lại không bị trễ?

Khi điều khiển máy tính từ xa, cảm giác khó chịu nhất là khi bạn di chuột nhưng con trỏ trên màn hình lại bị chậm lại vài phần mười giây (giật lag):
* **Giải pháp của ZCL Remote**: Con trỏ chuột được vẽ và phản hồi ngay lập tức trên máy tính bạn đang cầm lái với tốc độ của phần cứng, không cần phải chờ hình ảnh từ máy kia truyền về.
* Nhờ vậy, cảm giác di chuột, cuộn trang và bấm nút mượt mà hệt như bạn đang ngồi trực tiếp trước chiếc máy tính đó.

---

## 4. Bảo mật và Quyền làm chủ dữ liệu

* **Bảo mật tuyệt đối**: Toàn bộ luồng dữ liệu truyền giữa hai máy tính được mã hóa an toàn. Người ngoài cùng mạng Wi-Fi không thể xem trộm được nội dung file hay màn hình của bạn.
* **Không lưu vết**: Ứng dụng không ghi log, không lưu trữ lịch sử lên bất kỳ máy chủ nào. Khi bạn tắt ứng dụng, mọi kết nối kết thúc hoàn toàn.
* **Quyền kiểm soát thuộc về bạn**: Máy được điều khiển luôn có quyền ngắt kết nối tức thì bất cứ lúc nào bằng nút dừng khẩn cấp trên màn hình.
