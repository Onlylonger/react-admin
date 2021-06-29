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
        test: /\.jsx$/i,
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
        test: /\.css$/i,
        // test: /\.(sa|sc|c)ss$/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: isProd
                  ? "[hash:base64]"
                  : "[path][name]__[local]",
                getLocalIdent: (context, _, localName) => {
                  if (context.resourcePath.includes("node_modules")) {
                    return localName;
                  }
                },
              },
              importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: { plugins: ["autoprefixer"] },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        // 更多信息请点击这里 https://webpack.js.org/guides/asset-modules/
        type: "asset",
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
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
};

isProd && config.plugins.push(new MiniCssExtractPlugin());

module.exports = config;
