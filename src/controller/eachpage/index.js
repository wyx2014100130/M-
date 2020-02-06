import eachpage from "view/eachpage.art";
import "style/eachpage.scss";
import {eachpageApi} from "api/recommend.js";
class  Eachpage{
    constructor(){
       
    }
    init(){
        this.pageid=window.location.href.split("?")[1].split("/chapters/")[1];
        this.bookid=window.location.href.split("?")[1].split("/chapters/")[0];
        this.render();
    }
    async render(){
        let pageid=this.pageid;
        let bookid=this.bookid;
        var data=await eachpageApi({pageid,bookid});
        console.log(bookid,pageid)
        if(data.status===200){
            data.bookId=bookid
            var html=eachpage({data});
        }else{
            data.bookId=bookid
            var html=eachpage({data});
        }
        
        $("#contain").html(html);
    
        this.backgroundChange();      //点击更改背景色以及字体的改变
        this.back();
        this.nextpage(); //下一页
        this.prepage(); //上一页
    }
    backgroundChange(){
        this.spans=$("#eachpage>div>span");
        this.spans.each(this.backgroundChangeEvent.bind(this));
    }
    backgroundChangeEvent(index){
        this.spans.eq(index).on("click",this.backgroundChangeEventCb.bind(this,index));
    }
    backgroundChangeEventCb(index){
        this.spans.eq(index).addClass("activespan").siblings("span").removeClass("activespan");
        switch (index) {
            case 0:
                $("#contain").css("background-color","#fff");
                break;
            case 1:
                $("#contain").css("background-color","rgb(246, 241, 228)");
                break;
            case 2:
                $("#contain").css("background-color"," rgb(227, 237, 205)");
                break;
            case 3:
                $("#contain").css("background-color"," #dce2f1");
                break;
            case 4:
                $("#contain").css("background-color","#161616");
                $("#contain").css("color","#636363");
                $("#eachpage-details>h1").css("color","#4b3f30");
                break;
            case 5:
                let sizebig=parseInt($("#eachpage-details>.content>.paragraph").css("font-size"));
                sizebig+=1;
                $("#eachpage-details>.content>.paragraph").css("font-size",sizebig+"px");
                break;
            case 6:
                let sizelit=parseInt($("#eachpage-details>.content>.paragraph").css("font-size"));
                sizelit-=1;
                $("#eachpage-details>.content>.paragraph").css("font-size",sizelit+"px");
                break;
            default:
                break;
        }
    }
    back(){
        this.button= $("#eachpage>.button");
        this.button.on("click",this.backEvent.bind(this));
       
     }
   backEvent(){
      window.router.back();
   }
   nextpage(){
       $("#eachpage-details>.booksintro>.more>ul>.next").on("click",this.nextpageEvent.bind(this))
   }
   nextpageEvent(){
       this.pageid++;
       this.render()
   }
   prepage(){
        $("#eachpage-details>.booksintro>.more>ul>.pre").on("click",this.prepageEvent.bind(this))
   }
   prepageEvent(){
       
       this.pageid--;
       this.render()
   }
 
}
export default new Eachpage();