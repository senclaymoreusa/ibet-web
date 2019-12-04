var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './js/app.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                loader: 'file-loader?name=assets/[name].[ext]',
                //include: [Path.join(__dirname, "src/assets")],
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
