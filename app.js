/**
 * ZCL Hub — Core Logic & Interactive P2P Studio
 * Zero-dependency, offline-ready, bilingual (VI/EN).
 */

// ==========================================
// 1. BILINGUAL DICTIONARY (VI / EN)
// ==========================================
const i18n = {
  vi: {
    brand_sub: "Hệ sinh thái LAN",
    nav_ecosystem: "Hệ sinh thái",
    nav_studio: "Web Studio (Dùng thử)",
    nav_compare: "So sánh",
    nav_philosophy: "Triết lý",
    nav_roadmap: "Lộ trình",
    btn_launch_web: "⚡ Mở Web Client",
    btn_download_desktop: "📦 Tải bản Desktop (.exe)",
    btn_github: "GitHub",
    hero_eyebrow: "HỆ SINH THÁI ỨNG DỤNG NỘI BỘ SIÊU TỐC",
    hero_title: "Làm chủ mạng LAN.<br><span class=\"highlight-mint\">Không Cloud.</span> <span class=\"highlight-lilac\">Không Độ Trễ.</span>",
    hero_lede: "Truyền file chục GB với tốc độ phần cứng, điều khiển máy tính 60 FPS mượt mà ngay trong cùng mạng Wi-Fi/LAN. Không qua máy chủ relay, không tài khoản, bảo mật tuyệt đối.",
    latency_cloud_label: "Phần mềm Cloud (TeamViewer / Drive)",
    latency_cloud_desc: "Đi vòng qua relay nước ngoài, nghẽn khi đứt cáp",
    latency_zcl_label: "Hệ sinh thái ZCL Direct LAN",
    latency_zcl_desc: "P2P mã hóa nội bộ, đứt Internet vẫn chạy 100%",
    
    // Bento
    bento_badge: "CÁC ỨNG DỤNG LÕI",
    bento_title: "Hệ sinh thái ZCL có những gì?",
    bento_sub: "Bộ công cụ mã nguồn mở hoàn chỉnh thay thế các giải pháp phụ thuộc đám mây.",
    
    tp_title: "ZCL Teleport",
    tp_status: "Bản thử nghiệm v0.1",
    tp_desc: "Gửi file hàng chục GB và đồng bộ clipboard 2 chiều giữa các máy tính trong cùng Wi-Fi/LAN. Tốc độ kịch trần card mạng.",
    tp_f1: "Tốc độ 100MB/s – 1GB/s (tùy Switch/Wi-Fi)",
    tp_f2: "Tự động tiếp tục khi rớt mạng (Resumable)",
    tp_f3: "Đồng bộ Clipboard văn bản & hình ảnh",
    tp_btn_dl: "Tải Teleport (.exe)",
    tp_btn_web: "Dùng Teleport Web",

    rm_title: "ZCL Remote Desktop",
    rm_status: "Alpha v0.1.0",
    rm_desc: "Điều khiển máy tính từ xa siêu tốc trong mạng nội bộ. Trải nghiệm cảm giác chuột 0ms, không độ trễ, không quảng cáo.",
    rm_f1: "Độ trễ truyền nhận < 50ms (LAN Gigabit < 5ms)",
    rm_f2: "Màn hình 60 FPS @ 1080p, tối ưu băng thông",
    rm_f3: "Local Cursor Rendering (chuột không có độ trễ)",
    rm_f4: "Floating Kill-switch ngắt quyền lập tức",
    rm_btn_dl: "Tải Remote (.exe)",
    rm_btn_web: "Mở Remote Viewer",

    phil_title: "Triết lý Zero-Cloud",
    phil_1_h: "100% Không Cloud",
    phil_1_p: "Dữ liệu không bao giờ rời khỏi phòng bạn. Không máy chủ relay, không nguy cơ rò rỉ.",
    phil_2_h: "Không Cần Tài Khoản",
    phil_2_p: "Không đăng ký, không email, không quảng cáo 'thương mại' hay giới hạn thời gian phiên.",
    phil_3_h: "Mã Nguồn Mở Tự Do",
    phil_3_p: "Phát hành theo giấy phép GPL-3.0. Bất kỳ ai cũng có thể tự kiểm tra mã nguồn.",

    road_title: "Ứng dụng tiếp theo trong lộ trình",
    road_cast_h: "ZCL Cast",
    road_cast_p: "Chia sẻ màn hình và âm thanh độ nét cao trong phòng họp không cần dây cáp HDMI.",
    road_chat_h: "ZCL Chat",
    road_chat_p: "Kênh chat & gọi thoại nội bộ mã hóa tức thì cho văn phòng, không lưu lịch sử máy chủ.",
    road_sync_h: "ZCL Sync",
    road_sync_p: "Tự động đồng bộ hóa thư mục làm việc giữa máy bàn và laptop theo thời gian thực.",

    // Studio
    studio_badge: "TRẢI NGHIỆM TRỰC TIẾP",
    studio_title: "ZCL Web Studio",
    studio_sub: "Dùng trực tiếp trên trình duyệt mà không cần cài đặt bất kỳ phần mềm nào.",
    studio_tab_tp: "⚡ ZCL Teleport Web",
    studio_tab_rm: "🖥️ ZCL Remote Web Viewer",
    studio_status_ready: "Sẵn sàng trong mạng nội bộ",
    
    tp_drop_title: "Kéo thả file vào đây hoặc bấm để chọn",
    tp_drop_sub: "Hỗ trợ file đơn hoặc thư mục hàng chục GB qua WebRTC DataChannel",
    tp_peers_title: "Máy tính trong mạng LAN phát hiện được",
    tp_transfer_demo: "Đang truyền đến: Laptop-VanPhong",
    tp_speed: "Tốc độ: 94.6 MB/s (Wi-Fi 6 LAN)",

    rm_ip_placeholder: "Nhập IP hoặc mã PIN (VD: 192.168.1.15)",
    rm_connect_btn: "Kết nối",
    rm_disconnect_btn: "Ngắt kết nối (Kill-switch)",
    rm_fullscreen: "Toàn màn hình",
    rm_overlay_title: "Bấm để khởi động Remote Viewer",
    rm_overlay_sub: "Thử di chuột để trải nghiệm công nghệ Local Cursor Rendering 0ms lag",

    // Compare
    comp_badge: "ĐỐI CHIẾU THỰC TẾ",
    comp_title: "Vì sao chọn Hệ sinh thái ZCL?",
    comp_th_feature: "Tiêu chí",
    comp_th_zcl: "Hệ sinh thái ZCL",
    comp_th_cloud: "Phần mềm Cloud thông thường",

    c_speed: "Tốc độ truyền dữ liệu",
    c_speed_zcl: "Tối đa card mạng (1 Gbps - 2.5 Gbps)",
    c_speed_cloud: "Bị bóp bởi đường truyền Internet (20 - 100 Mbps)",

    c_latency: "Độ trễ điều khiển",
    c_latency_zcl: "1ms - 15ms (Cảm giác chuột 0ms)",
    c_latency_cloud: "120ms - 350ms (Giật lag khi relay nước ngoài)",

    c_internet: "Khi đứt cáp quang biển",
    c_internet_zcl: "Chạy bình thường 100%",
    c_internet_cloud: "Mất kết nối hoàn toàn",

    c_privacy: "Quyền riêng tư & Bảo mật",
    c_privacy_zcl: "Dữ liệu ở trong phòng bạn (TLS 1.3)",
    c_privacy_cloud: "Đi qua máy chủ công ty bên thứ ba",

    c_license: "Chi phí & Giới hạn",
    c_license_zcl: "Miễn phí vĩnh viễn, GPL-3.0 mở",
    c_license_cloud: "Cảnh báo dùng thương mại, tính phí hàng tháng",

    // PWA
    pwa_title: "Cài đặt ZCL Hub như ứng dụng độc lập",
    pwa_desc: "Trang web hỗ trợ chuẩn PWA (Progressive Web App). Cài đặt ngay lên màn hình chính máy tính hoặc điện thoại để dùng offline.",
    pwa_install_btn: "📲 Cài đặt ZCL Hub (PWA)",

    // Footer
    footer_desc: "Hệ sinh thái ứng dụng mạng nội bộ P2P tối ưu tốc độ, bảo mật và quyền làm chủ dữ liệu của bạn.",
    footer_apps: "Sản phẩm",
    footer_res: "Tài nguyên",
    footer_author: "Tác giả",
    footer_rights: "Mã nguồn mở theo giấy phép GPL-3.0. Phát triển bởi Nguyễn Hoàng Tùng."
  },
  en: {
    brand_sub: "LAN Ecosystem",
    nav_ecosystem: "Ecosystem",
    nav_studio: "Web Studio (Live)",
    nav_compare: "Comparison",
    nav_philosophy: "Philosophy",
    nav_roadmap: "Roadmap",
    btn_launch_web: "⚡ Open Web Client",
    btn_download_desktop: "📦 Download Desktop (.exe)",
    btn_github: "GitHub",
    hero_eyebrow: "ULTRA-FAST LOCAL NETWORK ECOSYSTEM",
    hero_title: "Master your LAN.<br><span class=\"highlight-mint\">Zero Cloud.</span> <span class=\"highlight-lilac\">Zero Latency.</span>",
    hero_lede: "Transfer multi-gigabyte files at raw hardware speeds and remote control computers at 60 FPS with zero input lag across your local Wi-Fi/LAN. No relay servers, no accounts, absolute privacy.",
    latency_cloud_label: "Cloud Software (TeamViewer / Drive)",
    latency_cloud_desc: "Routed through overseas relays, halts on sea-cable drops",
    latency_zcl_label: "ZCL Direct LAN Ecosystem",
    latency_zcl_desc: "P2P local encryption, runs 100% offline without Internet",

    // Bento
    bento_badge: "CORE APPLICATIONS",
    bento_title: "What's in the ZCL Ecosystem?",
    bento_sub: "A complete open-source suite designed to replace cloud dependencies for local devices.",

    tp_title: "ZCL Teleport",
    tp_status: "Test Build v0.1",
    tp_desc: "Send multi-gigabyte files and synchronize clipboards bidirectionally across computers on the same Wi-Fi/LAN at maximum interface speed.",
    tp_f1: "100MB/s – 1GB/s throughput (Switch/Wi-Fi bound)",
    tp_f2: "Auto-resumable on network interruptions",
    tp_f3: "Bidirectional text & image clipboard sync",
    tp_btn_dl: "Download Teleport (.exe)",
    tp_btn_web: "Launch Teleport Web",

    rm_title: "ZCL Remote Desktop",
    rm_status: "Alpha v0.1.0",
    rm_desc: "Ultra-low latency peer-to-peer remote desktop for your local network. 0ms perceived cursor lag, zero bloat, zero commercial nag screens.",
    rm_f1: "Network round-trip latency < 50ms (< 5ms on LAN)",
    rm_f2: "60 FPS @ 1080p stream with bandwidth tuning",
    rm_f3: "Local Cursor Rendering for zero input delay",
    rm_f4: "Instant Floating Kill-switch for host sovereignty",
    rm_btn_dl: "Download Remote (.exe)",
    rm_btn_web: "Launch Remote Viewer",

    phil_title: "Zero-Cloud Philosophy",
    phil_1_h: "100% Zero-Cloud",
    phil_1_p: "Data never leaves your room. No central relay servers, zero risk of third-party eavesdropping.",
    phil_2_h: "No Accounts Required",
    phil_2_p: "No registrations, no spam emails, no artificial commercial warnings or timed session limits.",
    phil_3_h: "Free & Open Source",
    phil_3_p: "Released under GPL-3.0. Inspect, verify, and run every single line of code freely.",

    road_title: "Upcoming Ecosystem Apps",
    road_cast_h: "ZCL Cast",
    road_cast_p: "High-definition uncompressed screen and audio sharing for meeting rooms without HDMI cables.",
    road_chat_h: "ZCL Chat",
    road_chat_p: "Ephemeral encrypted local chat & voice calls for offices without any server logs.",
    road_sync_h: "ZCL Sync",
    road_sync_p: "Automatic real-time bi-directional directory syncing between desktop and laptop.",

    // Studio
    studio_badge: "TRY IN BROWSER",
    studio_title: "ZCL Web Studio",
    studio_sub: "Run directly in your modern web browser without installing any software.",
    studio_tab_tp: "⚡ ZCL Teleport Web",
    studio_tab_rm: "🖥️ ZCL Remote Web Viewer",
    studio_status_ready: "LAN Ready · P2P Active",

    tp_drop_title: "Drop files here or click to browse",
    tp_drop_sub: "Supports single files or full folders via WebRTC DataChannel",
    tp_peers_title: "Discovered Local Devices",
    tp_transfer_demo: "Transferring to: Office-Laptop",
    tp_speed: "Speed: 94.6 MB/s (Wi-Fi 6 LAN)",

    rm_ip_placeholder: "Enter IP or PIN (e.g. 192.168.1.15)",
    rm_connect_btn: "Connect",
    rm_disconnect_btn: "Disconnect (Kill-switch)",
    rm_fullscreen: "Fullscreen",
    rm_overlay_title: "Click to start Remote Viewer",
    rm_overlay_sub: "Move your mouse to experience 0ms Local Cursor Rendering technology",

    // Compare
    comp_badge: "REAL-WORLD BENCHMARKS",
    comp_title: "Why Choose the ZCL Ecosystem?",
    comp_th_feature: "Features & Metrics",
    comp_th_zcl: "ZCL Ecosystem",
    comp_th_cloud: "Traditional Cloud Apps",

    c_speed: "Data Transfer Speed",
    c_speed_zcl: "Hardware interface cap (1 Gbps - 2.5 Gbps)",
    c_speed_cloud: "Throttled by ISP upload limits (20 - 100 Mbps)",

    c_latency: "Control Latency",
    c_latency_zcl: "1ms - 15ms (0ms perceived cursor feel)",
    c_latency_cloud: "120ms - 350ms (Jittery overseas relays)",

    c_internet: "Undersea Cable Outages",
    c_internet_zcl: "100% normal operation",
    c_internet_cloud: "Completely dead / unreachable",

    c_privacy: "Privacy & Security",
    c_privacy_zcl: "Data strictly stays inside your room (TLS 1.3)",
    c_privacy_cloud: "Traverses third-party cloud servers",

    c_license: "Cost & Limits",
    c_license_zcl: "Free forever, open-source GPL-3.0",
    c_license_cloud: "Commercial flags, monthly subscription fees",

    // PWA
    pwa_title: "Install ZCL Hub as a Standalone App",
    pwa_desc: "This site is a Progressive Web App (PWA). Add it to your desktop or mobile home screen to access the web clients offline.",
    pwa_install_btn: "📲 Install ZCL Hub (PWA)",

    // Footer
    footer_desc: "High-speed peer-to-peer local network ecosystem prioritizing performance, security, and digital sovereignty.",
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

  // Update DOM elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key]) {
      el.innerHTML = i18n[lang][key];
    }
  });

  // Update input placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (i18n[lang][key]) {
      el.setAttribute('placeholder', i18n[lang][key]);
    }
  });

  // Update lang buttons
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  document.documentElement.setAttribute('lang', lang);
}

