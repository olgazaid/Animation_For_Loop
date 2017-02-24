var ExtractTextPlugin = require('extract-text-webpack-plugin');
var prefixer = require('autoprefixer');


module.exports = {
  entry: './src',
  output: {
    path: 'dist',
    publicPath: 'dist',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel',
        exclude: /node_modules/,
       },

       {
        test: /\.scss/,
        loaders: ['style', 'css','postcss','sass'],
        exclude: /node_modules/,
       },

      // {
      //   test: /\.scss/,
      //   loader: ExtractTextPlugin.extract("css!postcss!sass")
      // }
    ],
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
  ],
  devtool:"source-map",
  devServer:{
    contentBase: './',
    port:3000
  },
  postcss: function () {
      return [
          prefixer({ browsers: ['last 2 versions'] })
        ];
  }
};
