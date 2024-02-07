const path = require ('path')

module.exports = {
    mode: 'development',
    entry: './videoplayer.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'videoplayer.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.ts/,
                use:'ts-loader',
                exclude: /\node_modules/    
            },
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader'],
                exclude: /\node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
}