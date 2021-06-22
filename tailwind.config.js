module.exports = {
  purge: ['./src/pages/*.mdx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        serif: '"Times New Roman", serif',
      },
      colors: {
        yellow: '#FF0',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
