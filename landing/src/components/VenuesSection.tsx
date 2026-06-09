import { venues, venueRepoUrl, TELEGRAM_URL, type VenueGroup, type VenueMeta } from '../bots';
import { useLang } from '../i18n';
import { useT } from '../messages';

const GROUP_ORDER: VenueGroup[] = ['live', 'traditional', 'crypto'];

export function VenuesSection() {
  const t = useT();
  const { lang } = useLang();

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
                    <VenueCard key={v.repo} venue={v} typeLabel={v.type[lang]} statusLabel={v.status === 'live' ? t.venues.statusLive : t.venues.statusRoadmap} cta={t.venues.cardCta} />
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

function VenueCard({
  venue,
  typeLabel,
  statusLabel,
  cta,
}: {
  venue: VenueMeta;
  typeLabel: string;
  statusLabel: string;
  cta: string;
}) {
  const live = venue.status === 'live';
  return (
    <a
      href={venueRepoUrl(venue.repo)}
      target="_blank"
      rel="noreferrer"
      className="card group p-5 flex flex-col gap-3 hover:border-purple-500/40 transition-colors"
    >
      <div className="flex items-start justify-between gap-3">
        <h4 className="font-bold text-white leading-tight">{venue.name}</h4>
        <span
          className={`shrink-0 inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-semibold ${
            live ? 'bg-emerald-500/10 text-emerald-400' : 'bg-zinc-500/10 text-zinc-400'
          }`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${live ? 'bg-emerald-400' : 'bg-zinc-500'}`} />
          {statusLabel}
        </span>
      </div>
      <div className="text-sm text-zinc-500">{typeLabel}</div>
      <div className="mt-auto text-sm font-medium text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">{cta}</div>
    </a>
  );
}
