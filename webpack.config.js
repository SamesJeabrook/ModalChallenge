const path = require('path');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.jsx')
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist/')
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        oneOf: [
          {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            loader: require.resolve('babel-loader'),
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
            exclude: /node_modules/
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.es6', '.json']
  },
  devtool: 'source-map'
};
