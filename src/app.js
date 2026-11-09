/**
 * ZCL Hub — Core Logic & Interactive Web Demo
 * Author: Nguyen Hoang Tung (@Luffyreals)
 * Zero-dependency, offline-ready, bilingual (VI/EN).
 */

// ==========================================
// 1. BILINGUAL DICTIONARY (VI / EN)
// ==========================================
const i18n = {
  vi: {
    // Navigation
    nav_overview: "Tổng quan",
    nav_apps: "Ứng dụng",
    nav_download: "Tải về",
    nav_studio: "Dùng thử trên Web",
    nav_faq: "Hướng dẫn & Hỏi đáp",
    btn_launch_web: "Dùng thử",
    btn_download_desktop: "Tải về (.exe)",

    // Theme Switcher
    theme_toggle: "Chuyển giao diện Sáng / Tối",
    theme_dark: "Chuyển sang giao diện tối",
    theme_light: "Chuyển sang giao diện sáng",

    // Hero
    hero_eyebrow: "MIỄN PHÍ · MÃ NGUỒN MỞ · AN TOÀN TUYỆT ĐỐI",
    hero_store_badge: "KHO ỨNG DỤNG MẠNG NỘI BỘ WI-FI / LAN",
    hero_title: "<span class=\"title-gradient\">Zero-Cloud LAN Hub</span>",
    hero_lede: "Truyền file siêu tốc &amp; Điều khiển máy tính tức thì qua Wi-Fi chung. Không cần Internet, không cần tạo tài khoản.",
    hero_btn_studio: "Dùng thử ngay trên Web",
    hero_btn_apps: "Khám phá Kho ứng dụng",

    // Impact Metrics
    metric_speed: "Tốc độ gửi file tối đa",
    metric_latency: "Chuột ăn ngay tức thì",
    metric_privacy: "Không gửi ra máy chủ ngoài",
    metric_setup: "Hoạt động ngay cả khi đứt mạng",

    // Hero Visual Graphic
    visual_tag: "Mạng nội bộ kết nối trực tiếp",
    visual_direct: "Trực tiếp · Không qua Cloud",
    visual_dev_a: "Máy tính A",
    visual_dev_a_role: "Laptop gửi file",
    visual_dev_a_chip: "Gửi 4.2 GB trong 5s",
    visual_dev_b: "Máy tính B",
    visual_dev_b_role: "Màn hình điều khiển",
    visual_dev_b_chip: "Chuột ăn ngay · 0ms",
    visual_feat_1: "Tốc độ: 100MB/s – 1GB/s qua Wi-Fi",
    visual_feat_2: "Điều khiển: Chuột 0ms mượt mà",
    visual_feat_3: "Riêng tư: 100% trong phòng, 0 máy chủ ngoài",

    // ZCL Console Cockpit Frame
    console_tag: "TRẠM ĐIỀU KHIỂN MẠNG NỘI BỘ (ZCL STATION)",
    console_status: "2 máy tính sẵn sàng · 100% Nội bộ",
    assistant_name: "Trợ lý kết nối ZCL Hub",
    assistant_text: "Phát hiện 2 máy tính kết nối chung mạng Wi-Fi phòng bạn. Bạn muốn chuyển file lớn hay điều khiển máy tính từ xa?",
    btn_assist_tp: "Thử gửi file",
    btn_assist_rm: "Thử điều khiển",
    env_label: "Chọn bối cảnh sử dụng:",
    env_home: "Phòng làm việc gia đình",
    env_office: "Văn phòng công ty",
    env_cafe: "Quán Cafe",
    env_offline: "Khi mất Internet",

    // Arch Cards Showcase
    arch_badge: "BỘ ỨNG DỤNG MẠNG NỘI BỘ",
    arch_title: "Khám phá các sản phẩm ZCL",
    arch_sub: "Được thiết kế cho nhu cầu làm việc hàng ngày trong phòng: truyền file siêu tốc, điều khiển máy tính và kết nối tức thì.",
    arch_z1: "VÙNG 01 · GỬI FILE",
    arch_z2: "VÙNG 02 · ĐIỀU KHIỂN",
    arch_z3: "VÙNG 03 · CHIẾU MÀN HÌNH",
    arch_z4: "VÙNG 04 · NHẮN TIN",
    arch_z5: "VÙNG 05 · ĐỒNG BỘ",
    arch_desc_tp: "Gửi nhận file dung lượng không giới hạn và copy-paste tức thì giữa hai máy tính cùng phòng.",
    arch_desc_rm: "Điều khiển máy tính từ xa mượt mà như ngồi trước máy thật, chuột bấm ăn ngay không giật lag.",
    arch_desc_cast: "Chiếu màn hình và âm thanh không dây từ máy tính lên TV hoặc máy chiếu phòng họp.",
    arch_desc_chat: "Nhắn tin và gọi thoại nhanh giữa các máy cùng phòng, bảo mật riêng tư tuyệt đối.",
    arch_desc_sync: "Tự động sao lưu và đồng bộ hai chiều thư mục làm việc giữa máy bàn và laptop.",
    arch_explore: "Khám phá",
    road_dev: "Đang phát triển",
    road_plan: "Lên ý tưởng",

    // LAN Device Orbit
    orbit_badge: "KẾT NỐI KHÔNG DÂY NỘI BỘ",
    orbit_title: "Quỹ đạo liên kết đa thiết bị",
    orbit_sub: "Chọn bất kỳ thiết bị nào trên vòng tròn để xem đường truyền kết nối trực tiếp trong phòng.",
    orbit_live: "Trực tiếp · Không qua Cloud",
    orbit_stat_speed: "Tốc độ đo được",
    orbit_stat_latency: "Độ trễ phản hồi",
    orbit_stat_security: "Bảo mật dữ liệu",
    orbit_stat_route: "Tuyến đường truyền",

    // Visual Bento Showcase
    bento_tp_speed: "1.1 GB/s",
    bento_tp_clip: "Copy máy A &rarr; Dán tức thì sang máy B",
    bento_view_app: "Xem ứng dụng",
    bento_view_teleport: "Khám phá ZCL Teleport",
    bento_view_remote: "Khám phá ZCL Remote",
    bento_try_teleport: "Thử gửi file ngay",
    bento_rm_hud: "Chuột: Tức thì",
    bento_rm_sub: "Điều khiển máy tính mượt mà như ngồi trước máy thật",
    bento_try_remote: "Thử di chuột ngay",

    // Store Catalog & Dedicated App Pages
    store_catalog_badge: "CỬA HÀNG ỨNG DỤNG ZCL",
    store_catalog_title: "Danh mục ứng dụng mạng nội bộ",
    store_catalog_sub: "Chọn một ứng dụng bên dưới để xem trang giới thiệu chi tiết, thông số và trải nghiệm.",
    store_btn_view_teleport: "Xem trang chi tiết Teleport",
    store_btn_view_remote: "Xem trang chi tiết Remote",
    store_back_catalog: "Quay lại Kho ứng dụng",
    crumb_store: "Kho ứng dụng",

    // Dedicated App: Teleport
    dt_tp_category: "Truyền file siêu tốc & Khay nhớ tạm",
    dt_tp_lede: "Gửi nhận file dung lượng lớn hàng chục GB trong vài giây & tự động đồng bộ khay nhớ tạm hai chiều giữa hai máy tính cùng phòng qua Wi-Fi chung.",
    dt_tp_btn_dl: "Tải bản cài đặt Teleport (.exe)",
    dt_tp_btn_web: "Dùng thử gửi file ngay trên Web",
    dt_tp_showcase_title: "Trình diễn trực quan tính năng ZCL Teleport",
    dt_tp_clip_desc: "Copy đoạn chữ hoặc hình ảnh tại Máy A &rarr; Dán tức thì sang Máy B",
    dt_features_title: "4 Điểm nổi bật nhất của ứng dụng",
    dt_tp_f1_title: "Gửi file dung lượng không giới hạn",
    dt_tp_f1_desc: "Chuyển các tệp dung lượng hàng chục GB (video gốc, bộ cài, ảnh RAW) giữa các máy trong vài giây mà không lo nghẽn mạng.",
    dt_tp_f2_title: "Tự động tìm thấy máy trong phòng",
    dt_tp_f2_desc: "Chỉ cần hai máy kết nối chung một cục Wi-Fi hoặc dây mạng là tự động nhận diện ra nhau ngay lập tức, không cần gõ địa chỉ IP.",
    dt_tp_f3_title: "Tự động truyền tiếp khi mất mạng",
    dt_tp_f3_desc: "Nếu sóng Wi-Fi bị ngắt quãng hoặc tuột dây mạng, ứng dụng sẽ tự động tiếp tục truyền ngay khi kết nối lại mà không phải gửi lại từ đầu.",
    dt_tp_f4_title: "Đồng bộ khay nhớ tạm hai chiều",
    dt_tp_f4_desc: "Vừa copy đường link, văn bản hay hình ảnh ở laptop là có thể dán ngay sang máy tính bàn một cách tự nhiên và liền mạch.",

    // Dedicated App: Remote
    dt_rm_category: "Điều khiển máy tính từ xa",
    dt_rm_lede: "Điều khiển máy tính từ xa mượt mà, phản hồi tức thì, chuột bấm ăn ngay không giật lag qua mạng Wi-Fi chung trong phòng.",
    dt_rm_btn_dl: "Tải bản cài đặt Remote (.exe)",
    dt_rm_btn_web: "Dùng thử di chuột ngay trên Web",
    dt_rm_showcase_title: "Trình diễn trực quan tính năng ZCL Remote",
    dt_rm_hud_desc: "Di chuột, nhấp chuột và gõ phím phản hồi tức thì như đang ngồi trực tiếp trước màn hình thật",
    dt_rm_f1_title: "Chuột bấm ăn ngay, không giật hình",
    dt_rm_f1_desc: "Dữ liệu truyền thẳng trực tiếp trong mạng nội bộ mang lại trải nghiệm điều khiển tức thì, xóa tan độ trễ giật lắc khó chịu.",
    dt_rm_f2_title: "Màn hình tự tối ưu độ nét",
    dt_rm_f2_desc: "Ứng dụng tự động điều chỉnh chất lượng hình ảnh theo tốc độ Wi-Fi để luôn duy trì khung hình chuyển động 60 FPS sắc nét.",
    dt_rm_f3_title: "Hoạt động bình thường khi mất Internet",
    dt_rm_f3_desc: "Kể cả khi bị đứt cáp quang biển hoặc mất kết nối mạng ngoài, hai máy tính kết nối cùng Wi-Fi vẫn điều khiển nhau trơn tru.",
    dt_rm_f4_title: "Bảo mật cao & Ngắt kết nối khẩn cấp",
    dt_rm_f4_desc: "Luôn hiển thị thông báo xin phép trước khi kết nối, kèm thanh ngắt kết nối một chạm an toàn tuyệt đối bất cứ lúc nào.",

    // Specifications
    dt_specs_title: "Thông số kỹ thuật thực tế",
    spec_speed: "Tốc độ truyền",
    spec_limit: "Dung lượng tệp",
    spec_os: "Hệ điều hành",
    spec_security: "Bảo mật",
    spec_license: "Bản quyền & Tác giả",
    spec_internet: "Kết nối Internet",
    spec_fps: "Tốc độ khung hình",
    spec_mouse: "Độ trễ phản hồi",

    // 4 Highlights
    pil1_title: "Gửi file siêu tốc",
    pil1_desc: "Chuyển file dung lượng hàng chục GB trong vài giây giữa hai máy tính cùng phòng mà không lo bị nghẽn mạng.",
    pil2_title: "Chuột bấm ăn ngay",
    pil2_desc: "Điều khiển máy tính từ xa mượt mà như đang ngồi trực tiếp trước màn hình thật, không có độ trễ giật lắc.",
    pil3_title: "Không cần Internet",
    pil3_desc: "Kể cả khi bị mất mạng ngoài hay đứt cáp, các máy tính kết nối chung một cục Wi-Fi vẫn làm việc bình thường.",
    pil4_title: "Bảo mật riêng tư",
    pil4_desc: "Dữ liệu truyền thẳng trực tiếp giữa hai máy tính của bạn, không gửi qua bất kỳ máy chủ bên ngoài nào.",

    // Quick Hub Switcher
    hub_card_tp_sub: "Truyền file siêu nhanh và copy paste chữ, ảnh tức thì giữa các máy.",
    hub_card_rm_sub: "Điều khiển màn hình máy tính từ xa mượt mà, chuột không độ trễ.",
    hub_card_studio_sub: "Trải nghiệm gửi file và thử di chuột điều khiển ngay trên trình duyệt.",
    hub_card_view_action: "Xem chi tiết",
    hub_card_dl_title: "Mục Tải về",
    hub_card_dl_action: "Mở mục Tải về",

    // Apps Bento
    bento_badge: "CÁC ỨNG DỤNG CHÍNH",
    bento_title: "Dễ dùng · Siêu tốc · Tiện lợi",
    bento_sub: "Được thiết kế để giải quyết nhu cầu làm việc hàng ngày giữa các máy tính.",
    tp_status: "Bản thử nghiệm",
    tp_title: "ZCL Teleport",
    tp_desc: "Gửi nhận file dung lượng không giới hạn và sao chép dữ liệu tức thì giữa hai máy tính cùng mạng Wi-Fi.",
    tp_f1: "Gửi file phim, ảnh, tài liệu hàng chục GB chỉ trong vài giây",
    tp_f2: "Tự động truyền tiếp nếu lỡ bị rút dây mạng hoặc chập chờn Wi-Fi",
    tp_f3: "Copy chữ hoặc ảnh ở máy này là dán được ngay sang máy kia",
    tp_btn_dl: "Tải Teleport (.exe)",
    tp_btn_dl_view: "Xem trong mục Tải về",
    tp_btn_web: "Dùng thử trên Web",

    rm_status: "Bản thử nghiệm",
    rm_title: "ZCL Remote",
    rm_desc: "Điều khiển máy tính từ xa siêu mượt qua Wi-Fi. Trải nghiệm chuột nhanh nhạy, không giật hình, không quảng cáo.",
    rm_f1: "Màn hình rõ nét, chuyển động mượt mà không bị trễ hình",
    rm_f2: "Di chuột và bấm phím phản hồi tức thì như đang ngồi trước máy",
    rm_f3: "Có nút ngắt kết nối khẩn cấp bất cứ khi nào bạn muốn",
    rm_btn_dl: "Tải Remote (.exe)",
    rm_btn_dl_view: "Xem trong mục Tải về",
    rm_btn_web: "Dùng thử trên Web",
    road_title: "Các ứng dụng dự kiến ra mắt",

    // Download Center
    dl_badge: "TRUNG TÂM TẢI VỀ",
    dl_title: "Tải ứng dụng cho Windows",
    dl_sub: "Miễn phí hoàn toàn. Không cần tài khoản, tải về và dùng ngay.",
    dl_tp_name: "ZCL Teleport",
    dl_tp_desc: "Ứng dụng gửi nhận file siêu nhanh và copy paste tức thì giữa các máy tính trong cùng mạng Wi-Fi.",
    dl_rm_name: "ZCL Remote",
    dl_rm_desc: "Ứng dụng điều khiển máy tính từ xa siêu mượt. Chuột bấm ăn ngay, màn hình mượt mà không giật lag.",
    dl_btn_installer: "Tải bản cài đặt (.exe)",
    dl_btn_portable: "Tải bản chạy ngay không cần cài (.zip)",
    dl_sync_live: "Bản mới nhất",
    dl_sync_fallback: "Bản ổn định",
    dl_view_release: "Xem danh sách phát hành trên GitHub",
    dl_version_prefix: "Phiên bản",
    dl_portable_label: "Tải bản chạy ngay không cần cài",
    pwa_title: "Cài đặt trực tiếp từ trình duyệt",
    pwa_desc: "Trang web có thể cài vào máy tính hoặc điện thoại như một ứng dụng độc lập để mở nhanh bất cứ lúc nào.",
    pwa_install_btn: "Cài đặt ZCL Hub",

    // Studio (Dùng thử trên Web)
    studio_badge: "TRẢI NGHIỆM TRỰC TIẾP",
    studio_title: "Dùng thử ngay trên trình duyệt",
    studio_sub: "Trải nghiệm thực tế các tính năng kết nối trực tiếp trong phòng: gửi file siêu tốc, đồng bộ khay nhớ tạm, điều khiển máy tính mượt mà và kiểm tra tốc độ mạng.",
    studio_tab_tp: "Thử gửi file & Khay nhớ tạm (Teleport)",
    studio_tab_rm: "Thử điều khiển máy tính (Remote)",
    studio_tab_bench: "Kiểm tra tốc độ Wi-Fi (Benchmark)",
    studio_status_ready: "Mạng nội bộ trực tiếp · 2 máy sẵn sàng",

    // Teleport
    tp_send_from: "Thiết bị gửi (Laptop cá nhân)",
    tp_send_to_label: "Gửi đến máy nhận trong phòng:",
    tp_drop_title: "Kéo thả file vào đây hoặc bấm để chọn",
    tp_drop_sub: "File sẽ được truyền trực tiếp sang máy tính nhận trong phòng mà không qua máy chủ đám mây",
    tp_btn_browse: "Chọn file từ máy",
    tp_preset_label: "Hoặc thử nhanh với các mẫu file:",
    tp_preset_video: "Video 4K (2.4 GB)",
    tp_preset_photos: "Bộ ảnh RAW (850 MB)",
    tp_preset_doc: "Tài liệu dự án (45 MB)",
    tp_peers_title: "Máy tính phát hiện được trong phòng",
    tp_transfer_demo: "Video_Du_An_4K.mov",
    tp_speed: "Tốc độ hiện tại:",
    tp_stat_transferred: "Đã truyền:",
    tp_stat_speed: "Tốc độ hiện tại:",
    tp_stat_eta: "Thời gian còn lại:",
    tp_btn_pause: "Tạm dừng",
    tp_btn_resume: "Tiếp tục",
    tp_btn_cancel: "Hủy gửi",
    tp_btn_restart: "Thử gửi lại",
    tp_history_title: "Nhật ký truyền file gần đây:",

    // Clipboard Sync
    studio_clip_title: "Thử nghiệm Đồng bộ Khay nhớ tạm hai chiều",
    studio_clip_sub: "Sao chép đoạn chữ, đường dẫn hay hình ảnh ở máy này là máy kia nhận được ngay tức thì chỉ sau 0.01 giây.",
    studio_clip_status: "Sẵn sàng dán · 0.01s",
    studio_clip_label_a: "Gõ hoặc chọn nội dung cần chép:",
    studio_clip_btn_copy: "Sao chép sang Máy B",
    studio_clip_label_b: "Nội dung đã nhận được:",
    studio_clip_done: "Đã dán",
    clip_sample_label: "Mẫu nhanh:",
    clip_direction_toggle: "Đảo chiều",

    // Remote
    rm_target_select_label: "Máy tính điều khiển:",
    rm_ip_placeholder: "Tên hoặc mã kết nối của máy tính",
    rm_connect_btn: "Bắt đầu điều khiển",
    rm_disconnect_btn: "Tạm dừng điều khiển",
    rm_fullscreen: "Toàn màn hình",
    rm_trail_btn: "Vẽ nét chuột",
    rm_overlay_title: "Bấm để thử điều khiển chuột",
    rm_overlay_sub: "Di chuột và nhấp chuột vào khu vực này để cảm nhận chuột ăn ngay, hoàn toàn không có độ trễ",
    rm_key_label: "Bàn phím từ xa:",
    rm_key_clear: "Xóa",

    // Benchmark
    bench_title: "Đo tốc độ truyền tải thực tế trong mạng nội bộ",
    bench_sub: "So sánh tốc độ truyền dữ liệu trực tiếp qua Wi-Fi / Dây cáp mạng so với gửi qua Internet đám mây thông thường.",
    bench_btn_run: "Bắt đầu đo kiểm tốc độ",
    bench_env_label: "Chọn chuẩn mạng cần đo:",
    bench_env_1: "Wi-Fi cơ bản (2.4GHz / Router phòng)",
    bench_env_2: "Wi-Fi thế hệ mới (Wi-Fi 6 / 6E)",
    bench_env_3: "Cáp mạng LAN trực tiếp (Gigabit)",
    bench_wave_title: "Biểu đồ ổn định đường truyền theo thời gian thực:",
    bench_metric_bw: "Băng thông đo được",
    bench_metric_ping: "Độ trễ phản hồi",
    bench_metric_jitter: "Độ ổn định đường truyền",
    bench_metric_loss: "Mất gói dữ liệu",
    bench_calc_title: "Ước tính thời gian gửi file thực tế",
    bench_calc_sub: "Chọn dung lượng file để so sánh thời gian gửi giữa ZCL Hub và mạng Internet:",
    bench_calc_lan: "Qua mạng nội bộ ZCL Hub (Wi-Fi 6)",
    bench_calc_cloud: "Qua mạng Internet đám mây thông thường",

    page_title: "ZCL Hub — Truyền file siêu tốc & Điều khiển máy tính",
    chat_bubble_sent: "File đã gửi xong!",
    chat_bubble_received: "Nhận được rồi, cực nhanh!",
    orbit_tag_b: "Máy tính bàn B",
    orbit_val_latency: "0.2ms (Chuột ăn ngay)",
    orbit_val_security: "100% Trong phòng, 0 máy chủ ngoài",
    orbit_val_route: "Sóng Wi-Fi phòng &rarr; Truyền thẳng",
    orbit_node_pc: "Máy PC",
    orbit_node_phone: "Điện thoại",
    road_dev: "Đang phát triển",
    road_desc_cast: "Chiếu màn hình và âm thanh không dây từ máy tính lên TV hoặc máy chiếu phòng họp.",
    road_desc_chat: "Nhắn tin và gọi thoại nhanh giữa các máy cùng phòng, bảo mật tuyệt đối.",
    road_desc_sync: "Tự động cập nhật thư mục làm việc giữa máy tính bàn và laptop cá nhân.",
    detail_status_ready: "Sẵn sàng · v0.1.0",
    chip_gpl: "Mã nguồn mở GPL-3.0",
    chip_author: "Tác giả: Nguyễn Hoàng Tùng",
    bento_badge_speed: "Tốc độ gửi file",
    bento_badge_clip: "Khay nhớ tạm hai chiều",
    bento_tag_clip: "Tức thì · 0s",
    spec_val_speed: "100 MB/s – 1 GB/s (tối đa đường truyền mạng)",
    spec_val_limit: "Không giới hạn (đã thử nghiệm tệp 150 GB)",
    spec_val_security: "Dữ liệu đi thẳng trong phòng, 0 máy chủ ngoài",
    spec_val_internet: "Không cần Internet, chỉ cần mạng Wi-Fi chung",
    bento_badge_fps: "Tốc độ khung hình",
    bento_tag_fps: "60 FPS · Mượt mà",
    hud_mouse_instant: "Chuột: Tức thì",
    bento_badge_latency: "Độ trễ phản hồi",
    bento_tag_latency: "Dưới 1ms · Không trễ",
    spec_val_fps: "60 FPS mượt mà",
    spec_val_latency: "Dưới 1ms (phản hồi tức thì)",
    spec_val_security_rm: "Dữ liệu truyền thẳng trong phòng, 0 máy chủ ngoài",
    dl_req_win: "Yêu cầu: Máy tính Windows 10 hoặc Windows 11",
    tp_send_to_label_prefix: "Gửi đến: ",
    tp_status_transferring: "Đang truyền",
    tp_stat_progress: "Tiến độ:",
    tp_history_count: "2 file đã nhận",
    tag_local_room: "100% Trong phòng",
    clip_role_source: "Thiết bị sao chép",
    clip_sample_link: "Liên kết",
    clip_sample_wifi: "Mật khẩu Wi-Fi",
    clip_sample_note: "Ghi chú việc",
    clip_latency_tag: "0.01s (Ăn ngay)",
    clip_role_target: "Tự động nhận",
    remote_hud_latency: "0.2 ms (Ăn ngay)",
    remote_hud_status: "Trực tiếp trong phòng",
    bench_target_wifi6: "Đo trên chuẩn: Wi-Fi 6",
    bench_wave_sub: "Ổn định 100% · Không rớt mạng",
    bench_bw_desc: "Gửi 1 bộ phim 4K chỉ mất 2.5 giây.",
    bench_ping_desc: "Chuột bấm ăn ngay, cảm giác như máy thật.",
    bench_jitter_desc: "Không biến động tín hiệu, truyền ổn định liên tục.",
    bench_loss_desc: "100% Gói tin truyền vẹn nguyên trong phòng.",
    calc_lan_note: "Tận dụng trọn vẹn tốc độ Wi-Fi phòng, không tốn data mạng ngoài.",
    calc_cloud_note: "Phải tải lên máy chủ ngoài, bị giới hạn tốc độ và dung lượng.",
    qs_step1_title: "Tải ứng dụng về máy",
    qs_step2_title: "Mở ứng dụng lên",
    qs_step3_title: "Bắt đầu làm việc",
    modal_smartscreen_tip: "<strong>Mẹo nhỏ:</strong> Nếu máy tính hiện cảnh báo file mới, bạn chỉ cần bấm <em>\"More info\" (Thông tin thêm)</em> &rarr; chọn <em>\"Run anyway\" (Vẫn chạy)</em> là xong.",
    toast_downloading: "Đang tải xuống tệp cài đặt...",
    hist_item_1_sub: "Gửi sang Laptop-LamViec · Mất 0.04 giây",
    hist_item_2_sub: "Gửi sang May-Ban-Phong-Khach · Mất 0.45 giây",
    clip_machine_a: "Máy A (Laptop cá nhân)",
    clip_machine_b: "Máy B (Máy bàn làm việc)",
    clip_time_recent: "Đồng bộ cách đây: vừa xong",

    // 3 Steps & FAQ
    qs_badge: "3 BƯỚC ĐƠN GIẢN",
    qs_title: "Cách sử dụng trong 1 phút",
    qs_sub: "Bất kỳ ai cũng có thể làm theo một cách dễ dàng.",
    qs_step1: "Mở tab [Tải về] trên trang web này và tải file cài đặt về cho 2 chiếc máy tính cần kết nối.",
    qs_step2: "Đảm bảo cả 2 máy tính cùng bắt chung 1 mạng Wi-Fi (hoặc cắm chung dây mạng), rồi mở ứng dụng lên.",
    qs_step3: "Hai máy tính sẽ tự động nhìn thấy nhau. Bạn chỉ cần chọn máy và bắt đầu gửi file hoặc điều khiển ngay.",

    faq_badge: "HỎI ĐÁP",
    faq_title: "Những thắc mắc thường gặp",
    faq_q1: "Nhà tôi bị mất mạng Internet thì có dùng được không?",
    faq_a1: "Hoàn toàn dùng được. Ứng dụng chỉ cần 2 máy tính bắt chung vào một cục phát Wi-Fi (hoặc cắm dây mạng chung) là có thể gửi nhận file và điều khiển nhau với tốc độ tối đa, kể cả khi dây cáp quang ra ngoài Internet bị đứt.",
    faq_q2: "Dữ liệu của tôi có bị ai xem trộm hay gửi ra ngoài không?",
    faq_a2: "Tuyệt đối không. Dữ liệu chỉ truyền thẳng trực tiếp giữa 2 chiếc máy tính của bạn trong phòng. Ứng dụng không có máy chủ lưu trữ bên ngoài, không yêu cầu đăng nhập tài khoản và không thu thập bất kỳ thông tin nào của bạn.",
    faq_q3: "Ứng dụng có miễn phí không? Có giới hạn thời gian điều khiển không?",
    faq_a3: "Hoàn toàn miễn phí 100%. Bạn có thể truyền bao nhiêu file tùy thích, điều khiển bao lâu tùy ý mà không lo bị ngắt kết nối giữa chừng hay bị quấy rầy bởi quảng cáo.",
    faq_q4: "Khi mở lên máy tính báo bảo vệ (Windows Defender) thì làm thế nào?",
    faq_a4: "Nếu Windows hiện bảng thông báo màu xanh, bạn chỉ cần bấm vào chữ \"More info\" (Thông tin thêm) rồi chọn \"Run anyway\" (Vẫn chạy). Nếu máy tính hỏi quyền truy cập mạng, hãy tick chọn \"Private networks\" (Mạng riêng tư) để 2 máy tìm thấy nhau.",

    // Footer
    footer_desc: "Nhanh hơn, mượt hơn và hoàn toàn riêng tư giữa các máy tính cùng phòng.",
    footer_apps: "Ứng dụng",
    footer_res: "Danh mục",
    footer_author: "Tác giả",
    footer_contact: "Tác giả & Liên hệ",
    footer_rights: "Mã nguồn mở GPL-3.0. Phát triển bởi Nguyễn Hoàng Tùng.",
    modal_btn_start: "Bắt đầu tải xuống",
    // Eco Mode
    eco_toggle: "Chế độ tiết kiệm pin / Giảm hiệu ứng",
    eco_enabled_toast: "Đã bật chế độ tiết kiệm pin (Giảm hiệu ứng nền đồ họa)",
    eco_disabled_toast: "Đã tắt chế độ tiết kiệm pin (Bật lại hiệu ứng nền)",

    // LAN Transfer Time Calculator
    calc_badge: "TÍNH TOÁN TỐC ĐỘ THỰC TẾ",
    calc_title: "Ước tính thời gian truyền file trong phòng",
    calc_sub: "Kéo chọn dung lượng file để thấy tốc độ vượt trội khi gửi trực tiếp qua Wi-Fi chung so với việc tải lên đám mây thông thường.",
    calc_size_label: "Chọn dung lượng file:",
    calc_net_label: "Chọn chuẩn mạng nội bộ trong phòng:",
    calc_net_basic: "Wi-Fi cơ bản (~40 MB/s)",
    calc_net_wifi6: "Wi-Fi tốc độ cao / 5GHz (~110 MB/s)",
    calc_net_lan: "Cáp mạng LAN (~120 MB/s)",
    calc_zcl_note: "File đi thẳng giữa 2 máy tính, không qua máy chủ trung gian.",
    calc_cloud_note: "Phải tải lên máy chủ ngoài rồi tải xuống lại, tốn thời gian gấp nhiều lần.",
    calc_faster_badge: "Nhanh hơn gấp {n} lần!",
    calc_savings_text: "Tiết kiệm hơn {p}% thời gian chờ đợi.",
    calc_btn_try_studio: "Thử ngay",

    // FAQ Instant Search & Additional Questions
    faq_search_placeholder: "Tìm nhanh câu trả lời (ví dụ: mất mạng, bảo vệ, tốc độ, dung lượng...)",
    faq_search_count_format: "Tìm thấy {n} câu trả lời",
    faq_empty_title: "Không tìm thấy câu hỏi phù hợp",
    faq_empty_sub: "Thử tìm bằng từ khóa khác hoặc bấm nút bên dưới để xem toàn bộ câu hỏi.",
    faq_btn_reset: "Hiện tất cả câu hỏi",
    faq_q5: "Tốc độ gửi file tối đa là bao nhiêu và phụ thuộc vào yếu tố nào?",
    faq_a5: "Tốc độ phụ thuộc trực tiếp vào cục phát Wi-Fi hoặc dây cáp mạng trong phòng bạn. Với Wi-Fi thông thường tốc độ đạt từ 30–80 MB/s, với Wi-Fi 6 hoặc cắm dây mạng trực tiếp có thể lên tới 100MB/s – 1GB/s. Vì truyền trực tiếp trong phòng nên tốc độ luôn nhanh gấp nhiều lần so với gửi qua mạng Internet.",
    faq_q6: "Nếu đang gửi dở file dung lượng lớn mà bị ngắt kết nối thì có phải gửi lại từ đầu không?",
    faq_a6: "Không cần gửi lại từ đầu. Ứng dụng tự động lưu lại những phần đã truyền xong. Khi hai máy kết nối lại vào cùng mạng, ứng dụng sẽ tiếp tục truyền nốt phần còn lại, giúp bạn tiết kiệm thời gian.",

    // Dual-Tab Sync in Studio
    studio_open_tab_btn: "Mở thêm 1 Tab thử kết nối thật",
    studio_status_dual_active: "Đang đồng bộ trực tiếp giữa 2 Tab trình duyệt (Tab A ⇄ Tab B)",
    studio_toast_tab_detected: "Đã phát hiện 2 tab ZCL Hub mở song song! Thao tác copy và gửi file sẽ truyền qua lại tức thì.",
    studio_toast_clipboard_received: "Đã nhận văn bản mới từ Tab bên cạnh qua kết nối nội bộ!",
    studio_toast_file_received: "Đã nhận file từ Tab bên cạnh: ",
  },

  en: {
    // Navigation
    nav_overview: "Overview",
    nav_apps: "Apps",
    nav_download: "Download",
    nav_studio: "Try on Web",
    nav_faq: "Guide & FAQ",
    btn_launch_web: "Try on Web",
    btn_download_desktop: "Download (.exe)",

    // Theme Switcher
    theme_toggle: "Toggle Light / Dark mode",
    theme_dark: "Switch to dark mode",
    theme_light: "Switch to light mode",

    // Hero
    hero_eyebrow: "FREE · OPEN SOURCE · COMPLETELY SECURE",
    hero_store_badge: "LOCAL WI-FI / LAN APP STORE & HUB",
    hero_title: "<span class=\"title-gradient\">Zero-Cloud LAN Hub</span>",
    hero_lede: "Ultra-fast file transfers &amp; instant remote control over local Wi-Fi. No internet required, no account needed.",
    hero_btn_studio: "Try Right on Web",
    hero_btn_apps: "Explore App Store",

    // Impact Metrics
    metric_speed: "Max transfer speed",
    metric_latency: "Instant mouse feedback",
    metric_privacy: "Zero external cloud servers",
    metric_setup: "Works during internet outages",

    // Hero Visual Graphic
    visual_tag: "Direct Local Wi-Fi / LAN Network",
    visual_direct: "Direct · No Cloud Servers",
    visual_dev_a: "Computer A",
    visual_dev_a_role: "Sending Laptop",
    visual_dev_a_chip: "Sent 4.2 GB in 5s",
    visual_dev_b: "Computer B",
    visual_dev_b_role: "Remote Screen",
    visual_dev_b_chip: "Instant Mouse · 0ms",
    visual_feat_1: "Speed: 100MB/s – 1GB/s over Wi-Fi",
    visual_feat_2: "Control: 0ms smooth mouse response",
    visual_feat_3: "Privacy: 100% in-room, zero Cloud",

    // ZCL Console Cockpit Frame
    console_tag: "LOCAL LAN COCKPIT (ZCL STATION)",
    console_status: "2 devices ready · 100% Local",
    assistant_name: "ZCL Hub Connect Assistant",
    assistant_text: "Detected 2 computers on your room's Wi-Fi. Would you like to transfer large files or remote control?",
    btn_assist_tp: "Try File Transfer",
    btn_assist_rm: "Try Remote",
    env_label: "Select scenario:",
    env_home: "Home workspace",
    env_office: "Corporate office",
    env_cafe: "Coffee shop",
    env_offline: "When Internet is down",

    // Arch Cards Showcase
    arch_badge: "LOCAL LAN APP SUITE",
    arch_title: "Explore ZCL Products",
    arch_sub: "Engineered for daily room workflows: ultra-fast file transfer, remote desktop control, and instant peer sync.",
    arch_z1: "ZONE 01 · FILE TRANSFER",
    arch_z2: "ZONE 02 · REMOTE CONTROL",
    arch_z3: "ZONE 03 · SCREEN CAST",
    arch_z4: "ZONE 04 · LOCAL CHAT",
    arch_z5: "ZONE 05 · FOLDER SYNC",
    arch_desc_tp: "Send unlimited size files and instant 2-way clipboard sync between room PCs.",
    arch_desc_rm: "Fluid remote PC control with 0ms instant mouse response, feels like sitting in front of the real machine.",
    arch_desc_cast: "Cast desktop screen and audio wirelessly to conference TVs or projectors.",
    arch_desc_chat: "Direct peer chat and quick voice between room computers with zero cloud routing.",
    arch_desc_sync: "Automatic bidirectional folder sync between your desktop and laptop in local LAN.",
    arch_explore: "Explore",
    road_dev: "In Development",
    road_plan: "Planned",

    // LAN Device Orbit
    orbit_badge: "LOCAL WIRELESS TOPOLOGY",
    orbit_title: "Multi-Device Peer Orbit",
    orbit_sub: "Click any device on the orbit to inspect direct room-level routing and live transfer metrics.",
    orbit_live: "Direct · Zero Cloud",
    orbit_stat_speed: "Measured Speed",
    orbit_stat_latency: "Response Latency",
    orbit_stat_security: "Data Security",
    orbit_stat_route: "Routing Path",

    // Visual Bento Showcase
    bento_tp_speed: "1.1 GB/s",
    bento_tp_clip: "Copy on PC A &rarr; Paste instantly on PC B",
    bento_view_app: "View App",
    bento_view_teleport: "Explore ZCL Teleport",
    bento_view_remote: "Explore ZCL Remote",
    bento_try_teleport: "Try Sending Files",
    bento_rm_hud: "Mouse: Instant",
    bento_rm_sub: "Remote desktop as smooth as sitting in front of the PC",
    bento_try_remote: "Try Mouse Control",

    // Store Catalog & Dedicated App Pages
    store_catalog_badge: "ZCL APP STORE",
    store_catalog_title: "Local Network Application Catalog",
    store_catalog_sub: "Choose an application below to view detailed features, specifications, and demo.",
    store_btn_view_teleport: "View Teleport Page",
    store_btn_view_remote: "View Remote Page",
    store_back_catalog: "Back to App Store",
    crumb_store: "App Store",

    // Dedicated App: Teleport
    dt_tp_category: "Ultra-Fast Transfers & Clipboard",
    dt_tp_lede: "Transfer large files of tens of gigabytes in seconds & automatically sync 2-way clipboard between two local PCs over shared Wi-Fi.",
    dt_tp_btn_dl: "Download Teleport (.exe)",
    dt_tp_btn_web: "Try File Transfer on Web",
    dt_tp_showcase_title: "Visual Demonstration of ZCL Teleport",
    dt_tp_clip_desc: "Copy text or images on PC A &rarr; Paste instantly on PC B",
    dt_features_title: "4 Key Product Highlights",
    dt_tp_f1_title: "Unlimited file transfer size",
    dt_tp_f1_desc: "Move huge files (raw 4K footage, large folders, installers) in seconds without worrying about network bottlenecks.",
    dt_tp_f2_title: "Automatic local peer discovery",
    dt_tp_f2_desc: "Computers connected to the same Wi-Fi find each other automatically with zero manual IP configuration.",
    dt_tp_f3_title: "Automatic resume on network drop",
    dt_tp_f3_desc: "If Wi-Fi drops momentarily, the transfer automatically resumes where it left off without starting over.",
    dt_tp_f4_title: "Instant 2-way clipboard sync",
    dt_tp_f4_desc: "Copy links, text, or images on your laptop and paste directly onto your desktop smoothly.",

    // Dedicated App: Remote
    dt_rm_category: "Remote Desktop Control",
    dt_rm_lede: "Smooth remote desktop control with instant mouse response and zero lag over local Wi-Fi in the same room.",
    dt_rm_btn_dl: "Download Remote (.exe)",
    dt_rm_btn_web: "Try Remote Control on Web",
    dt_rm_showcase_title: "Visual Demonstration of ZCL Remote",
    dt_rm_hud_desc: "Mouse motion, clicks, and keystrokes respond instantaneously as if sitting right in front of the PC",
    dt_rm_f1_title: "Instant mouse feedback, zero lag",
    dt_rm_f1_desc: "Direct peer transmission eliminates cloud delays, giving you fluid and immediate computer control.",
    dt_rm_f2_title: "Auto-tuned visual sharpness",
    dt_rm_f2_desc: "Intelligently balances picture clarity to guarantee smooth 60 FPS motion on your local connection.",
    dt_rm_f3_title: "Fully operational without Internet",
    dt_rm_f3_desc: "Even during broadband or undersea cable outages, your local Wi-Fi devices remain fully connected.",
    dt_rm_f4_title: "High privacy & one-touch disconnect",
    dt_rm_f4_desc: "Always requires permission before connecting, featuring an emergency disconnect bar for complete safety.",

    // Specifications
    dt_specs_title: "Technical Specifications",
    spec_speed: "Transfer Speed",
    spec_limit: "File Size Limit",
    spec_os: "Operating System",
    spec_security: "Security & Privacy",
    spec_license: "License & Author",
    spec_internet: "Internet Requirement",
    spec_fps: "Frame Rate",
    spec_mouse: "Response Latency",

    // 4 Highlights
    pil1_title: "Ultra-Fast Transfers",
    pil1_desc: "Transfer files of tens of gigabytes in seconds between two computers in the same room without network bottlenecks.",
    pil2_title: "Instant Mouse Response",
    pil2_desc: "Remotely control your computer as smoothly as sitting right in front of the screen, with zero lag.",
    pil3_title: "No Internet Needed",
    pil3_desc: "Even during internet outages, computers connected to the same Wi-Fi router continue working at full speed.",
    pil4_title: "Completely Private",
    pil4_desc: "Your data travels directly between your two computers. Nothing is sent to any external servers.",

    // Quick Hub Switcher
    hub_card_tp_sub: "Ultra-fast file transfers and instant text/image copy-pasting across PCs.",
    hub_card_rm_sub: "Smooth remote desktop control with zero mouse delay.",
    hub_card_studio_sub: "Experience file dropping and mouse control right in your browser.",
    hub_card_view_action: "Explore",
    hub_card_dl_title: "Download Center",
    hub_card_dl_action: "Open Download Tab",

    // Apps Bento
    bento_badge: "CORE APPLICATIONS",
    bento_title: "Simple · Fast · Reliable",
    bento_sub: "Built to solve everyday workflow needs between your local computers.",
    tp_status: "Preview build",
    tp_title: "ZCL Teleport",
    tp_desc: "Send unlimited files and sync clipboard contents seamlessly over local Wi-Fi.",
    tp_f1: "Send movies, photos, and large archives in seconds",
    tp_f2: "Auto-resumes if Wi-Fi or cables temporarily disconnect",
    tp_f3: "Copy text or images on one PC and paste on another instantly",
    tp_btn_dl: "Download Teleport (.exe)",
    tp_btn_dl_view: "View in Download Center",
    tp_btn_web: "Try on Web",

    rm_status: "Preview build",
    rm_title: "ZCL Remote",
    rm_desc: "Ultra-smooth remote desktop over Wi-Fi. Instant mouse feedback, no lag, no ads.",
    rm_f1: "Crystal clear display with fluid motion",
    rm_f2: "Instant mouse and keyboard response with zero delay",
    rm_f3: "Emergency stop button to disconnect immediately whenever you want",
    rm_btn_dl: "Download Remote (.exe)",
    rm_btn_dl_view: "View in Download Center",
    rm_btn_web: "Try on Web",
    road_title: "Upcoming Applications",

    // Download Center
    dl_badge: "DOWNLOAD CENTER",
    dl_title: "Download for Windows",
    dl_sub: "100% Free. No sign-up required. Download and start using right away.",
    dl_tp_name: "ZCL Teleport",
    dl_tp_desc: "High-speed file transfer and instant clipboard synchronization across local computers.",
    dl_rm_name: "ZCL Remote",
    dl_rm_desc: "Ultra-smooth remote desktop control with instant mouse feedback and no lag.",
    dl_btn_installer: "Download Installer (.exe)",
    dl_btn_portable: "Download Portable (.zip)",
    dl_sync_live: "Latest build",
    dl_sync_fallback: "Stable build",
    dl_view_release: "View releases on GitHub",
    dl_version_prefix: "Version",
    dl_portable_label: "Download Portable",
    pwa_title: "Install Directly from Browser",
    pwa_desc: "Install this web app to your desktop or phone home screen for instant offline access.",
    pwa_install_btn: "Install ZCL Hub",

    // Studio
    studio_badge: "LIVE IN-BROWSER",
    studio_title: "Try Right in Your Browser",
    studio_sub: "Experience local peer features in real-time: ultra-fast file transfer, two-way clipboard sync, smooth remote desktop, and network speed benchmarks.",
    studio_tab_tp: "Try File Transfer & Clipboard (Teleport)",
    studio_tab_rm: "Try Remote Desktop (Remote)",
    studio_tab_bench: "Check Wi-Fi Speed (Benchmark)",
    studio_status_ready: "Direct local network · 2 devices ready",

    // Teleport
    tp_send_from: "Sender Device (Personal Laptop)",
    tp_send_to_label: "Send to computer in room:",
    tp_drop_title: "Drop files here or click to browse",
    tp_drop_sub: "Files transfer directly to the receiving computer in your room with no cloud server involved",
    tp_btn_browse: "Choose file from computer",
    tp_preset_label: "Or try instantly with preset samples:",
    tp_preset_video: "4K Video (2.4 GB)",
    tp_preset_photos: "RAW Photos (850 MB)",
    tp_preset_doc: "Project Document (45 MB)",
    tp_peers_title: "Computers found in this room",
    tp_transfer_demo: "Video_Du_An_4K.mov",
    tp_speed: "Current speed:",
    tp_stat_transferred: "Transferred:",
    tp_stat_speed: "Current speed:",
    tp_stat_eta: "Time remaining:",
    tp_btn_pause: "Pause",
    tp_btn_resume: "Resume",
    tp_btn_cancel: "Cancel",
    tp_btn_restart: "Send Again",
    tp_history_title: "Recent transfer history:",

    // Clipboard Sync
    studio_clip_title: "Live Two-Way Clipboard Sync Demo",
    studio_clip_sub: "Copy text, links, or images on one PC and receive them on the other machine in 0.01s.",
    studio_clip_status: "Ready to Sync · 0.01s",
    studio_clip_label_a: "Type or choose text to copy:",
    studio_clip_btn_copy: "Copy to PC B",
    studio_clip_label_b: "Received text content:",
    studio_clip_done: "Pasted",
    clip_sample_label: "Quick samples:",
    clip_direction_toggle: "Switch Direction",

    // Remote
    rm_target_select_label: "Control computer:",
    rm_ip_placeholder: "Computer name or connection code",
    rm_connect_btn: "Start Control",
    rm_disconnect_btn: "Pause Control",
    rm_fullscreen: "Fullscreen",
    rm_trail_btn: "Mouse Trail",
    rm_overlay_title: "Click to test mouse control",
    rm_overlay_sub: "Move and click your mouse in this area to feel immediate zero-lag response",
    rm_key_label: "Remote Keyboard:",
    rm_key_clear: "Clear",

    // Benchmark
    bench_title: "Real-Time Local Network Speed Benchmark",
    bench_sub: "Compare direct local Wi-Fi / LAN cable transfer speeds against conventional cloud/internet transfers.",
    bench_btn_run: "Start Speed Test",
    bench_env_label: "Select network environment:",
    bench_env_1: "Standard Wi-Fi (2.4GHz / Legacy Router)",
    bench_env_2: "Next-Gen Wi-Fi (Wi-Fi 6 / 6E)",
    bench_env_3: "Direct LAN Cable (Gigabit)",
    bench_wave_title: "Real-time bandwidth stability graph:",
    bench_metric_bw: "Measured Bandwidth",
    bench_metric_ping: "Ping Latency",
    bench_metric_jitter: "Connection Jitter",
    bench_metric_loss: "Packet Loss",
    bench_calc_title: "Estimated Transfer Time Comparison",
    bench_calc_sub: "Pick a file size to compare transfer time between ZCL Hub and Cloud/Internet:",
    bench_calc_lan: "Via ZCL Hub (Wi-Fi 6)",
    bench_calc_cloud: "Via Conventional Cloud / Internet",

    page_title: "ZCL Hub — Ultra-Fast File Transfer & Remote Desktop Control",
    chat_bubble_sent: "File sent successfully!",
    chat_bubble_received: "Received! Super fast!",
    orbit_tag_b: "Desktop PC B",
    orbit_val_latency: "0.2ms (Zero mouse lag)",
    orbit_val_security: "100% Local room, 0 external servers",
    orbit_val_route: "Room Wi-Fi &rarr; Direct transfer",
    orbit_node_pc: "Desktop PC",
    orbit_node_phone: "Mobile Phone",
    road_dev: "In Development",
    road_desc_cast: "Wireless screen and audio casting from PC to meeting room TV or projector.",
    road_desc_chat: "Fast messaging and voice calls between room computers, strictly secure.",
    road_desc_sync: "Automatic folder sync between desktop PC and personal laptop.",
    detail_status_ready: "Ready · v0.1.0",
    chip_gpl: "Open Source GPL-3.0",
    chip_author: "Author: Nguyen Hoang Tung",
    bento_badge_speed: "Transfer Speed",
    bento_badge_clip: "Two-Way Clipboard",
    bento_tag_clip: "Instant · 0s",
    spec_val_speed: "100 MB/s – 1 GB/s (Max network speed)",
    spec_val_limit: "Unlimited (Tested up to 150 GB)",
    spec_val_security: "Direct local data path, 0 external servers",
    spec_val_internet: "No Internet needed, just shared local Wi-Fi",
    bento_badge_fps: "Frame Rate",
    bento_tag_fps: "60 FPS · Smooth",
    hud_mouse_instant: "Mouse: Instant",
    bento_badge_latency: "Latency",
    bento_tag_latency: "Under 1ms · Zero Lag",
    spec_val_fps: "Smooth 60 FPS",
    spec_val_latency: "Under 1ms (Instant response)",
    spec_val_security_rm: "Direct local data path, 0 external servers",
    dl_req_win: "Requirement: Windows 10 or Windows 11 PC",
    tp_send_to_label_prefix: "Send to: ",
    tp_status_transferring: "Transferring",
    tp_stat_progress: "Progress:",
    tp_history_count: "2 files received",
    tag_local_room: "100% Local Room",
    clip_role_source: "Source Device",
    clip_sample_link: "Link",
    clip_sample_wifi: "Wi-Fi Password",
    clip_sample_note: "Quick Note",
    clip_latency_tag: "0.01s (Instant)",
    clip_role_target: "Auto-Received",
    remote_hud_latency: "0.2 ms (Zero Lag)",
    remote_hud_status: "Direct Local LAN",
    bench_target_wifi6: "Tested on: Wi-Fi 6",
    bench_wave_sub: "100% Stable · Zero Packet Loss",
    bench_bw_desc: "Transfer a 4K movie in just 2.5 seconds.",
    bench_ping_desc: "Instant mouse response, feels like native desktop.",
    bench_jitter_desc: "Zero signal jitter, rock-solid continuous stream.",
    bench_loss_desc: "100% Local packets, zero external leaks.",
    calc_lan_note: "Fully utilizes local Wi-Fi bandwidth, zero mobile data consumed.",
    calc_cloud_note: "Requires cloud upload, constrained by internet upload speed limits.",
    qs_step1_title: "Download the app",
    qs_step2_title: "Open the app",
    qs_step3_title: "Start working",
    modal_smartscreen_tip: "<strong>Quick tip:</strong> If Windows SmartScreen shows a warning, simply click <em>\"More info\"</em> &rarr; choose <em>\"Run anyway\"</em>.",
    toast_downloading: "Downloading installer file...",
    hist_item_1_sub: "Sent to Laptop-LamViec · 0.04s",
    hist_item_2_sub: "Sent to May-Ban-Phong-Khach · 0.45s",
    clip_machine_a: "PC A (Laptop)",
    clip_machine_b: "PC B (Desktop)",
    clip_time_recent: "Synced: just now",

    // 3 Steps & FAQ
    qs_badge: "3 EASY STEPS",
    qs_title: "How to use in 1 minute",
    qs_sub: "Anyone can follow along easily.",
    qs_step1: "Open the [Download] tab and download the app on both computers you want to connect.",
    qs_step2: "Connect both computers to the same Wi-Fi router (or LAN cable), then open the app.",
    qs_step3: "Both computers will see each other automatically. Just click to send files or control.",

    faq_badge: "FAQ",
    faq_title: "Frequently Asked Questions",
    faq_q1: "Will it work if my internet goes down?",
    faq_a1: "Yes, absolutely! The app only needs both computers connected to the same Wi-Fi router or network cable. Transfers and remote control work at full speed even if the international cable is cut.",
    faq_q2: "Can anyone spy on my data or send it outside?",
    faq_a2: "Never. Data travels exclusively between your two local computers. The app has no external storage servers, requires no login, and never tracks your activity.",
    faq_q3: "Is it completely free? Are there session limits?",
    faq_a3: "100% free forever. Transfer as many files as you want and control as long as you need with no unexpected timeouts and no ads.",
    faq_q4: "What if Windows Defender shows a protection message?",
    faq_a4: "If Windows displays a blue prompt, simply click 'More info' and then 'Run anyway'. When prompted for firewall access, check 'Private networks' to allow the two machines to talk to each other.",

    // Footer
    footer_desc: "Faster, smoother, and completely private across local computers.",
    footer_apps: "Apps",
    footer_res: "Categories",
    footer_author: "Author",
    footer_contact: "Author & Contact",
    footer_rights: "Open source under GPL-3.0. Developed by Nguyen Hoang Tung.",
    modal_btn_start: "Start Download",
    // Eco Mode
    eco_toggle: "Eco Mode / Reduce background effects",
    eco_enabled_toast: "Eco mode enabled (Background effects paused)",
    eco_disabled_toast: "Eco mode disabled (Background effects resumed)",

    // LAN Transfer Time Calculator
    calc_badge: "REAL-WORLD SPEED CALCULATOR",
    calc_title: "Estimate file transfer time in room",
    calc_sub: "Slide to select file size and see how direct local transfers beat slow cloud uploads.",
    calc_size_label: "Select file size:",
    calc_net_label: "Select local room network standard:",
    calc_net_basic: "Basic Wi-Fi (~40 MB/s)",
    calc_net_wifi6: "High-speed Wi-Fi / 5GHz (~110 MB/s)",
    calc_net_lan: "Direct LAN cable (~120 MB/s)",
    calc_zcl_note: "Transfers directly between 2 computers with no external servers.",
    calc_cloud_note: "Uploads then downloads through cloud servers, taking much longer.",
    calc_faster_badge: "{n}x faster!",
    calc_savings_text: "Saves more than {p}% of waiting time.",
    calc_btn_try_studio: "Try now",

    // FAQ Instant Search & Additional Questions
    faq_search_placeholder: "Search questions (e.g. offline, security, speed, size...)",
    faq_search_count_format: "Found {n} answer(s)",
    faq_empty_title: "No matching questions found",
    faq_empty_sub: "Try searching with a different keyword or click below to view all questions.",
    faq_btn_reset: "Show all questions",
    faq_q5: "What is the maximum file transfer speed and what does it depend on?",
    faq_a5: "Speed directly depends on your Wi-Fi router or network cable. Basic Wi-Fi reaches 30–80 MB/s, while Wi-Fi 6 or direct Ethernet can reach 100MB/s – 1GB/s. Being a local transfer, it is always many times faster than external internet uploads.",
    faq_q6: "If a large file transfer is interrupted, do I have to restart from the beginning?",
    faq_a6: "No need to restart. The application automatically retains completed chunks. Once reconnected on the same room network, transfer resumes smoothly.",

    // Dual-Tab Sync in Studio
    studio_open_tab_btn: "Open 2nd Tab for live sync",
    studio_status_dual_active: "Live dual-tab sync active (Tab A ⇄ Tab B)",
    studio_toast_tab_detected: "Detected 2 parallel ZCL Hub tabs! Clipboard copies and file transfers will sync live.",
    studio_toast_clipboard_received: "Received new clipboard text from peer tab via local sync!",
    studio_toast_file_received: "Received file from peer tab: ",
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

  document.querySelectorAll('[data-i18n-title]').forEach((el) => {
    const key = el.getAttribute('data-i18n-title');
    if (i18n[lang][key]) {
      el.setAttribute('title', i18n[lang][key]);
      el.setAttribute('aria-label', i18n[lang][key]);
    }
  });

  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const key = isLight ? 'theme_dark' : 'theme_light';
    if (i18n[lang][key]) {
      themeBtn.setAttribute('title', i18n[lang][key]);
      themeBtn.setAttribute('aria-label', i18n[lang][key]);
    }
  }

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  document.documentElement.setAttribute('lang', lang);

  // Update Document Title
  if (i18n[lang] && i18n[lang].page_title) {
    document.title = i18n[lang].page_title;
  }

  // Update Peer Select Options
  const tpPeerSelect = document.getElementById('tpPeerSelect');
  if (tpPeerSelect && tpPeerSelect.options.length >= 3) {
    if (lang === 'vi') {
      tpPeerSelect.options[0].text = 'Laptop-LamViec (Chung Wi-Fi 6 · Đã ghép nối)';
      tpPeerSelect.options[1].text = 'May-Ban-Phong-Khach (Dây mạng LAN · 1Gbps)';
      tpPeerSelect.options[2].text = 'MacBook-Dong-Nghiep (Wi-Fi 5GHz · Đã ghép nối)';
    } else {
      tpPeerSelect.options[0].text = 'Work-Laptop (Shared Wi-Fi 6 · Paired)';
      tpPeerSelect.options[1].text = 'Living-Room-PC (LAN Cable · 1Gbps)';
      tpPeerSelect.options[2].text = 'Colleague-MacBook (Wi-Fi 5GHz · Paired)';
    }
  }

  const rmPeerSelect = document.getElementById('remotePeerSelect') || document.getElementById('remoteDeviceSelect');
  if (rmPeerSelect && rmPeerSelect.options.length >= 3) {
    if (lang === 'vi') {
      rmPeerSelect.options[0].text = 'Máy bàn phòng khách (Windows 11) · 1920×1080';
      rmPeerSelect.options[1].text = 'Laptop văn phòng (macOS) · 2560×1600';
      rmPeerSelect.options[2].text = 'Máy chủ gia đình (Ubuntu) · 1920×1080';
    } else {
      rmPeerSelect.options[0].text = 'Living Room Desktop (Windows 11) · 1920×1080';
      rmPeerSelect.options[1].text = 'Office Laptop (macOS) · 2560×1600';
      rmPeerSelect.options[2].text = 'Home Server (Ubuntu) · 1920×1080';
    }
  }

  // Update Clipboard Machine Tags & Button
  const clipTagSource = document.getElementById('clipLabelSourceMachine');
  const clipTagTarget = document.getElementById('clipLabelTargetMachine');
  const btnCopy = document.getElementById('btnTestCopy');
  if (clipTagSource && clipTagTarget) {
    const isDirA = typeof clipDirection === 'undefined' || clipDirection === 'A_TO_B';
    if (isDirA) {
      clipTagSource.innerText = lang === 'vi' ? 'Máy A (Laptop cá nhân)' : 'PC A (Laptop)';
      clipTagTarget.innerText = lang === 'vi' ? 'Máy B (Máy bàn làm việc)' : 'PC B (Desktop)';
      if (btnCopy) { const span = btnCopy.querySelector('span'); if (span) span.innerText = lang === 'vi' ? 'Sao chép sang Máy B' : 'Copy to PC B'; }
    } else {
      clipTagSource.innerText = lang === 'vi' ? 'Máy B (Máy bàn làm việc)' : 'PC B (Desktop)';
      clipTagTarget.innerText = lang === 'vi' ? 'Máy A (Laptop cá nhân)' : 'PC A (Laptop)';
      if (btnCopy) { const span = btnCopy.querySelector('span'); if (span) span.innerText = lang === 'vi' ? 'Sao chép sang Máy A' : 'Copy to PC A'; }
    }
  }

  if (typeof updateDownloadCenterUI === 'function') {
    updateDownloadCenterUI();
  }

  if (typeof updateTransferCalculatorUI === 'function') {
    updateTransferCalculatorUI();
  }

  if (typeof window.updateCalcComparison === 'function') {
    window.updateCalcComparison();
  }
}

