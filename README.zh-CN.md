# 预测市场工具包

<div align="center">

<img width="820" alt="Polymarket 工具包 TUI" src="https://github.com/user-attachments/assets/b6c51ba1-14c6-4582-858c-e9441516dd1d" />
<img width="820" alt="预测市场工具包 仪表盘" src="https://github.com/user-attachments/assets/2ae5783d-be8e-458d-8da4-1ff82aada3db" />

### 平台无关的预测市场交易基础设施 — 任何带订单簿的市场

[![Rust](https://img.shields.io/badge/rust-1.70+-orange.svg?style=flat-square&logo=rust)](https://www.rust-lang.org/)
[![Rust CI](https://github.com/HarrierOnChain/Prediction-Markets-Trading-Bot-Toolkits/actions/workflows/rust.yml/badge.svg)](https://github.com/HarrierOnChain/Prediction-Markets-Trading-Bot-Toolkits/actions/workflows/rust.yml)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)
[![Tokio](https://img.shields.io/badge/async-tokio-blue.svg?style=flat-square)](https://tokio.rs/)
[![Live venues](https://img.shields.io/badge/已上线-7_平台-6e40c9.svg?style=flat-square)](#平台覆盖)
[![Roadmap](https://img.shields.io/badge/路线图-27+_平台-555.svg?style=flat-square)](#平台覆盖)

> **一套执行核心。一套风控层。覆盖所有平台。**
> 十款策略机器人运行在同一套久经实战的引擎与平台无关的适配层之上。接入一个新市场只需写**一个适配器**——而不是重建一个机器人。今天有七个平台已在生产环境上线；预测市场宇宙的其余部分都是适配器驱动的路线图。

[策略](#策略) • [平台覆盖](#平台覆盖) • [引擎](#引擎) • [安全](#安全) • [联系方式](#联系方式)

**🌐 Language / 语言 / Язык:** [English](README.md) • [简体中文](#预测市场工具包) • [Русский](README.ru.md)

</div>

---

## 策略

完整的十款生产级交易机器人组合，每一款都围绕一个清晰、独立的市场优势精心打造。所有策略共享同一套久经实战的执行核心、风控层与平台无关的适配层——你获得的是一致的性能表现、统一的风险控制、以及覆盖全部玩法的统一运维界面。挑一个匹配你判断的优势上场；底层基础设施已经为你搭好了。


> 📦 **完整的图文讲解、截图与各平台配置都放在每个市场各自的专属仓库里** —— 目录见 [平台覆盖](#平台覆盖)。下表是策略索引；每款机器人都运行在共享引擎与[安全层](#安全)之上，并完整支持空跑模式。

| # | 策略 | 一句话优势 | 关键规格 |
|---|------|-----------|----------|
| 1 | 🎯 **跟单交易** | 镜像已被证明拥有 alpha 的钱包 | 多钱包 · FAK/GTD · 熔断器 |
| 2 | ⚡ **BTC 5m / 15m / 1h 套利** | 短窗口 BTC 涨跌上的速度优势 | ~42ms 端到端 · FAK |
| 3 | 💰 **跨平台套利** | 锁价差，不锁方向 | Polymarket ↔ Kalshi · 对冲双腿 |
| 4 | 🎯 **方向性套利** | 套利底仓（Up + Down < $1），再向更有优势的一侧倾斜 | 对冲底仓 · 仅限价单 |
| 5 | 📈 **价差耕作** | 一千次 0.5¢ 小胜复利成大数字 | 买卖价差捕获 · 单笔 P&L |
| 6 | 🏆 **体育执行** | 点击。成交。完成——不到 50ms | NBA / NFL / 足球 · &lt;50ms FAK |
| 7 | 🎯 **结算狙击** | 95¢ 近确定性 → 确定的 $1.00 派息 | 确定性扫描 · 持有至结算 |
| 8 | 📊 **订单簿失衡** | 信号本身就是订单簿——无需外部数据源 | 实时 OBI · 500ms 刷新 |
| 9 | 💰 **做市商** | 当庄家，不当赌客 | 双边 GTD · 库存倾斜 |
| 10 | ⚡ **链上鲸鱼信号** | 比公开仓位 API 早 3–30 秒 | Polygon 区块订阅 · ABI calldata 解码 |

---

## 平台覆盖

引擎与平台无关：任何对外提供订单簿或仓位数据的平台，都能通过单个适配器接入。
当前有七个平台**已在生产环境上线**；预测市场的其余版图都在适配器驱动的路线图上。

**图例：** 🟢 已上线 · 🟡 测试中（适配器调试中） · ⚪ 路线图（适配器驱动）

### 🟢 已上线

| 平台 | 类型 | 运行中的策略 |
|---|---|---|
| **Polymarket** | 去中心化（Polygon / USDC） | 全部 10 款 — 完整覆盖 |
| **Kalshi** | CFTC 监管（美国） | 跨平台套利 · 结算狙击 · OBI · 做市 · 方向性套利 · 价差耕作 · 体育 |
| **Limitless** | 链上订单簿 | 结算狙击 · OBI · 价差耕作 |
| **Drift BET** | Solana | BTC 套利 · OBI · 做市 · 鲸鱼信号 |
| **Augur** | 以太坊 | 结算狙击 · OBI |
| **Azuro** | 去中心化协议 | 体育 · OBI |
| **Myriad Markets** | 加密 | OBI · 方向性套利 |

### 传统 / 合规平台 — 路线图

| 平台 | 类型 | 状态 | 最适配的策略 |
|---|---|---|---|
| **Robinhood Predictions** | 券商集成 | ⚪ 路线图 | 方向性套利 · 体育 |
| **Crypto.com Predictions** | 加密集成 | ⚪ 路线图 | BTC 套利 · 方向性套利 |
| **OG.com** | 社交 / 多结果 | ⚪ 路线图 | 体育 · OBI · 做市 |
| **DraftKings Predictions** | 体育 | ⚪ 路线图 | 体育执行 |
| **FanDuel Predicts** | 体育 | ⚪ 路线图 | 体育执行 |
| **Fanatics Markets** | 体育 / 娱乐 | ⚪ 路线图 | 体育执行 |
| **Interactive Brokers ForecastTrader** | 金融事件 | ⚪ 路线图 | 结算狙击 · 价差耕作 · 做市 |
| **PredictIt** | 学术 / 美国政治 | ⚪ 路线图 | 结算狙击（仅研究，有下注上限） |

### 加密 / 去中心化平台 — 路线图

| 平台 | 链 / 类型 | 状态 | 最适配的策略 |
|---|---|---|---|
| **Hedgehog Markets** | Solana / 社交 | ⚪ 路线图 | 跟单交易 · 方向性套利 |
| **Zeitgeist** | Polkadot | ⚪ 路线图 | OBI · 做市 |
| **Projection Finance** | 波动率 / 模拟 | ⚪ 路线图 | 方向性套利 · 价差耕作 |
| **Better Fan** | 体育 / 电竞 | ⚪ 路线图 | 体育执行 |
| **Manifold Markets** | 虚拟币（玩乐性质） | ⚪ 路线图 | 方向性套利（回测 / 研究沙盒） |

> **想优先接入某个平台？** 适配器开发是需求驱动的——如果你交易的平台尚未上线，
> [联系我](https://t.me/HarrierOnChain)，它就能往队列前面挪。

---

## 引擎

### 性能

| | |
|---|---|
| **事件处理** | 每个事件 < 1ms |
| **下单执行** | 端到端 < 100ms |
| **仓位轮询** | 每个钱包约 200ms |
| **内存占用** | 基线约 50MB |
| **CPU** | 现代硬件下 < 5% |
| **并发** | 信号量限速（默认：25 请求 / 10 秒） |

---

## 安全

| | |
|---|---|
| **熔断器** | 在配置窗口内出现 N 笔连续大额成交后自动暂停 |
| **深度护卫** | 每笔下单前校验订单簿流动性 |
| **空跑模式** | 完整执行链路运行但不真正下单 |
| **下单底线** | 强制最小交易额，避免负 EV 微交易 |

熔断器在连续大额交易超过阈值，或订单簿深度低于下限时触发。一旦触发，执行将被屏蔽至冷却期结束。触发状态与冷却时间会被记录并显示在 TUI 中。

**建议：**

| 阶段 | 操作 |
|------|------|
| 初始部署 | 用 `enable_trading: false` 至少跑完一整轮观察 |
| 首次实盘 | 在信任信号前，将 `copy_percentage` 保持在 5–10% |
| 长期运行 | 关注熔断器触发事件——它们会暴露执行异常 |
| 生产环境 | 使用专用钱包，仅放入你计划部署的资金 |

---

## 联系方式

项目正在持续维护与开发中。如果你也在做 Polymarket 工具、算法策略，或想合作：

<div align="center">

| 平台 | 链接 |
|------|------|
| **讨论区** | [GitHub Discussions](../../discussions) |
| **Telegram** | [@HarrierOnChain](https://t.me/HarrierOnChain) |

*响应时间通常在数小时内。欢迎提问、反馈与正经合作。*

</div>

---

## 免责声明

> 在预测市场交易涉及真实的财务风险。本软件按"原样"提供，不附带任何形式的担保或对结果的保证，且不构成投资建议。投入真实资金前，请务必先以 `enable_trading: false` 进行充分测试。请确保遵守 Polymarket 的服务条款以及你所在司法管辖区的相关法规。

---

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

**为 Polymarket、Kalshi、Limitless 等预测市场社区而构建**

[返回顶部](#预测市场工具包)

</div>

[机器人的力量](http://x.com/theparuchh/status/2053766299281416621)
