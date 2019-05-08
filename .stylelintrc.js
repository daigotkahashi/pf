module.exports = {
  plugins: ['stylelint-order', 'stylelint-scss'],
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-recommended-scss',
    'stylelint-config-standard',
  ],
  rules: {
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'no-duplicate-selectors': null,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
  },
}
