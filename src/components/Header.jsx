import { useEffect, useState } from 'react';
import { WHATSAPP_URL } from '../lib/constants';
import { IconWhatsApp } from './Icon';

const links = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#ubicacion', label: 'Ubicación' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? 'border-b border-zinc-800/80 bg-ink-950/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
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
          <div className="leading-tight">
            <div className="font-display text-2xl tracking-wider text-white">
              KIO<span className="text-rust-500">MOTO</span>
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
              Taller · Madrid
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-zinc-300 transition hover:text-rust-500"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL('Hola, me gustaría reservar una cita.')}
            target="_blank"
            rel="noreferrer"
            className="btn-primary !py-2.5 !text-sm"
          >
            <IconWhatsApp width={16} height={16} />
            Reserva tu cita
          </a>
        </nav>

        <button
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-sm border border-zinc-800 text-zinc-200 md:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
            ) : (
              <>
                <path d="M4 7h16" strokeLinecap="round" />
                <path d="M4 12h16" strokeLinecap="round" />
                <path d="M4 17h16" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      <div
        className={`md:hidden ${
          open ? 'max-h-96 border-t border-zinc-800' : 'max-h-0'
        } overflow-hidden bg-ink-900/95 backdrop-blur transition-[max-height] duration-300`}
      >
        <div className="container-x flex flex-col gap-1 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-sm px-2 py-3 text-base text-zinc-200 hover:bg-ink-800 hover:text-rust-500"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL('Hola, me gustaría reservar una cita.')}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2"
          >
            <IconWhatsApp width={16} height={16} />
            Reserva tu cita
          </a>
        </div>
      </div>
    </header>
  );
}
