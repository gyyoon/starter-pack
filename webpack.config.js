const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

const isDev = process.env.NODE_ENV !== 'production';
const analyze = process.env.ANALYZE;

const webpackConfig = () => {
  const outputDir = isDev ? 'dist' : '../../public/assets/js';

  const config = {
    mode: process.env.NODE_ENV || 'development',
    entry: {
      myLibrary: './src/pages/my/library/App.tsx',
    },
    output: {
      filename: 'page-mylibrary-bundle.js',
      path: path.resolve(__dirname, outputDir),
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
      alias: {
        '@': path.resolve(__dirname, 'src/components'),
        '~': path.resolve(__dirname, 'src'),
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
      https: true,
      compress: false,
      port: 3000,
      historyApiFallback: true,
    },
    plugins: [new ForkTsCheckerWebpackPlugin()],
  };

  if (isDev) {
    config.devtool = 'inline-source-map';
    config.plugins.push(
      new HtmlWebpackPlugin({
        template: 'src/public/index.html',
      })
    );
  }

  if (!isDev) {
    config.plugins.push(
      new CompressionPlugin({
        test: /\.(js)$/,
      })
    );
  }

  if (analyze) {
    config.plugins.push(new BundleAnalyzerPlugin());
  }

  return config;
};
module.exports = webpackConfig;
