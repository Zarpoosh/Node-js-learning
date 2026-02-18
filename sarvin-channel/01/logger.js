// var name="minicode"


// const  log=(data)=>{
//     console.log(data);
// }



// --------------------------------------create middle ware
function log (res, req, next) {
    console.log("logging....");
    next()
}


const log2=(res, req,next)=>{
    console.log("authuntacation...");
    next()
}
module.exports=log
module.exports=log2