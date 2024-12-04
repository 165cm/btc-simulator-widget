const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: {
      'btc-simulator-widget': './src/index.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      library: {
        name: 'BTCSimulatorWidget',
        type: 'umd',
        export: 'default',
      },
      globalObject: 'this',
      publicPath: '/',
    },
    externals: isProduction ? {
      'react': 'React',
      'react-dom': 'ReactDOM',
      'recharts': 'Recharts',
    } : {},
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    'tailwindcss',
                    'autoprefixer',
                  ],
                },
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'btc-simulator-widget.css',
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: 'body',
        scripts: isProduction ? [
          'https://unpkg.com/react@18/umd/react.production.min.js',
          'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js',
          'https://unpkg.com/recharts/umd/Recharts.min.js'
        ] : [],
      }),
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    optimization: {
      minimize: isProduction,
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 9000,
      hot: true,
    },
  };
};