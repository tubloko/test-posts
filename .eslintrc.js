module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ['airbnb', 'plugin:jest/recommended', 'jest-enzyme', 'plugin:jsx-a11y/strict'],
  plugins: ['babel', 'import', 'jsx-a11y', 'prettier', 'react', 'react-hooks'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    /**
     * general
     */
    'max-len': ['error', 100, 2, { ignoreUrls: true }],
    'no-console': 'error',
    'no-alert': 'error',
    'linebreak-style': ['error', 'unix'],
    'arrow-parens': 'off',
    'object-curly-newline': 'off',
    'no-mixed-operators': 'off',
    'arrow-body-style': 'off',
    'function-paren-newline': 'off',
    'no-plusplus': 'off',
    'space-before-function-paren': 0,
    'no-param-reassign': 'off',
    'prefer-destructuring': 'off',
    radix: 'off',
    /**
     * react
     */
    'react/no-array-index-key': ['error'], // не использовать индексы массива в качестве ключей
    'react/jsx-key': ['error'], // всегда использовать key при маппинге
    'react/require-default-props': 'warn',
    'react/jsx-props-no-spreading': ['error'], //<Comp {...props} /> will throw error
    'react/jsx-pascal-case': ['error'],
    'react/jsx-handler-names': ['error'],
    'react/jsx-fragments': 'warn',
    'react/sort-prop-types': 'warn',
    'react/style-prop-object': 'error',
    'react/no-this-in-sfc': 'error',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
      },
    ],
    'react/boolean-prop-naming': ['error', { rule: '^(is|has|should)[A-Z]([A-Za-z0-9]?)+' }],
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'react/no-typos': 'error',
    'react/prefer-stateless-function': 'warn',
    'react/destructuring-assignment': 'error',
    /**
     * react hooks
     */
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    /**
     * jsx
     */
    'jsx-a11y/anchor-is-valid': ['error', { components: ['Link'], specialLink: ['to'] }],
    // "jsx-a11y/click-events-have-key-events": 'warn',
    // 'jsx-a11y/no-static-element-interactions': 'warn',
    'jsx-a11y/label-has-for': [
      2,
      {
        required: {
          every: ['id'],
        },
      },
    ],
    'prettier/prettier': ['error'],
  },
};
