const path = require('path');
const  HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: './app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
     publicPath: '/dist'
  },
  watch : true,
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
            {loader: MiniCssExtractPlugin.loader,
                options: {
                    // you can specify a publicPath here
                    // by default it uses publicPath in webpackOptions.output
                    publicPath: '../'
                  },
},
          // css-loader
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          {
              loader: 'sass-loader',
          },
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: 'index.html'   // we are providing our index.html which has all our code.
    }),
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: 'style.css'
    })
]
};



//{
    //test: /.js$/,
    //enforce: 'pre',
    //exclude: /node_modules/,
    //use: [
     // {
     //   loader: `jshint-loader`
    //  }
   // ]
  //},