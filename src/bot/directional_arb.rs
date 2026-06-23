//! Directional Arbitrage bot.
//!
//! A hybrid of pure arbitrage and directional trading. The bot opens an
//! arbitrage base — buying both sides of a binary market when `Up + Down` can be
//! assembled for less than $1 — then *tilts* size toward the side its model
//! rates as undervalued. The arbitrage structure caps downside; the tilt adds a
//! directional source of edge on top.
//!
//! Example: `Up + Down` can be built for `< $1`, and the model rates `Up`
//! stronger right now. The bot buys more `Up` than `Down` — keeping an
//! arbitrage floor while the net position is long `Up`. The smaller side works
//! as a partial hedge.
//!
//! Why it works: pure arbitrage limits upside; a directional tilt re-introduces
//! it without giving up the protective frame. In short crypto Up/Down markets
//! the underlying can move sharply while Polymarket reprices one side with a
//! delay — exactly where this edge lives.
//!
//! Core features:
//! - Starts from an arbitrage structure (`Up + Down < $1`).
//! - Tilts toward the side with more model edge.
//! - Uses the smaller side as a partial hedge.
//! - Buys only with limit orders (never crosses the spread as a taker).
//! - Improves EV through position *structure*, not just direction.
//!
//! 🚧 In development — typed template over the shared engine and risk layer
//! (see [`copy_trading`][crate::bot::copy_trading]).

use crate::config::AppConfig;
use anyhow::Result;
use tracing::info;

/// Tunables for the directional-arbitrage strategy.
#[derive(Debug, Clone)]
pub struct DirectionalArbParams {
    /// Maximum combined cost to assemble both sides. `0.99` requires at least a
    /// 1¢ arbitrage floor before the bot will enter.
    pub max_basket_cost: f64,
    /// Minimum model edge on a side (in cents) before tilting toward it.
    pub tilt_threshold_cents: f64,
    /// Maximum size ratio of the main (tilted) side to the hedge side.
    /// `1.0` = pure arbitrage; `3.0` = up to a 3:1 directional tilt.
    pub max_tilt_ratio: f64,
    /// Rest limit orders only — never take liquidity as a taker.
    pub limit_only: bool,
}

impl Default for DirectionalArbParams {
    fn default() -> Self {
        Self {
            max_basket_cost: 0.99,
            tilt_threshold_cents: 1.5,
            max_tilt_ratio: 3.0,
            limit_only: true,
        }
    }
}

pub async fn run(_cfg: AppConfig) -> Result<()> {
    let params = DirectionalArbParams::default();
    info!(
        max_basket_cost = params.max_basket_cost,
        tilt_threshold_cents = params.tilt_threshold_cents,
        max_tilt_ratio = params.max_tilt_ratio,
        limit_only = params.limit_only,
        "🚧 Directional Arbitrage bot — in development. Arb base + edge-weighted tilt."
    );
    Ok(())
}
