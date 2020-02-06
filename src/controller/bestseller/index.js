import bestseller from "view/bestseller.art";
import "style/recommend.scss";
import { timefree}  from "api/recommend.js";


class Bestseller{
    constructor(){
        this.bool=false;
    }
    init(){
        this.render();
    }
    async render(){
        var data=await timefree();      
        var html=bestseller({data});
        $("#contain").html(html);
        this.back();
        this.gofirst();
        this.booksList();
    }
    back(){
        this.button= $("#recommend>.iconfont");
        this.button.on("click",this.backEvent.bind(this));
       
    }
    backEvent(){
      window.router.back();
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
    
   
    
}
export default new Bestseller;