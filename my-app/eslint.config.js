import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    "extends": [
      "plugin:react/recommended",
      "plugin:react-hooks/recommended"
    ],
    "settings": {
      "react": {
        "version": "detect"
      }
    },
    "rules": {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off"
    }
  },
)
