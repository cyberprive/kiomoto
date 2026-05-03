import {
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from '../lib/constants';
import { IconFacebook, IconInstagram, IconTikTok } from './Icon';

const socials = [
  { href: '#', label: 'Instagram', Icon: IconInstagram },
  { href: '#', label: 'Facebook', Icon: IconFacebook },
  { href: '#', label: 'TikTok', Icon: IconTikTok },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-zinc-800 bg-ink-950 pt-16 pb-10">
      <div className="container-x">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-sm bg-rust-500 text-ink-950">
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="5.5" cy="17.5" r="3.5" />
                  <circle cx="18.5" cy="17.5" r="3.5" />
                  <path d="M5.5 17.5 11 8h4l3.5 9.5" />
                  <path d="M14 5h3l1 3" />
                </svg>
              </span>
              <span className="font-display text-2xl tracking-wider text-white">
                KIO<span className="text-rust-500">MOTO</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-zinc-400">
              Taller de motos en Madrid. Reparación, mantenimiento, diagnóstico
              y piezas con la atención que tu moto merece.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
              Navegación
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#servicios" className="text-zinc-300 hover:text-rust-500">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-zinc-300 hover:text-rust-500">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#ubicacion" className="text-zinc-300 hover:text-rust-500">
                  Ubicación
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-zinc-300 hover:text-rust-500">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
              Contacto
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="text-zinc-300 hover:text-rust-500"
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL('Hola Kiomoto')}
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-300 hover:text-rust-500"
                >
                  WhatsApp
                </a>
              </li>
              <li className="text-zinc-400">{ADDRESS_LINE_1}</li>
              <li className="text-zinc-400">{ADDRESS_LINE_2}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
              Síguenos
            </h4>
            <ul className="mt-4 flex gap-3">
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-sm border border-zinc-800 bg-ink-900 text-zinc-300 transition hover:border-rust-500 hover:text-rust-500"
                  >
                    <Icon width={18} height={18} />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-zinc-500">
              Próximamente en redes sociales.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-zinc-800 pt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Kiomoto · Madrid, España</span>
          <span>Diseñado con grasa y café</span>
        </div>
      </div>
    </footer>
  );
}
