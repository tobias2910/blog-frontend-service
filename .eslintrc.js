module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:import/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'jsx-a11y/label-has-associated-control': [2, {
      labelComponents: ['CustomInputLabel'],
      labelAttributes: ['label'],
      controlComponents: ['CustomInput'],
      depth: 3,
    }],
  },
};
