import nesting from 'tailwindcss/nesting/index.js'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default {
  plugins: [
    nesting(),
    tailwindcss(),
    autoprefixer(),
  ],
}
