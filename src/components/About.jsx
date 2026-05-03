import { WHATSAPP_URL } from '../lib/constants';
import { IconArrowRight } from './Icon';

const points = [
  {
    title: 'Taller familiar',
    text: 'Un equipo pequeño donde nos conocemos por el nombre, no por un número de cliente.',
  },
  {
    title: 'Atención personalizada',
    text: 'Te explicamos qué le pasa a tu moto, qué vamos a hacer y cuánto va a costar. Sin sorpresas.',
  },
  {
    title: 'Pasión por las motos',
    text: 'Cada moto que entra al taller la tratamos como si fuera nuestra. Punto.',
  },
];

export default function About() {
  return (
    <section id="nosotros" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-ink-900/60 to-transparent" />
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-2 -z-10 rounded-sm bg-rust-500/10 blur-2xl" />
              <div className="rounded-sm border border-zinc-800 bg-ink-900 p-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                    EST · 2009
                  </span>
                  <span className="h-2 w-2 rounded-full bg-rust-500 shadow-[0_0_10px_#ff6b00]" />
                </div>
                <p className="mt-6 font-display text-4xl uppercase leading-none text-white sm:text-5xl">
                  Hechos a <span className="text-rust-500">mano</span>,
                  con grasa <br /> en las uñas.
                </p>
                <p className="mt-6 text-sm leading-relaxed text-zinc-400">
                  Kiomoto nació de la obsesión por los motores. Un padre, un
                  hijo, una caja de herramientas y, ahora, miles de motos
                  rodando por Madrid gracias a nuestro trabajo.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-zinc-800 pt-6 font-mono text-xs uppercase tracking-widest text-zinc-500">
                  <div>
                    <div className="text-rust-500">Madrid</div>
                    <div>Centro</div>
                  </div>
                  <div>
                    <div className="text-rust-500">Garantía</div>
                    <div>en cada trabajo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-8">
            <span className="eyebrow">Sobre nosotros</span>
            <h2 className="mt-4 section-title">
              Pequeño taller, <br />
              <span className="text-rust-500">grandes manías</span>.
            </h2>
            <p className="mt-5 text-zinc-300">
              Somos un taller familiar especializado en motos. No somos una
              cadena ni una franquicia: somos los mismos mecánicos que reciben
              tu moto, la diagnostican y la entregan. Si vienes a Kiomoto,
              vienes a casa.
            </p>

            <ul className="mt-8 space-y-4">
              {points.map((p) => (
                <li
                  key={p.title}
                  className="flex gap-4 rounded-sm border border-zinc-800 bg-ink-900/60 p-4 transition hover:border-rust-500/40"
                >
                  <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-sm bg-rust-500 text-ink-950">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </span>
                  <div>
                    <div className="font-semibold text-white">{p.title}</div>
                    <div className="text-sm text-zinc-400">{p.text}</div>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href={WHATSAPP_URL('Hola, quería hacer una consulta sobre mi moto.')}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-rust-500 hover:text-rust-400"
            >
              Hablar con el taller
              <IconArrowRight width={16} height={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
