import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFDF5',
        foreground: '#2A1B14',
        surface: '#FDFBF7',
        primary: '#D4AF37',
        secondary: '#800020',
        accent: '#B8860B',
        gold: '#D4AF37',
        maroon: '#800020',
        cream: '#FFFDF5',
        frame: '#E5C158',
        charcoal: '#2A1B14',
        blush: '#F5E7D3',
      },
      boxShadow: {
        luxury: '0 18px 45px rgba(184, 134, 11, 0.14)',
        rajwada: '0 18px 40px rgba(128, 0, 32, 0.08)',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'var(--font-noto-gujarati)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config