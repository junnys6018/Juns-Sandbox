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
        DEFAULT: '0px',
        sm: '16px',
        md: '20px',
        lg: '24px',
        xl: '32px',
        '2xl': '40px',
      },
    },
    dropShadow: {
      lg: '0px 4px 20px rgba(0, 0, 0, 0.12)',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
