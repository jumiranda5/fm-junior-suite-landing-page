const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");


module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(css|s[ac]ss)$/ui,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.sharpMinify,
                    options: {
                        encodeOptions: {
                            jpeg: {
                                // https://sharp.pixelplumbing.com/api-output#jpeg
                                // quality: 100 increases the file size (?)
                                quality: 80,
                              },
                              webp: {
                                // https://sharp.pixelplumbing.com/api-output#webp
                                lossless: true,
                              },
                              avif: {
                                // https://sharp.pixelplumbing.com/api-output#avif
                                lossless: true,
                              },
                
                              // png by default sets the quality to 100%, which is same as lossless
                              // https://sharp.pixelplumbing.com/api-output#png
                              png: {},
                
                              // gif does not support lossless compression at all
                              // https://sharp.pixelplumbing.com/api-output#gif
                              gif: {},
                        },
                    },
                },
            },
            {
                minimizer: {
                    implementation: ImageMinimizerPlugin.svgoMinify,
                    options: {
                        encodeOptions: {
                            // Pass over SVGs multiple times to ensure all optimizations are applied. False by default
                            multipass: true,
                            plugins: [
                                // set of built-in plugins enabled by default
                                // see: https://github.com/svg/svgo#default-preset
                                "preset-default",
                            ],
                        },
                    },
                },
            }),
        ],
    },
});