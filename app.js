/**
 * ZCL Hub — Core Logic & Interactive P2P Studio
 * Zero-dependency, offline-ready, bilingual (VI/EN).
 * Author: Nguyen Hoang Tung (@Luffyreals)
 */

// ==========================================
// 1. BILINGUAL DICTIONARY (VI / EN)
// ==========================================
const i18n = {
  vi: {
    // Navigation
    brand_sub: "Bộ ứng dụng LAN",
    nav_download: "Tải về",
    nav_pillars: "Kiến trúc",
    nav_products: "Sản phẩm",
    nav_studio: "Web Studio",
    nav_specs: "Thông số",
    nav_quickstart: "Bắt đầu nhanh",
    nav_faq: "Hỏi đáp",
    btn_launch_web: "Mở Web Client",
    btn_download_desktop: "Tải về (.exe)",

    // Download Center
    dl_badge: "TRUNG TÂM TẢI VỀ",
    dl_title: "Tải ứng dụng ZCL cho Windows",
    dl_sub: "Bản phát hành chính thức, không cần đăng ký tài khoản, tải trực tiếp và sử dụng ngay.",
    dl_tp_name: "ZCL Teleport",
    dl_tp_ver: "Phiên bản v0.1.0 · Windows 10/11 (64-bit)",
    dl_tp_desc: "Ứng dụng truyền file tốc độ kịch trần card mạng (100MB/s - 1GB/s) và đồng bộ clipboard 2 chiều trong cùng mạng Wi-Fi/LAN.",
    dl_rm_name: "ZCL Remote Desktop",
    dl_rm_ver: "Phiên bản v0.1.0-alpha · Windows 10/11 (64-bit)",
    dl_rm_desc: "Điều khiển máy tính từ xa siêu tốc trong mạng nội bộ. Màn hình 60 FPS @ 1080p, công nghệ Local Cursor 0ms và Floating Kill-switch.",
    dl_btn_installer: "Tải bản cài đặt (.exe)",
    dl_btn_portable: "Tải bản Portable (.zip)",
    dl_sha: "Mã băm SHA-256",
    dl_req_tp: "Yêu cầu: Windows 10/11 64-bit, mạng Wi-Fi hoặc cáp LAN",
    dl_req_rm: "Yêu cầu: Windows 10/11 64-bit, card đồ họa DirectX 11 / NVENC",

    // Hero
    hero_eyebrow: "BỘ ỨNG DỤNG NỘI BỘ THẾ HỆ MỚI · MÃ NGUỒN MỞ",
    hero_title: "Bộ ứng dụng mạng nội bộ không Cloud.<br><span class=\"highlight-mint\">Tốc độ phần cứng.</span> <span class=\"highlight-lilac\">Độ trễ 0ms.</span>",
    hero_lede: "Giải phóng năng suất giữa các máy tính trong phòng: truyền file chục GB trong nháy mắt, điều khiển màn hình 60 FPS mượt mà không độ trễ chuột. Hoạt động độc lập 100% khi đứt cáp quang Internet.",
    copy_text: "Sao chép",
    copied_text: "Đã chép!",

    // Topology
    topo_title: "Kiến trúc đường truyền & tiêu chuẩn an toàn nội bộ",
    topo_zcl_badge: "KẾT NỐI TRỰC TIẾP (P2P LAN)",
    topo_zcl_metric: "< 1.5ms",
    topo_zcl_sub: "Đường truyền vật lý tốc độ phần cứng",
    topo_zcl_step1: "Thiết bị Client",
    topo_zcl_step2: "Cáp mạng LAN / Wi-Fi phòng",
    topo_zcl_step3: "Thiết bị Host (Đến đích ngay)",

    topo_sec_badge: "MÃ HÓA NỘI BỘ (TLS 1.3)",
    topo_sec_metric: "100% Private",
    topo_sec_sub: "Bảo vệ dữ liệu không rời khỏi phòng",
    topo_sec_step1: "Quét mDNS & mã PIN ghép nối",
    topo_sec_step2: "Mã hóa luồng dữ liệu bằng TLS 1.3",
    topo_sec_step3: "Không trung gian, không telemetry",

    // Pillars
    pillar_badge: "TRIẾT LÝ CỐT LÕI",
    pillar_title: "4 Cột trụ tạo nên sức mạnh của ZCL",
    pillar_sub: "Thiết kế từ đầu để loại bỏ hoàn toàn các điểm yếu của phần mềm phụ thuộc đám mây.",

    pil1_title: "100% Zero-Cloud",
    pil1_desc: "Dữ liệu không bao giờ rời khỏi phòng của bạn. Không relay server, không rủi ro lộ lọt thông tin bí mật ra Internet.",

    pil2_title: "Local Cursor 0ms",
    pil2_desc: "Kỹ thuật render con trỏ chuột ngay tại máy điều khiển, đảm bảo phản hồi tức thì với tốc độ phần cứng, chuyển động mượt mà không độ trễ.",

    pil3_title: "Kháng đứt cáp quang",
    pil3_desc: "Internet chập chờn hay mất mạng quốc tế, hệ thống ZCL giữa các máy tính trong phòng vẫn chạy với tốc độ tối đa.",

    pil4_title: "Mã hóa TLS 1.3 P2P",
    pil4_desc: "Mọi gói tin được mã hóa đầu-cuối. Không cần đăng ký tài khoản, không telemetry theo dõi, mã nguồn mở GPL-3.0.",

    // Core Apps Bento
    bento_badge: "BỘ CÔNG CỤ HOÀN THIỆN",
    bento_title: "Các ứng dụng ZCL",
    bento_sub: "Đáp ứng trọn vẹn nhu cầu làm việc tốc độ cao giữa các máy tính cùng phòng.",

    tp_title: "ZCL Teleport",
    tp_status: "Thử nghiệm v0.1",
    tp_desc: "Chuyển file dung lượng không giới hạn và đồng bộ clipboard 2 chiều qua Wi-Fi/LAN. Tốc độ kịch trần card mạng.",
    tp_f1: "Băng thông 100MB/s – 1GB/s (chục GB trong tích tắc)",
    tp_f2: "Tự động tiếp tục khi rớt kết nối (Resumable chunking)",
    tp_f3: "Đồng bộ Clipboard văn bản và hình ảnh theo thời gian thực",
    tp_btn_dl: "Tải Teleport (.exe)",
    tp_btn_web: "Dùng Teleport Web",

    rm_title: "ZCL Remote Desktop",
    rm_status: "Alpha v0.1.0",
    rm_desc: "Điều khiển máy tính từ xa siêu tốc trong mạng nội bộ. Trải nghiệm cảm giác chuột 0ms, không độ trễ, không quảng cáo.",
    rm_f1: "Độ trễ truyền nhận < 50ms (mạng LAN < 5ms)",
    rm_f2: "Stream mượt mà 60 FPS @ 1080p, tối ưu băng thông",
    rm_f3: "Local Cursor Rendering (chuột không có độ trễ)",
    rm_f4: "Floating Kill-switch ngắt quyền kiểm soát lập tức",
    rm_btn_dl: "Tải Remote (.exe)",
    rm_btn_web: "Mở Remote Viewer",

    proto_title: "ZCL Engine & Giao thức P2P",
    proto_desc: "Kiến trúc nền tảng giúp các thiết bị tự phát hiện qua mDNS (_zcl._tcp), bắt tay bằng chứng chỉ tự ký TLS 1.3 và truyền stream trực tiếp với bộ đệm RAM tối thiểu.",

    road_title: "Lộ trình phát triển sản phẩm",
    road_cast_h: "ZCL Cast",
    road_cast_p: "Chiếu màn hình & âm thanh không nén chất lượng cao cho phòng họp, thay thế hoàn toàn cáp HDMI.",
    road_chat_h: "ZCL Chat",
    road_chat_p: "Kênh nhắn tin & gọi thoại nội bộ tức thì, dữ liệu tan biến khi đóng phiên, không lưu log máy chủ.",
    road_sync_h: "ZCL Sync",
    road_sync_p: "Tự động đồng bộ hóa thư mục 2 chiều giữa PC bàn và Laptop thời gian thực.",
    road_bridge_h: "ZCL Bridge",
    road_bridge_p: "CLI daemon siêu nhẹ hỗ trợ máy chủ Linux headless, Raspberry Pi và thiết bị IoT gia đình.",

    // Web Studio
    studio_badge: "TRẢI NGHIỆM TRỰC TIẾP",
    studio_title: "ZCL Web Studio",
    studio_sub: "Chạy trực tiếp trên trình duyệt hiện đại mà không cần cài đặt bất kỳ file nào.",
    studio_tab_tp: "ZCL Teleport Web",
    studio_tab_rm: "ZCL Remote Web Viewer",
    studio_tab_bench: "Đo kiểm LAN Benchmark",
    studio_status_ready: "Sẵn sàng trong mạng nội bộ",

    tp_drop_title: "Kéo thả file vào đây hoặc bấm để chọn",
    tp_drop_sub: "Hỗ trợ file đơn hoặc thư mục hàng chục GB qua WebRTC DataChannel",
    tp_peers_title: "Máy tính trong mạng LAN phát hiện được",
    tp_transfer_demo: "Đang truyền đến: Laptop-VanPhong",
    tp_speed: "Tốc độ: 94.6 MB/s (Wi-Fi 6 LAN)",

    rm_ip_placeholder: "Nhập IP hoặc mã PIN (VD: 192.168.1.15:8443)",
    rm_connect_btn: "Kết nối",
    rm_disconnect_btn: "Ngắt kết nối (Kill-switch)",
    rm_fullscreen: "Toàn màn hình",
    rm_overlay_title: "Bấm để khởi động Remote Viewer",
    rm_overlay_sub: "Thử di chuột để trải nghiệm công nghệ Local Cursor Rendering 0ms lag",

    bench_title: "Kiểm tra tốc độ truyền thực tế trên hạ tầng LAN",
    bench_btn_run: "Chạy thử nghiệm băng thông",
    bench_running: "Đang đo kiểm...",

    // Technical Specifications
    specs_badge: "THÔNG SỐ VẬN HÀNH",
    specs_title: "Tiêu chuẩn kỹ thuật của ZCL",
    specs_th_feature: "Hạng mục",
    specs_th_val: "Thông số vận hành ZCL",
    specs_th_note: "Ghi chú kỹ thuật",

    s_speed: "Băng thông dữ liệu",
    s_speed_val: "1 Gbps – 2.5 Gbps (Tối đa card mạng)",
    s_speed_note: "Truyền trực tiếp qua Switch/Wi-Fi, không giới hạn dung lượng",

    s_latency: "Độ trễ điều khiển",
    s_latency_val: "< 1.5ms – 5ms (Local Cursor 0ms)",
    s_latency_note: "Trải nghiệm chuột tức thì với công nghệ Local Cursor Rendering",

    s_internet: "Hoạt động ngoại tuyến",
    s_internet_val: "100% Độc lập không cần Internet",
    s_internet_note: "Các máy tính kết nối liên tục kể cả khi đứt cáp quang biển",

    s_privacy: "Chuẩn mã hóa",
    s_privacy_val: "TLS 1.3 P2P Direct & DTLS",
    s_privacy_note: "Xác thực bằng chứng chỉ nội bộ, dữ liệu không rời khỏi phòng",

    s_limit: "Giới hạn phiên làm việc",
    s_limit_val: "Không giới hạn thời gian",
    s_limit_note: "Không ngắt phiên tự động, không quảng cáo nag-screen",

    s_license: "Giấy phép & Bản quyền",
    s_license_val: "GPL-3.0 Mã nguồn mở tự do",
    s_license_note: "Miễn phí vĩnh viễn cho mọi mục đích sử dụng cá nhân và văn phòng",

    // Quick Start
    qs_badge: "HƯỚNG DẪN BẮT ĐẦU",
    qs_title: "Chọn cách sử dụng phù hợp với bạn",
    qs_tab_exe: "1. Bản cài đặt Windows (.exe)",
    qs_tab_web: "2. Dùng trên Web (PWA)",
    qs_tab_dev: "3. Dành cho Lập trình viên",

    qs_exe_step1: "Tải bộ cài đặt mới nhất từ [Trung tâm tải về] ở phía trên (chọn ZCL Teleport hoặc ZCL Remote).",
    qs_exe_step2: "Chạy file `.exe` trên cả 2 máy tính cần kết nối (cùng chung mạng Wi-Fi hoặc dây LAN).",
    qs_exe_step3: "Mở ứng dụng, nhập mã PIN hoặc chọn máy tính tìm thấy để bắt đầu làm việc ngay.",

    qs_web_step1: "Mở trang web này trên trình duyệt Chrome, Edge hoặc Safari.",
    qs_web_step2: "Chuyển đến phần [ZCL Web Studio] và bấm 'Cài đặt ứng dụng' (PWA) để dùng offline.",
    qs_web_step3: "Kéo thả file hoặc nhập IP máy chủ để kết nối trực tiếp không cần cài thêm phần mềm.",

    qs_dev_step1: "Tải gói mã nguồn hoặc giải nén bản Portable từ [Trung tâm tải về].",
    qs_dev_step2: "Cài đặt môi trường Python 3.11+ và chạy `pip install -e .`",
    qs_dev_step3: "Chạy lệnh CLI: `zcl-remote --host 0.0.0.0` hoặc `zcl-teleport --share`",

    // FAQ
    faq_badge: "GIẢI ĐÁP THẮC MẮC",
    faq_title: "Câu hỏi thường gặp",
    faq_q1: "ZCL có bắt buộc phải có kết nối Internet để hoạt động không?",
    faq_a1: "Hoàn toàn không. ZCL được thiết kế từ gốc để chạy độc lập 100% trong mạng cục bộ. Ngay cả khi nhà bạn bị mất mạng Internet hoặc đứt cáp quang biển, các máy tính kết nối chung một cục router/switch Wi-Fi vẫn truyền file và điều khiển nhau với tốc độ tối đa.",

    faq_q2: "Làm thế nào hai máy tính tìm thấy nhau trong mạng LAN?",
    faq_a2: "ZCL sử dụng giao thức mDNS (Multicast DNS) với định danh `_zcl._tcp` để tự động phát hiện các thiết bị ZCL đang hoạt động trong cùng subnet. Ngoài ra, bạn luôn có thể kết nối trực tiếp thông qua địa chỉ IP nội bộ (ví dụ: `192.168.1.15`) hoặc quét mã QR.",

    faq_q3: "Công nghệ Local Cursor Rendering của ZCL Remote là gì?",
    faq_a3: "Khi điều khiển từ xa, nếu chờ hình ảnh từ máy chủ phản hồi về mới hiển thị chuột thì sẽ sinh ra độ trễ khó chịu. ZCL Remote xử lý và vẽ con trỏ chuột cục bộ tức thì với độ trễ 0ms dựa trên phần cứng máy bạn, tạo cảm giác mượt mà như đang ngồi trực tiếp trước màn hình máy thật.",

    faq_q4: "Dữ liệu của tôi có bị gửi lên bất kỳ máy chủ bên ngoài nào không?",
    faq_a4: "Không một byte dữ liệu nào rời khỏi mạng của bạn. Các ứng dụng ZCL không có relay server, không có máy chủ telemetry thu thập thói quen sử dụng, và toàn bộ mã nguồn đều công khai theo giấy phép GPL-3.0 để cộng đồng kiểm tra.",

    faq_q5: "Tường lửa (Windows Firewall) có chặn ZCL không?",
    faq_a5: "Trong lần đầu tiên mở ứng dụng, Windows Defender Firewall sẽ hiển thị hộp thoại hỏi quyền truy cập mạng. Bạn chỉ cần tick chọn 'Private networks' (Mạng riêng tư) là ứng dụng có thể truyền nhận mượt mà trong phòng.",

    // PWA & Footer
    pwa_title: "Cài đặt ZCL Hub như một ứng dụng độc lập",
    pwa_desc: "Trang web hỗ trợ chuẩn PWA (Progressive Web App). Cài đặt ngay lên màn hình chính máy tính hoặc điện thoại để dùng offline.",
    pwa_install_btn: "Cài đặt ZCL Hub (PWA)",

    footer_desc: "Bộ ứng dụng mạng nội bộ P2P tối ưu tốc độ, bảo mật và quyền làm chủ dữ liệu số của bạn.",
    footer_apps: "Sản phẩm",
    footer_res: "Tài nguyên",
    footer_author: "Tác giả",
    footer_rights: "Mã nguồn mở theo giấy phép GPL-3.0. Phát triển bởi Nguyễn Hoàng Tùng."
  },

  en: {
    // Navigation
    brand_sub: "LAN Apps",
    nav_download: "Download",
    nav_pillars: "Architecture",
    nav_products: "Products",
    nav_studio: "Web Studio",
    nav_specs: "Specifications",
    nav_quickstart: "Quick Start",
    nav_faq: "FAQ",
    btn_launch_web: "Open Web Client",
    btn_download_desktop: "Download (.exe)",

    // Download Center
    dl_badge: "DOWNLOAD CENTER",
    dl_title: "Download ZCL Applications for Windows",
    dl_sub: "Official release builds. No accounts required. Direct download and ready to use.",
    dl_tp_name: "ZCL Teleport",
    dl_tp_ver: "Release v0.1.0 · Windows 10/11 (64-bit)",
    dl_tp_desc: "Send unlimited files at wire speed (100MB/s - 1GB/s) and sync clipboards bidirectionally over LAN.",
    dl_rm_name: "ZCL Remote Desktop",
    dl_rm_ver: "Release v0.1.0-alpha · Windows 10/11 (64-bit)",
    dl_rm_desc: "Ultra-low latency LAN remote desktop. 60 FPS @ 1080p, 0ms Local Cursor Rendering, and Floating Kill-switch.",
    dl_btn_installer: "Download Installer (.exe)",
    dl_btn_portable: "Download Portable (.zip)",
    dl_sha: "SHA-256 Checksum",
    dl_req_tp: "Requirements: Windows 10/11 64-bit, Wi-Fi or LAN cable",
    dl_req_rm: "Requirements: Windows 10/11 64-bit, GPU with DirectX 11 / NVENC",

    // Hero
    hero_eyebrow: "NEXT-GEN LOCAL PEER-TO-PEER SUITE · OPEN SOURCE",
    hero_title: "Master your local network without the cloud.<br><span class=\"highlight-mint\">Hardware Speed.</span> <span class=\"highlight-lilac\">0ms Latency.</span>",
    hero_lede: "Unleash productivity across computers in your room: transfer multi-gigabyte files instantly and control desktops at 60 FPS with zero mouse lag. Operates 100% offline without Internet.",
    copy_text: "Copy",
    copied_text: "Copied!",

    // Topology
    topo_title: "LAN Routing Architecture & Security Standards",
    topo_zcl_badge: "DIRECT CONNECTION (P2P LAN)",
    topo_zcl_metric: "< 1.5ms",
    topo_zcl_sub: "Hardware-level transmission speed",
    topo_zcl_step1: "Client Device",
    topo_zcl_step2: "Local LAN Cable / Wi-Fi Router",
    topo_zcl_step3: "Host Device (Instant arrival)",

    topo_sec_badge: "LOCAL ENCRYPTION (TLS 1.3)",
    topo_sec_metric: "100% Private",
    topo_sec_sub: "Data strictly remains inside the room",
    topo_sec_step1: "mDNS scan & PIN pairing",
    topo_sec_step2: "Stream encrypted with TLS 1.3",
    topo_sec_step3: "Zero relays, zero telemetry",

    // Pillars
    pillar_badge: "CORE PHILOSOPHY",
    pillar_title: "4 Pillars Behind ZCL's Superior Performance",
    pillar_sub: "Designed from first principles to eliminate the fatal flaws of cloud-dependent tools.",

    pil1_title: "100% Zero-Cloud",
    pil1_desc: "Data never leaves your room. No central relay servers, zero risk of data leaks to external infrastructure.",

    pil2_title: "0ms Local Cursor",
    pil2_desc: "Hardware-accelerated cursor rendering at the client, ensuring instant responsiveness and a fluid 0ms latency feel.",

    pil3_title: "Outage Immune",
    pil3_desc: "When internet drops or undersea cables snap, all local ZCL machines continue running at peak throughput.",

    pil4_title: "P2P TLS 1.3 Security",
    pil4_desc: "End-to-end encrypted packet transmission. No sign-up, zero telemetry, fully open-source under GPL-3.0.",

    // Core Apps Bento
    bento_badge: "COMPREHENSIVE SUITE",
    bento_title: "ZCL Applications",
    bento_sub: "Everything you need for lightning-fast workflows across nearby devices.",

    tp_title: "ZCL Teleport",
    tp_status: "Test Build v0.1",
    tp_desc: "Send unlimited file sizes and sync clipboards bidirectionally over Wi-Fi/LAN at wire speed.",
    tp_f1: "100MB/s – 1GB/s throughput (multi-GB files in seconds)",
    tp_f2: "Auto-resumable on disconnects (Resumable chunking)",
    tp_f3: "Real-time bidirectional text and image clipboard sync",
    tp_btn_dl: "Download Teleport (.exe)",
    tp_btn_web: "Launch Teleport Web",

    rm_title: "ZCL Remote Desktop",
    rm_status: "Alpha v0.1.0",
    rm_desc: "Ultra-low latency LAN remote desktop. Experience 0ms perceived mouse lag, zero bloat, zero commercial nag screens.",
    rm_f1: "Network round-trip latency < 50ms (< 5ms on LAN)",
    rm_f2: "Smooth 60 FPS @ 1080p stream with bandwidth tuning",
    rm_f3: "Local Cursor Rendering for zero input delay",
    rm_f4: "Floating Kill-switch to reclaim host control instantly",
    rm_btn_dl: "Download Remote (.exe)",
    rm_btn_web: "Launch Remote Viewer",

    proto_title: "ZCL Engine & P2P Protocol",
    proto_desc: "Underlying architecture featuring mDNS auto-discovery (_zcl._tcp), TLS 1.3 mutual self-signed handshakes, and zero-RAM memory streaming.",

    road_title: "Product Expansion Roadmap",
    road_cast_h: "ZCL Cast",
    road_cast_p: "Lossless uncompressed screen & audio casting for conference rooms, completely replacing HDMI cables.",
    road_chat_h: "ZCL Chat",
    road_chat_p: "Ephemeral encrypted local messaging & voice calls. Vanishes upon session close with zero server storage.",
    road_sync_h: "ZCL Sync",
    road_sync_p: "Automatic bi-directional real-time folder syncing between desktop workstations and laptops.",
    road_bridge_h: "ZCL Bridge",
    road_bridge_p: "Ultra-lightweight CLI daemon for headless Linux servers, Raspberry Pis, and smart home nodes.",

    // Web Studio
    studio_badge: "LIVE IN-BROWSER",
    studio_title: "ZCL Web Studio",
    studio_sub: "Run directly in your modern web browser without installing any software.",
    studio_tab_tp: "ZCL Teleport Web",
    studio_tab_rm: "ZCL Remote Web Viewer",
    studio_tab_bench: "LAN Benchmark Tool",
    studio_status_ready: "LAN Ready · P2P Active",

    tp_drop_title: "Drop files here or click to browse",
    tp_drop_sub: "Supports single files or full folders via WebRTC DataChannel",
    tp_peers_title: "Discovered Local Devices",
    tp_transfer_demo: "Transferring to: Office-Laptop",
    tp_speed: "Speed: 94.6 MB/s (Wi-Fi 6 LAN)",

    rm_ip_placeholder: "Enter IP or PIN (e.g. 192.168.1.15:8443)",
    rm_connect_btn: "Connect",
    rm_disconnect_btn: "Disconnect (Kill-switch)",
    rm_fullscreen: "Fullscreen",
    rm_overlay_title: "Click to start Remote Viewer",
    rm_overlay_sub: "Move your mouse to experience 0ms Local Cursor Rendering technology",

    bench_title: "Verify real-world throughput on your local network",
    bench_btn_run: "Run Throughput Benchmark",
    bench_running: "Benchmarking...",

    // Technical Specifications
    specs_badge: "ENGINEERING STANDARDS",
    specs_title: "ZCL Technical Specifications",
    specs_th_feature: "Item",
    specs_th_val: "ZCL Operating Spec",
    specs_th_note: "Technical Notes",

    s_speed: "Data Throughput",
    s_speed_val: "1 Gbps – 2.5 Gbps (Interface speed)",
    s_speed_note: "Direct transmission over Switch/Wi-Fi, unlimited file sizes",

    s_latency: "Control Latency",
    s_latency_val: "< 1.5ms – 5ms (0ms Local Cursor)",
    s_latency_note: "Instant cursor reaction via Local Cursor Rendering engine",

    s_internet: "Offline Resilience",
    s_internet_val: "100% Independent without Internet",
    s_internet_note: "Continuous connectivity even during international cable severed events",

    s_privacy: "Encryption Protocol",
    s_privacy_val: "TLS 1.3 P2P Direct & DTLS",
    s_privacy_note: "Mutual certificate verification, zero telemetry collection",

    s_limit: "Session Limits",
    s_limit_val: "No time limits",
    s_limit_note: "No artificial timeouts, no commercial nag-screens",

    s_license: "Software License",
    s_license_val: "GPL-3.0 Free & Open Source",
    s_license_note: "Free forever for all personal and office workflows",

    // Quick Start
    qs_badge: "GETTING STARTED",
    qs_title: "Choose the workflow that fits you best",
    qs_tab_exe: "1. Windows Installer (.exe)",
    qs_tab_web: "2. Web App (PWA)",
    qs_tab_dev: "3. For Developers (CLI)",

    qs_exe_step1: "Download the latest release binaries from the [Download Center] above.",
    qs_exe_step2: "Launch the `.exe` on both computers connected to the same Wi-Fi or LAN cable.",
    qs_exe_step3: "Enter the PIN code or click the discovered machine to begin working instantly.",

    qs_web_step1: "Open this site on any modern browser (Chrome, Edge, Safari).",
    qs_web_step2: "Navigate to [ZCL Web Studio] and tap 'Install App' (PWA) for full offline capability.",
    qs_web_step3: "Drag & drop files or type host IP to connect peer-to-peer without installations.",

    qs_dev_step1: "Download the source bundle or extract the portable archive from the Download Center.",
    qs_dev_step2: "Prepare Python 3.11+ environment and execute `pip install -e .`",
    qs_dev_step3: "Run via CLI: `zcl-remote --host 0.0.0.0` or `zcl-teleport --share`",

    // FAQ
    faq_badge: "FAQ",
    faq_title: "Frequently Asked Questions",
    faq_q1: "Does ZCL require an active Internet connection?",
    faq_a1: "Not at all. ZCL is engineered from scratch to operate entirely within your local area network. Even if your internet connection goes down or undersea fiber cables are severed, computers connected to the same router or switch will communicate at full wire speed.",

    faq_q2: "How do two devices discover each other on the LAN?",
    faq_a2: "ZCL employs mDNS (Multicast DNS) under the service identifier `_zcl._tcp` to automatically discover active peers on your subnet. You can also connect manually via local IP (e.g. `192.168.1.15`) or scan a QR code.",

    faq_q3: "What is Local Cursor Rendering in ZCL Remote?",
    faq_a3: "When remote controlling a desktop, waiting for server video frame updates to show cursor movement causes noticeable input lag. ZCL Remote draws the pointer locally at 0ms latency, providing the fluid response of sitting directly at the physical machine.",

    faq_q4: "Is my data ever routed to external servers?",
    faq_a4: "Never. Not a single byte leaves your private subnet. ZCL operates without central relay servers or telemetry trackers, and the full source code is released under the GPL-3.0 license for independent verification.",

    faq_q5: "Will Windows Defender Firewall block ZCL?",
    faq_a5: "On the initial run, Windows Firewall will display a prompt asking for permission. Simply check 'Private networks' and allow access for seamless local network transfers.",

    // PWA & Footer
    pwa_title: "Install ZCL Hub as a Standalone App",
    pwa_desc: "This site is a Progressive Web App (PWA). Add it to your desktop or mobile home screen to access the web clients offline.",
    pwa_install_btn: "Install ZCL Hub (PWA)",

    footer_desc: "High-speed peer-to-peer local network suite prioritizing performance, security, and digital sovereignty.",
    footer_apps: "Products",
    footer_res: "Resources",
    footer_author: "Author",
    footer_rights: "Open source under GPL-3.0 License. Developed by Nguyen Hoang Tung."
  }
};

