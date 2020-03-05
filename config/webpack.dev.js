/* config/webpack.config.js
 *
 */

const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const merge = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common");

const config = {
    mode: "development",
    devtool: "inline-source-map",
    output: {
        path: path.join(__dirname, "../build"),
        filename: "bundle.js",
    },
    plugins: [new ForkTsCheckerWebpackPlugin()],
};

module.exports = merge(common, config);