// ==========================================
// 2. MAIN TABS SWITCHER & STORE APP VIEWS
// ==========================================
function showAppDetail(appName, updateHash = true) {
  const catalogView = document.getElementById('appsCatalogView');
  const teleportView = document.getElementById('appDetailTeleport');
  const remoteView = document.getElementById('appDetailRemote');

  if (catalogView) catalogView.classList.remove('active-app-view');
  if (teleportView) teleportView.classList.remove('active-app-view');
  if (remoteView) remoteView.classList.remove('active-app-view');

  if (appName === 'teleport') {
    if (teleportView) teleportView.classList.add('active-app-view');
    if (updateHash) history.pushState(null, '', '#apps/teleport');
  } else if (appName === 'remote') {
    if (remoteView) remoteView.classList.add('active-app-view');
    if (updateHash) history.pushState(null, '', '#apps/remote');
  } else {
    if (catalogView) catalogView.classList.add('active-app-view');
    if (updateHash) history.pushState(null, '', '#apps');
  }
}

function updateTabSlidingIndicator() {
  const bar = document.querySelector('.main-tabs-bar');
  const indicator = document.getElementById('tabSlidingIndicator');
  if (!bar || !indicator) return;

  const activePill = bar.querySelector('.main-tab-pill.active');
  if (activePill) {
    indicator.style.transform = `translateX(${activePill.offsetLeft}px)`;
    indicator.style.width = `${activePill.offsetWidth}px`;
    indicator.style.opacity = '1';

    if (bar.parentElement) {
      const wrapper = bar.parentElement;
      const pillCenter = activePill.offsetLeft + activePill.offsetWidth / 2;
      const scrollTarget = pillCenter - wrapper.clientWidth / 2;
      wrapper.scrollTo({ left: scrollTarget, behavior: 'smooth' });
    }
  } else {
    indicator.style.opacity = '0';
  }
}