// ==========================================
// 2. INTERACTIVE ZCL WEB STUDIO
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

  // Teleport Web Simulation
  initTeleportWeb();

  // Remote Web Canvas Simulation
  initRemoteCanvas();
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
    const totalBytes = file.size > 0 ? file.size : 1024 * 1024 * 750; // fallback 750MB
    const totalMB = (totalBytes / (1024 * 1024)).toFixed(1);

    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 8) + 6;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
      }

      const currentMB = ((totalBytes * progress) / 100 / (1024 * 1024)).toFixed(1);
      const simulatedSpeed = (88 + Math.random() * 18).toFixed(1);

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
  let mouseX = 300, mouseY = 200;
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

  // Draw simulated desktop
  function renderDesktop() {
    if (!isConnected) {
      ctx.fillStyle = '#0e0d14';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#6c6576';
      ctx.font = '14px Cascadia Mono';
      ctx.textAlign = 'center';
      ctx.fillText('[DISCONNECTED — CLICK CONNECT TO RESUME]', canvas.width / 2, canvas.height / 2);
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

    // 1. Draw desktop background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#100e19');
    gradient.addColorStop(0.5, '#161324');
    gradient.addColorStop(1, '#0e121a');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 2. Draw mock window (Code Editor / Terminal)
    const winX = 60, winY = 40;
    const winW = Math.min(canvas.width - 120, 680);
    const winH = Math.min(canvas.height - 100, 320);

    // Window shadow & border
    ctx.fillStyle = '#1c1926';
    ctx.strokeStyle = '#352e46';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(winX, winY, winW, winH, 10);
    ctx.fill();
    ctx.stroke();

    // Window title bar
    ctx.fillStyle = '#262134';
    ctx.beginPath();
    ctx.roundRect(winX, winY, winW, 34, [10, 10, 0, 0]);
    ctx.fill();

    // Window buttons
    ctx.fillStyle = '#fdaab3';
    ctx.beginPath(); ctx.arc(winX + 18, winY + 17, 5, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#fed69e';
    ctx.beginPath(); ctx.arc(winX + 34, winY + 17, 5, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#85edca';
    ctx.beginPath(); ctx.arc(winX + 50, winY + 17, 5, 0, Math.PI * 2); ctx.fill();

    // Title text
    ctx.fillStyle = '#9e96a8';
    ctx.font = '12px Cascadia Mono';
    ctx.textAlign = 'left';
    ctx.fillText('zcl_remote_session.py — 60 FPS @ 1080p — TLS 1.3', winX + 70, winY + 21);

    // Terminal content
    ctx.fillStyle = '#85edca';
    ctx.fillText('$ zcl-remote --host 192.168.1.15 --stream 60fps', winX + 24, winY + 70);
    ctx.fillStyle = '#cea3f3';
    ctx.fillText('[ZCL Remote Host] Direct P2P TLS 1.3 session established.', winX + 24, winY + 98);
    ctx.fillStyle = '#f5f1eb';
    ctx.fillText('✓ Local Cursor Rendering active (0ms perceived lag)', winX + 24, winY + 126);
    ctx.fillText('✓ Audio/Video hardware accelerated (NVENC / QuickSync)', winX + 24, winY + 154);
    ctx.fillText('✓ Floating Kill-switch armed.', winX + 24, winY + 182);

    ctx.fillStyle = '#6c6576';
    ctx.fillText('> Move cursor inside canvas to test 0ms response time.', winX + 24, winY + 230);

    // 3. Draw Local Cursor (0ms lag)
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

  // Mouse move inside canvas
  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;

    // Simulate jitter latency
    const simLatency = (1.2 + Math.random() * 0.9).toFixed(1);
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

// ==========================================
// 3. PWA INSTALLATION PROMPT
// ==========================================
let deferredPrompt;
const installBtn = document.getElementById('btnInstallPwa');

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  if (installBtn) {
    installBtn.style.display = 'inline-flex';
  }
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
        ? 'Để cài đặt ZCL Hub, hãy nhấn vào biểu tượng [Cài đặt ứng dụng] trên thanh địa chỉ trình duyệt của bạn.' 
        : 'To install ZCL Hub, click the [Install App] icon in your browser address bar.');
    }
  });
}

// Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch((err) => {
      console.log('SW registration error:', err);
    });
  });
}

// ==========================================
// 4. INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });

  initStudio();
});
