/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#0F172A',
        'card-bg': '#33415580',
      },
      backgroundImage: {
        "secondary-bg": "radial-gradient(150% 150% at 0% 0%, rgba(30, 58, 138, 0.3) 7.75%, rgba(15, 23, 42, 0.3) 79.39%)",
        "hero-bg": "background: linear-gradient(180deg, #0F172A 0%, #081223 100%)",
        "footer-bg": "linear-gradient(135deg, rgba(30, 58, 138, 0.3) 25%, rgba(15, 23, 42, 0.3) 95.71%)",
      },
      spacing: {
        'section-x': '1.5rem', // 24px
        'section-y': '3rem',   // 48px
      },
    },
  },
  plugins: [],
};