function switchMainTab(targetTabId, updateHash = true) {
  if (!targetTabId) return;

  let cleanId = targetTabId.replace(/^#/, '').replace(/^tab-/, '');

  // Sub-app routing for dedicated app pages
  let subApp = null;
  if (cleanId === 'apps/teleport' || cleanId === 'teleport') {
    cleanId = 'apps';
    subApp = 'teleport';
  } else if (cleanId === 'apps/remote' || cleanId === 'remote') {
    cleanId = 'apps';
    subApp = 'remote';
  } else if (cleanId === 'apps') {
    subApp = null;
  }

  const tabAliases = {
    'home': 'overview',
    'hero': 'overview',
    'pillars': 'overview',
    'products': 'apps',
    'bento': 'apps',
    'apps': 'apps',
    'roadmap': 'apps',
    'download': 'download',
    'download-teleport': 'download',
    'download-remote': 'download',
    'studio': 'studio',
    'quickstart': 'faq',
    'guide': 'faq',
    'faq': 'faq'
  };

  if (tabAliases[cleanId]) {
    cleanId = tabAliases[cleanId];
  }

  const tabViewId = 'tab-' + cleanId;
  const targetView = document.getElementById(tabViewId);
  if (!targetView) return;

  // 1. Hide all tab views, show target view
  document.querySelectorAll('.tab-view').forEach((view) => {
    view.classList.remove('active');
  });
  targetView.classList.add('active');

  // If in apps tab, toggle catalog or dedicated view
  if (cleanId === 'apps') {
    showAppDetail(subApp, false);
  }

  // 2. Update active status on buttons
  document.querySelectorAll('[data-tab]').forEach((btn) => {
    const btnTab = btn.getAttribute('data-tab').replace(/^tab-/, '');
    if (['overview', 'apps', 'download', 'studio', 'faq'].includes(btnTab)) {
      if (btnTab === cleanId) {
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      }
    }
  });

  updateTabSlidingIndicator();

  // 3. Update URL hash
  if (updateHash) {
    if (cleanId === 'apps' && subApp) {
      history.pushState(null, '', '#apps/' + subApp);
    } else {
      history.pushState(null, '', '#' + cleanId);
    }
  }

  // 4. Scroll smoothly to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // 5. Special hook for Studio canvas resize
  if (cleanId === 'studio') {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 60);
  }

  // 6. Tự động kiểm tra bản phát hành mới khi mở mục Tải về
  if (cleanId === 'download' && typeof syncReleasesFromGitHub === 'function') {
    syncReleasesFromGitHub();
  }
}

