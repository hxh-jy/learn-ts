const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    target: "web",
    devtool: 'inline-source-map',
    devServer: {
      static: {
        directory: path.resolve(__dirname,'dist')
      }
    },
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: "[contenthash].bundle.js",
        clean: true
    },
    resolve: {
        // 如果多个文件有相同的名字只是后缀不同时可以通过以下顺序进行解析
        extensions: [".ts",".js"]
    },
    module: {
        //  指定webpack打包时要用到的模块（loader）
        rules: [
            {
                test: /\.ts/,
                use: ['ts-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    optimization: {
      runtimeChunk: 'single',
      // 关闭压缩
      minimize: false
    },
}