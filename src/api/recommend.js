
 //人气 https://api.9yread.com/content/home

import axios from "utils/request.js";

export const recommendApi = ()=>axios({
    method:"get",
    url:"/content/home",  
})
//https://api.9yread.com/content/section/16 古代言情
export const ancientApi = ()=>axios({
    method:"get",
    url:"/content/section/16",  
})
//都市爽文 http://m.yuedu.163.com/column/3001/data.json?page=1&nextPageLink=  
export const cityApi = ()=>axios({
    method:"get",
    url:"/column/3001/data.json?page=1&nextPageLink=",  
})

// 现代言情 https://api.9yread.com/content/section/11 
export const newbooksApi = ()=>axios({
    method:"get",
    url:"/content/section/11 ",  
})
//豪门总裁 https://api.9yread.com/content/section/12
export const endbooksApi = ()=>axios({
    method:"get",
    url:"/content/section/12 ",  
})
//畅销榜 http://m.yuedu.163.com/rank/original/list/data.json?gender=male&sortType=day&type=sell&page=1&nextPageLink=
export const bestsellerApi = (days)=>axios({
    method:"get",
    url:"/rank/original/list/data.json?gender=male&sortType="+days+"&type=sell&page=1&nextPageLink=",  
})
//source/bd_e666f73ae6c646af92a3e004955d72f7_4
//http://m.yuedu.163.com/reader/book/info.json?source_uuid=bd_e666f73ae6c646af92a3e004955d72f7_4&catalog_only=true
export const booksDetialsApi = (url)=>axios({
    method:"get",
    url:url,  
})
//https://api.9yread.com/ebook/read/10006359/1?autoBuy=1
export const booksdetailsApi = (id)=>axios({
    method:"get",
    url:"/ebook/read/"+id+"/1?autoBuy=1",  
})
//https://api.9yread.com/ebook/book/10006359书籍详情
export const booksContentApi = (id)=>axios({
    method:"get",
    url:"/ebook/book/"+id,
})
//https://api.9yread.com/content/book/10006359/detail_recommends 同类书籍
export const theSamebooks = (id)=>axios({
    method:"get",
    url:"/content/book/"+id+"/detail_recommends" ,
})
//限时免费 https://api.9yread.com/content/section/65
export const timefree= (id)=>axios({
    method:"get",
    url:"/content/section/65" ,
})
//目录 https://api.9yread.com/ebook/book/10012835/chapter_list?fetchTotal=1&size=20&page=1&offset=0 参数拼接
export const pageList= (data)=>axios({
    method:"get",
    url:"/ebook/book/"+data.id+"/chapter_list?fetchTotal="+data.fetchTotal+"&size="+data.size+"&page="+data.page+"&offset="+data.offset,
})
//每一章节https://api.9yread.com/ebook/read/10003283/10026110?autoBuy=1
export const eachpageApi= ({pageid,bookid})=>axios({
    method:"get",
    url:"/ebook/read/"+bookid+"/"+pageid+"/?autoBuy=1",
})