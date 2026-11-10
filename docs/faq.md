# Câu hỏi thường gặp & Xử lý sự cố (FAQ & Troubleshooting)

---

## 1. Câu hỏi chung về sử dụng

### Q1: ZCL Hub có bắt buộc phải có kết nối Internet để hoạt động không?
**Trả lời**: Hoàn toàn không. ZCL Hub được thiết kế để hoạt động độc lập 100% trong mạng cục bộ. Chỉ cần hai máy tính kết nối chung vào một cục Wi-Fi hoặc cắm chung dây cáp mạng là có thể gửi nhận file và điều khiển nhau với tốc độ tối đa, kể cả khi dây cáp quang ra Internet bị đứt.

### Q2: Ứng dụng có miễn phí không? Có bị ngắt phiên hay quảng cáo không?
**Trả lời**: Hoàn toàn miễn phí 100% cho mọi nhu cầu sử dụng cá nhân và văn phòng. Ứng dụng không ngắt kết nối tự động sau một số phút nhất định, không hiển thị quảng cáo nag-screen và không bắt bạn phải nâng cấp gói dịch vụ.

### Q3: Dữ liệu của tôi có bị ai xem lén không?
**Trả lời**: Tuyệt đối an toàn. Dữ liệu chỉ đi thẳng trực tiếp giữa 2 chiếc máy tính trong phòng. Ứng dụng không có máy chủ lưu trữ trên đám mây, không yêu cầu tạo tài khoản và không theo dõi hành vi sử dụng của bạn.

---

## 2. Xử lý các tình huống thường gặp

### Tình huống 1: Hai máy tính mở ứng dụng nhưng không tìm thấy nhau
Nếu hai máy không tự động nhìn thấy tên của nhau, hãy kiểm tra các bước sau:
1. **Kiểm tra mạng Wi-Fi**: Đảm bảo cả hai máy đang kết nối vào **cùng một tên Wi-Fi** (tránh trường hợp một máy bắt sóng 2.4GHz của router nhà hàng xóm, một máy bắt router nhà mình).
2. **Kiểm tra tường lửa (Windows Firewall)**:
   * Vào **Settings (Cài đặt)** -> **Network & internet** -> kiểm tra mạng Wi-Fi đang để chế độ **Private network (Mạng riêng tư)** thay vì Public network.
   * Nếu trước đó bạn lỡ chọn chặn ứng dụng, hãy vào Windows Defender Firewall và cho phép ứng dụng truy cập qua mạng Private.
3. **Mạng Wi-Fi tại quán cà phê hoặc khách sạn**: Một số nơi công cộng bật tính năng chặn các máy tính nói chuyện với nhau (*Client Isolation / AP Isolation*). Trong trường hợp này, bạn chỉ cần cắm trực tiếp một sợi dây mạng giữa 2 máy (hoặc một máy phát Wi-Fi Hotspot cho máy kia bắt vào) là dùng được ngay lập tức.

### Tình huống 2: Windows hiển thị cảnh báo bảo vệ khi mở file lần đầu
* Đây là cơ chế bảo vệ mặc định của Windows SmartScreen khi phát hiện một file mới tải về từ web mà chưa có chữ ký số doanh nghiệp đắt tiền từ Microsoft.
* **Cách mở**: Bấm vào dòng chữ **"More info" (Thông tin thêm)** -> sau đó bấm **"Run anyway" (Vẫn chạy)**. Ứng dụng hoàn toàn sạch và an toàn tuyệt đối.

### Tình huống 3: Làm sao để đạt tốc độ truyền file nhanh nhất?
* **Dùng dây mạng LAN**: Cắm dây mạng trực tiếp vào cổng mạng trên máy tính sẽ cho tốc độ kịch trần (từ 100 MB/s đến 280 MB/s, gửi 10 GB chỉ mất khoảng 30 giây đến 1 phút).
* **Dùng Wi-Fi**: Hãy đảm bảo hai máy ngồi gần cục phát Wi-Fi và kết nối vào băng tần 5GHz để đạt tốc độ mượt mà nhất.

---

## 3. Bản quyền & Đóng góp

* **Tác giả dự án**: Nguyễn Hoàng Tùng ([@Luffyreals](https://github.com/Luffyreals))
* **Giấy phép**:
  * **ZCL Hub & ZCL Teleport**: Mã nguồn mở tự do theo giấy phép **GPL-3.0**.
  * **ZCL Remote & ZCL Mind**: Phần mềm miễn phí, độc quyền thuộc bản quyền của Nguyễn Hoàng Tùng.
