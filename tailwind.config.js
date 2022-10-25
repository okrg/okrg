module.exports = {
  mode: 'jit',
  darkMode: false,
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    debugScreens: {
      position: ['bottom', 'right'],
    },
    extend: {
      colors: {
        'pink': 'rgb(255, 20, 255)',        
        'satin-nickel': 'rgb(181, 182, 181)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-debug-screens'),
  ],
  purge: ['./src/**/*.{json,js,md,njk,svg}'],
}
