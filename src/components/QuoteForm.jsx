import { useState } from 'react';
import { WHATSAPP_URL } from '../lib/constants';
import { IconArrowRight, IconWhatsApp } from './Icon';

const reasons = ['Reparación', 'Mantenimiento', 'Diagnóstico', 'Pieza nueva', 'Pieza usada'];

export default function QuoteForm() {
  const [name, setName] = useState('');
  const [bike, setBike] = useState('');
  const [reason, setReason] = useState(reasons[0]);
  const [details, setDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      'Hola Kiomoto, me gustaría pedir presupuesto:',
      `• Nombre: ${name || '—'}`,
      `• Moto: ${bike || '—'}`,
      `• Servicio: ${reason}`,
      `• Detalles: ${details || '—'}`,
    ];
    window.open(WHATSAPP_URL(lines.join('\n')), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="presupuesto" className="relative py-20 sm:py-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-sm border border-zinc-800 bg-ink-900">
          <div className="absolute inset-0 -z-10 bg-grid-mech [background-size:40px_40px] opacity-30" />
          <div className="absolute -left-20 -top-20 -z-10 h-72 w-72 rounded-full bg-rust-500/15 blur-3xl" />
          <div className="absolute -bottom-24 -right-10 -z-10 h-72 w-72 rounded-full bg-rust-700/15 blur-3xl" />

          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="eyebrow">Presupuesto</span>
              <h2 className="mt-4 section-title">
                Pide tu <span className="text-rust-500">pieza</span> o <br />
                presupuesto
              </h2>
              <p className="mt-5 max-w-md text-zinc-300">
                Cuéntanos qué moto tienes y qué necesitas. Te respondemos por
                WhatsApp con disponibilidad y precio en menos de 24 horas.
              </p>

              <ul className="mt-8 space-y-2 font-mono text-xs uppercase tracking-[0.18em] text-zinc-400">
                <li className="flex items-center gap-2">
                  <span className="h-px w-6 bg-rust-500" />
                  Sin compromiso
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-px w-6 bg-rust-500" />
                  Respuesta el mismo día
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-px w-6 bg-rust-500" />
                  Piezas nuevas y de segunda mano
                </li>
              </ul>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-sm border border-zinc-800 bg-ink-950 p-6 sm:p-8 lg:col-span-7"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Nombre">
                  <input
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Cómo te llamas"
                    className="input"
                  />
                </Field>
                <Field label="Moto (marca y modelo)">
                  <input
                    required
                    type="text"
                    value={bike}
                    onChange={(e) => setBike(e.target.value)}
                    placeholder="Ej. Honda CB500F 2019"
                    className="input"
                  />
                </Field>
              </div>

              <Field label="¿Qué necesitas?" className="mt-4">
                <div className="flex flex-wrap gap-2">
                  {reasons.map((r) => (
                    <button
                      type="button"
                      key={r}
                      onClick={() => setReason(r)}
                      className={`rounded-sm border px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition ${
                        reason === r
                          ? 'border-rust-500 bg-rust-500 text-ink-950'
                          : 'border-zinc-800 bg-ink-900 text-zinc-300 hover:border-rust-500/50 hover:text-rust-500'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </Field>

              <Field label="Detalles" className="mt-4">
                <textarea
                  rows={4}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Síntoma, número de pieza, foto que vas a enviar..."
                  className="input resize-none"
                />
              </Field>

              <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                  Al enviar, abriremos WhatsApp con tus datos.
                </p>
                <button type="submit" className="btn-primary !py-3">
                  <IconWhatsApp width={16} height={16} />
                  Pedir presupuesto
                  <IconArrowRight width={16} height={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, className = '', children }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
        {label}
      </span>
      {children}
    </label>
  );
}
