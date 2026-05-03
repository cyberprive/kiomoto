export const PHONE_DISPLAY = '+34 911 722 537';
export const PHONE_TEL = '+34911722537';

export const WHATSAPP_DISPLAY = '+58 414-4366787';
export const WHATSAPP_NUMBER = '584144366787';
export const WHATSAPP_URL = (msg) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const ADDRESS_LINE_1 = 'C. de la Palmera, 4, Tetuán';
export const ADDRESS_LINE_2 = '28029 Madrid, España';
export const HOURS = [
  { d: 'Lunes – Viernes', h: '09:00 – 19:00' },
  { d: 'Sábado', h: '10:00 – 14:00' },
  { d: 'Domingo', h: 'Cerrado' },
];
