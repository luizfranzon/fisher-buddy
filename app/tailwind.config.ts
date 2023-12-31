import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        seaFort: "url('../assets/background.jpg')",
        headerBanner: "url('../assets/header-first-layer.svg')",
        headerSubLayer: "url('../assets/header-sub-layer.svg')",
        progressBarBorder: "url('../assets/progress.svg')",
      },
      colors: {
        oceanBlue: '#33CEB1',
        progressGray: '#272727',
      },
    },
  },
  plugins: [],
}
export default config
