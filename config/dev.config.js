const baseConfig=require("./base.config.js");
const webpackMerge=require("webpack-merge");
const path=require("path");

//合并
const config=webpackMerge(baseConfig,{
    mode:"development",
    devtool:"cheap-module-eval-source-map",
    module:{
        rules:[
            {
                test:/\.(css|scss)$/,
                use:["style-loader","css-loader","sass-loader"],
                exclude:path.join(__dirname,"../node_modules"),
            }
        ]
    },
    //服务器的配置项
    devServer:{
        //自动打开浏览器
        open:true,
        //设置端口号
        port:9000,
        //跨域
         //服务器代理
        proxy:{
            "/column":{
                //代理目标点
                target:"http://m.yuedu.163.com",
                //允许跨域代理
                changeOrigin:true
            },
             "/rank":{
                //代理目标点
                target:"http://m.yuedu.163.com",
                //允许跨域代理
                changeOrigin:true
            },
            "/source":{
                //代理目标点
                target:"http://m.yuedu.163.com",
                //允许跨域代理
                changeOrigin:true
            },
            "/reader":{
                //代理目标点
                target:"http://m.yuedu.163.com",
                //允许跨域代理
                changeOrigin:true
            },
            "/api":{
                target:"http://topenapi.tadu.com:8098",
                //允许跨域代理
                changeOrigin:true
            },
            "/content":{
                target:"https://api.9yread.com",
                changeOrigin:true
            },
            "/ebook":{
                target:"https://api.9yread.com",
                changeOrigin:true
            }
            
        }

    }
   
})
module.exports=config;