function initMainTabs() {
  document.querySelectorAll('[data-tab]').forEach((btn) => {
    const tabTarget = btn.getAttribute('data-tab');
    const cleanTab = tabTarget.replace(/^tab-/, '');
    if (['overview', 'apps', 'download', 'studio', 'faq'].includes(cleanTab)) {
      btn.addEventListener('click', (e) => {
        // If it's a specific app target, handled separately
        if (btn.hasAttribute('data-app-target')) return;
        e.preventDefault();
        switchMainTab(tabTarget);
      });
    }
  });

  // Dedicated App Detail view handlers
  document.querySelectorAll('[data-action="open-detail"]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const appTarget = btn.getAttribute('data-app-target');
      switchMainTab('apps', false);
      showAppDetail(appTarget, true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  document.querySelectorAll('[data-action="back-to-catalog"]').forEach((btn) => {
    btn.addEventListener('click', () => {
      showAppDetail(null, true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  document.querySelectorAll('[data-app-target]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const app = link.getAttribute('data-app-target');
      if (app && link.getAttribute('data-tab') === 'tab-apps') {
        e.preventDefault();
        switchMainTab('apps', false);
        showAppDetail(app, true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });

  // Fast jumper to Studio specific panels
  document.querySelectorAll('[data-studio-tab]').forEach((link) => {
    link.addEventListener('click', () => {
      const targetStudio = link.getAttribute('data-studio-tab');
      if (targetStudio) {
        setTimeout(() => {
          const studioBtn = document.querySelector(`.studio-tab-btn[data-app="${targetStudio}"]`);
          if (studioBtn) studioBtn.click();
        }, 100);
      }
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href && href !== '#') {
        const target = href.replace(/^#/, '');
        if (target.startsWith('apps/') || target === 'teleport' || target === 'remote') {
          e.preventDefault();
          switchMainTab(target);
          return;
        }

        const validTargets = [
          'overview', 'home', 'hero', 'pillars',
          'products', 'apps', 'roadmap',
          'download', 'download-teleport', 'download-remote',
          'studio', 'quickstart', 'guide', 'faq'
        ];
        if (validTargets.includes(target)) {
          e.preventDefault();
          switchMainTab(target);
        }
      } else if (href === '#') {
        e.preventDefault();
        switchMainTab('overview');
      }
    });
  });

  document.querySelectorAll('.brand').forEach((brand) => {
    brand.addEventListener('click', (e) => {
      e.preventDefault();
      switchMainTab('overview');
    });
  });

  function handleHash() {
    const hash = window.location.hash;
    if (hash && hash.length > 1) {
      switchMainTab(hash, false);
    } else {
      switchMainTab('overview', false);
    }
  }

  window.addEventListener('popstate', handleHash);
  handleHash();
  window.addEventListener('resize', updateTabSlidingIndicator);
  setTimeout(updateTabSlidingIndicator, 80);
}

// ==========================================
// 3. INTERACTIVE WEB STUDIO DEMO
// ==========================================
function initStudio() {
  const tabBtns = document.querySelectorAll('.studio-tab-btn');
  const panels = document.querySelectorAll('.studio-panel');

  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const app = btn.getAttribute('data-app');
      tabBtns.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      panels.forEach((p) => p.classList.remove('active'));

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const target = document.getElementById(`panel-${app}`);
      if (target) target.classList.add('active');

      if (app === 'remote') {
        window.dispatchEvent(new Event('resize'));
        if (typeof drawRemoteScreen === 'function') drawRemoteScreen();
      } else if (app === 'benchmark') {
        window.dispatchEvent(new Event('resize'));
      }
    });
  });

  // ==========================================
  // A. TELEPORT FILE TRANSFER SIMULATION
  // ==========================================
  const dropZone = document.getElementById('dropZone');
  const fileInput = document.getElementById('fileInput');
  const btnBrowse = document.getElementById('btnBrowseFile');
  const peerSelect = document.getElementById('tpPeerSelect');
  const activePeerName = document.getElementById('activePeerTargetName');
  const connSpeedChip = document.getElementById('connSpeedChipText');

  // Peer destination selection
  if (peerSelect) {
    peerSelect.addEventListener('change', () => {
      const val = peerSelect.value;
      if (val === 'laptop') {
        if (activePeerName) activePeerName.innerText = 'Laptop-LamViec';
        if (connSpeedChip) connSpeedChip.innerText = 'Wi-Fi 6 · 960 MB/s';
      } else if (val === 'pc') {
        if (activePeerName) activePeerName.innerText = 'May-Ban-Phong-Khach';
        if (connSpeedChip) connSpeedChip.innerText = 'Dây mạng LAN · 1.18 GB/s';
      } else {
        if (activePeerName) activePeerName.innerText = 'MacBook-Dong-Nghiep';
        if (connSpeedChip) connSpeedChip.innerText = 'Wi-Fi 5GHz · 450 MB/s';
      }
      showToast(currentLang === 'vi' 
        ? `Đã chọn đích gửi: ${activePeerName ? activePeerName.innerText : val}` 
        : `Target destination updated`);
    });
  }

  // Browse File trigger
  if (btnBrowse && fileInput) {
    btnBrowse.addEventListener('click', (e) => {
      e.stopPropagation();
      fileInput.click();
    });
  }

  // Drop zone events
  if (dropZone && fileInput) {
    dropZone.addEventListener('click', () => fileInput.click());
    dropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropZone.classList.add('dragover');
    });
    ['dragleave', 'dragend'].forEach((ev) => {
      dropZone.addEventListener(ev, () => dropZone.classList.remove('dragover'));
    });
    dropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropZone.classList.remove('dragover');
      const files = e.dataTransfer.files;
      if (files && files.length > 0) {
        startTransfer(files[0].name, files[0].size);
      }
    });
    fileInput.addEventListener('change', () => {
      if (fileInput.files && fileInput.files.length > 0) {
        startTransfer(fileInput.files[0].name, fileInput.files[0].size);
      }
    });
  }

  // 1-Click Preset Files
  const presetPills = [
    document.getElementById('btnPresetVideo'),
    document.getElementById('btnPresetPhotos'),
    document.getElementById('btnPresetDoc')
  ];

  presetPills.forEach((btn) => {
    if (!btn) return;
    btn.addEventListener('click', () => {
      presetPills.forEach((p) => p && p.classList.remove('active'));
      btn.classList.add('active');
      const name = btn.getAttribute('data-name');
      const size = parseInt(btn.getAttribute('data-size'), 10) || 500000000;
      startTransfer(name, size);
    });
  });

  // Transfer Control Engine
  let transferInterval = null;
  let isPaused = false;
  let currentProgress = 80;
  let currentFile = { name: 'Video_Du_An_4K.mov', size: 2576980377 };

  const bar = document.getElementById('progressFill');
  const pct = document.getElementById('progressPercent');
  const metaBytes = document.getElementById('progressBytes');
  const speedEl = document.getElementById('progressSpeed');
  const etaEl = document.getElementById('progressEta');
  const activeNameEl = document.getElementById('activeFileName');
  const activeStatusTag = document.getElementById('activeTransferStatusTag');
  const btnPause = document.getElementById('btnTransferPause');
  const btnPauseText = document.getElementById('btnTransferPauseText');
  const btnCancel = document.getElementById('btnTransferCancel');
  const btnRestart = document.getElementById('btnTransferRestart');
  const historyList = document.getElementById('transferHistoryList');
  const historyCount = document.getElementById('historyCount');
  let completedFileCount = 2;

  function updateTransferUI(progress, currentMB, totalMB, speedMB, remainingSec) {
    if (bar) bar.style.width = `${progress}%`;
    if (pct) pct.innerText = `${Math.round(progress)}%`;

    if (metaBytes) {
      if (totalMB >= 1000) {
        metaBytes.innerText = `${(currentMB / 1024).toFixed(2)} GB / ${(totalMB / 1024).toFixed(2)} GB`;
      } else {
        metaBytes.innerText = `${Math.round(currentMB)} MB / ${Math.round(totalMB)} MB`;
      }
    }

    if (speedEl) {
      speedEl.innerText = `${Math.round(speedMB)} MB/s`;
    }

    if (etaEl) {
      if (progress >= 100) {
        etaEl.innerText = currentLang === 'vi' ? 'Hoàn tất' : 'Done';
      } else if (remainingSec < 1) {
        etaEl.innerText = currentLang === 'vi' ? '< 1 giây' : '< 1 sec';
      } else {
        etaEl.innerText = `${remainingSec.toFixed(1)} ${currentLang === 'vi' ? 'giây' : 'sec'}`;
      }
    }
  }

  function startTransfer(fileName, fileSize) {
    if (transferInterval) clearInterval(transferInterval);
    isPaused = false;
    currentProgress = 0;
    currentFile = { name: fileName, size: fileSize };

    if (activeNameEl) activeNameEl.innerText = fileName;
    if (activeStatusTag) {
      activeStatusTag.innerText = currentLang === 'vi' ? 'Đang truyền' : 'Transferring';
      activeStatusTag.style.background = 'rgba(133, 237, 202, 0.15)';
      activeStatusTag.style.color = 'var(--mint)';
    }
    if (btnPauseText) {
      btnPauseText.innerText = currentLang === 'vi' ? 'Tạm dừng' : 'Pause';
    }

    const totalMB = Math.max(15, Math.round(fileSize / (1024 * 1024)));
    const baseSpeed = 950; // MB/s on Wi-Fi 6
    const startTime = Date.now();

    transferInterval = setInterval(() => {
      if (isPaused) return;

      // Realistic speed fluctuation
      const speedJitter = baseSpeed + (Math.random() * 60 - 30);
      currentProgress += 5.5;

      if (currentProgress > 100) currentProgress = 100;

      const currentMB = (totalMB * currentProgress) / 100;
      const remainingMB = Math.max(0, totalMB - currentMB);
      const remainingSec = remainingMB / speedJitter;

      updateTransferUI(currentProgress, currentMB, totalMB, speedJitter, remainingSec);

      if (currentProgress >= 100) {
        clearInterval(transferInterval);
        transferInterval = null;

        if (activeStatusTag) {
          activeStatusTag.innerText = currentLang === 'vi' ? 'Hoàn thành' : 'Completed';
          activeStatusTag.style.background = 'var(--mint-dark)';
          activeStatusTag.style.color = 'var(--mint)';
        }

        const elapsedSec = ((Date.now() - startTime) / 1000).toFixed(2);
        showToast(currentLang === 'vi' 
          ? `Đã gửi xong ${fileName} (${totalMB >= 1000 ? (totalMB/1024).toFixed(1) + 'GB' : totalMB + 'MB'}) sau ${elapsedSec}s!`
          : `Successfully sent ${fileName} in ${elapsedSec}s!`);

        // Add to history list
        if (historyList) {
          completedFileCount++;
          if (historyCount) {
            historyCount.innerText = `${completedFileCount} ${currentLang === 'vi' ? 'file đã nhận' : 'files received'}`;
          }

          const targetName = activePeerName ? activePeerName.innerText : 'Laptop-LamViec';
          const sizeStr = totalMB >= 1000 ? (totalMB / 1024).toFixed(1) + ' GB' : totalMB + ' MB';
          const item = document.createElement('div');
          item.className = 'history-item';
          item.innerHTML = `
            <div class="hist-icon success">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <div class="hist-info">
              <span class="hist-name">${fileName} (${sizeStr})</span>
              <span class="hist-sub">${currentLang === 'vi' ? 'Gửi sang' : 'Sent to'} ${targetName} · ${elapsedSec}s</span>
            </div>
            <span class="hist-badge">100% Trong phòng</span>
          `;
          historyList.prepend(item);
        }
      }
    }, 70);
  }

  // Transfer Action Buttons
  if (btnPause) {
    btnPause.addEventListener('click', () => {
      if (currentProgress >= 100) return;
      isPaused = !isPaused;
      if (btnPauseText) {
        btnPauseText.innerText = isPaused 
          ? (currentLang === 'vi' ? 'Tiếp tục' : 'Resume') 
          : (currentLang === 'vi' ? 'Tạm dừng' : 'Pause');
      }
      if (activeStatusTag) {
        activeStatusTag.innerText = isPaused 
          ? (currentLang === 'vi' ? 'Đã tạm dừng' : 'Paused') 
          : (currentLang === 'vi' ? 'Đang truyền' : 'Transferring');
        activeStatusTag.style.background = isPaused ? 'rgba(255,255,255,0.1)' : 'rgba(133, 237, 202, 0.15)';
        activeStatusTag.style.color = isPaused ? 'var(--text-muted)' : 'var(--mint)';
      }
    });
  }

  if (btnCancel) {
    btnCancel.addEventListener('click', () => {
      if (transferInterval) clearInterval(transferInterval);
      transferInterval = null;
      isPaused = false;
      currentProgress = 0;
      updateTransferUI(0, 0, Math.round(currentFile.size / (1024*1024)), 0, 0);
      if (activeStatusTag) {
        activeStatusTag.innerText = currentLang === 'vi' ? 'Đã hủy' : 'Cancelled';
        activeStatusTag.style.background = 'rgba(253, 170, 179, 0.15)';
        activeStatusTag.style.color = 'var(--pink)';
      }
      showToast(currentLang === 'vi' ? 'Đã dừng truyền file' : 'Transfer cancelled');
    });
  }

  if (btnRestart) {
    btnRestart.addEventListener('click', () => {
      startTransfer(currentFile.name, currentFile.size);
    });
  }

  // ==========================================
  // B. TWO-WAY CLIPBOARD SYNC ENGINE
  // ==========================================
  const btnCopy = document.getElementById('btnTestCopy');
  const clipInput = document.getElementById('clipInputA');
  const clipOutput = document.getElementById('clipReceivedText');
  const clipOutWrap = document.getElementById('clipOutputContainer');
  const clipStatusBadge = document.getElementById('clipSyncStatusBadge');
  const btnToggleDir = document.getElementById('btnToggleClipDirection');
  const clipArrowSvg = document.getElementById('clipArrowSvg');
  const btnCopyReceived = document.getElementById('btnCopyReceived');
  const clipTimeTag = document.getElementById('clipTimeTag');
  const clipTagSource = document.getElementById('clipLabelSourceMachine');
  const clipTagTarget = document.getElementById('clipLabelTargetMachine');
  const sampleChips = document.querySelectorAll('.sample-chip');

  let clipDirection = 'A_TO_B'; // 'A_TO_B' or 'B_TO_A'

  // Sample Chips
  sampleChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const val = chip.getAttribute('data-clip');
      if (clipInput && val) {
        clipInput.value = val;
        showToast(currentLang === 'vi' ? `Đã chọn mẫu: ${val}` : `Selected sample: ${val}`);
      }
    });
  });

  // Toggle Direction
  if (btnToggleDir) {
    btnToggleDir.addEventListener('click', () => {
      clipDirection = clipDirection === 'A_TO_B' ? 'B_TO_A' : 'A_TO_B';

      if (clipArrowSvg) {
        clipArrowSvg.classList.toggle('reversed', clipDirection === 'B_TO_A');
        clipArrowSvg.style.transform = '';
      }

      if (clipTagSource && clipTagTarget) {
        if (clipDirection === 'A_TO_B') {
          clipTagSource.innerText = currentLang === 'vi' ? 'Máy A (Laptop cá nhân)' : 'PC A (Laptop)';
          clipTagTarget.innerText = currentLang === 'vi' ? 'Máy B (Máy bàn làm việc)' : 'PC B (Desktop)';
          if (btnCopy) { const span = btnCopy.querySelector('span'); if (span) span.innerText = currentLang === 'vi' ? 'Sao chép sang Máy B' : 'Copy to PC B'; }
        } else {
          clipTagSource.innerText = currentLang === 'vi' ? 'Máy B (Máy bàn làm việc)' : 'PC B (Desktop)';
          clipTagTarget.innerText = currentLang === 'vi' ? 'Máy A (Laptop cá nhân)' : 'PC A (Laptop)';
          if (btnCopy) { const span = btnCopy.querySelector('span'); if (span) span.innerText = currentLang === 'vi' ? 'Sao chép sang Máy A' : 'Copy to PC A'; }
        }
      }

      showToast(currentLang === 'vi' 
        ? `Đã đảo chiều truyền: ${clipDirection === 'A_TO_B' ? 'Máy A -> Máy B' : 'Máy B -> Máy A'}` 
        : `Switched direction: ${clipDirection === 'A_TO_B' ? 'PC A -> PC B' : 'PC B -> PC A'}`);
    });
  }

  // Copy & Sync Trigger
  if (btnCopy && clipInput && clipOutput) {
    btnCopy.addEventListener('click', () => {
      const text = clipInput.value.trim() || (currentLang === 'vi' ? 'Tài liệu dự án 2026.docx' : 'Project Document 2026.docx');
      clipOutput.innerText = text;

      if (clipOutWrap) {
        clipOutWrap.classList.remove('flash-synced');
        void clipOutWrap.offsetWidth;
        clipOutWrap.classList.add('flash-synced');
      }

      if (clipStatusBadge) {
        clipStatusBadge.innerText = currentLang === 'vi' ? 'Đã đồng bộ · 0.01s' : 'Synced · 0.01s';
        setTimeout(() => {
          clipStatusBadge.innerText = currentLang === 'vi' ? 'Sẵn sàng dán · 0.01s' : 'Ready to Sync · 0.01s';
        }, 2200);
      }

      if (clipTimeTag) {
        clipTimeTag.innerText = currentLang === 'vi' ? 'Đồng bộ cách đây: vừa xong' : 'Synced: just now';
      }

      // Clipboard write attempt
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).catch(() => {});
      }

      const dest = clipDirection === 'A_TO_B' 
        ? (currentLang === 'vi' ? 'Máy B' : 'PC B') 
        : (currentLang === 'vi' ? 'Máy A' : 'PC A');
      showToast(currentLang === 'vi' 
        ? `Đã đồng bộ khay nhớ tạm sang ${dest} tức thì!` 
        : `Clipboard synced to ${dest} instantly!`);
    });
  }

  // Copy Received Text button
  if (btnCopyReceived && clipOutput) {
    btnCopyReceived.addEventListener('click', () => {
      const text = clipOutput.innerText.trim();
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).catch(() => {});
      }
      showToast(currentLang === 'vi' ? 'Đã sao chép nội dung vào khay nhớ tạm!' : 'Copied text to clipboard!');
    });
  }

  // ==========================================
  // C. REMOTE DESKTOP COCKPIT & CANVAS
  // ==========================================
  const canvas = document.getElementById('remoteCanvas');
  const stage = document.getElementById('remoteScreenStage');
  const overlay = document.getElementById('remoteOverlay');
  const overlayStartBtn = document.getElementById('btnOverlayStart');
  const btnToggleRemote = document.getElementById('btnRemoteToggle');
  const btnToggleRemoteText = document.getElementById('btnRemoteToggleText');
  const btnFullscreen = document.getElementById('btnRemoteFullscreen');
  const btnTrail = document.getElementById('btnRemoteTrail');
  const devSelect = document.getElementById('remoteDeviceSelect');
  const coordBadge = document.getElementById('remoteCursorCoord');
  const keyInput = document.getElementById('remoteKeyInput');
  const btnClearKey = document.getElementById('btnRemoteClearText');

  let isRemoteConnected = true;
  let isTrailEnabled = false;
  let mouseX = 220;
  let mouseY = 180;
  let mouseTrail = [];
  let clickRipples = [];
  let currentRemoteDev = 'win';

  // Draggable simulated Remote Window state
  let remoteWin = {
    x: 60,
    y: 50,
    w: 480,
    h: 240,
    isDragging: false,
    dragOffX: 0,
    dragOffY: 0
  };

  let drawRemoteScreen = function() {};

  if (canvas && stage) {
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.resetTransform();
      ctx.scale(dpr, dpr);
      drawRemoteScreen();
    }

    function triggerRipple(x, y) {
      clickRipples.push({ x, y, r: 0, opacity: 1 });
      function stepRipple() {
        if (clickRipples.length === 0) return;
        drawRemoteScreen();
        clickRipples = clickRipples.filter((item) => item.opacity > 0.05);
        clickRipples.forEach((item) => {
          item.r += 4;
          item.opacity *= 0.88;
        });
        if (clickRipples.length > 0) {
          requestAnimationFrame(stepRipple);
        }
      }
      requestAnimationFrame(stepRipple);
    }

    drawRemoteScreen = function() {
      const w = canvas.getBoundingClientRect().width;
      const h = canvas.getBoundingClientRect().height;
      if (w <= 0 || h <= 0) return;

      // 1. Wallpaper background
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, '#120f1b');
      grad.addColorStop(0.5, '#0b0912');
      grad.addColorStop(1, '#060509');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Subtle cyber grid lines on desktop
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // 2. Simulated Taskbar at bottom
      const taskbarH = 34;
      ctx.fillStyle = 'rgba(20, 17, 28, 0.95)';
      ctx.fillRect(0, h - taskbarH, w, taskbarH);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.beginPath();
      ctx.moveTo(0, h - taskbarH);
      ctx.lineTo(w, h - taskbarH);
      ctx.stroke();

      // Start Button Icon
      ctx.fillStyle = '#85edca';
      ctx.beginPath();
      ctx.roundRect(10, h - taskbarH + 7, 20, 20, 4);
      ctx.fill();

      // Active app tab in taskbar
      ctx.fillStyle = 'rgba(133, 237, 202, 0.12)';
      ctx.strokeStyle = 'rgba(133, 237, 202, 0.4)';
      ctx.beginPath();
      ctx.roundRect(38, h - taskbarH + 4, 150, 26, 4);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#f7f3ec';
      ctx.font = '11px Segoe UI, sans-serif';
      ctx.fillText('ZCL Remote Notepad', 48, h - taskbarH + 20);

      // Taskbar Clock & LAN pill on right
      ctx.fillStyle = '#85edca';
      ctx.beginPath();
      ctx.arc(w - 95, h - taskbarH + 17, 3, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#a097ac';
      ctx.font = '11px Cascadia Mono, monospace';
      ctx.fillText('LAN 1Gbps', w - 85, h - taskbarH + 21);
      ctx.fillText('12:00', w - 38, h - taskbarH + 21);

      // 3. Draggable App Window (ZCL Remote Notepad)
      const winW = Math.min(remoteWin.w, w - 40);
      const winH = Math.min(remoteWin.h, h - taskbarH - 30);
      const winX = Math.max(10, Math.min(remoteWin.x, w - winW - 10));
      const winY = Math.max(10, Math.min(remoteWin.y, h - taskbarH - winH - 10));

      // Window shadow & body
      ctx.fillStyle = 'rgba(19, 16, 27, 0.94)';
      ctx.strokeStyle = remoteWin.isDragging ? 'var(--mint)' : 'rgba(206, 163, 243, 0.35)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(winX, winY, winW, winH, 10);
      ctx.fill();
      ctx.stroke();

      // Window Titlebar
      ctx.fillStyle = 'rgba(32, 27, 44, 0.95)';
      ctx.beginPath();
      ctx.roundRect(winX, winY, winW, 34, [10, 10, 0, 0]);
      ctx.fill();

      // Traffic Lights (Close / Minimize / Maximize)
      ctx.fillStyle = '#ff5f56';
      ctx.beginPath();
      ctx.arc(winX + 18, winY + 17, 5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#ffbd2e';
      ctx.beginPath();
      ctx.arc(winX + 34, winY + 17, 5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#27c93f';
      ctx.beginPath();
      ctx.arc(winX + 50, winY + 17, 5, 0, Math.PI * 2);
      ctx.fill();

      // Window Title Text
      const devTitles = {
        win: currentLang === 'vi' ? 'Máy tính phòng khách (Windows 11) · Trực tiếp' : 'Living Room PC (Windows 11) · Live',
        mac: currentLang === 'vi' ? 'Laptop văn phòng (macOS) · Trực tiếp' : 'Office Laptop (macOS) · Live',
        linux: currentLang === 'vi' ? 'Máy chủ gia đình (Ubuntu) · Trực tiếp' : 'Home Server (Linux) · Live'
      };
      ctx.fillStyle = '#f7f3ec';
      ctx.font = 'bold 12px Segoe UI, sans-serif';
      ctx.fillText(devTitles[currentRemoteDev] || devTitles.win, winX + 70, winY + 21);

      // Window Content (Notepad Body)
      const typedText = keyInput && keyInput.value.trim() 
        ? keyInput.value 
        : (currentLang === 'vi' ? 'Xin chào từ ZCL Remote!' : 'Hello from ZCL Remote!');

      ctx.font = '13px Segoe UI, sans-serif';
      ctx.fillStyle = '#85edca';
      ctx.fillText(currentLang === 'vi' 
        ? '● Kết nối mạng nội bộ: Độ trễ 0.2ms · Chuột ăn ngay'
        : '● Local Network Direct: 0.2ms latency · Zero lag', winX + 22, winY + 65);

      ctx.fillStyle = '#cea3f3';
      ctx.fillText(currentLang === 'vi' 
        ? '● Tốc độ hiển thị: 60 khung hình/giây · Rất mượt mà' 
        : '● Frame rate: 60 FPS smooth motion', winX + 22, winY + 92);

      // User's Real-time Typed Content Box
      ctx.fillStyle = 'rgba(8, 7, 12, 0.75)';
      ctx.strokeStyle = 'rgba(133, 237, 202, 0.3)';
      ctx.beginPath();
      ctx.roundRect(winX + 20, winY + 115, winW - 40, 75, 6);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#a097ac';
      ctx.font = '11px Cascadia Mono, monospace';
      ctx.fillText(currentLang === 'vi' ? '> Bàn phím từ xa nhận được:' : '> Remote Keystroke Input:', winX + 30, winY + 135);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 14px Segoe UI, sans-serif';
      ctx.fillText(typedText, winX + 30, winY + 165);

      // Blinking typing cursor on canvas
      if (Math.floor(Date.now() / 500) % 2 === 0) {
        const textWidth = ctx.measureText(typedText).width;
        ctx.fillStyle = '#85edca';
        ctx.fillRect(winX + 32 + textWidth, winY + 152, 2, 16);
      }

      // 4. Mouse Trail
      if (isTrailEnabled && mouseTrail.length > 1) {
        ctx.beginPath();
        ctx.moveTo(mouseTrail[0].x, mouseTrail[0].y);
        for (let i = 1; i < mouseTrail.length; i++) {
          ctx.lineTo(mouseTrail[i].x, mouseTrail[i].y);
        }
        ctx.strokeStyle = 'rgba(133, 237, 202, 0.4)';
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.stroke();
      }

      // 5. Click Ripples
      clickRipples.forEach((item) => {
        ctx.beginPath();
        ctx.arc(item.x, item.y, item.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(133, 237, 202, ${item.opacity})`;
        ctx.lineWidth = 2.5;
        ctx.stroke();
      });

      // 6. Draw Virtual Remote Cursor
      ctx.fillStyle = '#ffffff';
      ctx.strokeStyle = '#09080c';
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.moveTo(mouseX, mouseY);
      ctx.lineTo(mouseX + 14, mouseY + 14);
      ctx.lineTo(mouseX + 6, mouseY + 14);
      ctx.lineTo(mouseX + 4, mouseY + 20);
      ctx.lineTo(mouseX, mouseY + 20);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    };

    // Canvas Mouse Interaction
    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      const newX = e.clientX - rect.left;
      const newY = e.clientY - rect.top;

      if (remoteWin.isDragging) {
        remoteWin.x = newX - remoteWin.dragOffX;
        remoteWin.y = newY - remoteWin.dragOffY;
      }

      mouseX = newX;
      mouseY = newY;

      if (isTrailEnabled) {
        mouseTrail.push({ x: mouseX, y: mouseY });
        if (mouseTrail.length > 14) mouseTrail.shift();
      }

      if (coordBadge) {
        coordBadge.innerText = `X: ${Math.round(mouseX)} · Y: ${Math.round(mouseY)}`;
      }

      drawRemoteScreen();
    });

    canvas.addEventListener('mousedown', (e) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      // Check if clicking window titlebar to drag
      if (clickX >= remoteWin.x && clickX <= remoteWin.x + remoteWin.w &&
          clickY >= remoteWin.y && clickY <= remoteWin.y + 34) {
        remoteWin.isDragging = true;
        remoteWin.dragOffX = clickX - remoteWin.x;
        remoteWin.dragOffY = clickY - remoteWin.y;
      }

      triggerRipple(clickX, clickY);
    });

    window.addEventListener('mouseup', () => {
      if (remoteWin.isDragging) {
        remoteWin.isDragging = false;
        drawRemoteScreen();
      }
    });

    // Touch support
    canvas.addEventListener('touchstart', (e) => {
      if (e.touches && e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouseX = e.touches[0].clientX - rect.left;
        mouseY = e.touches[0].clientY - rect.top;
        triggerRipple(mouseX, mouseY);
      }
    }, { passive: true });

    canvas.addEventListener('touchmove', (e) => {
      if (e.touches && e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouseX = e.touches[0].clientX - rect.left;
        mouseY = e.touches[0].clientY - rect.top;
        drawRemoteScreen();
      }
    }, { passive: true });

    // Device target selector
    if (devSelect) {
      devSelect.addEventListener('change', () => {
        currentRemoteDev = devSelect.value;
        drawRemoteScreen();
        showToast(currentLang === 'vi' 
          ? `Đã chuyển sang màn hình: ${devSelect.options[devSelect.selectedIndex].text}`
          : `Switched target device display`);
      });
    }

    // Remote Keyboard typing
    if (keyInput) {
      keyInput.addEventListener('input', () => {
        drawRemoteScreen();
      });
    }

    if (btnClearKey) {
      btnClearKey.addEventListener('click', () => {
        if (keyInput) keyInput.value = '';
        drawRemoteScreen();
      });
    }

    // Mouse Trail toggle
    if (btnTrail) {
      btnTrail.addEventListener('click', () => {
        isTrailEnabled = !isTrailEnabled;
        mouseTrail = [];
        btnTrail.classList.toggle('active', isTrailEnabled);
        showToast(currentLang === 'vi' 
          ? (isTrailEnabled ? 'Đã bật hiệu ứng vẽ nét chuột' : 'Đã tắt hiệu ứng vẽ nét chuột')
          : (isTrailEnabled ? 'Mouse trail enabled' : 'Mouse trail disabled'));
      });
    }

    // Toggle Stream Pause / Reconnect
    function toggleRemoteState() {
      isRemoteConnected = !isRemoteConnected;
      if (overlay) {
        overlay.classList.toggle('hidden', isRemoteConnected);
      }
      if (btnToggleRemoteText) {
        btnToggleRemoteText.innerText = isRemoteConnected
          ? (currentLang === 'vi' ? 'Tạm dừng điều khiển' : 'Pause Control')
          : (currentLang === 'vi' ? 'Tiếp tục điều khiển' : 'Resume Control');
      }
      showToast(currentLang === 'vi'
        ? (isRemoteConnected ? 'Đã kết nối điều khiển màn hình từ xa' : 'Đã tạm dừng điều khiển màn hình')
        : (isRemoteConnected ? 'Remote stream connected' : 'Remote stream paused'));
    }

    if (btnToggleRemote) btnToggleRemote.addEventListener('click', toggleRemoteState);
    if (overlayStartBtn) overlayStartBtn.addEventListener('click', toggleRemoteState);

    // Fullscreen support
    if (btnFullscreen) {
      btnFullscreen.addEventListener('click', () => {
        if (!document.fullscreenElement) {
          if (stage.requestFullscreen) {
            stage.requestFullscreen().catch(() => {});
          } else if (stage.webkitRequestFullscreen) {
            stage.webkitRequestFullscreen();
          }
        } else {
          if (document.exitFullscreen) document.exitFullscreen().catch(() => {});
        }
      });
    }

    window.addEventListener('resize', resizeCanvas);
    setTimeout(resizeCanvas, 80);
  }

  // ==========================================
  // D. LAN SPEED BENCHMARK & WAVEFORM CHART
  // ==========================================
  const btnRun = document.getElementById('btnRunBenchmark');
  const gaugeNeedle = document.getElementById('gaugeNeedleGroup');
  const speedGaugeNum = document.getElementById('speedGaugeNum');
  const targetTag = document.getElementById('benchTargetTag');
  const waveCanvas = document.getElementById('benchWaveCanvas');
  const calcSizeBtns = document.querySelectorAll('.calc-size-btn');
  const calcLanTime = document.getElementById('calcTimeLan');
  const calcCloudTime = document.getElementById('calcTimeCloud');
  const calcBarLan = document.getElementById('calcBarLan');
  const calcBarCloud = document.getElementById('calcBarCloud');

  const envModes = [
    document.getElementById('btnBenchMode1'),
    document.getElementById('btnBenchMode2'),
    document.getElementById('btnBenchMode3')
  ];

  let currentBenchSpeed = 960; // Default Wi-Fi 6
  let currentBenchEnv = 'wifi6';
  let isBenchmarking = false;

  envModes.forEach((btn) => {
    if (!btn) return;
    btn.addEventListener('click', () => {
      if (isBenchmarking) return;
      envModes.forEach((b) => b && b.classList.remove('active'));
      btn.classList.add('active');

      const mode = btn.getAttribute('data-mode');
      const spd = parseInt(btn.getAttribute('data-speed'), 10) || 960;
      currentBenchSpeed = spd;
      currentBenchEnv = mode;

      if (targetTag) {
        targetTag.innerText = currentLang === 'vi' 
          ? `Đo trên chuẩn: ${(btn.querySelector('span') || btn).innerText}` 
          : `Mode: ${(btn.querySelector('span') || btn).innerText}`;
      }

      // Update speed preview metrics
      updateBenchmarkMetrics(spd);
      updateCalcComparison();

      // Smoothly update gauge to preset speed
      if (gaugeNeedle) {
        const targetAngle = -90 + (180 * (spd / 1200));
        gaugeNeedle.setAttribute('transform', `rotate(${targetAngle} 120 120)`);
        gaugeNeedle.style.transform = `rotate(${targetAngle}deg)`;
      }
      const gaugeFill = document.getElementById('gaugeFill');
      if (gaugeFill) {
        const maxDash = 283;
        const targetOffset = maxDash - (maxDash * (spd / 1200));
        gaugeFill.style.strokeDashoffset = targetOffset.toString();
      }
      if (speedGaugeNum) speedGaugeNum.innerText = spd.toString();
      showToast(currentLang === 'vi' ? 'Đã đổi chuẩn kiểm tra mạng' : 'Benchmark environment updated');
    });
  });

  function updateBenchmarkMetrics(speed) {
    const valBw = document.getElementById('benchValBw');
    const descBw = document.getElementById('benchDescBw');
    const valPing = document.getElementById('benchValPing');
    const valJitter = document.getElementById('benchValJitter');
    const fill1 = document.getElementById('benchFill1');

    if (valBw) valBw.innerText = `${speed} MB/s`;
    if (fill1) {
      fill1.style.width = speed >= 1000 ? '100%' : `${Math.round((speed / 1200) * 100)}%`;
    }

    if (speed >= 1000) {
      if (descBw) descBw.innerText = currentLang === 'vi' ? 'Gửi 1 bộ phim 4K chỉ mất 1 giây!' : 'Transfers 4K movie in 1s!';
      if (valPing) valPing.innerText = '0.08 ms';
      if (valJitter) valJitter.innerText = '< 0.02 ms';
    } else if (speed >= 500) {
      if (descBw) descBw.innerText = currentLang === 'vi' ? 'Gửi 1 bộ phim 4K chỉ mất 2.5 giây.' : 'Transfers 4K movie in 2.5s.';
      if (valPing) valPing.innerText = '0.18 ms';
      if (valJitter) valJitter.innerText = '< 0.05 ms';
    } else {
      if (descBw) descBw.innerText = currentLang === 'vi' ? 'Gửi 1 bộ phim mất khoảng 20 giây.' : 'Transfers movie in ~20s.';
      if (valPing) valPing.innerText = '4.2 ms';
      if (valJitter) valJitter.innerText = '0.8 ms';
    }
  }

  // Waveform Real-time Animation Loop
  let waveCtx = null;
  let waveStep = 0;
  if (waveCanvas) {
    waveCtx = waveCanvas.getContext('2d');
    function resizeWave() {
      const rect = waveCanvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      waveCanvas.width = rect.width * dpr;
      waveCanvas.height = rect.height * dpr;
      waveCtx.resetTransform();
      waveCtx.scale(dpr, dpr);
    }
    window.addEventListener('resize', resizeWave);
    setTimeout(resizeWave, 100);

    function animateWave() {
      if (!waveCanvas || !waveCtx) return;
      const w = waveCanvas.getBoundingClientRect().width;
      const h = waveCanvas.getBoundingClientRect().height;
      if (w <= 0 || h <= 0) {
        requestAnimationFrame(animateWave);
        return;
      }

      waveCtx.clearRect(0, 0, w, h);
      waveStep += 0.04;

      // Draw horizontal grid guide
      waveCtx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      waveCtx.lineWidth = 1;
      [0.25, 0.5, 0.75].forEach((ratio) => {
        waveCtx.beginPath();
        waveCtx.moveTo(0, h * ratio);
        waveCtx.lineTo(w, h * ratio);
        waveCtx.stroke();
      });

      // Flowing bandwidth line
      waveCtx.beginPath();
      const baselineY = h * 0.45;
      const amp = currentBenchSpeed >= 800 ? 8 : 16;

      for (let x = 0; x <= w; x += 4) {
        const y = baselineY + Math.sin(x * 0.02 + waveStep) * amp + Math.cos(x * 0.04 - waveStep * 0.5) * 4;
        if (x === 0) waveCtx.moveTo(x, y);
        else waveCtx.lineTo(x, y);
      }

      waveCtx.strokeStyle = '#85edca';
      waveCtx.lineWidth = 2.5;
      waveCtx.stroke();

      // Soft glow under wave
      waveCtx.lineTo(w, h);
      waveCtx.lineTo(0, h);
      waveCtx.closePath();
      const areaGrad = waveCtx.createLinearGradient(0, baselineY, 0, h);
      areaGrad.addColorStop(0, 'rgba(133, 237, 202, 0.15)');
      areaGrad.addColorStop(1, 'rgba(133, 237, 202, 0.0)');
      waveCtx.fillStyle = areaGrad;
      waveCtx.fill();

      requestAnimationFrame(animateWave);
    }
    requestAnimationFrame(animateWave);
  }

  // Run Benchmark Click with Gauge Animation
    if (btnRun) {
    const gaugeFill = document.getElementById('gaugeFill');

    btnRun.addEventListener('click', () => {
      isBenchmarking = true;
      btnRun.disabled = true;
      btnRun.innerText = currentLang === 'vi' ? 'Đang đo kiểm tốc độ...' : 'Testing Bandwidth...';

      if (gaugeNeedle) {
        gaugeNeedle.setAttribute('transform', 'rotate(-90 120 120)');
        gaugeNeedle.style.transform = 'rotate(-90deg)';
      }
      if (gaugeFill) gaugeFill.style.strokeDashoffset = '283';
      if (speedGaugeNum) speedGaugeNum.innerText = '0';

      const startTime = performance.now();
      const targetSpeed = currentBenchSpeed;
      const duration = 1200;

      function stepGauge(now) {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / duration);
        const ease = 1 - Math.pow(1 - progress, 3);
        const currentVal = Math.round(targetSpeed * ease);

        // Map 0 -> 1200 MB/s to -90deg -> 90deg (180 deg sweep)
        const angle = -90 + (180 * (targetSpeed / 1200) * ease);

        if (gaugeNeedle) {
          gaugeNeedle.setAttribute('transform', `rotate(${angle} 120 120)`);
          gaugeNeedle.style.transform = `rotate(${angle}deg)`;
        }
        if (gaugeFill) {
          const maxDash = 283;
          const currentOffset = maxDash - (maxDash * (targetSpeed / 1200) * ease);
          gaugeFill.style.strokeDashoffset = currentOffset.toString();
        }
        if (speedGaugeNum) speedGaugeNum.innerText = currentVal.toString();

        if (progress < 1) {
          requestAnimationFrame(stepGauge);
        } else {
          isBenchmarking = false;
          btnRun.disabled = false;
          btnRun.innerText = currentLang === 'vi' ? 'Đo lại' : 'Test Again';
          updateBenchmarkMetrics(targetSpeed);
          showToast(currentLang === 'vi' 
            ? `Đo hoàn tất: Tốc độ mạng nội bộ đạt ${targetSpeed} MB/s!` 
            : `Speed test complete: ${targetSpeed} MB/s!`);
        }
      }

      requestAnimationFrame(stepGauge);
    });
  }

  // Calculator File Size Selection
  let activeCalcSizeGB = 10;

  function updateCalcComparison() {
    if (!calcLanTime || !calcCloudTime) return;
    const sizeGB = activeCalcSizeGB;
    const speedMB = currentBenchSpeed;

    // Local time = (size in MB) / speedMB
    const totalMB = sizeGB * 1024;
    const lanSec = totalMB / speedMB;
    const cloudSec = totalMB / 10; // Cloud upload avg 10 MB/s

    if (lanSec < 1) {
      calcLanTime.innerText = currentLang === 'vi' ? '< 1 giây (Tức thì)' : '< 1s (Instant)';
    } else {
      calcLanTime.innerText = `${lanSec.toFixed(1)} ${currentLang === 'vi' ? 'giây' : 'seconds'}`;
    }

    const cloudMin = Math.floor(cloudSec / 60);
    const cloudRemSec = Math.round(cloudSec % 60);
    calcCloudTime.innerText = cloudMin > 0 
      ? `${cloudMin} ${currentLang === 'vi' ? 'phút' : 'min'} ${cloudRemSec > 0 ? cloudRemSec + 's' : ''}` 
      : `${cloudRemSec}s`;

    if (calcBarLan) calcBarLan.style.width = '100%';
    if (calcBarCloud) {
      const relPct = Math.max(4, Math.min(100, Math.round((lanSec / cloudSec) * 100)));
      calcBarCloud.style.width = `${relPct}%`;
    }
  }

  calcSizeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      calcSizeBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activeCalcSizeGB = parseInt(btn.getAttribute('data-size'), 10) || 10;
      updateCalcComparison();
    });
  });

  window.updateCalcComparison = updateCalcComparison;
  updateCalcComparison();
}

// ==========================================
// 4. FAQ ACCORDION
// ==========================================
function initFaq() {
  document.querySelectorAll('.faq-question').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      if (!item) return;
      const isOpen = item.classList.contains('active');

      document.querySelectorAll('.faq-item').forEach((i) => i.classList.remove('active'));
      if (!isOpen) {
        item.classList.add('active');
      }
    });
  });
}

// ==========================================
// 5. PWA INSTALLATION & OFFLINE CACHE
// ==========================================
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
// 6. DOWNLOAD MODAL & TOAST
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

// ==========================================
// 6. DOWNLOAD MANAGER & AUTOMATIC SYNC FROM GITHUB
// ==========================================
const DOWNLOAD_REGISTRY = {
  teleport: {
    name: 'ZCL Teleport',
    repo: 'Luffyreals/zero-cloud-lan-teleport',
    version: 'v0.1.0-alpha',
    isLive: false,
    releaseUrl: 'https://github.com/Luffyreals/zero-cloud-lan-teleport/releases',
    files: {
      exe: {
        name: 'teleport-setup-latest-x64.exe',
        size: '12.4 MB',
        url: 'https://github.com/Luffyreals/zero-cloud-lan-teleport/releases/latest/download/teleport-setup-latest-x64.exe'
      },
      zip: {
        name: 'teleport-gui-latest-windows-x64.zip',
        size: '11.8 MB',
        url: 'https://github.com/Luffyreals/zero-cloud-lan-teleport/releases/latest/download/teleport-gui-latest-windows-x64.zip'
      }
    }
  },
  remote: {
    name: 'ZCL Remote',
    repo: 'Luffyreals/zero-cloud-lan-remote',
    version: 'v0.1.0-alpha',
    isLive: false,
    releaseUrl: 'https://github.com/Luffyreals/zero-cloud-lan-remote/releases',
    files: {
      exe: {
        name: 'zcl-remote-setup-latest-x64.exe',
        size: '16.8 MB',
        url: 'https://github.com/Luffyreals/zero-cloud-lan-remote/releases/latest/download/zcl-remote-setup-latest-x64.exe'
      },
      zip: {
        name: 'zcl-remote-gui-latest-windows-x64.zip',
        size: '15.6 MB',
        url: 'https://github.com/Luffyreals/zero-cloud-lan-remote/releases/latest/download/zcl-remote-gui-latest-windows-x64.zip'
      }
    }
  }
};

let currentDownloadTarget = { app: 'teleport', format: 'exe' };

function formatFileSize(bytes) {
  if (!bytes || isNaN(bytes)) return '';
  const mb = bytes / (1024 * 1024);
  return `${mb.toFixed(1)} MB`;
}

function updateDownloadCenterUI() {
  const isVi = currentLang === 'vi';

  // Teleport card UI
  const tpData = DOWNLOAD_REGISTRY.teleport;
  const tpVerEl = document.getElementById('tpVersionText');
  const tpSizeEl = document.getElementById('tpSizeText');
  const tpZipLink = document.getElementById('tpPortableLink');
  const tpSyncBadge = document.getElementById('tpSyncBadge');

  if (tpVerEl) {
    tpVerEl.innerText = `${isVi ? 'Phiên bản' : 'Version'} ${tpData.version} · Windows 10/11`;
  }
  if (tpSizeEl) {
    tpSizeEl.innerText = tpData.files.exe.size;
  }
  if (tpZipLink) {
    tpZipLink.innerText = `${isVi ? 'Tải bản chạy ngay không cần cài' : 'Download Portable'} (.zip - ${tpData.files.zip.size})`;
  }
  if (tpSyncBadge) {
    const textEl = tpSyncBadge.querySelector('.sync-text');
    if (textEl) {
      textEl.innerText = tpData.isLive 
        ? (isVi ? 'Bản mới nhất' : 'Latest build')
        : (isVi ? 'Bản ổn định' : 'Stable build');
    }
  }

  // Remote card UI
  const rmData = DOWNLOAD_REGISTRY.remote;
  const rmVerEl = document.getElementById('rmVersionText');
  const rmSizeEl = document.getElementById('rmSizeText');
  const rmZipLink = document.getElementById('rmPortableLink');
  const rmSyncBadge = document.getElementById('rmSyncBadge');

  if (rmVerEl) {
    rmVerEl.innerText = `${isVi ? 'Phiên bản' : 'Version'} ${rmData.version} · Windows 10/11`;
  }
  if (rmSizeEl) {
    rmSizeEl.innerText = rmData.files.exe.size;
  }
  if (rmZipLink) {
    rmZipLink.innerText = `${isVi ? 'Tải bản chạy ngay không cần cài' : 'Download Portable'} (.zip - ${rmData.files.zip.size})`;
  }
  if (rmSyncBadge) {
    const textEl = rmSyncBadge.querySelector('.sync-text');
    if (textEl) {
      textEl.innerText = rmData.isLive 
        ? (isVi ? 'Bản mới nhất' : 'Latest build')
        : (isVi ? 'Bản ổn định' : 'Stable build');
    }
  }
}

async function syncSingleAppReleases(appKey) {
  const item = DOWNLOAD_REGISTRY[appKey];
  if (!item) return;

  const apiUrl = `https://api.github.com/repos/${item.repo}/releases?per_page=3`;
  try {
    const response = await fetch(apiUrl, {
      headers: { 'Accept': 'application/vnd.github.v3+json' }
    });
    if (!response.ok) return;

    const releases = await response.json();
    if (!Array.isArray(releases) || releases.length === 0) return;

    // Ưu tiên release mới nhất có assets
    const release = releases.find((r) => Array.isArray(r.assets) && r.assets.length > 0) || releases[0];
    if (!release) return;

    if (release.tag_name) {
      item.version = release.tag_name;
    }
    if (release.html_url) {
      item.releaseUrl = release.html_url;
    }

    if (Array.isArray(release.assets) && release.assets.length > 0) {
      // Tìm bộ cài installer exe
      const exeAsset = release.assets.find((a) => {
        const name = (a.name || '').toLowerCase();
        return name.endsWith('.exe') && (name.includes('setup') || name.includes('installer') || !name.includes('cli'));
      }) || release.assets.find((a) => (a.name || '').toLowerCase().endsWith('.exe'));

      if (exeAsset) {
        item.files.exe.name = exeAsset.name;
        item.files.exe.url = exeAsset.browser_download_url;
        if (exeAsset.size) {
          item.files.exe.size = formatFileSize(exeAsset.size);
        }
      }

      // Tìm bản chạy ngay zip (ưu tiên GUI)
      const zipAsset = release.assets.find((a) => {
        const name = (a.name || '').toLowerCase();
        return name.endsWith('.zip') && (name.includes('gui') || name.includes('portable') || name.includes('windows'));
      }) || release.assets.find((a) => (a.name || '').toLowerCase().endsWith('.zip'));

      if (zipAsset) {
        item.files.zip.name = zipAsset.name;
        item.files.zip.url = zipAsset.browser_download_url;
        if (zipAsset.size) {
          item.files.zip.size = formatFileSize(zipAsset.size);
        }
      }

      item.isLive = true;
    }
  } catch (err) {
    // Khi offline hoặc gặp lỗi mạng, trang web giữ nguyên cấu hình dự phòng an toàn
    console.warn(`[ZCL Hub] Không thể kết nối GitHub Releases cho ${appKey}:`, err);
  }
}

async function syncReleasesFromGitHub() {
  const CACHE_KEY = 'zcl_releases_cache_v2';
  const CACHE_TTL_MS = 15 * 60 * 1000; // 15 phút

  try {
    const rawCache = sessionStorage.getItem(CACHE_KEY);
    if (rawCache) {
      const cached = JSON.parse(rawCache);
      if (Date.now() - cached.timestamp < CACHE_TTL_MS && cached.data) {
        Object.assign(DOWNLOAD_REGISTRY.teleport, cached.data.teleport);
        Object.assign(DOWNLOAD_REGISTRY.remote, cached.data.remote);
        updateDownloadCenterUI();
        return;
      }
    }
  } catch (e) {
    // Bỏ qua lỗi cache
  }

  // Tải đồng thời thông tin từ cả 2 repository
  await Promise.allSettled([
    syncSingleAppReleases('teleport'),
    syncSingleAppReleases('remote')
  ]);

  updateDownloadCenterUI();

  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({
      timestamp: Date.now(),
      data: {
        teleport: {
          version: DOWNLOAD_REGISTRY.teleport.version,
          isLive: DOWNLOAD_REGISTRY.teleport.isLive,
          releaseUrl: DOWNLOAD_REGISTRY.teleport.releaseUrl,
          files: DOWNLOAD_REGISTRY.teleport.files
        },
        remote: {
          version: DOWNLOAD_REGISTRY.remote.version,
          isLive: DOWNLOAD_REGISTRY.remote.isLive,
          releaseUrl: DOWNLOAD_REGISTRY.remote.releaseUrl,
          files: DOWNLOAD_REGISTRY.remote.files
        }
      }
    }));
  } catch (e) {
    // Bỏ qua lỗi lưu cache
  }
}

function initDownloadModal() {
  const modal = document.getElementById('downloadModal');
  const btnClose = document.getElementById('btnModalClose');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalFileName = document.getElementById('modalFileName');
  const modalFileSize = document.getElementById('modalFileSize');
  const modalIcon = document.getElementById('modalIcon');
  const modalGithubLink = document.getElementById('modalGithubLink');
  const btnTrigger = document.getElementById('btnTriggerDownload');

  if (!modal) return;

  function openModal(app, format = 'exe') {
    currentDownloadTarget = { app, format };
    const appData = DOWNLOAD_REGISTRY[app] || DOWNLOAD_REGISTRY.teleport;
    const fileData = appData.files[format] || appData.files.exe;
    const isVi = currentLang === 'vi';

    if (app === 'teleport') {
      if (modalIcon) {
        modalIcon.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 16V4M7 4L3 8M7 4L11 8M17 8V20M17 20L21 16M17 20L13 16"/></svg>';
        modalIcon.style.background = 'var(--mint-dark)';
        modalIcon.style.color = 'var(--mint)';
      }
      if (modalTitle) modalTitle.innerText = isVi ? 'Tải ZCL Teleport' : 'Download ZCL Teleport';
      if (modalDesc) modalDesc.innerText = isVi 
        ? `Bản ${appData.version} cho máy tính Windows 10/11 — Gửi nhận file siêu tốc.` 
        : `Build ${appData.version} for Windows 10/11 — Fast local file transfers.`;
    } else {
      if (modalIcon) {
        modalIcon.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>';
        modalIcon.style.background = 'var(--lilac-dark)';
        modalIcon.style.color = 'var(--lilac)';
      }
      if (modalTitle) modalTitle.innerText = isVi ? 'Tải ZCL Remote' : 'Download ZCL Remote';
      if (modalDesc) modalDesc.innerText = isVi 
        ? `Bản ${appData.version} cho máy tính Windows 10/11 — Điều khiển máy tính từ xa mượt mà.` 
        : `Build ${appData.version} for Windows 10/11 — Smooth remote desktop.`;
    }

    if (modalFileName) modalFileName.innerText = fileData.name;
    if (modalFileSize) modalFileSize.innerText = fileData.size;
    if (modalGithubLink) {
      modalGithubLink.href = appData.releaseUrl;
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
      const appData = DOWNLOAD_REGISTRY[currentDownloadTarget.app] || DOWNLOAD_REGISTRY.teleport;
      const fileData = appData.files[currentDownloadTarget.format] || appData.files.exe;
      const fileName = fileData.name;
      const fileUrl = fileData.url;

      showToast(currentLang === 'vi' ? `Đang bắt đầu tải ${fileName}...` : `Starting download for ${fileName}...`);

      // Kích hoạt tải tệp trực tiếp từ GitHub Releases
      const a = document.createElement('a');
      a.href = fileUrl;
      a.setAttribute('download', fileName);
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        if (a.parentNode) a.parentNode.removeChild(a);
      }, 300);
    });
  }
}

