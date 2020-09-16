const path = require('path');
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
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
    ],
  },
  devServer: {
    port: 9530,
    contentBase: path.resolve(__dirname, 'dist'), // 开发服务器启动路径
  },
};
