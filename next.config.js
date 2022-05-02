/** @type {import('next').NextConfig} */

// ! for WebpackBundleAnalyzer
// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });
const mode = process.env.ANALYZE;

if (mode) {
  module.exports = withBundleAnalyzer({
    // i18n, using i18n
    webpack: (config) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
      return config;
    },
  });
} else {
  module.exports = {
    reactStrictMode: true,
    // i18n,
    webpack: (config) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
      return config;
    },
    experimental: {
      outputStandalone: true,
    },
    publicRuntimeConfig: {},
    serverRuntimeConfig: {},
  };
}