// ==========================================
// 7. THEME SWITCHER (DARK / LIGHT MODE)
// ==========================================
const THEME_STORAGE_KEY = 'zcl_theme';

function getPreferredTheme() {
  const saved = localStorage.getItem(THEME_STORAGE_KEY);
  if (saved === 'light' || saved === 'dark') return saved;
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light';
  }
  return 'dark';
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const isLight = theme === 'light';

  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute('content', isLight ? '#f8fafc' : '#09080c');
  }

  const metaColorScheme = document.querySelector('meta[name="color-scheme"]');
  if (metaColorScheme) {
    metaColorScheme.setAttribute('content', isLight ? 'light' : 'dark');
  }

  const btn = document.getElementById('themeToggleBtn');
  if (btn) {
    btn.setAttribute('aria-pressed', isLight ? 'true' : 'false');
    const titleKey = isLight ? 'theme_dark' : 'theme_light';
    const langDict = i18n[currentLang] || i18n.vi;
    const titleText = langDict[titleKey] || (isLight ? 'Chuyển sang giao diện tối' : 'Chuyển sang giao diện sáng');
    btn.setAttribute('title', titleText);
    btn.setAttribute('aria-label', titleText);
  }

  // Redraw studio canvas if on screen
  setTimeout(() => {
    window.dispatchEvent(new Event('resize'));
  }, 60);
}

