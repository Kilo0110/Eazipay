/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    // prettier-ignore
    fontFamily: {
      'accent-light': '"made_mellow_personal_uselight", sans-serif',
      'accent-regular': '"made_mellow_personal_useRg", sans-serif',
      'accent-medium': '"made_mellow_personal_useMd", sans-serif',
      'accent-semi-bold': '"made_mellow_personal_useSBd", sans-serif',
      'accent-bold': '"made_mellow_personal_usebold", sans-serif',
      'accent-black': '"made_mellow_personal_useBlk", sans-serif',
    },
    extend: {},
  },
  plugins: [],
};
