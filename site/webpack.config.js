const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProd = process.env.NODE_ENV === "production";

const config = {
  mode: isProd ? "production" : "development",
  entry: path.resolve(__dirname, "./src/main.jsx"),
  devtool: !isProd && "eval-source-map",
  output: {
    path: path.resolve(__dirname, "../docs"),
    publicPath: isProd ? "/react-admin" : "/",
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react"],
            },
          },
        ],
      },
      {
        test: /\.(css)$/,
        // test: /\.(scss|sass|css)$/,
        // use: ["style-loader", "css-loader", "sass-loader"],
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                // localIdentName: "[name]_[hash:5]",
                localIdentName: isProd
                  ? "[hash:base64]"
                  : "[path][name]__[local]",
              },
            },
          },
        ],
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      //
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.tpl"),
      favicon: path.resolve(__dirname, "./public/favicon.png"),
    }),
    new MiniCssExtractPlugin(),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
};

module.exports = config;
