import globals from 'globals'
import nextVitals from 'eslint-config-next/core-web-vitals'
import prettierPlugin from 'eslint-plugin-prettier'

const eslintConfig = [
  ...nextVitals,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...prettierPlugin.configs.recommended.rules,
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'no-empty-function': 'warn',
    },
  },
]

export default eslintConfig
