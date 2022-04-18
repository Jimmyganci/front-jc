module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "airbnb-typescript",
    "prettier",
    "plugin:react/jsx-runtime",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    project: "tsconfig.json",
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  ignorePatterns: [".eslintrc.js"], // !!! new and important part !!!
  rules: {
    "prettier/prettier": ["error"],
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "react/jsx-props-no-spreading": 0,
    "react/require-default-props": 0,
  },
};
