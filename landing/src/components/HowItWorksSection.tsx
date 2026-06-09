import { TELEGRAM_URL } from '../bots';
import { useT } from '../messages';

export function HowItWorksSection() {
  const t = useT();
  return (
    <section id="how" className="py-24 border-t border-border-subtle">
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <div className="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-3">{t.howItWorks.eyebrow}</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">{t.howItWorks.headline}</h2>
          <p className="text-lg text-zinc-400 leading-relaxed">{t.howItWorks.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {t.howItWorks.steps.map((step) => (
            <div key={step.num} className="card p-6">
              <div className="text-4xl font-bold font-mono text-purple-400/40 mb-4">{step.num}</div>
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>

        <div className="card p-8 md:p-10 bg-gradient-to-br from-bg-surface to-bg-elevated">
          <h3 className="text-2xl font-bold mb-6">{t.howItWorks.getTitle}</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-8">
            {t.howItWorks.gets.map((g) => (
              <li key={g} className="flex items-start gap-3 text-zinc-300">
                <span className="mt-1 text-emerald-400 shrink-0" aria-hidden>✓</span>
                <span className="text-sm leading-relaxed">{g}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-6 border-t border-border-subtle">
            <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="btn-primary text-base px-7 py-3.5 shrink-0">
              <TelegramIcon />
              <span>{t.howItWorks.cta}</span>
            </a>
            <p className="text-sm text-zinc-500 leading-relaxed">{t.howItWorks.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TelegramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/>
    </svg>
  );
}
