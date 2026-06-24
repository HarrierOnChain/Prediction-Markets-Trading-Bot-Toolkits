export type BotStatus = 'production' | 'development';

export type BotAccent =
  | 'purple'
  | 'pink'
  | 'cyan'
  | 'amber'
  | 'emerald'
  | 'rose'
  | 'sky'
  | 'indigo'
  | 'fuchsia'
  | 'orange';

export interface BotMeta {
  id: string;
  emoji: string;
  status: BotStatus;
  accent: BotAccent;
}

export const bots: BotMeta[] = [
  { id: 'copy-trading', emoji: '🎯', status: 'production', accent: 'purple' },
  { id: 'btc-arb', emoji: '⚡', status: 'production', accent: 'amber' },
  { id: 'cross-arb', emoji: '💰', status: 'production', accent: 'emerald' },
  { id: 'directional-arb', emoji: '🎯', status: 'production', accent: 'cyan' },
  { id: 'spread-farming', emoji: '📈', status: 'production', accent: 'pink' },
  { id: 'sports', emoji: '🏆', status: 'production', accent: 'orange' },
  { id: 'resolution-sniper', emoji: '🎯', status: 'production', accent: 'rose' },
  { id: 'orderbook-imbalance', emoji: '📊', status: 'production', accent: 'sky' },
  { id: 'market-making', emoji: '💰', status: 'production', accent: 'indigo' },
  { id: 'whale-signal', emoji: '⚡', status: 'production', accent: 'fuchsia' },
];

export const TELEGRAM_URL = 'https://t.me/HarrierOnChain';
export const GITHUB_OWNER = 'HarrierOnChain';
export const GITHUB_URL = `https://github.com/${GITHUB_OWNER}/Prediction-Markets-Trading-Bot-Toolkits`;

export type VenueStatus = 'live' | 'roadmap';
export type VenueGroup = 'live' | 'traditional' | 'crypto';

export interface VenueMeta {
  repo: string; // exact spoke repo name under GITHUB_OWNER
  name: string;
  group: VenueGroup;
  status: VenueStatus;
  domain: string; // for favicon logo
  strategies: string[]; // bot ids that run on this venue (see `bots`)
  type: { en: string; zh: string; ru: string };
}

