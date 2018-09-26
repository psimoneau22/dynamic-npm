const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: '[name].js',
        library: 'customStatic',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader' }
        ]
    },
    externals: {
        react: 'react',
    }
}