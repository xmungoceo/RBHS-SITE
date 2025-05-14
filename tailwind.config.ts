import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'riverbend': {
          teal: '#34B7A7',
          'dark-teal': '#00717B',
          navy: '#183B56',
          'off-white': '#FAFAFA',
        },
      },
      backgroundImage: {
        'gradient-teal': 'linear-gradient(135deg, #34B7A7 0%, #00717B 100%)',
      },
    },
  },
  plugins: [],
}

export default config 