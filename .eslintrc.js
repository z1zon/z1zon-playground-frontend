module.exports = {
  root: true,
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/jsx-runtime",
    "plugin:@next/next/recommended",
    "plugin:storybook/recommended",
  ],
  plugins: ["@typescript-eslint", "simple-import-sort", "unused-imports"],
  ignorePatterns: [
    "node_modules/",
    ".pnp.cjs",
    ".pnp.loader.cjs",
    "public/",
    ".yarn/",
    "dist/",
    "/.next",
    ".eslintrc.js",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [["@", "./src"]],
        extensions: [".ts", ".js", ".tsx", ".json"],
      },
    },
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      extends: ["airbnb-typescript", "plugin:@typescript-eslint/recommended"],
      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
  ],
  rules: {
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
    "import/order": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@next/next/no-html-link-for-pages": ["error", "app/"],
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          ["^\\u0000"],
          [
            "^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)",
          ],
          ["^react"],
          ["^next"],
          ["^@?\\w"],
          ["^(@|lib|components|utils|hooks|stores)(/.*|$)"],
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          ["^.+\\.svg$"],
          ["^.+\\.s?css$"],
        ],
      },
    ],
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "import/no-extraneous-dependencies": "off",
  },
};
