const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  "mode": "development",
  "devtool": "cheap-source-map",
  "entry": "./src/index.js",
  "output": {
    "path": __dirname + "/dist",
    "publicPath": "/",
    "filename": "app.js",
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
    new MiniCssExtractPlugin({
      "filename": "./dist/[name].css",
    }),
  ],
};
