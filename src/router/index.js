//路由表的配置，将用户请求的路径与页面相关联
import Router from "lib/router";
import home from "controller/home";
import list from "controller/list";
import recommend from "controller/recommend";
import city from "controller/city";
import newbooks from "controller/newbooks";
import endbooks from "controller/endbooks";
import bestseller from "controller/bestseller";
import booksdetails from "controller/booksdetails";
import details from "controller/details";
import eachpage from "controller/eachpage";
const router=new Router({
    mode:"hash",
    routes:[
        {
            path:"/",
            template:home
        },
        {
            path:"/list",
            template:list
        },
        {
            path:"/recommend",
            template:recommend
        },
        {
            path:"/city",
            template:city
        },
        {
            path:"/newbooks",
            template:newbooks
        },
        {
            path:"/endbooks",
            template:endbooks
        },
        {
            path:"/bestseller",
            template:bestseller
        },
        {
            path:"/books",
            template:booksdetails
        },
        {
            path:"/details",
            template:details
        },
        {
            path:"/eachpage",
            template:eachpage
        }
    ]
})
window.router=router;
export default router;