# -*- coding: utf-8 -*-
"""
=============================================================================
ZCL Hub — Automated UI & Codebase Quality Test Suite
Author: Nguyễn Hoàng Tùng (@Luffyreals)
License: GNU General Public License v3.0 (GPL-3.0)
=============================================================================
This test suite verifies:
  1. Strict Rules Compliance (No emojis, no forbidden terms, no competitors, no jargon)
  2. Bilingual i18n Completeness (VI/EN 100% key parity & coverage)
  3. Multi-Tab Architecture (5 independent views, sliding tabs, hash targets)
  4. Form Controls & Dropdown Fix (select/option contrast, color-scheme, dark/light)
  5. UI Components Integrity (Web Studio, FAQ Search, Transfer Calc, Dual-Tab, Eco Mode)
  6. PWA, Assets & Syntax Integrity (sw.js, manifest.json, logo.svg, 404.html)
=============================================================================
"""

import unittest
import os
import re
import json
import subprocess

REPO_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
INDEX_HTML = os.path.join(REPO_ROOT, "index.html")
STYLES_CSS = os.path.join(REPO_ROOT, "src", "styles.css")
APP_JS = os.path.join(REPO_ROOT, "src", "app.js")
SW_JS = os.path.join(REPO_ROOT, "sw.js")
MANIFEST_JSON = os.path.join(REPO_ROOT, "manifest.json")
PAGE_404 = os.path.join(REPO_ROOT, "404.html")
LOGO_SVG = os.path.join(REPO_ROOT, "assets", "logo.svg")


class TestStrictRules(unittest.TestCase):
    """Verifies all strict rules defined in GEMINI.md."""

    def setUp(self):
        with open(INDEX_HTML, "r", encoding="utf-8") as f:
            self.html = f.read()
        with open(STYLES_CSS, "r", encoding="utf-8") as f:
            self.css = f.read()
        with open(APP_JS, "r", encoding="utf-8") as f:
            self.js = f.read()
        with open(SW_JS, "r", encoding="utf-8") as f:
            self.sw = f.read()

    def test_no_emojis_in_source_code(self):
        """Rule 5: 100% SVG line icons only, absolutely no system emojis."""
        emoji_pattern = re.compile(r'[\u2600-\u27BF\U0001F300-\U0001FAFF]')
        
        for name, content in [("index.html", self.html), ("styles.css", self.css), ("app.js", self.js), ("sw.js", self.sw)]:
            matches = emoji_pattern.findall(content)
            self.assertEqual(len(matches), 0, f"Found emojis in {name}: {matches}")

    def test_no_competitors_mentioned(self):
        """Rule 2: Never mention or compare with TeamViewer, AnyDesk, UltraViewer."""
        forbidden_competitors = ["TeamViewer", "AnyDesk", "UltraViewer"]
        for comp in forbidden_competitors:
            pattern = re.compile(re.escape(comp), re.IGNORECASE)
            self.assertFalse(pattern.search(self.html), f"Found competitor {comp} in index.html")
            self.assertFalse(pattern.search(self.js), f"Found competitor {comp} in app.js")
            self.assertFalse(pattern.search(self.css), f"Found competitor {comp} in styles.css")

    def test_no_ecosystem_phrase(self):
        """Rule 3: Never use the word 'Hệ sinh thái' or 'Ecosystem'."""
        forbidden = ["hệ sinh thái", "ecosystem"]
        for phrase in forbidden:
            pattern = re.compile(re.escape(phrase), re.IGNORECASE)
            self.assertFalse(pattern.search(self.html), f"Found forbidden phrase '{phrase}' in index.html")
            self.assertFalse(pattern.search(self.js), f"Found forbidden phrase '{phrase}' in app.js")

    def test_no_long_identifier(self):
        """Rule 4: Do not use 'Bộ Ứng Dụng Mạng Nội Bộ Zero-Cloud LAN'. Only use 'ZCL Hub'."""
        forbidden = "Bộ Ứng Dụng Mạng Nội Bộ Zero-Cloud LAN"
        pattern = re.compile(re.escape(forbidden), re.IGNORECASE)
        self.assertFalse(pattern.search(self.html), f"Found long identifier in index.html")
        self.assertFalse(pattern.search(self.js), f"Found long identifier in app.js")

    def test_author_and_license_attribution(self):
        """Author must be Nguyễn Hoàng Tùng (@Luffyreals) under GPL-3.0."""
        self.assertIn("Nguyễn Hoàng Tùng", self.html)
        self.assertIn("Luffyreals", self.html)
        self.assertIn("GPL-3.0", self.html)

    def test_no_complex_technical_jargon_in_text(self):
        """Rule 1: No complex technical jargon in explanation texts."""
        jargon = [
            "WebRTC DataChannel", "mDNS (_zcl._tcp)", "TLS 1.3 Direct",
            "NVENC H.264", "Opus 48kHz", "resumable chunking"
        ]
        for term in jargon:
            self.assertNotIn(term, self.html, f"Found jargon '{term}' in index.html")


