const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    module: {
        rules: [
            {
                test: /\.(css|s[ac]ss)$/ui,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
});