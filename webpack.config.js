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
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: './src/css/styles.css'
    })
  ],
  devServer: {
    //contentBase: path.resolve(__dirname, 'public'),
  	port: 9000
  },
}
