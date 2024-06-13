const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  resolve: {
    extensions: ['.js'], 
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: {
              esModule: false, // url()을 올바르게 처리하기 위한 설정 (파일명이 바뀌지 않음.)
          },
        }],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader,  {
          loader: 'css-loader',
          options: {
              esModule: false, // url()을 올바르게 처리하기 위한 설정 (파일명이 바뀌지 않음.)
          },
        }, 'sass-loader'],
      },
      {
        test: /\.(ico|png|jpg|jpeg|gif|svg)$/,
        use: [{
            loader:'file-loader',
            options: {
                outputPath: 'images',
                name: '[name].[ext]'
            }
        }],
      },
      {
        test: /\.(woff|woff2|ttf|eot|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
            loader: 'file-loader',
            options: {
                outputPath: 'fonts',
                name: '[name].[ext]',
            }
        }]
    },
     
  	]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename : "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: {
      	collapseWhitespace: true
      },
      hash: true,
      template: './public/index.html',   // build 시 해당경로의 파일이 dist 생성됨
    }),
   
    new CopyPlugin({
      patterns: [
        {
          from: 'public/',
          to: '',  // dist 이후 경로
          globOptions: {
            ignore: ['**/*.html', '**/*.js'],
          },
        },
      ],
  }),
  new MiniCssExtractPlugin({
    filename: 'css/styles.css' // 루트 폴더 기준으로 빌드 되는 경로 localhost/css/styles.css
  }),
  new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist']
  }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
  },
  	port: 9000,
    hot: true
  },
}
