const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: './src/hello.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'world.js'
    },
    module: {
      rules: [{ test: /\.txt$/, use: 'raw-loader' }],
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/hello.html' })],
    mode: 'production'
}
