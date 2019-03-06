const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const development = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: development ? '[name].css' : '[name].[hash].css',
            chunkFilename: development ? '[id].css' : '[id].[hash].css'
        })
    ],
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                development ? 'style-loader' : MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ]
        }]
    }
};