class TestI18nCompleteness(unittest.TestCase):
    """Verifies that all text keys in index.html have 100% parity across VI and EN."""

    def setUp(self):
        with open(INDEX_HTML, "r", encoding="utf-8") as f:
            html = f.read()
        with open(APP_JS, "r", encoding="utf-8") as f:
            js = f.read()

        html_keys = set(re.findall(r'data-i18n="([^"]+)"', html))
        html_placeholders = set(re.findall(r'data-i18n-placeholder="([^"]+)"', html))
        html_titles = set(re.findall(r'data-i18n-title="([^"]+)"', html))
        self.all_html_keys = html_keys | html_placeholders | html_titles

        vi_match = re.search(r'vi:\s*\{(.*?)\n\s*\},', js, re.DOTALL)
        en_match = re.search(r'en:\s*\{(.*?)\n\s*\}', js, re.DOTALL)

        self.vi_text = vi_match.group(1) if vi_match else ""
        self.en_text = en_match.group(1) if en_match else ""

        self.vi_keys = set(re.findall(r'^\s*([a-zA-Z0-9_]+)\s*:', self.vi_text, re.MULTILINE))
        self.en_keys = set(re.findall(r'^\s*([a-zA-Z0-9_]+)\s*:', self.en_text, re.MULTILINE))

    def test_all_html_keys_exist_in_vi(self):
        """Every data-i18n key in index.html must exist in i18n.vi."""
        missing = [k for k in self.all_html_keys if k not in self.vi_keys]
        self.assertEqual(len(missing), 0, f"Missing keys in i18n.vi: {missing}")

    def test_all_html_keys_exist_in_en(self):
        """Every data-i18n key in index.html must exist in i18n.en."""
        missing = [k for k in self.all_html_keys if k not in self.en_keys]
        self.assertEqual(len(missing), 0, f"Missing keys in i18n.en: {missing}")

    def test_vi_en_parity(self):
        """i18n.vi and i18n.en must have equal key counts and consistent translations."""
        only_in_vi = self.vi_keys - self.en_keys
        only_in_en = self.en_keys - self.vi_keys
        self.assertEqual(len(only_in_vi), 0, f"Keys only in VI: {only_in_vi}")
        self.assertEqual(len(only_in_en), 0, f"Keys only in EN: {only_in_en}")


class TestTabArchitecture(unittest.TestCase):
    """Verifies the 5-tab segmented navigation architecture."""

    def setUp(self):
        with open(INDEX_HTML, "r", encoding="utf-8") as f:
            self.html = f.read()

    def test_all_5_tab_views_exist(self):
        expected_tabs = [
            "tab-overview",
            "tab-apps",
            "tab-download",
            "tab-studio",
            "tab-faq"
        ]
        for tab_id in expected_tabs:
            self.assertIn(f'id="{tab_id}"', self.html, f"Missing tab panel: #{tab_id}")

    def test_tab_pills_in_header(self):
        expected_targets = [
            'data-tab="tab-overview"',
            'data-tab="tab-apps"',
            'data-tab="tab-download"',
            'data-tab="tab-studio"',
            'data-tab="tab-faq"'
        ]
        for target in expected_targets:
            self.assertIn(target, self.html, f"Missing nav pill for: {target}")

    def test_sliding_indicator_exists(self):
        self.assertIn('id="tabSlidingIndicator"', self.html)

    def test_mobile_scroll_fades_exist(self):
        self.assertIn('id="tabFadeLeft"', self.html)
        self.assertIn('id="tabFadeRight"', self.html)
        self.assertIn('id="navTabsWrapper"', self.html)


class TestDropdownStylesAndControls(unittest.TestCase):
    """Verifies that native select dropdowns and options are styled to prevent white-on-white text."""

    def setUp(self):
        with open(STYLES_CSS, "r", encoding="utf-8") as f:
            self.css = f.read()
        with open(INDEX_HTML, "r", encoding="utf-8") as f:
            self.html = f.read()

    def test_select_elements_in_html(self):
        self.assertIn('id="tpPeerSelect"', self.html)
        self.assertIn('class="conn-select"', self.html)
        self.assertIn('id="remoteDeviceSelect"', self.html)
        self.assertIn('class="remote-device-select"', self.html)

    def test_color_scheme_dark_configured_for_select(self):
        """Checks that select and options force dark color-scheme in CSS."""
        self.assertIn("color-scheme: dark", self.css)

    def test_option_has_dark_background_and_light_text(self):
        """Checks that select option has explicit dark background #171420 and text #f7f3ec."""
        self.assertIn("background-color: #171420", self.css)
        self.assertIn("color: #f7f3ec", self.css)

    def test_light_mode_option_overrides_exist(self):
        """Checks that in light mode, select options switch to #FFFDF8 and dark text."""
        self.assertIn("background-color: #FFFDF8", self.css)
        self.assertIn("color: #2A251E", self.css)

    def test_conn_select_solid_surface_background(self):
        """Checks that .conn-select has solid background: var(--surface) to prevent transparent fallback."""
        pattern = re.compile(r'\.conn-select\s*\{[^}]*background:\s*var\(--surface\);', re.DOTALL)
        self.assertTrue(pattern.search(self.css), "conn-select must use solid background: var(--surface)")


