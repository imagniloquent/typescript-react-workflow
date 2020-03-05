//Path: /.eslintrc.js

module.exports = {
    env: {
        browser: true,
    },
    parser: "@typescript-eslint/parser",
    extends: [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        "react/no-unknown-property": ["error", { ignore: ["class"] }],
    },
    settings: {
        react: {
            pragma: "h",
            version: "detect",
        },
    },
};
