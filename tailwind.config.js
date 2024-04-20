/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'internal/templates/**/*.templ',
  ],
  corePlugins: {
    preflight: true,
  }
}