class TestComponentsIntegrity(unittest.TestCase):
    """Verifies that all new components (FAQ Search, Transfer Calc, Dual-Tab, Eco Mode) exist and have matching CSS."""

    def setUp(self):
        with open(INDEX_HTML, "r", encoding="utf-8") as f:
            self.html = f.read()
        with open(STYLES_CSS, "r", encoding="utf-8") as f:
            self.css = f.read()

    def test_faq_search_components(self):
        self.assertIn('id="faqSearchInput"', self.html)
        self.assertIn('id="faqSearchClear"', self.html)
        self.assertIn('id="faqSearchMeta"', self.html)
        self.assertIn('id="faqSearchCountText"', self.html)
        self.assertIn('id="faqEmptyState"', self.html)
        self.assertIn('id="btnFaqReset"', self.html)
        self.assertIn('id="faqGrid"', self.html)
        self.assertIn('.faq-search-wrap', self.css)
        self.assertIn('.faq-empty-state', self.css)

    def test_transfer_time_calculator_components(self):
        self.assertIn('id="transferCalcSection"', self.html)
        self.assertIn('id="calcSizeSlider"', self.html)
        self.assertIn('id="calcSizeDisplay"', self.html)
        self.assertIn('id="calcSpeedTag"', self.html)
        self.assertIn('id="calcZclTime"', self.html)
        self.assertIn('id="calcCloudTime"', self.html)
        self.assertIn('id="calcZclBar"', self.html)
        self.assertIn('id="calcCloudBar"', self.html)
        self.assertIn('id="calcFasterBadge"', self.html)
        self.assertIn('id="calcSavingsText"', self.html)
        self.assertIn('.calc-bento-card', self.css)
        self.assertIn('.calc-slider', self.css)

    def test_dual_tab_sync_components(self):
        self.assertIn('id="btnOpenSecondTab"', self.html)
        self.assertIn('id="studioStatusBox"', self.html)
        self.assertIn('id="studioMainStatus"', self.html)
        self.assertIn('.btn-dual-tab-pill', self.css)
        self.assertIn('.studio-status-indicator.dual-active', self.css)

    def test_eco_mode_components(self):
        self.assertIn('id="ecoToggleBtn"', self.html)
        self.assertIn('.eco-toggle-btn', self.css)
        self.assertIn('body.eco-mode', self.css)


class TestPWAAndAssets(unittest.TestCase):
    """Verifies PWA manifest, service worker caching and static assets."""

    def test_manifest_json_valid(self):
        with open(MANIFEST_JSON, "r", encoding="utf-8") as f:
            data = json.load(f)
        self.assertEqual(data.get("name"), "ZCL Hub")
        self.assertEqual(data.get("short_name"), "ZCL Hub")
        self.assertIn("icons", data)
        self.assertTrue(len(data["icons"]) > 0)

    def test_logo_svg_exists_and_valid(self):
        self.assertTrue(os.path.exists(LOGO_SVG))
        with open(LOGO_SVG, "r", encoding="utf-8") as f:
            svg = f.read()
        self.assertIn("<svg", svg)
        self.assertIn("</svg>", svg)

    def test_service_worker_asset_list(self):
        with open(SW_JS, "r", encoding="utf-8") as f:
            sw = f.read()
        self.assertIn("zcl-hub-v27", sw, "SW cache version must be updated")
        for asset in ["./index.html", "./404.html", "./src/styles.css", "./src/app.js", "./manifest.json", "./assets/logo.svg"]:
            self.assertIn(asset, sw, f"Service worker must cache {asset}")

    def test_404_page_valid(self):
        self.assertTrue(os.path.exists(PAGE_404))
        with open(PAGE_404, "r", encoding="utf-8") as f:
            content = f.read()
        self.assertIn("ZCL Hub", content)
        self.assertIn("404", content)


class TestJavaScriptSyntax(unittest.TestCase):
    """Verifies that app.js and sw.js contain zero JavaScript syntax errors using Node.js."""

    def test_app_js_syntax(self):
        res = subprocess.run(["node", "-c", APP_JS], capture_output=True, text=True)
        self.assertEqual(res.returncode, 0, f"Syntax error in src/app.js:\n{res.stderr}")

    def test_sw_js_syntax(self):
        res = subprocess.run(["node", "-c", SW_JS], capture_output=True, text=True)
        self.assertEqual(res.returncode, 0, f"Syntax error in sw.js:\n{res.stderr}")


if __name__ == "__main__":
    print("\n" + "="*70)
    print(">>> RUNNING ZCL HUB AUTOMATED UI & CODE QUALITY TEST SUITE")
    print("="*70 + "\n")
    unittest.main(verbosity=2)
