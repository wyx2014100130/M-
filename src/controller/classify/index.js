import classify from "view/home.art";

class Classify{
    constructor(){

    }
    init(){
        this.render();
    }
    render(){
        var html=home();
        $("#contain").html(html);
    }
}
export default new Classify();