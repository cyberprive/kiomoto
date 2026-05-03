/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0a0a0b',
          900: '#111113',
          800: '#1a1a1d',
          700: '#26262b',
        },
        rust: {
          400: '#ff8f3c',
          500: '#ff6b00',
          600: '#e85d00',
          700: '#c24e00',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'grid-mech':
          'linear-gradient(rgba(255,107,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,0.06) 1px, transparent 1px)',
        'diag-stripes':
          'repeating-linear-gradient(135deg, rgba(255,107,0,0.12) 0 10px, transparent 10px 20px)',
      },
      animation: {
        'spin-slow': 'spin 14s linear infinite',
      },
    },
  },
  plugins: [],
};
