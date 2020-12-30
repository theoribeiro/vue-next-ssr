const { VueLoaderPlugin } = require('vue-loader');

module.exports = {

    target: 'node',

    module: {
        rules: [
            { test: /\.vue$/, loader: 'vue-loader' }
        ]
    },

    plugins: [
        new VueLoaderPlugin()
    ],

    resolve: {
        mainFields: ['main', 'module']
    },

    output: {
        library: 'app',
        libraryTarget: 'commonjs',
        libraryExport: 'default'
    }

};
