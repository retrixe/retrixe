const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const StaticSiteGeneratorPlugin = require('./staticsite')

const isDev = env => (
  (env && env.NODE_ENV === 'development') ||
  process.env.NODE_ENV === 'development'
)

module.exports = env => ({
  entry: './src/client.js',
  mode: isDev(env) ? 'development' : 'production',
  devtool: isDev(env) ? 'inline-source-map' : undefined,
  output: {
    libraryTarget: 'umd',
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.(c|m)?js$/,
      exclude: /(node_modules|bower_components)/,
      use: { loader: 'babel-loader' }
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new StaticSiteGeneratorPlugin({ paths: ['/'], locals: {}, entry: 'server' /* ignored */ }),
    new CompressionWebpackPlugin(),
    new CompressionWebpackPlugin({ filename: '[path][base].br', algorithm: 'brotliCompress' })
  ],
  // Chunk splitting optimization.
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000
  }
})
