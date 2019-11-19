const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./index.html",
  filename: "./index.html"
});

const extractLess = new ExtractTextPlugin({
  filename: 'css/[name].css'
})

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.jsx')
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist/')
  },
  devServer: {
    // contentBase: path.join(__dirname, 'dist/'),
    // openPage:'/index.html',
    port:9090
  },
  plugins: [htmlWebpackPlugin, extractLess],
  module: {
    strictExportPresence: true,
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
    },
      {
        oneOf: [
          {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            loader: require.resolve('babel-loader'),
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
            exclude: /node_modules/
          },
          {
            test: /\.less$/,
            exclude: /node_modules/,
            loader:extractLess.extract(['css-loader', 'less-loader'])
          },
         {
           test: /\.css$/,
           use: ["style-loader", "css-loader"]
         }
        ]
      }
      
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.es6', '.json'],
    alias: {
      styles: path.resolve(__dirname, 'src/styles/')
    }
  },
  devtool: 'source-map'
};
