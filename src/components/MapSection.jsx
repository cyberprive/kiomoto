import { ADDRESS_LINE_1, ADDRESS_LINE_2, HOURS } from '../lib/constants';
import { IconClock, IconMapPin } from './Icon';

export default function MapSection() {
  const mapsQuery = encodeURIComponent(`${ADDRESS_LINE_1}, ${ADDRESS_LINE_2}`);
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;

  return (
    <section id="ubicacion" className="relative py-20 sm:py-28">
      <div className="container-x">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <span className="eyebrow">Ubicación</span>
            <h2 className="mt-4 section-title">
              En el corazón de <span className="text-rust-500">Madrid</span>
            </h2>
          </div>
          <a
            href={directions}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs uppercase tracking-[0.2em] text-rust-500 hover:text-rust-400"
          >
            Cómo llegar →
          </a>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <div className="relative overflow-hidden rounded-sm border border-zinc-800 bg-ink-900 lg:col-span-2">
            {/* Map placeholder */}
            <div className="relative aspect-[16/10] w-full bg-grid-mech [background-size:32px_32px]">
              <div className="absolute inset-0 bg-gradient-to-br from-ink-900/40 via-transparent to-ink-950/80" />
              {/* Streets pseudo */}
              <svg
                className="absolute inset-0 h-full w-full text-zinc-700"
                viewBox="0 0 400 250"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                <path d="M0 60 H 400" />
                <path d="M0 130 H 400" />
                <path d="M0 200 H 400" />
                <path d="M80 0 V 250" />
                <path d="M180 0 V 250" />
                <path d="M280 0 V 250" />
                <path d="M40 0 L 400 220" stroke="rgba(255,107,0,0.35)" strokeWidth="2" />
              </svg>

              {/* Pin */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute -inset-6 animate-ping rounded-full bg-rust-500/30" />
                  <div className="relative grid h-12 w-12 place-items-center rounded-full bg-rust-500 text-ink-950 shadow-[0_0_30px_rgba(255,107,0,0.6)]">
                    <IconMapPin width={22} height={22} />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 rounded-sm border border-zinc-800 bg-ink-950/80 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-300 backdrop-blur">
                40.4168° N · 3.7038° W
              </div>
            </div>

            <a
              href={directions}
              target="_blank"
              rel="noreferrer"
              className="absolute inset-0"
              aria-label="Abrir en Google Maps"
            />
          </div>

          <div className="rounded-sm border border-zinc-800 bg-ink-900 p-6">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-rust-500">
              <IconMapPin width={14} height={14} />
              Dirección
            </div>
            <p className="mt-2 text-lg text-white">{ADDRESS_LINE_1}</p>
            <p className="text-zinc-400">{ADDRESS_LINE_2}</p>

            <div className="mt-8 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-rust-500">
              <IconClock width={14} height={14} />
              Horario
            </div>
            <ul className="mt-2 space-y-1.5">
              {HOURS.map((h) => (
                <li
                  key={h.d}
                  className="flex justify-between border-b border-zinc-800/70 pb-1.5 text-sm text-zinc-300 last:border-0"
                >
                  <span>{h.d}</span>
                  <span className="font-mono text-zinc-400">{h.h}</span>
                </li>
              ))}
            </ul>

            <a
              href={directions}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost mt-8 w-full !py-3 !text-sm"
            >
              Abrir en Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