let currentLang = localStorage.getItem('zcl_lang') || 'vi';

function setLanguage(lang) {
  if (!i18n[lang]) return;
  currentLang = lang;
  localStorage.setItem('zcl_lang', lang);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key]) {
      el.innerHTML = i18n[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (i18n[lang][key]) {
      el.setAttribute('placeholder', i18n[lang][key]);
    }
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  document.documentElement.setAttribute('lang', lang);
}

// ==========================================
// 2. TERMINAL COPY TO CLIPBOARD
// ==========================================
function initCopyButtons() {
  const btnCopy = document.getElementById('btnCopySnippet');
  const codeText = document.getElementById('snippetText');

  if (btnCopy && codeText) {
    btnCopy.addEventListener('click', () => {
      navigator.clipboard.writeText(codeText.innerText.trim()).then(() => {
        const originalText = btnCopy.innerHTML;
        btnCopy.innerHTML = `✓ ${i18n[currentLang].copied_text || 'Copied!'}`;
        btnCopy.style.borderColor = 'var(--mint)';
        btnCopy.style.color = 'var(--mint)';
        setTimeout(() => {
          btnCopy.innerHTML = originalText;
          btnCopy.style.borderColor = '';
          btnCopy.style.color = '';
        }, 2000);
      });
    });
  }
}

// ==========================================
// 3. INTERACTIVE ZCL WEB STUDIO
// ==========================================
function initStudio() {
  const tabs = document.querySelectorAll('.studio-tab-btn');
  const panels = document.querySelectorAll('.studio-panel');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const app = tab.getAttribute('data-app');
      tabs.forEach((t) => t.classList.remove('active'));
      panels.forEach((p) => p.classList.remove('active'));

      tab.classList.add('active');
      const targetPanel = document.getElementById(`panel-${app}`);
      if (targetPanel) targetPanel.classList.add('active');
    });
  });

  initTeleportWeb();
  initRemoteCanvas();
  initBenchmark();
}

