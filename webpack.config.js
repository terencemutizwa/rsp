const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    context: __dirname + '/src',
    entry: {
        app: __dirname + '/src/app.js',
        vendor: ['jquery', 'bootstrap', 'angular']
    },
    output: {
        path: __dirname + '/dist',
        filename: 'app.min.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }
        ],
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',

                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'fast-sass-loader'
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)$/i,
                loader: 'file-loader?name=assets/[name].[ext]'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]

    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './src',
        hot: true,
        watchContentBase: true,
        overlay: true
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.min.js'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Rock Paper Scissors',
            template: './index.html'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new CleanWebpackPlugin(['dist']),
        //new UglifyJSPlugin()
    ]
};

