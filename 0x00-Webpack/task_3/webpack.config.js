const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
  plugins: [
    new HTMLWebpackPlugin({
      filename: './index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  mode: 'development',
  entry: {
    header: {
      import: './modules/header/header.js',
      dependOn: 'shared'
    },
    body: {
      import: './modules/body/body.js',
      dependOn: 'shared',
    },
    footer: {
      import: './modules/footer/footer.js',
      dependOn: 'shared',
    },
    shared: ['jquery'],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public',
    port: 8564,
    open: true
  },
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true
            }
          }
        ]
      }
    ]
  }
};
