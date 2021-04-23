const path = require('path');

module.exports = {
  entry: './src/index.js',
  devServer: {
    contentBase: path.join(__dirname, '/public'),
    compress: true,
    host: '0.0.0.0',
    port: 8848
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      '@': path.join(__dirname, 'src'),
    }
  },
  plugins: [

  ],
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/public'
  }
}