const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  "mode": "development",
  "devtool": "cheap-source-map",
  "entry": "./src/index.js",
  "output": {
    "path": __dirname + "/dist",
    "publicPath": "/dist/",
    "filename": "[name].[chunkhash:4].js",
    "chunkFilename": "[name].[chunkhash:4].js",
  },
  "module": {
    "rules": [
      {
        "test": /\.jsx?$/,
        "exclude": /node_modules/,
        "use": [ "babel-loader" ]
      },
      {
        "test": /\.scss$/,
        "use": [
          {
            "loader": MiniCssExtractPlugin.loader,
          },
          {
            "loader": "css-loader", // translates CSS into CommonJS modules
          },
          {
            "loader": "postcss-loader", // Run post css actions
            "options": {
              "postcssOptions": function () { // post css plugins, can be exported to postcss.config.js
                return [
                  require("precss"),
                  require("autoprefixer")
                ];
              },
            },
          },
          {
            "loader": "sass-loader" // compiles Sass to CSS
          },
        ],
      },
    ],
  },
  "optimization": {
    "splitChunks": {
      "cacheGroups": {
        "vendor": {
          "name": "vendor",
          "chunks": "all",
          "priority": 20,
          "test": /[\\/]node_modules[\\/]/,
        },
        "common": {
          "name": "common",
          "chunks": "async",
          "priority": 10,
          "minChunks": 2,
          "reuseExistingChunk": true,
          "enforce": true,
        },
      },
    },
    "runtimeChunk": {
      "name": "manifest",
    },
  },
  "resolve": {
    "extensions": [".js", ".jsx", ".json"],
    "alias": {
      "components": path.resolve("src", "components"),
      "scenes": path.resolve("src", "scenes"),
      "hooks": path.resolve("src", "hooks"),
      "helpers": path.resolve("src", "helpers"),
      "store": path.resolve("src", "store"),
    },
  },
  "plugins": [
    new CleanWebpackPlugin({
      "verbose": false,
    }),
    new MiniCssExtractPlugin({
      "filename": "./dist/[name].[chunkhash:4].css",
    }),
    new HtmlWebpackPlugin({
      "title": "Stundenplan | TU Dresden",
      "filename": "../index.html",
      "template": path.resolve(__dirname, "template.html"),
    }),
  ],
};