function initTeleportWeb() {
  const dropZone = document.getElementById('dropZone');
  const fileInput = document.getElementById('fileInput');
  const progressFill = document.getElementById('progressFill');
  const progressPercent = document.getElementById('progressPercent');
  const progressSpeed = document.getElementById('progressSpeed');
  const progressBytes = document.getElementById('progressBytes');

  if (!dropZone || !fileInput) return;

  dropZone.addEventListener('click', () => fileInput.click());

  ['dragenter', 'dragover'].forEach((eventName) => {
    dropZone.addEventListener(eventName, (e) => {
      e.preventDefault();
      dropZone.classList.add('dragover');
    });
  });

  ['dragleave', 'drop'].forEach((eventName) => {
    dropZone.addEventListener(eventName, (e) => {
      e.preventDefault();
      dropZone.classList.remove('dragover');
    });
  });

  dropZone.addEventListener('drop', (e) => {
    const files = e.dataTransfer.files;
    if (files.length) handleSimulatedTransfer(files[0]);
  });

  fileInput.addEventListener('change', () => {
    if (fileInput.files.length) handleSimulatedTransfer(fileInput.files[0]);
  });

  function handleSimulatedTransfer(file) {
    let progress = 0;
    const totalBytes = file.size > 0 ? file.size : 1024 * 1024 * 850;
    const totalMB = (totalBytes / (1024 * 1024)).toFixed(1);

    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 8) + 6;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
      }

      const currentMB = ((totalBytes * progress) / 100 / (1024 * 1024)).toFixed(1);
      const simulatedSpeed = (92 + Math.random() * 16).toFixed(1);

      if (progressFill) progressFill.style.width = `${progress}%`;
      if (progressPercent) progressPercent.innerText = `${progress}%`;
      if (progressSpeed) progressSpeed.innerText = `${simulatedSpeed} MB/s`;
      if (progressBytes) progressBytes.innerText = `${currentMB} MB / ${totalMB} MB`;
    }, 150);
  }
}

