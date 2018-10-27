const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const htmlPlugin = new HtmlWebPackPlugin({
    template: "./public/index.html",
    filename: "./index.html"
});
module.exports = {
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        "presets": ["env", "react"]
                    }
                }
            },
            {
                //change
                test: /\.(css|scss)$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader" // translates CSS into CommonJS
                   // ,"sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }
        ]
    },
    devtool: 'inline-source-map',
    plugins: [htmlPlugin],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    }
};