import { WHATSAPP_URL } from '../lib/constants';
import { IconArrowRight, IconWhatsApp } from './Icon';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24"
    >
      {/* Background grid + glow */}
      <div className="absolute inset-0 -z-10 bg-grid-mech [background-size:48px_48px]" />
      <div className="pointer-events-none absolute -top-32 right-[-10%] -z-10 h-[520px] w-[520px] rounded-full bg-rust-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 -z-10 h-[420px] w-[420px] rounded-full bg-rust-700/20 blur-3xl" />

      {/* Diagonal stripes accent */}
      <div className="pointer-events-none absolute inset-x-0 top-16 -z-10 h-1.5 bg-diag-stripes opacity-60" />

      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="eyebrow">Kiomoto · Madrid</span>
            <h1 className="mt-5 font-display text-5xl uppercase leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              Tu taller de <br />
              <span className="text-rust-500">motos en Madrid</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              Reparación experta, mantenimiento de confianza y diagnóstico
              preciso. Un taller familiar con la pasión de los que viven sobre
              dos ruedas.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL(
                  'Hola Kiomoto, me gustaría reservar una cita para mi moto.',
                )}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <IconWhatsApp width={18} height={18} />
                Reserva tu cita
              </a>
              <a href="#servicios" className="btn-ghost">
                Ver servicios
                <IconArrowRight width={18} height={18} />
              </a>
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-zinc-800 pt-6">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                  Experiencia
                </dt>
                <dd className="mt-1 font-display text-3xl text-white">
                  +15<span className="text-rust-500">a</span>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                  Motos al año
                </dt>
                <dd className="mt-1 font-display text-3xl text-white">
                  +800
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                  Reseñas
                </dt>
                <dd className="mt-1 font-display text-3xl text-white">
                  4.9<span className="text-rust-500">★</span>
                </dd>
              </div>
            </dl>
          </div>

          {/* Visual */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto aspect-square w-full max-w-md">
              {/* Rotating gear */}
              <svg
                className="absolute inset-0 h-full w-full animate-spin-slow text-rust-500/25"
                viewBox="0 0 200 200"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.6"
              >
                <g>
                  <circle cx="100" cy="100" r="96" />
                  <circle cx="100" cy="100" r="78" strokeDasharray="2 4" />
                  <circle cx="100" cy="100" r="60" />
                  {Array.from({ length: 24 }).map((_, i) => {
                    const a = (i / 24) * Math.PI * 2;
                    const x1 = 100 + Math.cos(a) * 86;
                    const y1 = 100 + Math.sin(a) * 86;
                    const x2 = 100 + Math.cos(a) * 96;
                    const y2 = 100 + Math.sin(a) * 96;
                    return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
                  })}
                </g>
              </svg>

              {/* Moto silhouette card */}
              <div className="absolute inset-6 grid place-items-center rounded-sm border border-zinc-800 bg-gradient-to-br from-ink-900 to-ink-950 shadow-2xl shadow-rust-500/10">
                <svg
                  viewBox="0 0 200 120"
                  className="w-3/4 text-rust-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="40" cy="90" r="22" />
                  <circle cx="160" cy="90" r="22" />
                  <circle cx="40" cy="90" r="6" fill="currentColor" />
                  <circle cx="160" cy="90" r="6" fill="currentColor" />
                  <path d="M40 90 70 50 H 110 L 140 78" />
                  <path d="M110 50 H 130 L 138 38" />
                  <path d="M70 50 60 35 H 80" />
                  <path d="M138 38 148 30" />
                  <path d="M140 78 C 150 78 158 84 160 90" />
                  <path d="M70 70 H 110" />
                </svg>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                  <span>// rpm 6800</span>
                  <span className="text-rust-500">●  on-line</span>
                </div>
                <div className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                  KMT-001
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
