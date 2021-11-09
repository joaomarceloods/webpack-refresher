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
    mode: 'production'
}
