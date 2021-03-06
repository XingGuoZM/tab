const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '/public'),
    compress: true,
    host: '0.0.0.0',
    port: 8000
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/i,
        loader: "css-loader",
        options: {
          // 使用 `local` 同使用 `modules: true` 的效果是一样的
          modules: true,
        }
      },
      {
        test: /\.(css|less)$/,
        use: ["style-loader", "css-loader", 'less-loader'],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [

  ],
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/public'
  }
}