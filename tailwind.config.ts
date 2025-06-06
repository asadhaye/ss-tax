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
          light: '#60A5FA', // blue-400
          DEFAULT: '#2563EB', // blue-600
          dark: '#1E40AF', // blue-800
        },
        accent: {
          light: '#6EE7B7', // emerald-300
          DEFAULT: '#10B981', // emerald-500
          dark: '#059669', // emerald-600
        },
        background: {
          light: '#F9FAFB',
          DEFAULT: '#FFFFFF',
          dark: '#1F2937',
        },
        text: {
          primary: '#111827',
          secondary: '#374151',
          muted: '#6B7280',
          light: '#F9FAFB',
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