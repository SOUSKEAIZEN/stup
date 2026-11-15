import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#101A32',
          deep: '#182643',
          light: '#22345a',
          900: '#0b1122',
        },
        powder: {
          DEFAULT: '#B9D0E8',
          soft: '#E8EFF7',
          light: '#F2F6FB',
          dark: '#9bb9d6',
        },
        sunflower: {
          DEFAULT: '#F5C542',
          deep: '#EAB52B',
          dark: '#C69208',
          light: '#F9D66E',
          subtle: '#FEF8E7',
        },
        surface: {
          bg: '#F7F8FA',
          white: '#FFFFFF',
          card: '#FFFFFF',
          muted: '#F0F3F7',
        },
        ink: {
          body: '#343D4D',
          muted: '#788396',
          heading: '#101A32',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        ui: ['var(--font-manrope)', 'sans-serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      maxWidth: {
        site: '1240px',
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(16, 26, 50, 0.05), 0 10px 24px -10px rgba(16, 26, 50, 0.08)',
        'card': '0 2px 8px -2px rgba(16, 26, 50, 0.06), 0 16px 32px -8px rgba(16, 26, 50, 0.08)',
        'float': '0 20px 40px -15px rgba(16, 26, 50, 0.15)',
        'sunflower': '0 4px 14px 0 rgba(245, 197, 66, 0.35)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;
