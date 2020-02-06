import home from "view/home.art";
import header from "view/header.art";
import {recommendApi} from "api/recommend.js";
import "style/header.scss";
import "style/home.scss";
class Home{
    constructor(){

    }
    init(){
        this.render();
    }
    async render(){   
        var data=await recommendApi();  
        var html=home({data});
        var head=header();  
        var app=$("<div id='app'></div>");

        app.append(head);
        app.append(html)
        $("#contain").html(app); 
        this.booksList=$(".recommend>.ul1>li");
        this.booksList2=$(".recommend>.ul2>li");
        this.booksList3=$(".recommend>.ul3>li");      
        this.booksLists();
        this.gomore(); //获取页面上的每一个“更多”按钮
    }
    gomore(){
        $(".recommend-list2>h1>span").on("click",this.Recommendlist2.bind(this));
        $(".recommend-list3>h1>span").on("click",this.Recommendlist3.bind(this));
        $(".recommend-list4>h1>span").on("click",this.Recommendlist4.bind(this));
        $(".best-selling>h1>span").on("click",this.Bestselling.bind(this));
    }
    Recommendlist2(){
        window.location.href="/#/city";  
    }
    Recommendlist3(){
        window.location.href="/#/newbooks";
    }
    Recommendlist4(){
        window.location.href="/#/endbooks";
    }
    Bestselling(){
        window.location.href="/#/bestseller";
    }

    booksLists(){
        this.booksList.each(this.booksListeach.bind(this));
        this.booksList2.each(this.booksListeach2.bind(this));
        this.booksList3.each(this.booksListeach3.bind(this));
    }
    booksList2(){
        this.booksList2.each(this.booksListeach2.bind(this));
    }
    booksList3(){

        this.booksList3.each(this.booksListeach3.bind(this));
    }
    booksListeach(index){
        this.booksList.eq(index).on("click",this.booksListCb.bind(this,index));
        this.booksList2.eq(index).on("click",this.booksListCb2.bind(this,index));
        this.booksList3.eq(index).on("click",this.booksListCb3.bind(this,index));
    }
    booksListeach2(index){
        this.booksList2.eq(index).on("click",this.booksListCb2.bind(this,index));
    }
    booksListeach3(index){
        this.booksList3.eq(index).on("click",this.booksListCb3.bind(this,index));
    }

    booksListCb(index){
        let booksid=this.booksList.eq(index).attr("id");
        window.location.href="/#/books?id="+booksid;
    }
    booksListCb2(index){
        let booksid=this.booksList2.eq(index).attr("id");
        window.location.href="/#/books?id="+booksid;
    }
    booksListCb3(index){
        let booksid=this.booksList3.eq(index).attr("id");
        window.location.href="/#/books?id="+booksid;
    }
 
}
export default new Home;