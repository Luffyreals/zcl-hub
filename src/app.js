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
    pwa_title: "Cài đặt trực tiếp từ trình duyệt",
    pwa_desc: "Trang web có thể cài vào máy tính hoặc điện thoại như một ứng dụng độc lập để mở nhanh bất cứ lúc nào.",
    pwa_install_btn: "Cài đặt ZCL Hub",

    // Studio (Dùng thử trên Web)
    studio_badge: "TRẢI NGHIỆM TRỰC TIẾP",
    studio_title: "Dùng thử ngay trên trình duyệt",
    studio_sub: "Bạn có thể thử kéo thả file và rê thử chuột điều khiển ngay tại đây.",
    studio_tab_tp: "Thử gửi file (Teleport)",
    studio_tab_rm: "Thử điều khiển chuột (Remote)",
    studio_tab_bench: "Kiểm tra tốc độ Wi-Fi",
    studio_status_ready: "Đang kết nối",

    tp_drop_title: "Kéo thả file vào đây hoặc bấm để chọn",
    tp_drop_sub: "File sẽ được truyền trực tiếp sang máy tính nhận trong phòng",
    tp_peers_title: "Máy tính phát hiện được trong phòng",
    tp_transfer_demo: "Đang gửi đến: Laptop-LamViec",
    tp_speed: "Tốc độ: Siêu nhanh",

    rm_ip_placeholder: "Tên hoặc mã kết nối của máy tính",
    rm_connect_btn: "Bắt đầu điều khiển",
    rm_disconnect_btn: "Dừng lại",
    rm_fullscreen: "Toàn màn hình",
    rm_overlay_title: "Bấm để thử điều khiển chuột",
    rm_overlay_sub: "Di chuột vào khu vực này để cảm nhận chuột ăn ngay, không hề giật lag",

    bench_title: "Tốc độ gửi file thực tế khi dùng chung Wi-Fi",
    bench_btn_run: "Bấm để kiểm tra tốc độ",

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
    modal_btn_start: "Bắt đầu tải xuống"
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
    pwa_title: "Install Directly from Browser",
    pwa_desc: "Install this web app to your desktop or phone home screen for instant offline access.",
    pwa_install_btn: "Install ZCL Hub",

    // Studio
    studio_badge: "LIVE IN-BROWSER",
    studio_title: "Try Right in Your Browser",
    studio_sub: "Experience file transfers and smooth mouse control without installing any files.",
    studio_tab_tp: "Try Sending Files (Teleport)",
    studio_tab_rm: "Try Mouse Control (Remote)",
    studio_tab_bench: "Check Wi-Fi Speed",
    studio_status_ready: "Connected",

    tp_drop_title: "Drop files here or click to browse",
    tp_drop_sub: "Files transfer directly to the receiving computer in your room",
    tp_peers_title: "Computers found in this room",
    tp_transfer_demo: "Sending to: Laptop-Work",
    tp_speed: "Speed: Super Fast",

    rm_ip_placeholder: "Computer name or connection code",
    rm_connect_btn: "Start Control",
    rm_disconnect_btn: "Stop",
    rm_fullscreen: "Fullscreen",
    rm_overlay_title: "Click to test mouse control",
    rm_overlay_sub: "Move your mouse in this area to feel instant 0-lag responsiveness",

    bench_title: "Actual Transfer Speed over Local Wi-Fi",
    bench_btn_run: "Test Speed",

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
    modal_btn_start: "Start Download"
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
      tabBtns.forEach((b) => b.classList.remove('active'));
      panels.forEach((p) => p.classList.remove('active'));
      btn.classList.add('active');

      const target = document.getElementById(`panel-${app}`);
      if (target) target.classList.add('active');

      if (app === 'remote') {
        window.dispatchEvent(new Event('resize'));
      }
    });
  });

  // Drop zone simulation
  const dropZone = document.getElementById('dropZone');
  const fileInput = document.getElementById('fileInput');

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
      if (files.length > 0) simulateTransfer(files[0].name, files[0].size);
    });
    fileInput.addEventListener('change', () => {
      if (fileInput.files.length > 0) {
        simulateTransfer(fileInput.files[0].name, fileInput.files[0].size);
      }
    });
  }

  function simulateTransfer(fileName, fileSize) {
    const bar = document.getElementById('progressFill');
    const pct = document.getElementById('progressPercent');
    const metaBytes = document.getElementById('progressBytes');
    const transferDemo = document.querySelector('[data-i18n="tp_transfer_demo"]');

    if (transferDemo) {
      transferDemo.innerText = (currentLang === 'vi' ? 'Đang gửi file: ' : 'Sending file: ') + fileName;
    }

    let progress = 0;
    const totalMB = Math.max(12, Math.round(fileSize / (1024 * 1024)) || 850);
    const interval = setInterval(() => {
      progress += 5;
      if (progress > 100) progress = 100;
      if (bar) bar.style.width = progress + '%';
      if (pct) pct.innerText = progress + '%';
      if (metaBytes) {
        const curMB = ((totalMB * progress) / 100).toFixed(1);
        metaBytes.innerText = `${curMB} MB / ${totalMB} MB`;
      }
      if (progress >= 100) {
        clearInterval(interval);
        showToast(currentLang === 'vi' ? `Đã gửi xong: ${fileName}` : `Sent successfully: ${fileName}`);
      }
    }, 80);
  }

  // Remote Desktop Canvas Demo
  const canvas = document.getElementById('remoteCanvas');
  const overlay = document.getElementById('remoteOverlay');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let mouseX = 140;
    let mouseY = 140;
    let isConnected = true;

    function resizeCanvas() {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      drawScreen();
    }

    function drawScreen() {
      const w = canvas.getBoundingClientRect().width;
      const h = canvas.getBoundingClientRect().height;

      // Desktop Wallpaper
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, '#100e17');
      grad.addColorStop(1, '#08070b');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Simple Desktop Window
      const winW = Math.min(520, w - 40);
      const winH = 260;
      const winX = (w - winW) / 2;
      const winY = (h - winH) / 2;

      ctx.fillStyle = 'rgba(21, 18, 29, 0.9)';
      ctx.strokeStyle = 'rgba(133, 237, 202, 0.3)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(winX, winY, winW, winH, 10);
      ctx.fill();
      ctx.stroke();

      // Window Header
      ctx.fillStyle = '#ff5f56';
      ctx.beginPath();
      ctx.arc(winX + 20, winY + 20, 5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#ffbd2e';
      ctx.beginPath();
      ctx.arc(winX + 36, winY + 20, 5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#27c93f';
      ctx.beginPath();
      ctx.arc(winX + 52, winY + 20, 5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#f7f3ec';
      ctx.font = '13px system-ui, -apple-system, sans-serif';
      ctx.textAlign = 'left';

      if (currentLang === 'vi') {
        ctx.fillText('Màn hình máy tính từ xa (Đang kết nối trực tiếp)', winX + 74, winY + 24);
        ctx.fillStyle = '#85edca';
        ctx.fillText('• Kết nối mượt mà qua mạng Wi-Fi chung', winX + 26, winY + 80);
        ctx.fillStyle = '#cea3f3';
        ctx.fillText('• Chuột bấm ăn ngay, không hề có độ trễ gián đoạn', winX + 26, winY + 112);
        ctx.fillStyle = '#f7f3ec';
        ctx.fillText('• Hình ảnh sắc nét, mượt mà', winX + 26, winY + 144);
        ctx.fillStyle = '#a097ac';
        ctx.fillText('> Rê chuột trong khung này để cảm nhận độ mượt mà!', winX + 26, winY + 190);
      } else {
        ctx.fillText('Remote Desktop Screen (Live local connection)', winX + 74, winY + 24);
        ctx.fillStyle = '#85edca';
        ctx.fillText('• Connected smoothly over local Wi-Fi', winX + 26, winY + 80);
        ctx.fillStyle = '#cea3f3';
        ctx.fillText('• Instant mouse feedback, zero input lag', winX + 26, winY + 112);
        ctx.fillStyle = '#f7f3ec';
        ctx.fillText('• Clear display and responsive control', winX + 26, winY + 144);
        ctx.fillStyle = '#a097ac';
        ctx.fillText('> Move your mouse inside this screen to feel the responsiveness!', winX + 26, winY + 190);
      }

      // Local cursor
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
    }

    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      drawScreen();
    });

    if (overlay) {
      overlay.addEventListener('click', () => {
        overlay.classList.add('hidden');
      });
    }

    window.addEventListener('resize', resizeCanvas);
    setTimeout(resizeCanvas, 100);
  }

  // Benchmark Run
  const btnRun = document.getElementById('btnRunBenchmark');
  if (btnRun) {
    btnRun.addEventListener('click', () => {
      btnRun.disabled = true;
      btnRun.innerText = currentLang === 'vi' ? 'Đang đo kiểm...' : 'Testing...';

      const fills = [
        document.getElementById('benchFill1'),
        document.getElementById('benchFill2'),
        document.getElementById('benchFill3')
      ];

      fills.forEach((f) => {
        if (f) f.style.width = '0%';
      });

      setTimeout(() => {
        if (fills[0]) fills[0].style.width = '45%';
        if (fills[1]) fills[1].style.width = '85%';
        if (fills[2]) fills[2].style.width = '100%';

        btnRun.disabled = false;
        btnRun.innerText = currentLang === 'vi' ? 'Kiểm tra lại' : 'Test Again';
        showToast(currentLang === 'vi' ? 'Tốc độ Wi-Fi nội bộ đạt chuẩn siêu nhanh!' : 'Wi-Fi speed test completed!');
      }, 700);
    });
  }
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

  function openModal(app, format = 'exe') {
    if (app === 'teleport') {
      if (modalIcon) {
        modalIcon.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 16V4M7 4L3 8M7 4L11 8M17 8V20M17 20L21 16M17 20L13 16"/></svg>';
        modalIcon.style.background = 'var(--mint-dark)';
        modalIcon.style.color = 'var(--mint)';
      }
      if (modalTitle) modalTitle.innerText = currentLang === 'vi' ? 'Tải ZCL Teleport' : 'Download ZCL Teleport';
      if (modalDesc) modalDesc.innerText = currentLang === 'vi' 
        ? 'Bản chính thức cho máy tính Windows 10/11 — Gửi nhận file siêu tốc.' 
        : 'Official Windows 10/11 build — Fast local file transfers.';
      if (modalFileName) modalFileName.innerText = format === 'zip' ? 'zcl_teleport_v0.1.0_portable.zip' : 'zcl_teleport_v0.1.0_setup.exe';
      if (modalFileSize) modalFileSize.innerText = format === 'zip' ? '11.8 MB' : '12.4 MB';
    } else {
      if (modalIcon) {
        modalIcon.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>';
        modalIcon.style.background = 'var(--lilac-dark)';
        modalIcon.style.color = 'var(--lilac)';
      }
      if (modalTitle) modalTitle.innerText = currentLang === 'vi' ? 'Tải ZCL Remote' : 'Download ZCL Remote';
      if (modalDesc) modalDesc.innerText = currentLang === 'vi' 
        ? 'Bản chính thức cho máy tính Windows 10/11 — Điều khiển máy tính từ xa mượt mà.' 
        : 'Official Windows 10/11 build — Smooth remote desktop.';
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
        const dummyContent = `# ZCL: ${fileName}\n\nCam on ban da tai ung dung ZCL!\n\nHuong dan cai dat tren Windows 10/11:\n1. Mo tep vua tai ve.\n2. Neu Windows hien thi thong bao bao ve mau xanh:\n   - Bam "More info" (Thong tin them)\n   - Chon "Run anyway" (Van chay)\n3. Khi may tinh hoi quyen truy cap mang: tick chon "Private networks" (Mang rieng tu) va Allow Access.\n\nTac gia: Nguyen Hoang Tung (@Luffyreals)\n`;
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
  envButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      envButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const env = btn.getAttribute('data-env') || 'home';
      currentEnv = env;
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
// 9. INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  setLanguage(currentLang);

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      setLanguage(btn.getAttribute('data-lang'));
      updateConsoleEnvUI();
      updateOrbitUI();
    });
  });

  initConsoleEnvironment();
  initDeviceOrbit();
  initStudio();
  initFaq();
  initDownloadModal();
  initMainTabs();
});