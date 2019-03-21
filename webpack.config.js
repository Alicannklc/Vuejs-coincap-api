const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_PATH = path.join(__dirname, 'src');

module.exports = {
    mode: 'development',
    context: SRC_PATH,
    entry: [
        './index.js'
    ],
    output: {
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader',
                    options: {
                        minimize: true,
                        modules: false
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'vue-style-loader'
                }, {
                    loader: 'css-loader',
                    options: {
                        minimize: true,
                        modules: true,
                        localIdentName: '[local]_[hash:base64:8]'
                    }
                }, {
                    loader: 'postcss-loader',
                    options: {
                        plugins: [
                            autoprefixer({
                                browsers: ['edge >= 14', 'safari >= 10', 'last 10 version']
                            })
                        ],
                        sourceMap: true
                    }
                }, {
                    loader: 'sass-loader'
                }]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        js: 'babel-loader'
                    },
                    postLoaders: {
                        html: 'babel-loader'
                    }
                }
            }
        ]
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
            styles: path.resolve(__dirname, './src/styles')
        }
    },
    devServer: {
        port: 8000,
        host: '0.0.0.0',
        disableHostCheck: true,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            minify: {},
            chunksSortMode: 'none'
        }),
        new VueLoaderPlugin()
    ]
};