import { IconWrench, IconGear, IconScan, IconBox } from './Icon';

const services = [
  {
    n: '01',
    Icon: IconWrench,
    title: 'Reparación',
    text: 'Averías mecánicas y eléctricas resueltas con precisión. Trabajamos todas las marcas y cilindradas con piezas de calidad.',
  },
  {
    n: '02',
    Icon: IconGear,
    title: 'Mantenimiento',
    text: 'Revisiones, cambios de aceite, frenos, neumáticos y puesta a punto para que tu moto siempre esté lista para rodar.',
  },
  {
    n: '03',
    Icon: IconScan,
    title: 'Diagnóstico',
    text: 'Análisis electrónico completo con equipos OBD profesionales. Detectamos el fallo antes de tocar una sola tuerca.',
  },
  {
    n: '04',
    Icon: IconBox,
    title: 'Piezas nuevas y usadas',
    text: 'Stock propio de recambios originales y de segunda mano revisadas. Encontramos la pieza que necesitas, al mejor precio.',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative py-20 sm:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Servicios</span>
          <h2 className="mt-4 section-title">
            Todo lo que tu moto <br className="hidden sm:block" />
            <span className="text-rust-500">necesita</span>, en un solo sitio.
          </h2>
          <p className="mt-4 text-zinc-400">
            Desde un cambio de aceite hasta una restauración completa. Cada
            trabajo se ejecuta con el mismo cuidado.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ n, Icon, title, text }) => (
            <article
              key={n}
              className="group relative flex flex-col overflow-hidden rounded-sm border border-zinc-800 bg-ink-900 p-6 transition-all hover:-translate-y-1 hover:border-rust-500/60 hover:bg-ink-800"
            >
              <div className="absolute right-4 top-4 font-mono text-xs text-zinc-700 transition group-hover:text-rust-500">
                /{n}
              </div>
              <div className="grid h-12 w-12 place-items-center rounded-sm border border-zinc-800 bg-ink-950 text-rust-500 transition-all group-hover:border-rust-500 group-hover:shadow-[0_0_20px_rgba(255,107,0,0.35)]">
                <Icon width={24} height={24} />
              </div>
              <h3 className="mt-5 font-display text-2xl uppercase tracking-wide text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {text}
              </p>
              <div className="mt-6 h-px bg-gradient-to-r from-rust-500/60 via-zinc-800 to-transparent" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
