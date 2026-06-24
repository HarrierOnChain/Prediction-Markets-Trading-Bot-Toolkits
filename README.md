# Prediction Market Toolkits

<div align="center">

<img width="820" alt="Polymarket Toolkits TUI" src="https://github.com/user-attachments/assets/b6c51ba1-14c6-4582-858c-e9441516dd1d" />
<img width="820" alt="Prediction Market Toolkits dashboard" src="https://github.com/user-attachments/assets/2ae5783d-be8e-458d-8da4-1ff82aada3db" />

### Venue-agnostic prediction-market trading infrastructure — any market with an order book

[![Rust](https://img.shields.io/badge/rust-1.70+-orange.svg?style=flat-square&logo=rust)](https://www.rust-lang.org/)
[![Rust CI](https://github.com/HarrierOnChain/Prediction-Markets-Trading-Bot-Toolkits/actions/workflows/rust.yml/badge.svg)](https://github.com/HarrierOnChain/Prediction-Markets-Trading-Bot-Toolkits/actions/workflows/rust.yml)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)
[![Tokio](https://img.shields.io/badge/async-tokio-blue.svg?style=flat-square)](https://tokio.rs/)
[![Live venues](https://img.shields.io/badge/live-7_venues-6e40c9.svg?style=flat-square)](#venue-coverage)
[![Roadmap](https://img.shields.io/badge/roadmap-27+_venues-555.svg?style=flat-square)](#venue-coverage)

> **One execution core. One risk layer. Every venue.**
> Ten strategy bots run on a single battle-tested engine and a venue-agnostic adapter stack. Adding a market means writing **one adapter** — not rebuilding a bot. Seven venues are live in production today; the rest of the prediction-market universe is adapter-driven roadmap.

[Strategies](#strategies) • [Venue Coverage](#venue-coverage) • [Engine](#engine) • [Safety](#safety) • [Contact](#contact)

**🌐 Language / 语言 / Язык:** [English](#prediction-market-toolkits) • [简体中文](README.zh-CN.md) • [Русский](README.ru.md)

</div>

---

## Strategies

A complete suite of ten production-grade trading bots, each engineered around a distinct, well-defined market edge. Every strategy runs on the same battle-tested execution core, risk layer, and venue-agnostic adapter stack — so you get consistent performance, unified risk controls, and a single operational surface across every play in the book. Pick the edge that fits your thesis; the infrastructure is already built.


> 📦 **Full walkthroughs, screenshots, and per-venue configs live in each market's dedicated repo** — see [Venue Coverage](#venue-coverage) for the directory. The table below is the strategy index; every bot runs on the shared engine and [safety layer](#safety), with full dry-run support.

| # | Strategy | Edge in one line | Key spec |
|---|----------|------------------|----------|
| 1 | 🎯 **Copy Trading** | Mirror wallets that already proved they have alpha | Multi-wallet · FAK/GTD · circuit breaker |
| 2 | ⚡ **BTC 5m / 15m / 1hr Arbitrage** | Speed on short-window BTC Up/Down | ~42ms end-to-end · FAK |
| 3 | 💰 **Cross-Market Arbitrage** | Lock the spread, not the direction | Polymarket ↔ Kalshi · hedged legs |
| 4 | 🎯 **Directional Arbitrage** | Arb base (Up + Down < $1), then tilt toward the side with more edge | Hedged base · limit-only |
| 5 | 📈 **Spread Farming** | A thousand 0.5¢ wins compound into one number | Bid-ask capture · per-trade P&L |
| 6 | 🏆 **Sports Execution** | Click. Filled. Done — under 50ms | NBA / NFL / Soccer · &lt;50ms FAK |
| 7 | 🎯 **Resolution Sniper** | 95¢ near-certainty → guaranteed $1.00 payout | Certainty scan · hold to resolution |
| 8 | 📊 **Orderbook Imbalance** | The signal *is* the order book — no external feeds | Live OBI · 500ms refresh |
| 9 | 💰 **Market Making** | Be the house, not the gambler | Two-sided GTD · inventory skew |
| 10 | ⚡ **On-Chain Whale Signal** | 3–30s ahead of the public positions API | Polygon block sub · ABI calldata decode |

---

## Venue Coverage

The engine is venue-agnostic: any platform exposing an order book or position
feed plugs in through a single adapter. Seven venues are **live in production**;
the rest of the prediction-market landscape is on the adapter-driven roadmap.

**Legend:** 🟢 Live · 🟡 Beta (adapter in testing) · ⚪ Roadmap (adapter-driven)

### 🟢 Live today

| Venue | Type | Strategies running |
|---|---|---|
| [**Polymarket**](https://github.com/HarrierOnChain/Polymarket) | Decentralized (Polygon / USDC) | All 10 — full coverage |
| [**Kalshi**](https://github.com/HarrierOnChain/Kalshi) | CFTC-regulated (US) | Cross-arb · Resolution Sniper · OBI · Market Making · Directional Arb · Spread · Sports |
| [**Limitless**](https://github.com/HarrierOnChain/Limitless-Exchange) | On-chain order book | Resolution Sniper · OBI · Spread Farming |
| [**Drift BET**](https://github.com/HarrierOnChain/Drift-BET) | Solana | BTC Arb · OBI · Market Making · Whale Signal |
| [**Augur**](https://github.com/HarrierOnChain/Augur) | Ethereum | Resolution Sniper · OBI |
| [**Azuro**](https://github.com/HarrierOnChain/Azuro) | Decentralized protocol | Sports · OBI |
| [**Myriad Markets**](https://github.com/HarrierOnChain/Myriad-Markets) | Crypto | OBI · Directional Arb |

### Traditional / Regulated — roadmap

| Venue | Type | Status | Best-fit strategies |
|---|---|---|---|
| [**Robinhood Predictions**](https://github.com/HarrierOnChain/Robinhood-Predictions) | Brokerage-integrated | ⚪ Roadmap | Directional Arb · Sports |
| [**Crypto.com Predictions**](https://github.com/HarrierOnChain/Crypto.com-Predictions) | Crypto-integrated | ⚪ Roadmap | BTC Arb · Directional Arb |
| [**OG.com**](https://github.com/HarrierOnChain/OG.com) | Social / multi-outcome | ⚪ Roadmap | Sports · OBI · Market Making |
| [**DraftKings Predictions**](https://github.com/HarrierOnChain/DraftKings-Predictions) | Sports | ⚪ Roadmap | Sports Execution |
| [**FanDuel Predicts**](https://github.com/HarrierOnChain/FanDuel-Predicts) | Sports | ⚪ Roadmap | Sports Execution |
| [**Fanatics Markets**](https://github.com/HarrierOnChain/Fanatics-Markets) | Sports / entertainment | ⚪ Roadmap | Sports Execution |
| [**Interactive Brokers ForecastTrader**](https://github.com/HarrierOnChain/Interactive-Brokers-ForecastTrader) | Financial events | ⚪ Roadmap | Resolution Sniper · Spread · Market Making |
| [**PredictIt**](https://github.com/HarrierOnChain/PredictIt) | Academic / US politics | ⚪ Roadmap | Resolution Sniper (research-only, bet caps) |

### Crypto / Decentralized — roadmap

| Venue | Chain / Type | Status | Best-fit strategies |
|---|---|---|---|
| [**Hedgehog Markets**](https://github.com/HarrierOnChain/Hedgehog-Markets) | Solana / social | ⚪ Roadmap | Copy Trading · Directional Arb |
| [**Zeitgeist**](https://github.com/HarrierOnChain/Zeitgeist) | Polkadot | ⚪ Roadmap | OBI · Market Making |
| [**Projection Finance**](https://github.com/HarrierOnChain/Projection-Finance) | Volatility / sims | ⚪ Roadmap | Directional Arb · Spread |
| [**Better Fan**](https://github.com/HarrierOnChain/Better-Fan) | Sports / esports | ⚪ Roadmap | Sports Execution |
| [**Manifold Markets**](https://github.com/HarrierOnChain/Manifold-Markets) | Play-money | ⚪ Roadmap | Directional Arb (backtest / research sandbox) |

> **Want a venue prioritized?** Adapter work is demand-driven — if you trade a
> platform not yet live, [reach out](https://t.me/HarrierOnChain) and it can move
> up the queue.

---

## Engine

### Performance

| | |
|---|---|
| **Event processing** | < 1ms per event |
| **Order execution** | < 100ms end-to-end |
| **Position polling** | ~200ms per wallet |
| **Memory** | ~50MB baseline |
| **CPU** | < 5% on modern hardware |
| **Concurrency** | Semaphore-based rate limiting (default: 25 req / 10s) |

---

## Safety

| | |
|---|---|
| **Circuit Breaker** | Auto-halts after N consecutive large trades inside a configurable window |
| **Depth Guard** | Validates orderbook liquidity before every order |
| **Dry Run** | Full execution path runs without placing real orders |
| **Trade Floor** | Minimum size enforcement against negative-EV micro-trades |

The circuit breaker fires when consecutive large trades exceed the configured threshold, or when orderbook depth falls below the minimum. Once tripped, execution is blocked for the cooldown duration. Trip state and cooldown are logged and visible in the TUI.

**Recommendations:**

| Stage | Action |
|-------|--------|
| Initial setup | Run with `enable_trading: false` for a full session |
| First real trades | Keep `copy_percentage` at 5–10% until you trust the signal |
| Ongoing | Watch circuit breaker trips — they surface execution anomalies |
| Production | Dedicated wallet with only the capital you intend to deploy |

---

## Contact

Built and maintained actively. If you're working on Polymarket tooling, algorithmic strategies, or want to collaborate:

<div align="center">

| Platform | Link |
|----------|------|
| **Discussions** | [GitHub Discussions](../../discussions) |
| **Telegram** | [@HarrierOnChain](https://t.me/HarrierOnChain) |

*Response time is typically within a few hours. Open to questions, feedback, and serious collaborations.*

</div>

---

## Disclaimer

> Trading prediction markets involves real financial risk. This software is provided as-is, without warranty or guarantee of any outcome. It is not financial advice. Always test with `enable_trading: false` before deploying real capital. Ensure compliance with Polymarket's terms of service and applicable regulations in your jurisdiction.

---

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

**Built for the Prediction Markets including Polymarket, Kalshi, Limitless etc**

[Back to top](#prediction-market-toolkits)

</div>

[Power of Bot](http://x.com/theparuchh/status/2053766299281416621)
