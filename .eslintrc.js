module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'prettier',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest-formatting/strict',
    'plugin:storybook/recommended',
  ],
  globals: {
    globalThis: false,
  },
  ignorePatterns: ['*.md'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: [
    'react',
    'jsx-a11y',
    'import',
    'prettier',
    'jest',
    '@typescript-eslint',
    'typescript-sort-keys',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/no-use-before-define': 'off',
    curly: 'error',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/no-restricted-matchers': 'error',
    'jest/valid-expect': 'error',
    'jsx-a11y/alt-text': [
      'warn',
      {
        img: [],
      },
    ],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],
    'no-duplicate-imports': 'error',
    'object-shorthand': ['error', 'always'],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'react/display-name': [
      0,
      {
        ignoreTranspilerName: false,
      },
    ],
    'react/function-component-definition': 'off',
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-no-bind': [
      'error',
      {
        allowArrowFunctions: true,
        allowFunctions: true,
      },
    ],
    'react/prop-types': [0],
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'sort-keys': [
      'error',
      'asc',
      {
        caseSensitive: false,
        natural: true,
        minKeys: 5,
      },
    ],
    'typescript-sort-keys/interface': 'error',
    'typescript-sort-keys/string-enum': [
      'error',
      'asc',
      {
        caseSensitive: false,
        natural: true,
      },
    ],
    'react/jsx-uses-react': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-uses-vars': 'error',
    'prettier/prettier': ['error', { singleQuote: true }],
    'no-return-assign': ['error', 'except-parens'],
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/ban-types': 'off',
    'no-restricted-syntax': 'off',
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],
    '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true }],
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
    react: {
      version: 'detect',
    },
  },
};
