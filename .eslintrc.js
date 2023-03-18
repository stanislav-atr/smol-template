module.exports = {
    root: true,
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    extends: [
        'airbnb-base',
        'eslint:recommended',
        'plugin:import/recommended',
    ],
    plugins: [
        'import',
        'import-newlines',
    ],
    rules: {
        indent: 'off',
        'import/no-cycle': 'off',
        'import-newlines/enforce': ['error', 2, 120],
        'no-multi-assign': 'off',
        'func-names': 'off',
        'class-methods-use-this': 'off',
        'max-classes-per-file': 'off',
        'max-len': ['error', { code: 120 }],
        'import/no-extraneous-dependencies': 'off',
        'import/prefer-default-export': 'off',
    },
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                tsconfigRootDir: __dirname,
                project: './tsconfig.eslint.json',
            },
            plugins: [
                '@typescript-eslint',
            ],
            extends: [
                'airbnb-typescript/base',
                'plugin:@typescript-eslint/eslint-recommended',
                'plugin:@typescript-eslint/recommended',
                'plugin:import/typescript',
            ],
            rules: {
                'import/no-extraneous-dependencies': 'off',
                '@typescript-eslint/no-explicit-any': 'off',
                '@typescript-eslint/ban-types': 'off',
                '@typescript-eslint/interface-name-prefix': 'off',
                '@typescript-eslint/no-non-null-assertion': 'off',
                '@typescript-eslint/naming-convention': 'off',
                '@typescript-eslint/ban-ts-comment': 'off',
                '@typescript-eslint/indent': ['error', 4, { SwitchCase: 1 }],
                // FIXME might be better to remove this
                // see https://typescript-eslint.io/rules/type-annotation-spacing/
                '@typescript-eslint/type-annotation-spacing': ['error', { before: false, after: true }],
            },
          },
          {
            files: ['*.html'],
            parser: '@html-eslint/parser',
            extends: ['plugin:@html-eslint/recommended'],
            plugins: ['@html-eslint'],
          },
    ],
};
