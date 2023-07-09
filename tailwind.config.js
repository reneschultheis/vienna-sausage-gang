/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'vermilion-500': '#db3c26',
        'vermilion-300': '#e98a7d',
        'vermilion-100': '#fbece9',
        'whiteanqtique-500': '#ffe6d9',
        'pastellblue-500': '#56b8cf',
      },
      textColor: {
        'vermilion-500': '#db3c26',
        'whiteanqtique-500': '#ffe6d9',
      }
    },
  },
  plugins: [],
}
