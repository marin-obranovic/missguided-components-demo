// // var glob = require("glob");
// var path = require("path");
// // const autoprefixer = require("autoprefixer");

// const publicDir = path.resolve(__dirname, "dist");

// module.exports = {
//   target: "web",
//   plugins: [
//     new ExtractCssChunks({
//       filename: "[name].css",
//       cssModules: true,
//     }),
//     // new MiniCssExtractPlugin({
//     //   // Options similar to the same options in webpackOptions.output
//     //   // both options are optional
//     //   filename: "[name].css",
//     //   chunkFilename: "[id].css",
//     // }),
//   ],

//   exclude: {
//     test: [/\.(js|jsx)$/],
//   },
//   module: {
//     rules: [
//       {
//         test: /\.scss$/,
//         use: [
//           {
//             loader: ExtractCssChunks.loader,
//             options: {
//               hmr: false,
//             },
//           },
//           {
//             loader: "sass-loader",
//             options: {
//               sourceMap: false,
//             },
//           },
//           {
//             loader: "postcss-loader",
//           },
//         ],
//       },
//     ],
//   },
//   output: {
//     path: publicDir,
//     filename: "[name].bundle.js",
//     publicPath: "/dist/",
//   },
// };

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "umd",
    library: "missguided-components",
  },
  target: "web",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/preset-env", "@babel/preset-react"] },
        },
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          MiniCssExtractPlugin.loader,
          { loader: "css-loader" },
          { loader: "postcss-loader" },
          { loader: "sass-loader" },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new CleanWebpackPlugin(),
  ],
};

//MiniCssExtractPlugin.loader, "postcss-loader",
