# ZCL Hub — Hướng dẫn và Quy chuẩn Dự án (Gemini Context)

Tài liệu này chứa toàn bộ quy chuẩn, kiến trúc và nguyên tắc cốt lõi khi làm việc với dự án **ZCL Hub**.

---

## 📌 Tổng quan Dự án

* **Tên dự án**: ZCL Hub
* **Tác giả duy nhất**: **Nguyễn Hoàng Tùng** ([@Luffyreals](https://github.com/Luffyreals))
* **Mục tiêu**: Cổng thông tin và môi trường trải nghiệm trên Web (Web Studio) cho các ứng dụng mạng nội bộ P2P:
  * **ZCL Teleport**: Gửi nhận file siêu tốc (100MB/s – 1GB/s) & đồng bộ clipboard 2 chiều.
  * **ZCL Remote**: Điều khiển máy tính từ xa mượt mà, phản hồi tức thì, không giật lag.
  * **ZCL Mind**: Trợ lý thấu hiểu cá nhân, ghi nhớ thói quen & lịch trình chạy hoàn toàn trên máy.
* **Giấy phép**: GNU General Public License v3.0 (GPL-3.0).

---

## ⚠️ Các Nguyên tắc Bắt buộc (Strict Rules)

1. **Ngôn ngữ bình dân, KHÔNG dùng từ ngữ chuyên ngành**:
   * Tuyệt đối không nhồi nhét thuật ngữ kỹ thuật phức tạp như: `WebRTC DataChannel`, `mDNS (_zcl._tcp)`, `TLS 1.3 Direct`, `NVENC H.264`, `Opus 48kHz`, `subnet`, `telemetry`, `resumable chunking`...
   * Mọi văn bản giải thích phải thật dễ hiểu cho bất kỳ người dùng phổ thông nào đọc cũng có thể thao tác được ngay.
2. **Không so sánh và không nhắc đến phần mềm khác**:
   * Không nhắc tên hoặc so sánh với các ứng dụng khác như *TeamViewer, AnyDesk, UltraViewer*.
3. **Tuyệt đối không dùng cụm từ "Hệ sinh thái" / "Ecosystem"**:
   * Sử dụng các từ thay thế: *Bộ ứng dụng, Các sản phẩm, Danh mục chức năng*.
4. **Không dùng câu định danh dài dòng**:
   * Không thêm cụm từ: *"Bộ Ứng Dụng Mạng Nội Bộ Zero-Cloud LAN"*. Chỉ dùng tên ngắn gọn: **ZCL Hub**.
5. **Biểu tượng (Icon)**:
   * 100% sử dụng **vector SVG nét đơn tối giản** (`stroke-width: 1.8 - 2.0`).
   * Tuyệt đối không dùng các emoji mặc định hệ điều hành (⚡, 🖥️, 📦, 📁, 🛡️, ⬇️, 📲...).
6. **Kiến trúc giao diện chia Tab (Multi-Tab Portal)**:
   * Trang web chia thành 5 tab riêng biệt, không dồn tất cả nội dung vào 1 tab:
     * `tab-overview`: Tổng quan, 4 điểm nổi bật, thẻ chuyển nhanh.
     * `tab-apps`: Chi tiết các ứng dụng ZCL Teleport, ZCL Remote & ZCL Mind.
     * `tab-download`: Tải về bản cài đặt, bản chạy ngay và PWA.
     * `tab-studio`: Dùng thử kéo thả file, điều khiển chuột và đo tốc độ.
     * `tab-faq`: 3 bước sử dụng đơn giản & Hỏi đáp thường gặp.
   * Hỗ trợ URL hash (`#overview`, `#apps`, `#download`, `#studio`, `#faq`).
7. **Công nghệ không phụ thuộc (Zero-Dependency)**:
   * Thuần HTML5, CSS3 hiện đại, vanilla ES6+ JavaScript.
   * Không cài thêm npm, không node_modules, không build step.
   * Tương thích PWA (`manifest.json`, `sw.js` offline cache).

---

## Danh Sách Subagents & Quy Trình Làm Việc

Dự án cấu hình các subagents chuyên biệt tại thư mục `.agents/` gồm hai nhóm:

### 1. Nhóm Chuyên Gia Miền (Domain Specialists)

1. **`ui-ux-designer`** (`.agents/ui-ux-designer.md`):
   * Phụ trách giao diện Dark Modern Tech (`#09080c`, `#85edca`, `#cea3f3`, `#fdaab3`), hệ thống layout Bento Grid, hiệu ứng chuyển tab và responsive đa thiết bị.
2. **`lan-protocol-specialist`** (`.agents/lan-protocol-specialist.md`):
   * Phụ trách logic kết nối trực tiếp trong mạng nội bộ, tối ưu mô phỏng điều khiển màn hình từ xa, phản hồi chuột tức thì và công cụ đo tốc độ.
3. **`content-copywriter`** (`.agents/content-copywriter.md`):
   * Phụ trách biên soạn nội dung song ngữ (VI/EN) bình dân, thân thiện, kiểm soát để không xuất hiện từ ngữ chuyên ngành hay cụm từ bị cấm.
4. **`qa-tester`** (`.agents/qa-tester.md`):
   * Phụ trách kiểm thử khả năng chạy offline của PWA, kiểm tra chuyển tab, URL hash, liên kết tải về và tính tương thích trên mọi kích thước màn hình.

### 2. Nhóm Quy Trình Kỹ Thuật (Pipeline Agents)

| Agent | Vai trò | Sửa file? |
|---|---|---|
| **`truong-nhom`** | Lập kế hoạch thiết kế, chia việc, đặt tiêu chí xong; cuối cùng ra phán quyết ĐẠT / CHƯA ĐẠT | Không |
| **`hoi-lai`** | Phản biện kế hoạch trước khi sửa: kiểm tra nguy cơ lệch cấu trúc 5 tab, thiếu song ngữ VI/EN, hoặc vi phạm quy tắc từ ngữ | Không |
| **`lap-trinh`** | Thực hiện thay đổi trong `index.html`, `src/styles.css`, `src/app.js`, `sw.js`; chạy `node -c` và `tests/test_ui.py` | Có (`index.html`, `src/`, `sw.js`) |
| **`viet-test`** | Bổ sung kiểm thử tự động trong `tests/test_ui.py` từ đặc tả; không sửa mã nguồn trang web | Có (`tests/`) |
| **`soat-code`** | Soát `git diff` về quy tắc nghiêm ngặt (không emoji, không từ cấm), đồng bộ VI/EN, tương phản Sáng/Tối và PWA | Không |
| **`soat-tai-lieu`** | Soát `docs/`, `README.md`, `index.html`, `src/app.js` để thông tin các ứng dụng (Teleport, Remote, Mind) nhất quán | Không |

---

## Sơ Đồ Thư Mục Dự Án

```text
hub/
├── assets/               # Logo SVG và tài nguyên hình ảnh
│   └── logo.svg
├── docs/                 # Tài liệu hướng dẫn dự án
│   ├── README.md         # Tổng quan tài liệu
│   ├── user-guide.md     # Hướng dẫn sử dụng chi tiết
│   ├── architecture.md   # Nguyên lý hoạt động
│   ├── faq.md            # Hỏi đáp & xử lý sự cố
│   └── roadmap.md        # Lộ trình phát triển
├── src/                  # Toàn bộ mã nguồn giao diện và xử lý
│   ├── styles.css        # Dark Modern Tech CSS, responsive
│   └── app.js            # Xử lý tab, song ngữ (VI/EN), demo Web Studio
├── tests/                # Bộ kiểm thử tự động (test_ui.py, test-runner.html)
├── index.html            # Cấu trúc HTML5 chia 5 tab độc lập
├── 404.html              # Trang 404 tùy chỉnh
├── manifest.json         # Cấu hình PWA cài đặt ứng dụng
├── sw.js                 # Service Worker bộ nhớ đệm offline
├── .nojekyll             # Khai báo GitHub Pages
├── LICENSE               # Giấy phép GPL-3.0
├── README.md             # Tài liệu GitHub chuẩn
├── .gitignore            # Bỏ qua gemini.md, .gemini/, .agents/
├── gemini.md             # Quy chuẩn và chỉ dẫn cho AI Agent (ignored)
└── .agents/              # Cấu hình các Subagents chuyên biệt (ignored)
```
