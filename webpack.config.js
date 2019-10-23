const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const webpack = require('webpack');
// const extractPlugin = new ExtractTextPlugin({ filename: 'main.css' });
module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/public'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            },
            /*{
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['style-loader', 'css-loader', 'sass-loader']
                })
            },*/
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ]
};