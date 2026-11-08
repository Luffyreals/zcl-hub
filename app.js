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

    // Hero
    hero_eyebrow: "MIỄN PHÍ · MÃ NGUỒN MỞ · AN TOÀN TUYỆT ĐỐI",
    hero_title: "Nhanh hơn. Mượt mà hơn.<br><span class=\"highlight-mint\">Hoàn toàn riêng tư</span> giữa các máy tính.",
    hero_lede: "Gửi nhận file dung lượng lớn và điều khiển máy tính tức thì qua mạng Wi-Fi chung trong phòng. Không cần Internet, không cần tạo tài khoản.",

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
    tp_btn_web: "Dùng thử trên Web",

    rm_status: "Bản thử nghiệm",
    rm_title: "ZCL Remote",
    rm_desc: "Điều khiển máy tính từ xa siêu mượt qua Wi-Fi. Trải nghiệm chuột nhanh nhạy, không giật hình, không quảng cáo.",
    rm_f1: "Màn hình rõ nét, chuyển động mượt mà không bị trễ hình",
    rm_f2: "Di chuột và bấm phím phản hồi tức thì như đang ngồi trước máy",
    rm_f3: "Có nút ngắt kết nối khẩn cấp bất cứ khi nào bạn muốn",
    rm_btn_dl: "Tải Remote (.exe)",
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

    // Hero
    hero_eyebrow: "FREE · OPEN SOURCE · COMPLETELY SECURE",
    hero_title: "Faster. Smoother.<br><span class=\"highlight-mint\">Completely private</span> between your computers.",
    hero_lede: "Send huge files and control computers smoothly over your local Wi-Fi. No internet required, no account needed.",

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
    tp_btn_web: "Try on Web",

    rm_status: "Preview build",
    rm_title: "ZCL Remote",
    rm_desc: "Ultra-smooth remote desktop over Wi-Fi. Instant mouse feedback, no lag, no ads.",
    rm_f1: "Crystal clear display with fluid motion",
    rm_f2: "Instant mouse and keyboard response with zero delay",
    rm_f3: "Emergency stop button to disconnect immediately whenever you want",
    rm_btn_dl: "Download Remote (.exe)",
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

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  document.documentElement.setAttribute('lang', lang);
}

// ==========================================
// 2. MAIN TABS SWITCHER
// ==========================================
function switchMainTab(targetTabId, updateHash = true) {
  if (!targetTabId) return;

  let cleanId = targetTabId.replace(/^#/, '').replace(/^tab-/, '');

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
    history.pushState(null, '', '#' + cleanId);
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
        e.preventDefault();
        switchMainTab(tabTarget);

        const navLinks = document.querySelector('.nav-links');
        if (navLinks && navLinks.classList.contains('open')) {
          navLinks.classList.remove('open');
        }
      });
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href && href !== '#') {
        const target = href.replace(/^#/, '');
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
// 5. MOBILE NAVIGATION & PWA INSTALL
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
// 7. INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      setLanguage(btn.getAttribute('data-lang'));
    });
  });

  initStudio();
  initFaq();
  initMobileNav();
  initDownloadModal();
  initMainTabs();
});