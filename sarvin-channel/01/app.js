// // improting
// const logger=require("./logger")

// logger("minoo")

//! ---------------------------------------------------

// const path=require("node:path")
// const data = path.parse(__filename)
// console.log(data);

//! ---------------------------------------------------
// const os=require("node:os")
// const total=os.totalmem()
// const free=os.freemem()
// console.log(total, free);
//! ---------------------------------------------------
// const fs=require("node:fs")
// const files=fs.readdirSync("./")
// console.log(files);
//! ---------------------------------------------------
// const fs=require("node:fs")
// fs.readdir("./" ,(err, res)=>{
//     if(err) console.log(`err :${err}`) ;
//     else console.log(res);
// })

//! ---------------------------------------------------
// const EventEmitetr=require("node:events")
// const emitter=new EventEmitetr()

// emitter.on("messageloged" , (data)=>{
//     console.log("listener called", data);
// })
// emitter.emit("messageloged" , {id:1 , name:"minoo" })


//! ---------------------------------------------------

const http=require('http')
const server=http.createServer((req, res)=>{
    if(req.url==="/"){
        res.write("hello from home page")
        res.end()
    }
    if (req.url==="/api/courses"){
        res.write(JSON.stringify(["html", "css"]))
        res.end()
    }
})

// server.on("connection ", (socket)=>{
//     console.log("new comection is connected");
// })



server.listen(3000)
console.log("server is listening on port 3000 ");
//! ---------------------------------------------------
