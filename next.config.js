const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: (config) => {
    const scssConfigIndex = config.module.rules.findIndex((c) => ".scss".match(c.test));
    const rule = config.module.rules[scssConfigIndex].oneOf;
    const exactRuleIndex = rule?.findIndex((c) => ".module.scss".match(c.test));
    const exactRule = rule?.[exactRuleIndex + 1];
    const lastLoader = exactRule?.use[exactRule.use.length - 1];

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    config.module.rules.push({
      test: /\.module\.s(a|c)ss$/,
      loader: "sass-loader",
      options: {
        additionalData: `@import "src/styles/variables.scss"; @import "src/styles/mixins.scss";`,
        sassOptions: {
          includePaths: ["src/styles"],
        },
      },
    });

    if (lastLoader) {
      lastLoader.options.additionalData = `@import "src/styles/variables.scss; @import "src/styles/mixins.scss";"`;
    }

    config.resolve.alias = {
      ...config.resolve.alias,
      "@pages": path.resolve(__dirname, "src", "pages"),
      "@assets": path.resolve(__dirname, "src", "assets"),
      "@styles": path.resolve(__dirname, "src", "styles"),
      "@components": path.resolve(__dirname, "src", "components"),
      "@ts": path.resolve(__dirname, "src", "types"),
      "@src": path.resolve(__dirname, "src"),
    };

    return config;
  },
};

module.exports = nextConfig;
