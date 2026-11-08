# Hướng dẫn sử dụng ZCL Hub

Tài liệu này hướng dẫn bạn cách sử dụng các ứng dụng ZCL để truyền file siêu nhanh và điều khiển máy tính từ xa trong cùng phòng.

---

## 1. Yêu cầu trước khi bắt đầu

Để hai máy tính có thể kết nối với nhau, bạn chỉ cần:
* **Hệ điều hành**: Máy tính chạy Windows 10 hoặc Windows 11 (64-bit).
* **Kết nối mạng**: Cả hai chiếc máy tính cùng kết nối vào **chung một mạng Wi-Fi** trong phòng (hoặc cắm chung dây cáp mạng vào cùng một cục phát/router).
* **Không cần Internet**: Bạn không cần có mạng Internet ngoài. Kể cả khi mất mạng diện rộng hay đứt cáp, hai máy tính vẫn làm việc bình thường.

---

## 2. Cách tải và cài đặt

1. Mở trang web [ZCL Hub](https://luffyreals.github.io/zcl-hub/) và chọn tab **Tải về**.
2. Chọn phiên bản bạn muốn sử dụng:
   * **Bản cài đặt (.exe)**: Tự động cài vào máy tính, có icon ngoài màn hình chính để mở bất cứ lúc nào.
   * **Bản chạy ngay (.zip)**: Tải về giải nén ra là chạy được ngay, không cần cài đặt (rất tiện khi dùng máy ở văn phòng hoặc máy công cộng).
3. **Lưu ý trong lần đầu mở file**:
   * Nếu màn hình hiện bảng cảnh báo màu xanh của Windows (*Windows protected your PC*): Hãy bấm vào chữ **"More info" (Thông tin thêm)** rồi chọn **"Run anyway" (Vẫn chạy)**.
   * Khi Windows hỏi quyền truy cập mạng (*Windows Security Alert*): Hãy tích chọn ô **"Private networks" (Mạng riêng tư)** rồi bấm **Allow access (Cho phép truy cập)** để ứng dụng tìm thấy máy khác trong phòng.

---

## 3. Hướng dẫn sử dụng ZCL Teleport (Gửi nhận file)

**ZCL Teleport** giúp bạn gửi các file dung lượng lớn (video, file thiết kế, thư mục nén) giữa hai máy tính trong tích tắc.

### Các bước gửi file:
1. Mở ứng dụng ZCL Teleport trên cả hai chiếc máy tính.
2. Trên màn hình máy gửi, bạn sẽ thấy danh sách các máy tính đang mở ứng dụng trong phòng.
3. Kéo thả file hoặc thư mục cần gửi vào ô truyền file (hoặc bấm nút "Chọn file").
4. Bấm gửi. Thanh tiến trình sẽ hiển thị dung lượng và tốc độ gửi thực tế.
5. Khi gửi xong, file sẽ tự động nằm trong thư mục **Downloads (Tải về)** của máy nhận.

### Tính năng đồng bộ Copy - Paste:
* Khi hai máy đã kết nối, bạn chỉ cần bấm **Ctrl + C** (sao chép chữ hoặc hình ảnh) ở máy thứ nhất.
* Sang máy thứ hai, bấm **Ctrl + V** là nội dung sẽ được dán ngay lập tức.

---

## 4. Hướng dẫn sử dụng ZCL Remote (Điều khiển máy tính)

**ZCL Remote** cho phép bạn xem và điều khiển màn hình máy tính từ xa với độ mượt cao, chuột bấm ăn ngay không giật lag.

### Các bước điều khiển:
1. Mở ZCL Remote trên cả hai máy tính.
2. Máy muốn được điều khiển sẽ hiển thị một **Mã kết nối** ngắn (ví dụ: `8443` hoặc tên máy).
3. Trên máy muốn điều khiển, chọn tên máy hoặc nhập mã kết nối rồi bấm **Bắt đầu điều khiển**.
4. Màn hình của máy kia sẽ xuất hiện ngay trước mắt bạn. Bạn có thể di chuột, gõ bàn phím và làm việc y như đang ngồi trực tiếp trước máy đó.
5. **Nút dừng khẩn cấp (Kill-switch)**: Trên màn hình máy được điều khiển luôn có một nút nhỏ. Bất kỳ lúc nào bạn muốn dừng quyền kiểm soát, chỉ cần bấm nút này là phiên làm việc sẽ ngắt ngay lập tức.

---

## 5. Dùng thử trực tiếp trên trình duyệt (Web Studio)

Nếu chưa muốn tải phần mềm về máy, bạn có thể chuyển sang tab **Dùng thử trên Web** ngay trên trang web ZCL Hub:
* **Thử gửi file**: Thử kéo thả một file bất kỳ để quan sát cách phần mềm tính toán dung lượng và truyền nhận.
* **Thử di chuột điều khiển**: Di chuột vào khung màn hình máy tính giả lập để cảm nhận độ mượt mà.
* **Đo tốc độ Wi-Fi**: Bấm nút kiểm tra để xem tốc độ gửi file giữa các máy tính khi kết nối chung mạng.

---

## 6. Cài đặt trang web làm ứng dụng độc lập (PWA)

Trang web ZCL Hub hỗ trợ chuẩn PWA hiện đại:
* Trên trình duyệt Chrome hoặc Edge trên máy tính: Bấm vào biểu tượng cài đặt ở góc phải thanh địa chỉ (hoặc bấm nút **"Cài đặt ZCL Hub"** trên trang).
* Ứng dụng sẽ xuất hiện dưới dạng một cửa sổ riêng biệt không có thanh công cụ trình duyệt, mở nhanh và dùng thử được ngay cả khi ngắt kết nối mạng.
