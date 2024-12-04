const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'btc-simulator-widget.js',
      library: {
        name: 'BTCSimulatorWidget',
        type: 'umd',
        export: 'default',
      },
      globalObject: 'this'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: {
                  auto: true,
                  localIdentName: '[name]__[local]--[hash:base64:5]'
                }
              }
            },
            'postcss-loader'
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: true
      }),
      new MiniCssExtractPlugin({
        filename: 'btc-simulator-widget.css'
      })
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      hot: true,
      open: true,
      port: 3000
    }
  };
};