export const venueRepoUrl = (repo: string) => `https://github.com/${GITHUB_OWNER}/${repo}`;
export const venueLogo = (domain: string) => `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;

const ALL_STRATS = bots.map((b) => b.id);

export const botById: Record<string, BotMeta> = Object.fromEntries(bots.map((b) => [b.id, b]));

// Mirrors the hub README venue coverage tables + the per-venue spoke repos.
export const venues: VenueMeta[] = [
  { repo: 'Polymarket', name: 'Polymarket', group: 'live', status: 'live', domain: 'polymarket.com', strategies: ALL_STRATS,
    type: { en: 'Decentralized (Polygon / USDC)', zh: '去中心化（Polygon / USDC）', ru: 'Децентрализованная (Polygon / USDC)' } },
  { repo: 'Kalshi', name: 'Kalshi', group: 'live', status: 'live', domain: 'kalshi.com',
    strategies: ['cross-arb', 'resolution-sniper', 'orderbook-imbalance', 'market-making', 'directional-arb', 'spread-farming', 'sports'],
    type: { en: 'CFTC-regulated (US)', zh: '受 CFTC 监管（美国）', ru: 'Регулируется CFTC (США)' } },
  { repo: 'Limitless-Exchange', name: 'Limitless', group: 'live', status: 'live', domain: 'limitless.exchange',
    strategies: ['resolution-sniper', 'orderbook-imbalance', 'spread-farming'],
    type: { en: 'On-chain order book', zh: '链上订单簿', ru: 'Ончейн-стакан заявок' } },

  { repo: 'Robinhood-Predictions', name: 'Robinhood Predictions', group: 'traditional', status: 'roadmap', domain: 'robinhood.com',
    strategies: ['directional-arb', 'sports'],
    type: { en: 'Brokerage-integrated', zh: '券商集成', ru: 'Брокерская интеграция' } },
  { repo: 'Crypto.com-Predictions', name: 'Crypto.com Predictions', group: 'traditional', status: 'roadmap', domain: 'crypto.com',
    strategies: ['btc-arb', 'directional-arb'],
    type: { en: 'Crypto-integrated', zh: '加密集成', ru: 'Крипто-интеграция' } },
  { repo: 'OG.com', name: 'OG.com', group: 'traditional', status: 'roadmap', domain: 'og.com',
    strategies: ['sports', 'orderbook-imbalance', 'market-making'],
    type: { en: 'Social / multi-outcome', zh: '社交 / 多结果', ru: 'Социальная / мультиисход' } },
  { repo: 'DraftKings-Predictions', name: 'DraftKings Predictions', group: 'traditional', status: 'roadmap', domain: 'draftkings.com',
    strategies: ['sports'],
    type: { en: 'Sports', zh: '体育', ru: 'Спорт' } },
  { repo: 'FanDuel-Predicts', name: 'FanDuel Predicts', group: 'traditional', status: 'roadmap', domain: 'fanduel.com',
    strategies: ['sports'],
    type: { en: 'Sports', zh: '体育', ru: 'Спорт' } },
  { repo: 'Fanatics-Markets', name: 'Fanatics Markets', group: 'traditional', status: 'roadmap', domain: 'fanatics.com',
    strategies: ['sports'],
    type: { en: 'Sports / entertainment', zh: '体育 / 娱乐', ru: 'Спорт / развлечения' } },
  { repo: 'Interactive-Brokers-ForecastTrader', name: 'Interactive Brokers ForecastTrader', group: 'traditional', status: 'roadmap', domain: 'interactivebrokers.com',
    strategies: ['resolution-sniper', 'spread-farming', 'market-making'],
    type: { en: 'Financial events', zh: '金融事件', ru: 'Финансовые события' } },
  { repo: 'PredictIt', name: 'PredictIt', group: 'traditional', status: 'roadmap', domain: 'predictit.org',
    strategies: ['resolution-sniper'],
    type: { en: 'Academic / US politics', zh: '学术 / 美国政治', ru: 'Академическая / политика США' } },

  { repo: 'Drift-BET', name: 'Drift BET', group: 'live', status: 'live', domain: 'drift.trade',
    strategies: ['btc-arb', 'orderbook-imbalance', 'market-making', 'whale-signal'],
    type: { en: 'Solana', zh: 'Solana', ru: 'Solana' } },
  { repo: 'Azuro', name: 'Azuro', group: 'live', status: 'live', domain: 'azuro.org',
    strategies: ['sports', 'orderbook-imbalance'],
    type: { en: 'Decentralized protocol', zh: '去中心化协议', ru: 'Децентрализованный протокол' } },
  { repo: 'Hedgehog-Markets', name: 'Hedgehog Markets', group: 'crypto', status: 'roadmap', domain: 'hedgehog.markets',
    strategies: ['copy-trading', 'directional-arb'],
    type: { en: 'Solana / social', zh: 'Solana / 社交', ru: 'Solana / социальная' } },
  { repo: 'Augur', name: 'Augur', group: 'live', status: 'live', domain: 'augur.net',
    strategies: ['resolution-sniper', 'orderbook-imbalance'],
    type: { en: 'Ethereum', zh: '以太坊', ru: 'Ethereum' } },
  { repo: 'Zeitgeist', name: 'Zeitgeist', group: 'crypto', status: 'roadmap', domain: 'zeitgeist.pm',
    strategies: ['orderbook-imbalance', 'market-making'],
    type: { en: 'Polkadot', zh: 'Polkadot', ru: 'Polkadot' } },
  { repo: 'Myriad-Markets', name: 'Myriad Markets', group: 'live', status: 'live', domain: 'myriad.markets',
    strategies: ['orderbook-imbalance', 'directional-arb'],
    type: { en: 'Crypto', zh: '加密', ru: 'Крипто' } },
  { repo: 'Projection-Finance', name: 'Projection Finance', group: 'crypto', status: 'roadmap', domain: 'projection.finance',
    strategies: ['directional-arb', 'spread-farming'],
    type: { en: 'Volatility / sims', zh: '波动率 / 模拟', ru: 'Волатильность / симуляции' } },
  { repo: 'Better-Fan', name: 'Better Fan', group: 'crypto', status: 'roadmap', domain: 'better.fan',
    strategies: ['sports'],
    type: { en: 'Sports / esports', zh: '体育 / 电竞', ru: 'Спорт / киберспорт' } },
  { repo: 'Manifold-Markets', name: 'Manifold Markets', group: 'crypto', status: 'roadmap', domain: 'manifold.markets',
    strategies: ['directional-arb'],
    type: { en: 'Play-money', zh: '虚拟币（玩乐性质）', ru: 'Игровые деньги' } },
];

export interface AccentSet {
  ring: string;
  text: string;
  bg: string;
  glow: string;
  border: string;
}

export const accentClasses: Record<BotAccent, AccentSet> = {
  purple: {
    ring: 'ring-purple-500/30',
    text: 'text-purple-400',
    bg: 'bg-purple-500/10',
    glow: 'shadow-purple-500/20',
    border: 'border-purple-500/30',
  },
  pink: {
    ring: 'ring-pink-500/30',
    text: 'text-pink-400',
    bg: 'bg-pink-500/10',
    glow: 'shadow-pink-500/20',
    border: 'border-pink-500/30',
  },
  cyan: {
    ring: 'ring-cyan-500/30',
    text: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    glow: 'shadow-cyan-500/20',
    border: 'border-cyan-500/30',
  },
  amber: {
    ring: 'ring-amber-500/30',
    text: 'text-amber-400',
    bg: 'bg-amber-500/10',
    glow: 'shadow-amber-500/20',
    border: 'border-amber-500/30',
  },
  emerald: {
    ring: 'ring-emerald-500/30',
    text: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    glow: 'shadow-emerald-500/20',
    border: 'border-emerald-500/30',
  },
  rose: {
    ring: 'ring-rose-500/30',
    text: 'text-rose-400',
    bg: 'bg-rose-500/10',
    glow: 'shadow-rose-500/20',
    border: 'border-rose-500/30',
  },
  sky: {
    ring: 'ring-sky-500/30',
    text: 'text-sky-400',
    bg: 'bg-sky-500/10',
    glow: 'shadow-sky-500/20',
    border: 'border-sky-500/30',
  },
  indigo: {
    ring: 'ring-indigo-500/30',
    text: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    glow: 'shadow-indigo-500/20',
    border: 'border-indigo-500/30',
  },
  fuchsia: {
    ring: 'ring-fuchsia-500/30',
    text: 'text-fuchsia-400',
    bg: 'bg-fuchsia-500/10',
    glow: 'shadow-fuchsia-500/20',
    border: 'border-fuchsia-500/30',
  },
  orange: {
    ring: 'ring-orange-500/30',
    text: 'text-orange-400',
    bg: 'bg-orange-500/10',
    glow: 'shadow-orange-500/20',
    border: 'border-orange-500/30',
  },
};
