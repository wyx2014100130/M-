import recommend from "view/recommend.art";
import "style/recommend.scss";
import {recommendApi} from "api/recommend.js";
class Recommend{
    constructor(){
        
    }
    init(){
        this.render();
    }
    async render(){
        var data=await recommendApi();
        var html=recommend({data});
        $("#contain").html(html);
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
        var booksid=this.booksList.eq(index).attr("data-id");
        window.location.href="/#/books?id="+booksid;
    }
}
export default new Recommend;