function initThemeToggle() {
  const initialTheme = getPreferredTheme();
  applyTheme(initialTheme);

  const btn = document.getElementById('themeToggleBtn');
  if (btn) {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      localStorage.setItem(THEME_STORAGE_KEY, next);
      applyTheme(next);
    });
  }

  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(THEME_STORAGE_KEY)) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
}

// ==========================================
// 8. CONSOLE COCKPIT & DEVICE ORBIT
// ==========================================
const CONSOLE_ENV_DATA = {
  home: {
    statusVi: "2 máy tính sẵn sàng · Wi-Fi 6 gia đình",
    statusEn: "2 computers ready · Home Wi-Fi 6",
    speechVi: "Phát hiện 2 máy tính kết nối chung mạng Wi-Fi phòng bạn. Bạn muốn chuyển file lớn hay điều khiển máy tính từ xa?",
    speechEn: "Detected 2 computers on your room's Wi-Fi. Would you like to transfer large files or remote control?",
    chipAVi: "Gửi 4.8 GB trong 5s",
    chipAEn: "Sent 4.8 GB in 5s",
    speedBadge: "960 MB/s (Wi-Fi 6)",
    chipBVi: "Chuột ăn ngay · 0.2ms",
    chipBEn: "Instant mouse · 0.2ms",
    feat1Vi: "Tốc độ: 960 MB/s qua Wi-Fi 6",
    feat1En: "Speed: 960 MB/s over Wi-Fi 6",
    feat2Vi: "Điều khiển: Chuột 0.2ms cực nhạy",
    feat2En: "Control: 0.2ms instant mouse feedback",
    feat3Vi: "Riêng tư: 100% trong phòng, 0 máy chủ ngoài",
    feat3En: "Privacy: 100% in-room, zero cloud",
  },
  office: {
    statusVi: "Mạng dây LAN công ty · 10Gbps nội bộ",
    statusEn: "Corporate LAN Cable · 10Gbps local link",
    speechVi: "Đã thiết lập kết nối mạng dây nội bộ công ty. Tốc độ truyền tối đa 1.1 GB/s, gửi tệp video và bộ cài cực nhanh!",
    speechEn: "Corporate local LAN cable active. Max transfer speed 1.1 GB/s, lightning-fast media asset transfers!",
    chipAVi: "Gửi 12.5 GB trong 11s",
    chipAEn: "Sent 12.5 GB in 11s",
    speedBadge: "1.1 GB/s (Mạng dây LAN)",
    chipBVi: "Chuột ăn ngay · 0.1ms",
    chipBEn: "Instant mouse · 0.1ms",
    feat1Vi: "Tốc độ: 1.1 GB/s qua mạng dây LAN",
    feat1En: "Speed: 1.1 GB/s over LAN cable",
    feat2Vi: "Điều khiển: Phản hồi tức thì 0.1ms",
    feat2En: "Control: 0.1ms instantaneous response",
    feat3Vi: "Nội bộ: Không chiếm băng thông Internet văn phòng",
    feat3En: "Local: Zero impact on office internet bandwidth",
  },
  cafe: {
    statusVi: "Wi-Fi công cộng · Mã hóa nội bộ trực tiếp",
    statusEn: "Public Cafe Wi-Fi · Direct Peer Encryption",
    speechVi: "Đang ở quán Cafe? ZCL Hub tự động mã hóa dữ liệu trực tiếp giữa 2 máy tính, an toàn tuyệt đối ngay cả trên Wi-Fi mở.",
    speechEn: "At a coffee shop? ZCL Hub automatically encrypts data directly between peers, completely secure even on open Wi-Fi.",
    chipAVi: "Gửi 2.1 GB trong 5s",
    chipAEn: "Sent 2.1 GB in 5s",
    speedBadge: "450 MB/s (Wi-Fi Cafe)",
    chipBVi: "Chuột ăn ngay · 0.8ms",
    chipBEn: "Instant mouse · 0.8ms",
    feat1Vi: "Tốc độ: 450 MB/s qua Wi-Fi Cafe",
    feat1En: "Speed: 450 MB/s over cafe Wi-Fi",
    feat2Vi: "Điều khiển: Chuột mượt mà không quảng cáo",
    feat2En: "Control: Smooth remote control, no ads",
    feat3Vi: "An toàn: Dữ liệu mã hóa thẳng, không ai xem trộm",
    feat3En: "Security: Direct peer encryption, eavesdrop-proof",
  },
  offline: {
    statusVi: "Đứt cáp quang Internet · Vẫn làm việc 100%",
    statusEn: "Internet Cable Cut · 100% Fully Operational",
    speechVi: "Cáp quang Internet bị đứt? Không vấn đề! Chỉ cần chung sóng Wi-Fi hoặc cắm dây mạng, bạn vẫn gửi file và điều khiển máy bình thường.",
    speechEn: "Internet cable disconnected? No worries! As long as peers share local Wi-Fi or LAN, transfers and remote desktop work at full speed.",
    chipAVi: "Gửi 4.8 GB trong 5s",
    chipAEn: "Sent 4.8 GB in 5s",
    speedBadge: "820 MB/s (Offline LAN)",
    chipBVi: "Chuột ăn ngay · 0.2ms",
    chipBEn: "Instant mouse · 0.2ms",
    feat1Vi: "Tốc độ: 820 MB/s không cần Internet",
    feat1En: "Speed: 820 MB/s with zero internet",
    feat2Vi: "Điều khiển: Hoạt động trơn tru khi rớt mạng ngoài",
    feat2En: "Control: Flawless control during ISP blackouts",
    feat3Vi: "Độc lập: 0 phụ thuộc bất kỳ máy chủ bên ngoài",
    feat3En: "Independence: Zero reliance on external servers",
  }
};

