import { WHATSAPP_URL } from '../lib/constants';
import { IconWhatsApp } from './Icon';

export default function StickyCta() {
  return (
    <a
      href={WHATSAPP_URL('Hola Kiomoto, quería reservar una cita.')}
      target="_blank"
      rel="noreferrer"
      aria-label="Reservar cita por WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-rust-500 text-ink-950 shadow-[0_10px_30px_rgba(255,107,0,0.45)] transition hover:scale-105 hover:bg-rust-400 sm:hidden"
    >
      <IconWhatsApp width={26} height={26} />
    </a>
  );
}
