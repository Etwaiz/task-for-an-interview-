import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

const sharedStyleRules = {
    indent: ['error', 4, { SwitchCase: 1 }],
    quotes: ['error', 'single'],
    'no-console': ['warn', { allow: ['error'] }],
    semi: ['error', 'never'],
    'block-spacing': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'keyword-spacing': ['error', { before: true, after: true }],
    'space-infix-ops': ['error'],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'key-spacing': [
        'error',
        {
            beforeColon: false,
            afterColon: true,
            mode: 'strict',
        },
    ],
    'react/jsx-indent': ['error', 4],
    'react/jsx-indent-props': ['error', 4],
    'space-before-blocks': ['error', 'always'],
    eqeqeq: ['error', 'always'],
}

export default [
    {
        ignores: ['dist', 'node_modules'],
    },
    js.configs.recommended,
    {
        files: ['**/*.{js,jsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.es2020,
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        settings: {
            react: {
                version: '18.2',
            },
        },
        plugins: {
            react,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            ...(react.configs.recommended?.rules || {}),
            ...(react.configs['jsx-runtime']?.rules || {}),
            ...(reactHooks.configs.recommended?.rules || {}),
            ...sharedStyleRules,
            'react-refresh/only-export-components': 'warn',
            'react/prop-types': 0,
            'react/no-unescaped-entities': 0,
            'react/display-name': 'off',
            'react-hooks/exhaustive-deps': 'off',
        },
    },
]
