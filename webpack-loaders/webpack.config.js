const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                'style-loader', // CommonJS to <style>
                'css-loader',   // CSS to CommonJS
                'sass-loader'   // Sass to CSS
            ]
        }]
    }
};
