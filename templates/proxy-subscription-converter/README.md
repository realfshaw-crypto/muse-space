# Proxy Subscription Converter — 梯子订阅转换器

A single-file web app that converts a proxy subscription between client formats, and helps clean it up along the way.

## What it does

- **Paste and parse** — accepts node links (`vmess://`, `vless://`, `ss://`, `ssr://`, `trojan://`, `hysteria2://`), a base64 subscription blob, Clash YAML (`proxies:` list), or sing-box JSON (`outbounds`). Lines it cannot parse are listed as skipped, with a count.
- **Node list** — every parsed node shows name, protocol, address, and port. Filter by protocol, search by name or address, delete individual nodes, or add nodes manually (name, protocol, address, port).
- **Dedupe and rename** — remove duplicates by host + port (reports how many were removed), and batch-rename all nodes with a prefix and/or suffix.
- **Health check** — total nodes, per-protocol counts, duplicate count, and suspicious nodes (bad port, missing address, unknown scheme).
- **Convert** — output to Clash YAML, Clash Meta YAML, sing-box JSON, Surge, Quantumult X, Shadowrocket, or a V2Ray base64 subscription, with Copy and Download buttons.
- **Demo data** — on first open it ships with three clearly fake demo nodes (`demo1.example.com`, `demo2.example.com`, `demo3.example.com`), marked as demo, so the page is usable immediately.
- **Bilingual** — English by default, with a 中文 toggle. Nodes and language persist in `localStorage` under `muse-space:proxy-subscription-converter`.

## How to use

1. Paste subscription content into the text box and click **Parse** (or **Load sample** to try the demo links).
2. Clean up the node list: dedupe, rename, delete, or add nodes.
3. Pick a target format, click **Convert**, then copy or download the result and import it into your client.

## Honest limits

- **It never fetches a subscription URL.** Paste the subscription content instead; a static page cannot (and should not) fetch arbitrary URLs on your behalf.
- **No latency or speed test.** A static page cannot measure node latency; check speed in your client.
- **Nothing is uploaded.** All parsing and conversion runs in your browser.
- **Conversions are best-effort.** Field coverage varies by protocol; check the output in your client before importing. Nodes with an unknown protocol are skipped in the output.

---

梯子订阅转换器：粘贴一份代理订阅，在 Clash、sing-box、Surge、Quantumult X、Shadowrocket 与 V2Ray 等格式之间转换，并支持去重、批量改名与健康检查。全部在浏览器本地运行，不上传、不拉取订阅链接、不测速，转换结果导入前请先检查。
