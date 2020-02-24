const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './packages/main-ui/src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'build')
  },
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, 'build'),
    hot: true
  },
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/preset-react' ],
            plugins: [ '@babel/plugin-proposal-class-properties' ]
          }
        }
      },
      {
        test: /\.(global)?\.less$/,
        use: [ 'style-loader', 'css-loader', 'less-loader' ]
      },
      {
        test: /\.(jpg)$/,
        use: [ 'file-loader' ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ filename: 'index.html', template: './packages/main-ui/src/index.html'   })
  ]
}