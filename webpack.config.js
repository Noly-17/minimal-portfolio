const path = require('path');
const HTMLWepackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
  },

  plugins: [
    new HTMLWepackPlugin({
      template: './public/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-inline-loader',
          },
          {
            loader: 'svg-url-loader',
            options: {
              limit: 8192,
              name: '[name].[hash:7].[ext]',
            },
          },
        ],
      },
    ],
  },
};
