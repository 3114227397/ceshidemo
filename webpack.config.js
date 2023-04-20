const path=require('path')//处理路径的模块
const HtmlWebpackPlugin=require('html-webpack-plugin')

module.exports={//输出配置
    plugins:[
        new HtmlWebpackPlugin({//创建实例
            filename:'index.html',// 指定文件名
            template:path.resolve(__dirname,'src/index.html')//引入路径
        })
    ],
    mode:"production",//默认是生产模式
    entry:"./src/index.js",//入口文件
    output:{
        path:path.join(__dirname,"dist"),//输出执行文件(指webpack.config.js)的绝对路径
        filename:"boundle.js"//指定输出文件名，替换main.js
    },
    module:{
        rules:[
            {
                test:/\.js$/,//匹配js文件
                exclude:/node_modules/,//忽略node_modules文件夹
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            }
        ]
    }
}
