import {
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from '../lib/constants';
import { IconMapPin, IconPhone, IconWhatsApp } from './Icon';

export default function Contact() {
  return (
    <section id="contacto" className="relative py-20 sm:py-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-sm border border-zinc-800 bg-ink-900">
          <div className="absolute inset-0 -z-10 bg-grid-mech [background-size:40px_40px] opacity-40" />
          <div className="absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-rust-500/20 blur-3xl" />

          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <span className="eyebrow">Contacto</span>
              <h2 className="mt-4 section-title">
                ¿Lista tu moto para <br />
                <span className="text-rust-500">una revisión?</span>
              </h2>
              <p className="mt-5 max-w-md text-zinc-300">
                Cuéntanos qué necesitas por WhatsApp y te confirmamos cita en
                el día. Sin esperas, sin complicaciones.
              </p>

              <a
                href={WHATSAPP_URL(
                  'Hola Kiomoto, quiero reservar una cita para mi moto.',
                )}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-8"
              >
                <IconWhatsApp width={18} height={18} />
                Reserva tu cita por WhatsApp
              </a>
            </div>

            <div className="lg:col-span-6">
              <ul className="grid gap-4 sm:grid-cols-2">
                <li>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="group flex h-full flex-col rounded-sm border border-zinc-800 bg-ink-950 p-5 transition hover:border-rust-500/60"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-sm bg-ink-800 text-rust-500 transition group-hover:bg-rust-500 group-hover:text-ink-950">
                      <IconPhone width={20} height={20} />
                    </span>
                    <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                      Teléfono
                    </div>
                    <div className="mt-1 text-lg font-semibold text-white">
                      {PHONE_DISPLAY}
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={WHATSAPP_URL('Hola, una consulta:')}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex h-full flex-col rounded-sm border border-zinc-800 bg-ink-950 p-5 transition hover:border-rust-500/60"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-sm bg-ink-800 text-rust-500 transition group-hover:bg-rust-500 group-hover:text-ink-950">
                      <IconWhatsApp width={20} height={20} />
                    </span>
                    <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                      WhatsApp
                    </div>
                    <div className="mt-1 text-lg font-semibold text-white">
                      {WHATSAPP_DISPLAY}
                    </div>
                  </a>
                </li>
                <li className="sm:col-span-2">
                  <div className="flex h-full flex-col rounded-sm border border-zinc-800 bg-ink-950 p-5">
                    <span className="grid h-10 w-10 place-items-center rounded-sm bg-ink-800 text-rust-500">
                      <IconMapPin width={20} height={20} />
                    </span>
                    <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                      Dirección
                    </div>
                    <div className="mt-1 text-lg font-semibold text-white">
                      {ADDRESS_LINE_1}
                    </div>
                    <div className="text-zinc-400">{ADDRESS_LINE_2}</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
