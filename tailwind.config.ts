import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'dark-blue': '#2E3A8C',
        green: '#3B755F',
        'light-green': '#AFC6BD',
        beige: '#F2EBDB',
        'light-yellow': '#F9F9F9',
        divider: '#B0B0B0',
        'black-1': '#212121',
      },
      screens: {
        sm: '640px',

        md: '768px',

        lg: '1050px',

        xl: '1280px',

        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
export default config
