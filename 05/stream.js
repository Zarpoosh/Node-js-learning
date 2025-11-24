const fs=require("fs")
const readstream=fs.createReadStream("./docs/blog1.txt")


readstream.on("data" , (buffer)=>{
    console.log("new buffer")
    console.log(buffer)
})