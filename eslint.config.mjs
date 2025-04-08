import {dirname} from 'path'
import {fileURLToPath} from 'url'
import {FlatCompat} from '@eslint/eslintrc'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import globals from 'globals'
import eslintConfigPrettier from 'eslint-config-prettier' // Import the config object

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const nextTypeScriptConfigs = compat.extends(
  'next/core-web-vitals',
  'next/typescript',
)

const eslintConfig = [
  ...nextTypeScriptConfigs,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      prettier: eslintPluginPrettier,
      // You can add other plugins here if needed
    },
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
    settings: {
      react: {
        version: 'detect',
      },
    },
    ...eslintConfigPrettier, // Spread the Prettier config object
    rules: {
      'prettier/prettier': 'warn', // Or 'error' to treat Prettier issues as errors
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'no-empty-function': 'warn',
      // Add or override other ESLint rules as needed
    },
  },
]

export default eslintConfig
