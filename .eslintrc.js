module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    quotes: ["off"],
    "react/react-in-jsx-scope": ["off"],
    "react/jsx-uses-react": ["off"],
    "react/jsx-props-no-spreading": ["warn"],
    "react/no-unescaped-entities": ["off"],
    "react/function-component-definition": ["off"],
    "react/no-unstable-nested-components": ["off"],
    "react/self-closing-comp": ["off"],
    "react/jsx-filename-extension": ["off"],
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["@assets", "./src/assets"],
          ["@components", "./src/components"],
          ["@ts", "./src/types"],
          ["@styles", "./src/styles"],
          ["@pages", "./src/pages"],
          ["@src", "./src"],
        ],
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".svg", ".png", ".scss", ".css"],
      },
    },
  },
};
