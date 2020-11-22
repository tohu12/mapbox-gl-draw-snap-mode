const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const path = require("path");

module.exports = [
  {
    mode: "production",
    entry: "./src/index.js",
    devtool: "source-map",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "mapbox-gl-draw-snap-mode.min.js",
      library: "mapboxGlDrawSnapMode",
      libraryTarget: "umd",
      globalObject: "this",
      // libraryExport: 'default',
    },
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin({ parallel: true })],
    },
    externals: [/^(@mapbox\/mapbox-gl-draw).*$/],
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
      ],
    },
    plugins: [
      // new BundleAnalyzerPlugin({
      //   analyzerMode: "server",
      //   generateStatsFile: true,
      //   statsOptions: { source: false },
      // }),
    ],
  },
  // {
  //   mode: "production",
  //   entry: "./src/index.js",
  //   devtool: "source-map",
  //   output: {
  //     path: path.resolve(__dirname, "dist"),
  //     filename: "mapbox-gl-draw-snap-mode.min.js",
  //     library: "mapbox-gl-draw-snap-mode",
  //     libraryTarget: "umd",
  //   },
  //   optimization: {
  //     minimize: true,
  //     minimizer: [new TerserPlugin({ parallel: true })],
  //   },
  // },
  // {
  //   entry: "./src/docs.js",
  //   devtool: "inline-source-map",
  //   output: {
  //     filename: "./index.js",
  //     path: path.resolve(__dirname, "docs"),
  //   },
  //   resolve: {
  //     fallback: {
  //       path: require.resolve("path-browserify"),
  //       fs: false,
  //     },
  //   },
  // },
];