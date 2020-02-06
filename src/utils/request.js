export default (options)=>{
    return new Promise((resolve,reject)=>{
     //   console.log(options.url),
        $.ajax({
            type:options.type||"GET",
            url:options.url,
            data:options.data,
            headers:options.headers,
            success:function (data){
                resolve(data);
            },
            err:function(err){
                reject(err)
            }
        })
    })
}