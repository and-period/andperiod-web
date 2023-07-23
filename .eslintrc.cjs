// https://github.com/nuxt/eslint-config#nuxteslint-config
module.exports = {
  root: true,
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:tailwindcss/recommended'],
  plugins: ['tailwindcss'],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser'
    }
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'no-unused-vars': [
      'error', {
        args: 'none',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_'
      }
    ]
  }
}
