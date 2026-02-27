import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
        display: ['var(--font-syne)', 'ui-sans-serif', 'sans-serif'],
        brand: ['var(--font-syne)', 'ui-sans-serif', 'sans-serif']
      },
      boxShadow: {
        card: '0 30px 60px rgba(3, 13, 20, 0.45)',
        soft: '0 16px 45px rgba(2, 8, 14, 0.35)',
        glow: '0 0 0 1px rgba(255,255,255,0.08), 0 8px 30px rgba(0,0,0,0.35)',
        netflix: '0 18px 50px rgba(0,0,0,0.65)'
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' }
        }
      },
      animation: {
        shimmer: 'shimmer 6s ease infinite'
      }
    },
  },
  plugins: [],
} satisfies Config;
