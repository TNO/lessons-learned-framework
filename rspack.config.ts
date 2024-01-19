import { config } from "dotenv";
import { resolve } from "path";
import { Configuration } from "@rspack/cli";
import {
  DefinePlugin,
  HtmlRspackPlugin,
  HotModuleReplacementPlugin,
  SwcCssMinimizerRspackPlugin,
  SwcJsMinimizerRspackPlugin,
} from "@rspack/core";

config();

// const rspack = require('@rspack/core');
const devMode = process.env.NODE_ENV === "development";
const outputPath = resolve(__dirname, devMode ? "dist" : "../server/public");

const mode = devMode ? "development" : "production";
const serverURL = devMode ? process.env.SERVER_URL : "/api/v1";

console.log(`Working in ${mode} mode, server URL ${serverURL}.`);

const configuration: Configuration = {
  mode,
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
  plugins: [
    new DefinePlugin({
      NODE_ENV: "'development'",
      SERVER_URL: `"${serverURL}"`,
      API_SERVER: `"${process.env.SERVER || ""}"`,
    }),
    new HtmlRspackPlugin({
      title: "Lessons-Learned Library (L3)",
      publicPath: devMode ? undefined : undefined,
      scriptLoading: "defer",
      minify: !devMode,
      favicon: "./src/favicon.ico",
      meta: {
        viewport: "width=device-width, initial-scale=1",
        // csp: {
        //   "http-equiv": "Content-Security-Policy",
        //   content:
        //     "default-src 'self'; img-src https://*; child-src 'none'; frame-ancestors '*'",
        // },
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
    }),
    new HotModuleReplacementPlugin(),
    new SwcCssMinimizerRspackPlugin(),
    new SwcJsMinimizerRspackPlugin({
      compress: !devMode,
      mangle: !devMode,
    }),
  ],
  resolve: {
    extensions: ["...", ".ts"], // "..." means to extend from the default extensions
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /[\\/]node_modules[\\/]/,
        loader: "builtin:swc-loader",
        options: {
          sourceMap: true,
          jsc: {
            parser: {
              syntax: "typescript",
            },
          },
        },
      },
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
  optimization: {
    minimize: !devMode,
  },
  output: {
    filename: "main.js",
    path: outputPath,
  },
};

export = configuration;
