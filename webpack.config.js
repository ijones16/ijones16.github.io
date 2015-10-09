/**
 * Created by ianjones on 10/9/15.
 */
module.exports = {
    entry:'./about/about.js',
    output: {
        filename: 'bundle.js',
        path: __dirname
    },

    devtool: 'inline-source-map',

    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel', exclude: /node_modules/}
        ]
    }
};