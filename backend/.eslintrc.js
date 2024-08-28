module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier',
    ],
    plugins: ['@typescript-eslint', 'prettier'],
    env: {
        node: true,
        es2021: true,
    },
    rules: {
        'prettier/prettier': ['error', { endOfLine: 'auto' }],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
};
