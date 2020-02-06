import booksdetails from "view/booksdetails.art";
import "style/booksdetails.scss";
import {booksdetailsApi} from "api/recommend.js";

class Booksdetails{
    constructor(){
       
    }
    init(){
        this.render();
    }
    async render(){
        var booksid=window.location.href.split("?")[1].split("=")[1];
        var data=await booksdetailsApi(booksid); 
        var html=booksdetails({data});
        $("#contain").html(html); 

        this.backgroundChange();      //点击更改背景色以及字体的改变
        this.back();
    }
    backgroundChange(){
        this.spans=$("#booksdetails>div>span");
        this.spans.each(this.backgroundChangeEvent.bind(this));
    }
    backgroundChangeEvent(index){
        this.spans.eq(index).on("click",this.backgroundChangeEventCb.bind(this,index));
    }
    backgroundChangeEventCb(index){
        this.spans.eq(index).addClass("activespan").siblings("span").removeClass("activespan");
        switch (index) {
            case 0:
                $("body").css("background-color","#fff");
                break;
            case 1:
                $("body").css("background-color","rgb(246, 241, 228)");
                break;
            case 2:
                $("body").css("background-color"," rgb(227, 237, 205)");
                break;
            case 3:
                $("body").css("background-color"," #dce2f1");
                break;
            case 4:
                $("body").css("background-color","#161616");
                $("body").css("color","#636363");
                $("#bookslistdetails>h1").css("color","#4b3f30");
                break;
            case 5:
                let sizebig=parseInt($("#bookslistdetails>.content>.paragraph").css("font-size"));
                sizebig+=1;
                $("#bookslistdetails>.content>.paragraph").css("font-size",sizebig+"px");
                break;
            case 6:
                let sizelit=parseInt($("#bookslistdetails>.content>.paragraph").css("font-size"));
                sizelit-=1;
                $("#bookslistdetails>.content>.paragraph").css("font-size",sizelit+"px");
                break;
            default:
                break;
        }
    }
    back(){
        this.button= $("#booksdetails>.button");
        this.button.on("click",this.backEvent.bind(this));
       
    }
   backEvent(){
      window.router.back();
   }
    
}
export default new Booksdetails;