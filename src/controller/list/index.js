import list from "view/list.art";
import "style/list.scss";
import {pageList} from "api/recommend.js"
class List{
    constructor(){
        this.pages=1;
    }
    init(){
        this.booksid=window.location.href.split("?")[1].split("=")[1];
        this.render();
    }
    async render(){
        var data=await pageList({
            id:this.booksid,
            fetchTotal: 1,
            size: 20,
            page: this.pages,
            offset: 0,
        })
        data.pages=this.pages;
        var html=list({data});
        $("#contain").html(html);
        this.pageChange();
        this.nextPage();
        this.prePage();
        this.eachList();
        this.back();
        this.gofirst();
    }
    pageChange(){
        $(".list-bottom>footer>div>.go").on("click",this.pageChangeEvent.bind(this));
    }
    pageChangeEvent(){
        this.pages= $(".list-bottom>footer>div>input").val();
        this.render();
    }
    nextPage(){
        $(".list-bottom>footer>.next").on("click",this.nextPageEvent.bind(this));
    }
    nextPageEvent(){  //下一页
        this.pages++;
        this.render();
    }
    prePage(){
        $(".list-bottom>footer>.pre").on("click",this.prePageEvent.bind(this));
    }
    prePageEvent(){  //上一页
        this.pages--;
        this.render();
    }
    eachList(){
        this.eachlists=$(".list-center>ul>li");
        this.eachlists.each(this.eachListEvent.bind(this));
    }
    eachListEvent(index){
        this.eachlists.eq(index).on("click",this.eachListjump.bind(this,index));
        
    }
    eachListjump(index){
        let eachlistId= $(".list-center>ul>li").eq(index).attr("id");
        let bookid=$(".list-center>ul>li").eq(index).attr("bookid");
        window.location.href="/#/eachpage?"+bookid+"/chapters/"+eachlistId;
    }
    back(){
        this.button= $(".button");
        this.button.on("click",this.backEvent.bind(this));
       
     }
   backEvent(){
      window.router.back();
   }
    gofirst(){
        this.first=$("header>p");
        this.first.on("click",this.gofirstEvent.bind(this));
    }
    gofirstEvent(){
        window.location.href="/#/";
    }
}
export default new List();