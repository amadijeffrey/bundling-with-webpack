const path = require('path')
const  HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean:true
    },
    devServer: {
        static:{
            directory: path.resolve(__dirname, "dist/index.html")
        },
        open: true,
        port: 3000,
        hot: true,
        compress: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use:["style-loader", "css-loader", "sass-loader"  ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: "src/template.html"
        })
    ],
    optimization:{
        runtimeChunk: "single",
        moduleIds: 'deterministic',
        splitChunks: {
            cacheGroups: {
              vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                chunks: 'all',
              },
            },
          },
    }
 
}