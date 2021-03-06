//entry -> output

const path = require('path')

module.exports = {
    entry:'./src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    //loader: let you customize the behavior of webpack
    //setup the loader, using module property
    module: {
      rules:[{
          loader: 'babel-loader',
          test: /\.js$/, 
          exclude: /node_modules/
      }, {
          test: /\.s?css$/,
          use: [
              'style-loader',
              'css-loader',
              'sass-loader'
          ] //use is an array of loaders
      }]  
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
}

