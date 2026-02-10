// const uuid=require("uuid")

// // core module
// // file / folder

// console.log(uuid.v4());

// ---------------------------------------------------------
const express=require("express")
require("dotenv").config()
const app=express()
// app.get()
// app.post()
// app.put()
// app.delete()


app.get("/", (req, res)=>{
    res.send("hello minicode :)")
})


app.get("/api/courses", (res,req)=>{
    res.send(["html" , "css" , "js"])    
})

app.get("/api/courses/:id /:name?", (res,req)=>{
    res.send([req.params.id ,req.params.name , req.query.sort])   
})


const port=process.env.APP_PORT ||3000
app.listen(port, ()=>{
    console.log(`listening port ${port}`);
})