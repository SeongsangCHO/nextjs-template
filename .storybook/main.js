const path = require("path");
module.exports = {
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-styled-component-theme",
  ],
  framework: "@storybook/react",
  webpackFinal: async (config) => {
    config.resolve.modules = [
      path.resolve(__dirname, ".."),
      "node_modules",
      "styles",
    ];
    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.resolve(__dirname, "../components"),
      assets: path.resolve(__dirname, "../assets"),
    };
    return config;
  },
};
