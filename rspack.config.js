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
    port: 1234,
  },
  builtins: {
    define: {
      "process.env.NODE_ENV": "'development'",
      // API_SERVER: "http://localhost:3000",
      // "process.env.SERVER": process.env.SERVER,
      // API_SERVER: devMode ? "http://localhost:3000" : "'public'",
      API_SERVER: devMode ? "'http://localhost:3000'" : "'public'",
    },
    html: [
      {
        title: "Lessons-Learned Library (L3)",
        publicPath: devMode ? undefined : "https://tno.github.io/cat",
        scriptLoading: "defer",
        minify: !devMode,
        favicon: "./src/favicon.ico",
        meta: {
          viewport: "width=device-width, initial-scale=1",
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
