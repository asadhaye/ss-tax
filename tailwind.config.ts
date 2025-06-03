import type { Config } from 'tailwindcss'
import { colors } from './app/styles/colors'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4A90E2',
          DEFAULT: '#2563EB',
          dark: '#1E40AF',
        },
        secondary: {
          light: '#10B981',
          DEFAULT: '#059669',
          dark: '#047857',
        },
        text: {
          primary: '#111827',
          secondary: '#374151',
          muted: '#6B7280',
          light: '#F9FAFB',
        },
        background: {
          light: '#F9FAFB',
          DEFAULT: '#FFFFFF',
          dark: '#1F2937',
        },
        // Add any other custom colors from globals.css if needed
        // e.g., if you use specific shades like gray-900 often and want a dedicated name
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colorAdjust: {
        DEFAULT: 'exact',
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
}

export default config