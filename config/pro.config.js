const path=require("path");
const baseConfig=require("./base.config");
const webpackMerge=require("webpack-merge");
const ExtracTextWebpackplugin=require("extract-text-webpack-plugin")
const config=webpackMerge(baseConfig,{
    mode:"production",
    devtool:"cheap-module-source-map",
    module:{
        rules:[
            {
                test:/\.(css|scss)$/,
                use:ExtracTextWebpackplugin.extract({
                    use:[
                        {loader:"css-loader"},
                        {loader:"postcss-loader"},
                        {loader:"sass-loader"}
                    ],
                    fallback:"style-loader",
                 }),
                 exclude:path.join(__dirname,"../node_modules")
            }
        ]
    },
    plugins:[
        new ExtracTextWebpackplugin({
            filename:"css/[name].[hash:8].css"
        })
    ]
})
module.exports=config;