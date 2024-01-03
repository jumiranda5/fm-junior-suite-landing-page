const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: {
      index: './src/main.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            chunks: ['index'],
            template: 'src/index.html',
            favicon: 'src/assets/images/favicon-32x32.png'
        }),
        new ESLintPlugin(),
    ],
    output: {
        filename: '[name].bundle-[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/ui,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name]-[hash][ext]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/ui,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name]-[hash][ext]'
                }
            },
            {
                test: /\.(?:js|mjs|cjs)$/u,
                exclude: /node_modules/u,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            }
        ],
    },
};