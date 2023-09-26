import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      colors: {
        grey: {
          light: "#F3F3F3"
        }
      },
      screens: {
        xs: "480px",
        sm: "600px",
        md: "800px",
        lg: "1024px",
        xl: "1351px",
        big:"1500px",
        bigXl: "2000px"
      },
      transitionTimingFunction: {
        'in-cubic': 'cubic-bezier(.15,.32,.35,.74)'
      }
    },
  },
  plugins: [],
} satisfies Config

