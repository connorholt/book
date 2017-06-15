const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: './public/js/index.bundle.js',
        publicPath: '/js/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        modules: [path.resolve(__dirname, './node_modules')]
    }
};