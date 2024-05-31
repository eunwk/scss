const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: {
            modules: {
              exportLocalsConvention: 'camelCase'
            }
          }
        }, 'sass-loader']
      },
      {
        test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
          loader: 'file-loader',
          options: {
          	name: '[name].[ext]?[hash]'
          }
        }]
      }
  	]
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: {
      	collapseWhitespace: true
      },
      hash: true,
      template: './src/index.html' // build 시 해당경로의 파일이 public에 생성됨
    }),
    new MiniCssExtractPlugin({
      filename: './css/styles.css' // build 시 public 에 파일 생성됨. 내용은 없음??
    })
  ],
  devServer: {
  	port: 9000,
    hot: true
  },
}
