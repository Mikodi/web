const HtmlWebPackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');
const MiniExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
    entry: './js/main.min.js',
    output: {
        filename: 'main.[contenthash].min.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.(png|jpeg|gif|mp3)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            },
            {
                test: /\.css$/i,
                use: [MiniExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({ template: resolve(__dirname, 'index.html') }),
        new MiniExtractPlugin({filename: '[name].[contenthash].css'}),
        new BundleAnalyzer()
    ]
}