const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "umd",
    library: "missguided-components",
    umdNamedDefine: true,
    globalObject: "this", //!!!This line
  },
  target: "web",
  externals: {
    react: "react", // Case matters here
  },
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