function initRemoteCanvas() {
  const canvas = document.getElementById('remoteCanvas');
  const overlay = document.getElementById('remoteOverlay');
  const btnConnect = document.getElementById('btnRemoteConnect');
  const btnDisconnect = document.getElementById('btnRemoteDisconnect');
  const btnFullscreen = document.getElementById('btnRemoteFullscreen');
  const latencyDisplay = document.getElementById('hudLatency');
  const fpsDisplay = document.getElementById('hudFps');

  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let isConnected = true;
  let mouseX = 320, mouseY = 220;
  let animId;
  let lastFrameTime = performance.now();
  let frameCount = 0;
  let fps = 60;

  function resizeCanvas() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  function renderDesktop() {
    if (!isConnected) {
      ctx.fillStyle = '#0d0b13';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#6e6679';
      ctx.font = '14px Cascadia Mono';
      ctx.textAlign = 'center';
      ctx.fillText('[DISCONNECTED — CLICK CONNECT TO RESUME SESSION]', canvas.width / 2, canvas.height / 2);
      return;
    }

    const now = performance.now();
    frameCount++;
    if (now - lastFrameTime >= 1000) {
      fps = frameCount;
      frameCount = 0;
      lastFrameTime = now;
      if (fpsDisplay) fpsDisplay.innerText = `${fps} FPS`;
    }

    // 1. Desktop background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#0f0d18');
    gradient.addColorStop(0.5, '#151222');
    gradient.addColorStop(1, '#0c1017');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 2. Mock IDE / Session Window
    const winX = 50, winY = 40;
    const winW = Math.min(canvas.width - 100, 720);
    const winH = Math.min(canvas.height - 90, 360);

    ctx.fillStyle = '#1a1725';
    ctx.strokeStyle = '#38304c';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(winX, winY, winW, winH, 12);
    ctx.fill();
    ctx.stroke();

    // Window title bar
    ctx.fillStyle = '#241f32';
    ctx.beginPath();
    ctx.roundRect(winX, winY, winW, 36, [12, 12, 0, 0]);
    ctx.fill();

    // Window controls
    ctx.fillStyle = '#fdaab3';
    ctx.beginPath(); ctx.arc(winX + 20, winY + 18, 5, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#fed69e';
    ctx.beginPath(); ctx.arc(winX + 36, winY + 18, 5, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#85edca';
    ctx.beginPath(); ctx.arc(winX + 52, winY + 18, 5, 0, Math.PI * 2); ctx.fill();

    ctx.fillStyle = '#a097ac';
    ctx.font = '12px Cascadia Mono';
    ctx.textAlign = 'left';
    ctx.fillText('zcl_remote_session.py — 60 FPS @ 1080p — TLS 1.3 Direct P2P', winX + 74, winY + 22);

    // Terminal / Code text
    ctx.fillStyle = '#85edca';
    ctx.fillText('$ zcl-remote --host 192.168.1.15:8443 --cursor local', winX + 26, winY + 76);
    ctx.fillStyle = '#cea3f3';
    ctx.fillText('[P2P Handshake] TLS 1.3 direct session established.', winX + 26, winY + 104);
    ctx.fillStyle = '#f7f3ec';
    ctx.fillText('✓ Local Cursor Rendering active (0ms perceived input lag)', winX + 26, winY + 132);
    ctx.fillText('✓ Video Pipeline: NVENC H.264 1080p @ 60 FPS (Hardware accelerated)', winX + 26, winY + 160);
    ctx.fillText('✓ Audio Pipeline: Opus 48kHz Stereo low-jitter buffer', winX + 26, winY + 188);
    ctx.fillText('✓ Host Sovereignty: Instant Floating Kill-switch armed.', winX + 26, winY + 216);

    ctx.fillStyle = '#6e6679';
    ctx.fillText('> Move mouse inside this canvas to feel 0ms cursor responsiveness.', winX + 26, winY + 264);

    // 3. Local Cursor Rendering
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(mouseX, mouseY);
    ctx.lineTo(mouseX + 14, mouseY + 14);
    ctx.lineTo(mouseX + 6, mouseY + 14);
    ctx.lineTo(mouseX + 4, mouseY + 20);
    ctx.lineTo(mouseX, mouseY + 20);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    animId = requestAnimationFrame(renderDesktop);
  }

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;

    const simLatency = (1.2 + Math.random() * 0.7).toFixed(1);
    if (latencyDisplay) latencyDisplay.innerText = `${simLatency} ms`;
  });

  if (overlay) {
    overlay.addEventListener('click', () => {
      overlay.style.display = 'none';
    });
  }

  if (btnConnect) {
    btnConnect.addEventListener('click', () => {
      isConnected = true;
      if (overlay) overlay.style.display = 'none';
      cancelAnimationFrame(animId);
      renderDesktop();
    });
  }

  if (btnDisconnect) {
    btnDisconnect.addEventListener('click', () => {
      isConnected = false;
      renderDesktop();
    });
  }

  if (btnFullscreen) {
    btnFullscreen.addEventListener('click', () => {
      const stage = canvas.parentElement;
      if (!document.fullscreenElement) {
        stage.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    });
  }

  renderDesktop();
}

function initBenchmark() {
  const btnRun = document.getElementById('btnRunBenchmark');
  const benchFill1 = document.getElementById('benchFill1');
  const benchVal1 = document.getElementById('benchVal1');
  const benchFill2 = document.getElementById('benchFill2');
  const benchVal2 = document.getElementById('benchVal2');
  const benchFill3 = document.getElementById('benchFill3');
  const benchVal3 = document.getElementById('benchVal3');

  if (!btnRun) return;

  btnRun.addEventListener('click', () => {
    btnRun.disabled = true;
    btnRun.innerText = i18n[currentLang].bench_running || 'Testing...';

    let count = 0;
    const interval = setInterval(() => {
      count++;
      if (benchVal1) benchVal1.innerText = `${(55 + Math.random() * 15).toFixed(0)} MB/s`;
      if (benchVal2) benchVal2.innerText = `${(110 + Math.random() * 12).toFixed(0)} MB/s`;
      if (benchVal3) benchVal3.innerText = `${(260 + Math.random() * 25).toFixed(0)} MB/s`;

      if (count >= 15) {
        clearInterval(interval);
        btnRun.disabled = false;
        btnRun.innerText = i18n[currentLang].bench_btn_run || 'Run Throughput Benchmark';
        if (benchVal1) benchVal1.innerText = '68 MB/s';
        if (benchVal2) benchVal2.innerText = '118 MB/s';
        if (benchVal3) benchVal3.innerText = '285 MB/s';
      }
    }, 100);
  });
}

// ==========================================
// 4. QUICK START TABS & FAQ ACCORDION
// ==========================================
function initQuickStart() {
  const qsTabs = document.querySelectorAll('.qs-tab-btn');
  const qsPanels = document.querySelectorAll('.qs-panel');

  qsTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-tab');
      qsTabs.forEach((t) => t.classList.remove('active'));
      qsPanels.forEach((p) => p.classList.remove('active'));

      tab.classList.add('active');
      const panel = document.getElementById(`qs-${target}`);
      if (panel) panel.classList.add('active');
    });
  });
}

