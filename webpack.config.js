module.exports = {
    entry: "./app/index.ts",
    output: {
        path: __dirname + '/assets',
        filename: 'bundle.js',
        publicPath: '/assets/'
    },
    devtool: "source-map",
    resolve: {
        root: __dirname,
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".js"],
        alias: {
            'underscore': 'lodash'
        }
    },
    module: {
        loaders: [{
            test: /\.ts?$/,
            loader: "ts-loader"
        }, {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
        }, {
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.json$/,
            loaders: ['json']
        }, {
            test: /\.tpl.html$/,
            loader: "blueimp-tmpl"
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'file?name=fonts/[name].[ext]'
        }],

        preLoaders: [{
            test: /\.js$/,
            loader: "source-map-loader"
        }]
    },
    externals: {
        "jquery": "jQuery",
        "lodash": "_",
        "backbone": "Backbone"
    },
};