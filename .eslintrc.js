module.exports = {
    root: true,
    env: {
        'browser': true,
        'es2021': true,
        'node': true
    },
    extends: [
        // 'eslint:recommended',
        'plugin:vue/vue3-essential',
        // 'plugin:@typescript-eslint/recommended'
    ],
    parserOptions: {
        'parser': '@typescript-eslint/parser'
    },
    plugins: [
        'vue',
        '@typescript-eslint'
    ],
    rules: {
        indent: [
            'error',
            4
        ],
        quotes: [
            'error',
            'single'
        ],
        semi: [
            'error',
            'always'
        ]
    }
};
