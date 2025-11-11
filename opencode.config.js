const config = {
  name: "Agent System LLM OSU",

  root: process.cwd(),

  ignore: [
    "node_modules",
    ".next",
    ".git",
    "dist",
    "build",
    "coverage",
    ".env",
    ".env.local",
  ],

  models: {
    default: "opencode",
  },

  theme: "tokyonight",

  formatters: {
    typescript: {
      command: "prettier",
      args: ["--write"],
    },
  },

  tools: {
    enabled: true,
    custom: [],
  },

  rules: {
    allowedPaths: ["app", "lib", "src", "components"],
    protectedPaths: [
      "package.json",
      "tsconfig.json",
      "next.config.ts",
      "eslint.config.mjs",
      "postcss.config.mjs",
      ".env.local",
      ".env",
      "opencode.config.js",
      "opencode.json",
    ],
  },

  git: {
    enabled: true,
    autoCommit: false,
  },
};

module.exports = config;
