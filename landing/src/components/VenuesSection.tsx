import {
  venues,
  venueRepoUrl,
  venueLogo,
  botById,
  accentClasses,
  TELEGRAM_URL,
  type VenueGroup,
  type VenueMeta,
} from '../bots';
import { useLang } from '../i18n';
import { useT } from '../messages';

const GROUP_ORDER: VenueGroup[] = ['live', 'traditional', 'crypto'];

export function VenuesSection() {
  const t = useT();

  const groupTitle: Record<VenueGroup, string> = {
    live: t.venues.groupLive,
    traditional: t.venues.groupTraditional,
    crypto: t.venues.groupCrypto,
  };

  return (
    <section id="venues" className="py-24 border-t border-border-subtle">
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <div className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">{t.venues.eyebrow}</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">{t.venues.headline}</h2>
          <p className="text-lg text-zinc-400 leading-relaxed">{t.venues.description}</p>
        </div>

        <div className="space-y-12">
          {GROUP_ORDER.map((group) => {
            const items = venues.filter((v) => v.group === group);
            if (items.length === 0) return null;
            return (
              <div key={group}>
                <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-5">{groupTitle[group]}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {items.map((v) => (
                    <VenueCard key={v.repo} venue={v} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-12 text-sm text-zinc-500 max-w-3xl">
          {t.venues.footnote}{' '}
          <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="text-purple-400 hover:text-purple-300 font-medium">
            {t.venues.footnoteCta}
          </a>
        </p>
      </div>
    </section>
  );
}

function VenueCard({ venue }: { venue: VenueMeta }) {
  const t = useT();
  const { lang } = useLang();
  const live = venue.status === 'live';
  const statusLabel = live ? t.venues.statusLive : t.venues.statusRoadmap;

  return (
    <a
      href={venueRepoUrl(venue.repo)}
      target="_blank"
      rel="noreferrer"
      className="card group p-5 flex flex-col gap-4 hover:border-purple-500/40 transition-colors"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <img
            src={venueLogo(venue.domain)}
            alt=""
            width={20}
            height={20}
            loading="lazy"
            className="w-5 h-5 rounded shrink-0 bg-white/5"
          />
          <h4 className="font-bold text-white leading-tight truncate">{venue.name}</h4>
        </div>
        <span
          className={`shrink-0 inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-semibold ${
            live ? 'bg-emerald-500/10 text-emerald-400' : 'bg-zinc-500/10 text-zinc-400'
          }`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${live ? 'bg-emerald-400' : 'bg-zinc-500'}`} />
          {statusLabel}
        </span>
      </div>

      <div className="text-sm text-zinc-500">{venue.type[lang]}</div>

      <div className="flex flex-col gap-2">
        <div className="text-[11px] uppercase tracking-wider text-zinc-600 font-semibold">{t.nav.strategies}</div>
        <div className="flex flex-wrap gap-1.5">
          {venue.strategies.map((id) => {
            const bot = botById[id];
            if (!bot) return null;
            const accent = accentClasses[bot.accent];
            return (
              <span
                key={id}
                title={t.bots.items[id]?.title ?? id}
                className={`inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[11px] font-medium ${accent.bg} ${accent.text}`}
              >
                <span aria-hidden>{bot.emoji}</span>
                <span className="hidden md:inline max-w-[7rem] truncate">{t.bots.items[id]?.title ?? id}</span>
              </span>
            );
          })}
        </div>
      </div>

      <div className="mt-auto text-sm font-medium text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">{t.venues.cardCta}</div>
    </a>
  );
}
