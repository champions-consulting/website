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
    ...eslintConfigPrettier,
    rules: {
      'prettier/prettier': 'warn',
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'no-empty-function': 'warn',
    },
  },
]

export default eslintConfig
