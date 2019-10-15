const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
 
const options = {
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        hot: true,
        historyApiFallback: true
    },
    mode: 'development',
    entry: [
        'babel-polyfill',
        path.resolve(__dirname, './src/index.js')
    ],
    output: {
        publicPath: '/',
        filename: 'index.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [path.resolve(__dirname, 'src')],
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react'
                    ],
                    plugins: ['@babel/plugin-proposal-object-rest-spread']
                }
            },
            {
                test: /\.html$/,
                include: [path.resolve(__dirname, './entrypoints')],
                loader: 'html-loader',
                options: {
                    minimize: true,
                    removeComments: true,
                    collapseWhitespace: true
                }
            },
            {
                test: /\.css$/,
                include: [path.resolve(__dirname, './src/style')],
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
                include: [
                    path.resolve(__dirname, './src/style')
                ]
            }
        ]
    },
    devtool: 'eval-source-map',
    target: 'web',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './entrypoints/index.html'),
            filename: path.resolve(__dirname, './dist/index.html'),
            inject: true,
            inlineSource: '.(js|css)$',
            favicon: path.resolve(__dirname, './public/favicon.ico')
        }),
        new ManifestPlugin()
    ],
    resolve: {
        modules: [
            path.resolve('./src'),
            path.resolve('./node_modules')
        ]
    },
    watch: true,
    watchOptions: {
        ignored: [
            path.resolve(__dirname, './node_modules')
        ]
    }
};

module.exports = options;