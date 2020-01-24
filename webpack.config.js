WebpackNotifierPlugin = require('webpack-notifier');
path = require('path');
module.exports = {

    mode: 'none',

    entry: {
        app: ['./src/main/js/app.js']

    },
    devtool: 'sourcemaps',
    cache: true,
    output: {
        path: __dirname,
        filename: './src/main/resources/static/built/bundle.js',
        publicPath: '/'
    },
    resolve: {
        // Look for modules in .ts(x) files first, then .js(x)
        extensions: ['.ts', '.tsx', '.js', '.jsx']
        // Add 'src' to our modulesDirectories, as all our app code will live in there, so Webpack should look in there for modules
    },

    module: {
        rules: [
            {
                test: /\.m?js$/,
                loader: ["babel-loader"],
                exclude: /(node_modules)/
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg|png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            },
        ],

    },
        devServer: {
            historyApiFallback: true,
        },
        plugins: [
            // Set up the notifier plugin - you can remove this (or set alwaysNotify false) if desired
            new WebpackNotifierPlugin({alwaysNotify: true})
        ],
        watch: true

};