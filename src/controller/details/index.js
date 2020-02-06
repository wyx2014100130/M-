import details from "view/details.art";
import booksdetails from "view/booksdetails.art";
import "style/details.scss";
import "style/booksdetails.scss";
import {booksContentApi,theSamebooks,booksdetailsApi} from "api/recommend.js";
class Details{
    constructor(){

    }
    init(){
        this.render();
    }
    async render(){
        this.id=window.location.href.split("?")[1].split("=")[1];
        let data=await booksContentApi(this.id);
        let data2=await theSamebooks(this.id);
        var html=details({data,data2});
        $("#contain").html(html);
        this.samebooksList();
        this.back();
        this.instanceRead();
        this.backhome();
    }
    samebooksList(){
        this.samebooks=$(".samebooks>.samebookslist>.samebookseach>.inner");
        this.samebooks.each(this.samebooksListEvent.bind(this));
    }
    samebooksListEvent(index){
         this.samebooks.eq(index).on("click", this.samebooksListCb.bind(this,index))
    }
    async samebooksListCb(index){
      
        var bestid=this.samebooks.eq(index).attr("bookid");
        var bookshtml=await booksdetailsApi(bestid);

        window.location.href="/#/books?id="+bestid;       
    }
    back(){
        this.button= $("#bookscontentlist>button");
        this.button.on("click",this.backEvent.bind(this));
       
     }
    backEvent(){
       window.router.back();
    }
    instanceRead(){
      console.log($(".booksbtn>.instance"));
      $(".booksbtn>.instance").on("click",this.instanceEvent.bind(this));
    }
    instanceEvent(){
        window.location.href=("/#/list?id="+this.id);
    }
    backhome(){
        console.log($("#backhome>span"));
        $("#bookscontentlist>span").on("click",this.backhomeEvent.bind(this));
    }
    backhomeEvent(){
        console.log(999)
        window.location.href=("/#/");
    }
}
export default new Details;