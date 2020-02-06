import endbooks from "view/endbooks.art";
import "style/recommend.scss";
import {endbooksApi} from "api/recommend.js";
class Endbooks{
    constructor(){
        
    }
    init(){
        this.render();
    }
    async render(){
        var data=await endbooksApi();     
        var html=endbooks({data});
        $("#contain").html(html);
        this.back();
        this.gofirst();
        this.booksList();
    }
    booksList(){
        this.booksList=$(".recommend-list>li");
        this.booksList.each(this.booksListeach.bind(this));
    }
    booksListeach(index){
        
        this.booksList.eq(index).on("click",this.booksListCb.bind(this,index));
    }
    booksListCb(index){
        var booksid=this.booksList.eq(index).attr("id");
        window.location.href="/#/books?id="+booksid;
    }
    gofirst(){
        this.first=$("#recommend>span").eq(1);
        this.first.on("click",this.gofirstEvent.bind(this));
    }
    gofirstEvent(){
        window.location.href="/#/";
    }
    back(){
        this.button= $("#recommend>.iconfont");
        this.button.on("click",this.backEvent.bind(this));
       
    }
    backEvent(){
      window.router.back();
   }
}
export default new Endbooks;