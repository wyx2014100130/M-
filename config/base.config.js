const path=require("path");
//配置入口文件以及出口文件路径
const HtmlWebpackPlugin=require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const  CopyWebpckPlugin=require("copy-webpack-plugin");
const PATH={
    app:path.join(__dirname,"../src/main.js"),
    build:path.join(__dirname,"../dist")
}
//配置webpack
module.exports={
    //入口的配置
    entry:{
        app:PATH.app
    },
    //出口的配置
    output:{
        path:PATH.build,
        filename:"[name].js"
    },
    //使用插件配置项
    plugins:[
        new HtmlWebpackPlugin({
            template:"./public/index.html",
            filename:"index.html",
            title:"M站开发"
        }),
        new CleanWebpackPlugin(),
        new CopyWebpckPlugin([
            {
            context:path.join(__dirname,"../public"),
            from:"**/*",
            to:"../dist",
            ignore:["index.html"]
            }
        ])
    ],
    resolve:{
        extensions:[".js","scss","art","css","json"],
        alias:{
            "@":path.join(__dirname,"../src"),
            "view":path.join(__dirname,"../src/view"),
            "controller":path.join(__dirname,"../src/controller"),
            "lib":path.join(__dirname,"../src/lib"),
            "router":path.join(__dirname,"../src/router"),
            "style":path.join(__dirname,"../src/style"),
            "api":path.join(__dirname,"../src/api"),
            "model":path.join(__dirname,"../src/model"),
            "utils":path.join(__dirname,"../src/utils")
        }
    },
    module:{
        //规则
        rules:[
            //一个对象代表一个规则
            {   
                //匹配js文件，将ES6的代码转化为ES5的代码
                test:/\.js$/,
                loader:"babel-loader"
            },
            {
                test:/\.art$/,
                loader:"art-template-loader"
            },
            //图片
            {
                test:/\.(png|jpg|gif|svg)$/,
                use:{
                    loader:"url-loader",
                    options:{
                        limit:2048,
                        name:"img/[name].[ext]"
                    }
                }
            },
            //字体
            {
                test:/\.(woff|woff2|svg|ttf|eot)$/,
                use:{
                    loader:"url-loader",
                    options:{
                        name:"font/[name].[ext]"
                    }
                },
                exclude:path.join(__dirname,"../node_modules")
            },
            {
                test:require.resolve('zepto'),
                loader:'exports-loader?window.Zepto!script-loader'
            }

        ]
    }
}

