import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3B82F6', // blue-500
          DEFAULT: '#2563EB', // blue-600
          dark: '#1D4ED8', // blue-700
        },
        accent: {
          light: '#34D399', // emerald-400
          DEFAULT: '#10B981', // emerald-500
          dark: '#059669', // emerald-600
        },
        background: {
          light: '#FFFFFF',
          DEFAULT: '#FFFFFF',
          dark: '#111827', // gray-900
        },
        text: {
          primary: '#111827', // gray-900
          secondary: '#374151', // gray-700
          muted: '#6B7280', // gray-500
          light: '#F9FAFB', // gray-50
        },
      },
      backgroundImage: {
        'gradient-ceo': 'linear-gradient(135deg, #e0e7ef 0%, #f9fafb 100%)',
        'gradient-cfo': 'linear-gradient(135deg, #1e293b 0%, #2563eb 100%)',
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
}

export default config