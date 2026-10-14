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
        parish: {
          navy: '#0B1B3D',
          midnight: '#071026',
          blue: '#133E87',
          burgundy: '#7A1C28',
          crimson: '#8E2130',
          gold: '#C8A962',
          goldLight: '#E8D9B0',
          ivory: '#FAF8F3',
          sand: '#F2EFE9',
          charcoal: '#212529',
          muted: '#6C757D',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'serif'],
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
export default config;
