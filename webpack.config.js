const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const isDev = process.env.NODE_ENV !== 'production'
const analyze = process.env.ANALYZE;


const webpackConfig = () => {
    const config = {
        mode: process.env.NODE_ENV || 'development',
        entry: {
            myLibrary: './src/pages/my/library/App.tsx'
        },
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json'],
            alias: {
                '@': path.resolve(__dirname, 'src/components'),
            },
        },
        externals: {
            react: 'React',
            'react-dom': 'ReactDOM',
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'babel-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        devServer: {
            compress: false,
            port: 3000,
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'src/public/index.html',
            }),
            new ForkTsCheckerWebpackPlugin(),
        ],
    }

    if (isDev) {
        config.devtool = 'inline-source-map'
    }

    if (!isDev) {
        config.plugins.push(
          new CompressionPlugin({
            test: /\.(js)$/,
          })
        )
    }

    if (analyze) {
        config.plugins.push(
            new BundleAnalyzerPlugin()
          )
    }

    return config
}
module.exports = webpackConfig

