module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'system-ui']
    },
    screens: {
      xs: '375px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '18px',
        md: '24px',
        lg: '16px',
        xl: '30px',
        '2xl': '40px',
      },
    },
    extend: {},
  },
  plugins: [],
}
