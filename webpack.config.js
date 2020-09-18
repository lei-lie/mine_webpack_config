const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  mode: 'development', // 指定构建模式
  entry: './src/index.js', // 构建入口
  output: {
    path: path.resolve(__dirname, 'dist'), // 指定构建生成文件所在路径
    filename: 'bundle.js', //指定构建生成的文件名
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      // {
      //   test: /\.css$/,
      //   exclude: /node_modules/,
      //   use: [
      //     {
      //       loader: 'style-loader',
      //     },
      //     {
      //       loader: 'css-loader',
      //     },
      //     {
      //       loader: 'postcss-loader',
      //     },
      //   ],
      // },
      // {
      //   test:/\.less$/i,
      //   use:[{
      //     loader:'style-loader'
      //   },
      //   {
      //     loader:'css-loader'
      //   },
      //   {
      //     loader:'less-loader'
      //   }]
      // },
      {
        test:/\.less$/i,
        use:[{
          loader:MiniCssExtractPlugin.loader
        },
        {
          loader:'css-loader'
        },
        {
          loader:'less-loader'
        }]
      },
      // {
      //   test:/\.s[ac]ss$/i,
      //   use:[{
      //     loader:'style-loader'
      //   },
      //   {
      //     loader:'css-loader'
      //   },
      //   {
      //     loader:'sass-loader'
      //   }]
      // },
      {
        test:/\.s[ac]ss$/i,
        use:[{
          loader:MiniCssExtractPlugin.loader
        },
        {
          loader:'css-loader'
        },
        {
          loader:'sass-loader'
        }]
      }
    ],
  },
  devServer: {
    port: 9530,
    contentBase: path.resolve(__dirname, 'dist'), // 开发服务器启动路径
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    // 生成默认的index.html文件
    new HtmlWebpackPlugin({
      filename: 'index.html', // 模板文件名称
      template: './index.html', // 模板文件
    }),
  ],
};