let currentEnv = 'home';

function updateConsoleEnvUI() {
  const data = CONSOLE_ENV_DATA[currentEnv] || CONSOLE_ENV_DATA.home;
  const isEn = currentLang === 'en';

  const badge = document.getElementById('consoleEnvBadge');
  if (badge) badge.textContent = isEn ? data.statusEn : data.statusVi;

  const speech = document.getElementById('assistantSpeech');
  if (speech) speech.textContent = isEn ? data.speechEn : data.speechVi;

  const chipA = document.getElementById('stageDevAChip');
  if (chipA) chipA.textContent = isEn ? data.chipAEn : data.chipAVi;

  const speedBadge = document.getElementById('stageSpeedBadge');
  if (speedBadge) speedBadge.textContent = data.speedBadge;

  const chipB = document.getElementById('stageDevBChip');
  if (chipB) chipB.textContent = isEn ? data.chipBEn : data.chipBVi;

  const feat1 = document.getElementById('stageFeat1');
  if (feat1) feat1.textContent = isEn ? data.feat1En : data.feat1Vi;

  const feat2 = document.getElementById('stageFeat2');
  if (feat2) feat2.textContent = isEn ? data.feat2En : data.feat2Vi;

  const feat3 = document.getElementById('stageFeat3');
  if (feat3) feat3.textContent = isEn ? data.feat3En : data.feat3Vi;
}

function initConsoleEnvironment() {
  const envButtons = document.querySelectorAll('.env-btn');
  const scanner = document.getElementById('consoleLaserScanner');

  envButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      envButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const env = btn.getAttribute('data-env') || 'home';
      currentEnv = env;

      if (scanner) {
        scanner.classList.remove('scanning');
        void scanner.offsetWidth;
        scanner.classList.add('scanning');
      }

      updateConsoleEnvUI();
    });
  });
}

// Device Orbit Config & Logic
const ORBIT_NODES = {
  laptop: { nameVi: "Laptop A (Teleport)", nameEn: "Laptop A (Teleport)", x: 180, y: 45 },
  pc: { nameVi: "Máy tính bàn PC B", nameEn: "Desktop PC B", x: 308, y: 138 },
  phone: { nameVi: "Điện thoại di động", nameEn: "Smartphone", x: 259, y: 289 },
  tablet: { nameVi: "Máy tính bảng", nameEn: "Tablet", x: 101, y: 289 },
  tv: { nameVi: "Smart TV phòng họp", nameEn: "Conference Smart TV", x: 52, y: 138 }
};

let activeOrbitPair = ['laptop', 'pc'];

function updateOrbitUI() {
  const isEn = currentLang === 'en';
  const devA = ORBIT_NODES[activeOrbitPair[0]] || ORBIT_NODES.laptop;
  const devB = ORBIT_NODES[activeOrbitPair[1]] || ORBIT_NODES.pc;

  const tagA = document.getElementById('orbitTagA');
  if (tagA) tagA.textContent = isEn ? devA.nameEn : devA.nameVi;

  const tagB = document.getElementById('orbitTagB');
  if (tagB) tagB.textContent = isEn ? devB.nameEn : devB.nameVi;

  // Update SVG line connecting the two active devices
  const beamLine = document.getElementById('orbitBeamLine');
  if (beamLine) {
    beamLine.setAttribute('x1', devA.x);
    beamLine.setAttribute('y1', devA.y);
    beamLine.setAttribute('x2', devB.x);
    beamLine.setAttribute('y2', devB.y);
  }

  // Update dynamic metric readout based on paired device types
  const speedEl = document.getElementById('orbitStatSpeed');
  const latencyEl = document.getElementById('orbitStatLatency');
  const routeEl = document.getElementById('orbitStatRoute');
  const secEl = document.getElementById('orbitStatSec');

  const pairKey = [activeOrbitPair[0], activeOrbitPair[1]].sort().join('-');

  if (pairKey.includes('tv')) {
    if (speedEl) speedEl.textContent = isEn ? "60 FPS (Ultra HD Cast)" : "60 FPS (Chiếu màn hình Ultra HD)";
    if (latencyEl) latencyEl.textContent = isEn ? "< 16ms (Instant Cast)" : "< 16ms (Chiếu tức thì, không giật hình)";
    if (routeEl) routeEl.textContent = isEn ? "Wi-Fi LAN → Screen Cast Direct" : "Sóng Wi-Fi → Chiếu thẳng không dây";
  } else if (pairKey.includes('phone') || pairKey.includes('tablet')) {
    if (speedEl) speedEl.textContent = isEn ? "480 MB/s (Direct Mobile Wi-Fi)" : "480 MB/s (Wi-Fi truyền thẳng di động)";
    if (latencyEl) latencyEl.textContent = isEn ? "0.4ms (Instant Sync)" : "0.4ms (Đồng bộ tức thì)";
    if (routeEl) routeEl.textContent = isEn ? "Direct Wi-Fi → No Cloud Routing" : "Sóng Wi-Fi phòng → Không qua máy chủ ngoài";
  } else {
    if (speedEl) speedEl.textContent = isEn ? "960 MB/s – 1.1 GB/s (Max Wire/Wi-Fi 6)" : "960 MB/s – 1.1 GB/s (Wi-Fi 6 / Mạng dây)";
    if (latencyEl) latencyEl.textContent = isEn ? "0.2ms (Zero Lag Response)" : "0.2ms (Chuột bấm ăn ngay)";
    if (routeEl) routeEl.textContent = isEn ? "Local Link → In-Room Direct Peers" : "Mạng nội bộ phòng → Truyền thẳng trực tiếp";
  }

  if (secEl) {
    secEl.textContent = isEn ? "100% In-room, zero cloud servers" : "100% Trong phòng, 0 máy chủ ngoài";
  }
}

function initDeviceOrbit() {
  const deviceButtons = document.querySelectorAll('.orbit-device-node');
  deviceButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const dev = btn.getAttribute('data-device');
      if (!dev) return;

      if (activeOrbitPair.includes(dev)) {
        // If clicking one that's already in the pair, do nothing or keep it
        return;
      }

      // Shift pair: replace the oldest selected device
      activeOrbitPair = [activeOrbitPair[1], dev];

      // Update node active visual classes
      deviceButtons.forEach((b) => {
        const d = b.getAttribute('data-device');
        if (activeOrbitPair.includes(d)) {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });

      updateOrbitUI();
    });
  });

  updateOrbitUI();
}

