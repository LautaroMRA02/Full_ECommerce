const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

 module.exports = {
  mode: 'development',
    entry: {
      main: './src/index.js',
    },
     module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
    },
    ],
  },
    devtool: 'inline-source-map',
    devServer: {
      static: './dist',
    },
    plugins: [
      new HtmlWebpackPlugin({
          title: 'Development',
          template: 'src/index.html'
      }),
      new CopyWebpackPlugin({'patterns': [
        {from:'./src/images', to:'images'}
      ]}),
    ],
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
      assetModuleFilename: './src/assets/[name].[ext]',
      clean: true,
   },
 };