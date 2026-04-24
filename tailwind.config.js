/** @type {import('tailwindcss').Config} */
module.exports = {
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
          50: '#f3f7fb',
          100: '#e7eef7',
          200: '#cddced',
          300: '#a9c2de',
          400: '#7ea2ca',
          500: '#597fb2',
          600: '#345f96',
          700: '#274876',
          800: '#1f395d',
          900: '#182d49',
        },
        accent: {
          50: '#eef8f7',
          100: '#d7efeb',
          200: '#b2ddd6',
          300: '#84c7be',
          400: '#59ada2',
          500: '#3f9088',
          600: '#31756f',
          700: '#285f5b',
          800: '#234d4a',
          900: '#1f403d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
    },
  },
  plugins: [],
};
