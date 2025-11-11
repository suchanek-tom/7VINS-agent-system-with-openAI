/**
 * OpenCode Configuration
 * https://opencode.ai/docs/config
 */

const config = {
  // Project name
  name: "Agent System LLM OSU",

  // Root directory of the project
  root: process.cwd(),

  // Ignore patterns for file scanning
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

  // AI model configuration
  models: {
    default: "opencode",
  },

  // Editor configuration
  editor: {
    defaultTheme: "dark",
    autoFormat: true,
  },

  // Formatters configuration
  formatters: {
    typescript: {
      command: "prettier",
      args: ["--write"],
    },
  },

  // Tools configuration
  tools: {
    enabled: true,
    custom: [],
  },

  // Rules for AI behavior
  rules: {
    // Only suggest changes in app/ and lib/ directories
    allowedPaths: ["app", "lib", "src", "components"],
    // Prevent changes to config files
    protectedPaths: [
      "package.json",
      "tsconfig.json",
      "next.config.ts",
      "eslint.config.mjs",
    ],
  },

  // Git integration
  git: {
    enabled: true,
    autoCommit: false,
  },
};

module.exports = config;