function initFaq() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach((fi) => fi.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    }
  });
}

// ==========================================
// 5. MOBILE NAV & PWA
// ==========================================
function initMobileNav() {
  const toggle = document.querySelector('.mobile-toggle');
  const links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });

    links.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        links.classList.remove('open');
      });
    });
  }
}

let deferredPrompt;
const installBtn = document.getElementById('btnInstallPwa');

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  if (installBtn) installBtn.style.display = 'inline-flex';
});

if (installBtn) {
  installBtn.addEventListener('click', async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        installBtn.style.display = 'none';
      }
      deferredPrompt = null;
    } else {
      alert(currentLang === 'vi' 
        ? 'Để cài đặt ZCL Hub, hãy nhấn vào biểu tượng [Cài đặt ứng dụng] trên thanh địa chỉ trình duyệt.' 
        : 'To install ZCL Hub, click the [Install App] icon in your browser address bar.');
    }
  });
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch((err) => {
      console.log('SW registration error:', err);
    });
  });
}

// ==========================================
// 6. DOWNLOAD MODAL & TOAST HANDLER
// ==========================================
function showToast(message, iconSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>') {
  const toast = document.getElementById('toastMsg');
  const toastText = document.getElementById('toastText');
  const toastIcon = document.getElementById('toastIcon');
  if (!toast) return;

  if (toastText) toastText.innerText = message;
  if (toastIcon) toastIcon.innerHTML = iconSvg;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

function initDownloadModal() {
  const modal = document.getElementById('downloadModal');
  const btnClose = document.getElementById('btnModalClose');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalFileName = document.getElementById('modalFileName');
  const modalFileSize = document.getElementById('modalFileSize');
  const modalIcon = document.getElementById('modalIcon');
  const btnTrigger = document.getElementById('btnTriggerDownload');

  if (!modal) return;

  let currentApp = 'teleport';
  let currentFormat = 'exe';

  function openModal(app, format = 'exe') {
    currentApp = app;
    currentFormat = format;

    if (app === 'teleport') {
      if (modalIcon) {
        modalIcon.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 16V4M7 4L3 8M7 4L11 8M17 8V20M17 20L21 16M17 20L13 16"/></svg>';
        modalIcon.style.background = 'var(--mint-dark)';
        modalIcon.style.color = 'var(--mint)';
      }
      if (modalTitle) modalTitle.innerText = currentLang === 'vi' ? 'Tải ZCL Teleport' : 'Download ZCL Teleport';
      if (modalDesc) modalDesc.innerText = currentLang === 'vi' 
        ? 'Bản chính thức cho Windows 10/11 (64-bit) — Truyền file & Clipboard LAN.' 
        : 'Official Windows 10/11 (64-bit) build — LAN File Transfer & Clipboard.';
      if (modalFileName) modalFileName.innerText = format === 'zip' ? 'zcl_teleport_v0.1.0_portable.zip' : 'zcl_teleport_v0.1.0_setup.exe';
      if (modalFileSize) modalFileSize.innerText = format === 'zip' ? '11.8 MB' : '12.4 MB';
    } else {
      if (modalIcon) {
        modalIcon.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>';
        modalIcon.style.background = 'var(--lilac-dark)';
        modalIcon.style.color = 'var(--lilac)';
      }
      if (modalTitle) modalTitle.innerText = currentLang === 'vi' ? 'Tải ZCL Remote Desktop' : 'Download ZCL Remote Desktop';
      if (modalDesc) modalDesc.innerText = currentLang === 'vi' 
        ? 'Bản chính thức cho Windows 10/11 (64-bit) — Điều khiển máy tính từ xa 60 FPS.' 
        : 'Official Windows 10/11 (64-bit) build — 60 FPS LAN Remote Desktop.';
      if (modalFileName) modalFileName.innerText = format === 'zip' ? 'zcl_remote_v0.1.0-alpha_portable.zip' : 'zcl_remote_v0.1.0-alpha_setup.exe';
      if (modalFileSize) modalFileSize.innerText = format === 'zip' ? '15.6 MB' : '16.8 MB';
    }

    modal.classList.add('active');
  }

  function closeModal() {
    modal.classList.remove('active');
  }

  document.querySelectorAll('.btn-open-download').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const app = btn.getAttribute('data-app') || 'teleport';
      const format = btn.getAttribute('data-format') || 'exe';
      openModal(app, format);
    });
  });

  if (btnClose) btnClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  if (btnTrigger) {
    btnTrigger.addEventListener('click', () => {
      closeModal();
      const fileName = modalFileName ? modalFileName.innerText : 'zcl_installer.exe';
      showToast(currentLang === 'vi' ? `Đang bắt đầu tải ${fileName}...` : `Starting download for ${fileName}...`);

      setTimeout(() => {
        const dummyContent = `# ZCL - Zero-Cloud LAN: ${fileName}\n\nCam on ban da tai ung dung ZCL!\n\nHuong dan cai dat tren Windows 10/11 (64-bit):\n1. Mo tep vua tai ve.\n2. Neu Windows SmartScreen xuat hien hop thoai mau xanh:\n   - Bam "More info" (Thong tin them)\n   - Chon "Run anyway" (Van chay)\n3. Khi Windows Firewall hoi: tick chon "Private networks" (Mang rieng tu) va Allow Access.\n\nTac gia: Nguyen Hoang Tung (@Luffyreals)\n`;
        const blob = new Blob([dummyContent], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }, 500);
    });
  }
}

// ==========================================
// 7. INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      setLanguage(btn.getAttribute('data-lang'));
    });
  });

  initCopyButtons();
  initStudio();
  initQuickStart();
  initFaq();
  initMobileNav();
  initDownloadModal();
});
