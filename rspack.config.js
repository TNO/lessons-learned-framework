const path = require("path");
const devMode = process.env.NODE_ENV === "development";
const outputPath = path.resolve(__dirname, devMode ? "dist" : "public");

console.log(`Working in ${devMode ? "development" : "production"} mode.`);

module.exports = {
  mode: devMode ? "development" : "production",
  entry: {
    main: "./src/app.ts",
  },
  devServer: {
    headers: [
      {
        key: "Content-Security-Policy",
        value: "frame-ancestors 'self' http://localhost:8765;",
      },
    ],
    port: 1234,
  },
  builtins: {
    define: {
      "process.env.NODE_ENV": "'development'",
      API_SERVER: devMode ? "'http://localhost:3000'" : undefined,
    },
    html: [
      {
        title: "Lessons-Learned Library (L3)",
        publicPath: devMode ? undefined : undefined,
        scriptLoading: "defer",
        minify: !devMode,
        favicon: "./src/favicon.ico",
        meta: {
          viewport: "width=device-width, initial-scale=1",
          csp: {
            "http-equiv": "Content-Security-Policy",
            content:
              "default-src 'self'; img-src https://*; child-src 'none'; frame-ancestors '*'",
          },
          // "http-equiv": "Content-Security-Policy",
          // content:
          //   "default-src 'self'; img-src https://*; child-src 'none'; frame-ancestors '*'",
          "og:title": "Lessons-Learned Library",
          "og:description":
            "Welke ervaringen heb je opgedaan tijdens het afhandelen van een incident of crisis, en welke lessen wil je delen met je collega's.",
          "og:url": "https://github.com/DRIVER-EU/lessons-learned-framework",
          "og:site_name": "Lessons-Learned Library",
          "og:image:alt": "Lessons-Learned Library",
          "og:image": "./src/assets/logo.svg",
          "og:image:type": "image/svg",
          "og:image:width": "200",
          "og:image:height": "200",
        },
      },
    ],
    minifyOptions: devMode
      ? undefined
      : {
          passes: 3,
          dropConsole: false,
        },
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /^BUILD_ID$/,
        type: "asset/source",
      },
    ],
  },
  output: {
    filename: "main.js",
    path: outputPath,
  },
};