// ==========================================
// 8. MICRO-INTERACTIONS & ACCESSIBILITY
// ==========================================
function init3DTiltCards() {
  const cards = document.querySelectorAll('.arch-card');
  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -7;
      const rotateY = ((x - centerX) / centerX) * 7;
      card.style.transform = `perspective(800px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

function initKeyboardShortcuts() {
  window.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

    if (e.key === '1') {
      switchMainTab('overview');
    } else if (e.key === '2') {
      switchMainTab('apps');
    } else if (e.key === '3') {
      switchMainTab('download');
    } else if (e.key === '4') {
      switchMainTab('studio');
    } else if (e.key === '5') {
      switchMainTab('faq');
    } else if (e.key === 't' || e.key === 'T') {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      localStorage.setItem(THEME_STORAGE_KEY, next);
      applyTheme(next);
      showToast(currentLang === 'vi' 
        ? (next === 'light' ? 'Đã đổi sang giao diện Sáng' : 'Đã đổi sang giao diện Tối') 
        : (next === 'light' ? 'Switched to Light Mode' : 'Switched to Dark Mode'));
    } else if (e.key === 'l' || e.key === 'L') {
      const next = currentLang === 'vi' ? 'en' : 'vi';
      setLanguage(next);
      updateConsoleEnvUI();
      updateOrbitUI();
      showToast(next === 'vi' ? 'Ngôn ngữ: Tiếng Việt' : 'Language: English');
    } else if (e.key === 'Escape') {
      const modal = document.getElementById('downloadModal');
      if (modal && modal.classList.contains('active')) {
        modal.classList.remove('active');
      }
    }
  });
}

function initBackToTop() {
  const btn = document.getElementById('btnBackToTop');
  const ringCircle = document.getElementById('progressRingCircle');
  if (!btn) return;

  const circumference = 2 * Math.PI * 19;
  if (ringCircle) {
    ringCircle.style.strokeDasharray = `${circumference}`;
  }

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    if (scrollY > 350) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }

    if (ringCircle && docHeight > 0) {
      const progress = Math.min(1, Math.max(0, scrollY / docHeight));
      const offset = circumference * (1 - progress);
      ringCircle.style.strokeDashoffset = `${offset}`;
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ==========================================

// ==========================================
// 10. DYNAMIC TECH BACKGROUND EFFECTS
// ==========================================
function initBackgroundEffects() {
  const spotlight = document.getElementById('bgMouseSpotlight');
  const canvas = document.getElementById('bgParticlesCanvas');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // --- A. Interactive Mouse Spotlight ---
  if (spotlight && !window.matchMedia('(hover: none)').matches) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    let isVisible = false;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) {
        isVisible = true;
        spotlight.style.opacity = '1';
      }
    }, { passive: true });

    document.addEventListener('mouseleave', () => {
      isVisible = false;
      spotlight.style.opacity = '0';
    });

    function animateSpotlight() {
      if (isVisible) {
        currentX += (mouseX - currentX) * 0.12;
        currentY += (mouseY - currentY) * 0.12;
        spotlight.style.left = `${currentX}px`;
        spotlight.style.top = `${currentY}px`;
      }
      requestAnimationFrame(animateSpotlight);
    }
    requestAnimationFrame(animateSpotlight);
  }

  // --- B. LAN Mesh Network Nodes Canvas ---
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = 0;
  let height = 0;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  let animationId = null;
  let isPageVisible = !document.hidden;

  function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
  }

  resizeCanvas();

  // Create lightweight network nodes (representing local machines)
  const isMobile = window.innerWidth < 768;
  const nodeCount = isMobile ? 22 : 42;
  const nodes = [];

  for (let i = 0; i < nodeCount; i++) {
    nodes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 1.4 + 1.2,
      baseAlpha: Math.random() * 0.4 + 0.35,
      pulseSpeed: Math.random() * 0.02 + 0.01,
      phase: Math.random() * Math.PI * 2,
      isMint: Math.random() > 0.45
    });
  }

  const mousePos = { x: -1000, y: -1000 };
  window.addEventListener('mousemove', (e) => {
    mousePos.x = e.clientX;
    mousePos.y = e.clientY;
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    mousePos.x = -1000;
    mousePos.y = -1000;
  });

  function renderNodes() {
    if (!isPageVisible || document.body.classList.contains("eco-mode")) return;

    ctx.clearRect(0, 0, width, height);

    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const mintColor = isLight ? '11, 94, 71' : '133, 237, 202';
    const lilacColor = isLight ? '75, 46, 145' : '206, 163, 243';

    const maxDist = isMobile ? 100 : 130;
    const mouseConnectDist = 140;

    // Optimization: Skip CPU-heavy Math.hypot by checking squared distance first
    const maxDistSq = maxDist * maxDist;
    const mouseDistSq = mouseConnectDist * mouseConnectDist;

    // 1. Draw Mesh Connection Lines between close nodes
    for (let i = 0; i < nodes.length; i++) {
      const n1 = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const n2 = nodes[j];
        const dx = n1.x - n2.x;
        const dy = n1.y - n2.y;
        const distSq = dx * dx + dy * dy;

        if (distSq < maxDistSq) {
          const dist = Math.sqrt(distSq);
          const alpha = (1 - dist / maxDist) * (isLight ? 0.12 : 0.18);
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${n1.isMint ? mintColor : lilacColor}, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(n1.x, n1.y);
          ctx.lineTo(n2.x, n2.y);
          ctx.stroke();
        }
      }

      // Connection line to mouse cursor
      if (mousePos.x > 0 && mousePos.y > 0) {
        const mdx = n1.x - mousePos.x;
        const mdy = n1.y - mousePos.y;
        const mDistSq = mdx * mdx + mdy * mdy;
        if (mDistSq < mouseDistSq) {
          const mDist = Math.sqrt(mDistSq);
          const mAlpha = (1 - mDist / mouseConnectDist) * (isLight ? 0.22 : 0.3);
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${mintColor}, ${mAlpha})`;
          ctx.lineWidth = 1;
          ctx.moveTo(n1.x, n1.y);
          ctx.lineTo(mousePos.x, mousePos.y);
          ctx.stroke();
        }
      }
    }

    // 2. Draw and update each node
    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];

      if (!prefersReduced) {
        n.x += n.vx;
        n.y += n.vy;

        // Bounce gently off borders
        if (n.x < 0) { n.x = 0; n.vx *= -1; }
        else if (n.x > width) { n.x = width; n.vx *= -1; }

        if (n.y < 0) { n.y = 0; n.vy *= -1; }
        else if (n.y > height) { n.y = height; n.vy *= -1; }

        n.phase += n.pulseSpeed;
      }

      const pulse = 1 + Math.sin(n.phase) * 0.3;
      const alpha = n.baseAlpha * (isLight ? 0.6 : 0.9);
      const col = n.isMint ? mintColor : lilacColor;

      ctx.beginPath();
      ctx.arc(n.x, n.y, n.radius * pulse, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${col}, ${alpha})`;
      ctx.fill();
    }

    if (!prefersReduced) {
      animationId = requestAnimationFrame(renderNodes);
    }
  }

  if (!prefersReduced) {
    animationId = requestAnimationFrame(renderNodes);
  } else {
    renderNodes();
  }

  // Window resize handler with debounce
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      resizeCanvas();
      if (prefersReduced) renderNodes();
    }, 150);
  });

  // Power save: pause when tab hidden, resume when tab active
  document.addEventListener('visibilitychange', () => {
    isPageVisible = !document.hidden;
    if (isPageVisible && !prefersReduced && !animationId) {
      animationId = requestAnimationFrame(renderNodes);
    } else if (!isPageVisible && animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
  });
}


// ==========================================
// 11. ECO MODE & LOW-POWER TOGGLE
// ==========================================
let isEcoModeActive = localStorage.getItem('zcl_eco_mode') === 'true';

function initEcoMode() {
  const btnEco = document.getElementById('ecoToggleBtn');
  if (isEcoModeActive) {
    document.body.classList.add('eco-mode');
  }

  if (btnEco) {
    btnEco.addEventListener('click', () => {
      isEcoModeActive = !isEcoModeActive;
      document.body.classList.toggle('eco-mode', isEcoModeActive);
      localStorage.setItem('zcl_eco_mode', isEcoModeActive ? 'true' : 'false');

      const isVi = currentLang === 'vi';
      showToast(isEcoModeActive 
        ? (isVi ? i18n.vi.eco_enabled_toast : i18n.en.eco_enabled_toast)
        : (isVi ? i18n.eco_disabled_toast || 'Đã tắt chế độ tiết kiệm pin' : i18n.en.eco_disabled_toast));

      // Wake up or pause background particles canvas
      const canvas = document.getElementById('bgParticlesCanvas');
      if (canvas && !isEcoModeActive && typeof window.resumeBgParticles === 'function') {
        window.resumeBgParticles();
      }
    });
  }
}

// ==========================================
// 12. MOBILE TAB BAR SCROLL FADE INDICATOR
// ==========================================
function initTabScrollFades() {
  const wrapper = document.getElementById('navTabsWrapper');
  if (!wrapper) return;

  function updateFades() {
    const scrollLeft = wrapper.scrollLeft;
    const maxScroll = wrapper.scrollWidth - wrapper.clientWidth;

    wrapper.classList.toggle('can-scroll-left', scrollLeft > 8);
    wrapper.classList.toggle('can-scroll-right', scrollLeft < maxScroll - 8);
  }

  wrapper.addEventListener('scroll', updateFades, { passive: true });
  window.addEventListener('resize', updateFades, { passive: true });
  setTimeout(updateFades, 200);
}

// ==========================================
// 13. LAN TRANSFER TIME CALCULATOR
// ==========================================
let currentCalcSizeGB = 15;
let currentCalcSpeedMBs = 110;

function formatTransferTime(totalSeconds, lang = 'vi') {
  const isVi = lang === 'vi';
  if (totalSeconds < 1) return isVi ? 'Chưa tới 1 giây' : 'Under 1 second';
  if (totalSeconds < 60) {
    const sec = Math.max(1, Math.round(totalSeconds));
    return `${sec} ${isVi ? 'giây' : 'seconds'}`;
  }
  const mins = Math.floor(totalSeconds / 60);
  const remainingSecs = Math.round(totalSeconds % 60);
  if (mins < 60) {
    return remainingSecs > 0 
      ? `${mins} ${isVi ? 'phút' : 'min'} ${remainingSecs} ${isVi ? 'giây' : 'sec'}`
      : `${mins} ${isVi ? 'phút' : 'minutes'}`;
  }
  const hours = Math.floor(mins / 60);
  const remainingMins = mins % 60;
  return `${hours} ${isVi ? 'giờ' : 'hrs'} ${remainingMins} ${isVi ? 'phút' : 'min'}`;
}

function updateTransferCalculatorUI() {
  const isVi = currentLang === 'vi';
  const sizeDisplay = document.getElementById('calcSizeDisplay');
  const speedTag = document.getElementById('calcSpeedTag');
  const zclTimeEl = document.getElementById('calcZclTime');
  const cloudTimeEl = document.getElementById('calcCloudTime');
  const zclBar = document.getElementById('calcZclBar');
  const cloudBar = document.getElementById('calcCloudBar');
  const fasterBadge = document.getElementById('calcFasterBadge');
  const savingsText = document.getElementById('calcSavingsText');

  if (sizeDisplay) {
    sizeDisplay.innerText = `${currentCalcSizeGB} GB`;
  }
  if (speedTag) {
    speedTag.innerText = `~${currentCalcSpeedMBs} MB/s`;
  }

  const totalMB = currentCalcSizeGB * 1024;
  const zclSeconds = totalMB / currentCalcSpeedMBs;
  // Cloud assumption: broadband upload + download average roundtrip ~4.5 MB/s
  const cloudSeconds = totalMB / 4.5;

  if (zclTimeEl) {
    zclTimeEl.innerText = formatTransferTime(zclSeconds, currentLang);
  }
  if (cloudTimeEl) {
    cloudTimeEl.innerText = formatTransferTime(cloudSeconds, currentLang);
  }

  // Bar percentage
  const ratio = Math.min(100, Math.max(5, (zclSeconds / cloudSeconds) * 100));
  if (zclBar) zclBar.style.width = `${ratio.toFixed(1)}%`;
  if (cloudBar) cloudBar.style.width = '100%';

  const factor = Math.max(2, Math.round(cloudSeconds / zclSeconds));
  const savingsPercent = Math.min(99, Math.round((1 - zclSeconds / cloudSeconds) * 100));

  if (fasterBadge) {
    fasterBadge.innerText = isVi ? `Nhanh hơn gấp ${factor} lần!` : `${factor}x faster!`;
  }
  if (savingsText) {
    savingsText.innerText = isVi 
      ? `Tiết kiệm hơn ${savingsPercent}% thời gian chờ đợi.` 
      : `Saves over ${savingsPercent}% of waiting time.`;
  }
}

function initTransferCalculator() {
  const slider = document.getElementById('calcSizeSlider');
  const pills = document.querySelectorAll('.calc-pill');
  const netBtns = document.querySelectorAll('.calc-net-btn');

  if (slider) {
    slider.addEventListener('input', (e) => {
      currentCalcSizeGB = parseInt(e.target.value, 10) || 15;
      pills.forEach((p) => {
        p.classList.toggle('active', parseInt(p.getAttribute('data-size'), 10) === currentCalcSizeGB);
      });
      updateTransferCalculatorUI();
    });
  }

  pills.forEach((p) => {
    p.addEventListener('click', () => {
      const size = parseInt(p.getAttribute('data-size'), 10);
      currentCalcSizeGB = size;
      if (slider) slider.value = size;
      pills.forEach((btn) => btn.classList.remove('active'));
      p.classList.add('active');
      updateTransferCalculatorUI();
    });
  });

  netBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      netBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentCalcSpeedMBs = parseInt(btn.getAttribute('data-speed'), 10) || 110;
      updateTransferCalculatorUI();
    });
  });

  updateTransferCalculatorUI();
}

// ==========================================
// 14. FAQ INSTANT SEARCH
// ==========================================
function removeVietnameseAccents(str) {
  if (!str) return '';
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[đĐ]/g, 'd')
    .toLowerCase();
}

function initFaqSearch() {
  const input = document.getElementById('faqSearchInput');
  const clearBtn = document.getElementById('faqSearchClear');
  const meta = document.getElementById('faqSearchMeta');
  const countText = document.getElementById('faqSearchCountText');
  const emptyState = document.getElementById('faqEmptyState');
  const resetBtn = document.getElementById('btnFaqReset');
  const faqItems = document.querySelectorAll('.faq-grid .faq-item');

  if (!input) return;

  function doSearch() {
    const rawQuery = (input.value || '').trim();
    const query = removeVietnameseAccents(rawQuery);

    if (clearBtn) {
      clearBtn.style.display = rawQuery.length > 0 ? 'flex' : 'none';
    }

    if (!query) {
      faqItems.forEach((item) => {
        item.classList.remove('search-hidden', 'search-matched');
      });
      if (meta) meta.style.display = 'none';
      if (emptyState) emptyState.style.display = 'none';
      return;
    }

    let matchCount = 0;
    faqItems.forEach((item) => {
      const qText = removeVietnameseAccents(item.querySelector('.faq-question')?.innerText || '');
      const aText = removeVietnameseAccents(item.querySelector('.faq-answer')?.innerText || '');
      const isMatch = qText.includes(query) || aText.includes(query);

      if (isMatch) {
        item.classList.remove('search-hidden');
        item.classList.add('search-matched', 'active');
        matchCount++;
      } else {
        item.classList.add('search-hidden');
        item.classList.remove('search-matched');
      }
    });

    if (meta) {
      meta.style.display = 'block';
      if (countText) {
        const isVi = currentLang === 'vi';
        countText.innerText = isVi 
          ? `Tìm thấy ${matchCount} câu trả lời` 
          : `Found ${matchCount} answer(s)`;
      }
    }

    if (emptyState) {
      emptyState.style.display = matchCount === 0 ? 'block' : 'none';
    }
  }

  input.addEventListener('input', doSearch);

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      input.value = '';
      doSearch();
      input.focus();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      input.value = '';
      doSearch();
    });
  }
}

// ==========================================
// 15. LIVE DUAL-TAB SYNC (BROADCASTCHANNEL)
// ==========================================
const ZCL_BROADCAST_CHANNEL_NAME = 'zcl_hub_p2p_channel';
let zclLiveChannel = null;
let hasPeerTab = false;
const thisTabId = 'tab_' + Math.random().toString(36).substring(2, 9);

function initLiveDualTabSync() {
  if (!('BroadcastChannel' in window)) return;

  try {
    zclLiveChannel = new BroadcastChannel(ZCL_BROADCAST_CHANNEL_NAME);
  } catch (err) {
    console.warn('[ZCL BroadcastChannel not supported]:', err);
    return;
  }

  const statusIndicator = document.getElementById('studioStatusBox');
  const mainStatusText = document.getElementById('studioMainStatus');
  const openSecondTabBtn = document.getElementById('btnOpenSecondTab');

  function setDualTabActiveState(active) {
    hasPeerTab = active;
    if (statusIndicator) {
      statusIndicator.classList.toggle('dual-active', active);
    }
    if (mainStatusText) {
      const isVi = currentLang === 'vi';
      if (active) {
        mainStatusText.innerText = isVi 
          ? i18n.vi.studio_status_dual_active 
          : i18n.en.studio_status_dual_active;
      } else {
        mainStatusText.innerText = isVi 
          ? i18n.vi.studio_status_ready 
          : i18n.en.studio_status_ready;
      }
    }
    if (openSecondTabBtn && active) {
      openSecondTabBtn.style.borderColor = 'var(--mint)';
      const span = openSecondTabBtn.querySelector('span');
      if (span) {
        span.innerText = currentLang === 'vi' ? 'Đã liên kết 2 Tab' : '2 Tabs Connected';
      }
    }
  }

  // Listen for peer tab messages
  zclLiveChannel.onmessage = (event) => {
    const data = event.data;
    if (!data || data.fromTab === thisTabId) return;

    if (data.type === 'HELLO') {
      setDualTabActiveState(true);
      zclLiveChannel.postMessage({ type: 'PONG', fromTab: thisTabId });
      showToast(currentLang === 'vi' 
        ? i18n.vi.studio_toast_tab_detected 
        : i18n.en.studio_toast_tab_detected);
    } else if (data.type === 'PONG') {
      setDualTabActiveState(true);
    } else if (data.type === 'CLIPBOARD_SYNC') {
      const text = data.text || '';
      const inputA = document.getElementById('clipInputA');
      const inputB = document.getElementById('clipInputB');
      if (inputA && inputB) {
        inputB.value = text;
        inputB.style.borderColor = 'var(--mint)';
        setTimeout(() => { inputB.style.borderColor = ''; }, 1800);
      }
      showToast((currentLang === 'vi' ? i18n.vi.studio_toast_clipboard_received : i18n.en.studio_toast_clipboard_received) + ` "${text.substring(0, 30)}..."`);
    } else if (data.type === 'FILE_COMPLETE') {
      const isVi = currentLang === 'vi';
      showToast((isVi ? i18n.vi.studio_toast_file_received : i18n.en.studio_toast_file_received) + `${data.fileName} (${data.fileSize})`);
    } else if (data.type === 'BYE') {
      setDualTabActiveState(false);
    }
  };

  // Announce this tab to network
  zclLiveChannel.postMessage({ type: 'HELLO', fromTab: thisTabId });

  window.addEventListener('beforeunload', () => {
    if (zclLiveChannel) {
      zclLiveChannel.postMessage({ type: 'BYE', fromTab: thisTabId });
    }
  });

  // Intercept local clipboard button click to broadcast
  const btnCopy = document.getElementById('btnTestCopy');
  if (btnCopy) {
    btnCopy.addEventListener('click', () => {
      const inputA = document.getElementById('clipInputA');
      const text = inputA ? inputA.value : '';
      if (zclLiveChannel && text) {
        zclLiveChannel.postMessage({
          type: 'CLIPBOARD_SYNC',
          fromTab: thisTabId,
          text: text
        });
      }
    });
  }
}

// 9. INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  const safeRun = (name, fn) => {
    try {
      fn();
    } catch (err) {
      console.error(`[ZCL Init Error] ${name}:`, err);
    }
  };

  safeRun('ThemeToggle', initThemeToggle);
  safeRun('Language', () => setLanguage(currentLang));

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      setLanguage(btn.getAttribute('data-lang'));
      if (typeof updateConsoleEnvUI === 'function') updateConsoleEnvUI();
      if (typeof updateOrbitUI === 'function') updateOrbitUI();
    });
  });

  safeRun('MainTabs', initMainTabs);
  safeRun('ConsoleEnvironment', initConsoleEnvironment);
  safeRun('DeviceOrbit', initDeviceOrbit);
  safeRun('Studio', initStudio);
  safeRun('Faq', initFaq);
  safeRun('DownloadModal', initDownloadModal);
  safeRun('GitHubReleases', syncReleasesFromGitHub);
  safeRun('3DTiltCards', init3DTiltCards);
  safeRun('KeyboardShortcuts', initKeyboardShortcuts);
  safeRun('BackToTop', initBackToTop);
  safeRun('BackgroundEffects', initBackgroundEffects);
  safeRun('EcoMode', initEcoMode);
  safeRun('TabScrollFades', initTabScrollFades);
  safeRun('TransferCalculator', initTransferCalculator);
  safeRun('FaqSearch', initFaqSearch);
  safeRun('LiveDualTabSync', initLiveDualTabSync);
});