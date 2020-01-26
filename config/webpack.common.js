/* config/webpack.config.js
 * 
 */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
    entry: path.join(__dirname, "../src/index"),
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.(ts)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                        },
                    },
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "./index.html"),
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            },
        }),
    ],
};

module.exports = config;
