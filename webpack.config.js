module.exports = {
    devtool: 'sourcemap',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
        {
            test: /\.js$/,
            exclude: [/app\/lib/, /node_modules/],
            loader: 'babel'
        },
        {
            test: /\.html$/,
            loader: 'raw'
        },
        {
            test: /\.styl$/,
            loader: 'style-loader!css-loader!stylus-loader'
        },
        {
            test: /\.css$/,
            loader: 'style!css'
        },
        {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015']
            }
        }
      ]
    }
};
