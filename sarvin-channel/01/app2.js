// const uuid=require("uuid")

// // core module
// // file / folder

// console.log(uuid.v4());

// ---------------------------------------------------------
const logger=require("./logger")
const logger2=require("./logger")
const helmet=require("helmet")
const morgan=require("morgan")
const express=require("express")
require("dotenv").config()
const startupdebug=require("debug")("startup")
const dbdebug=require("debug")("db")
const app=express()

// ! middleware
app.use(express.json())
// built in middleware
app.use(express.static("public"))
app.use(helmet())

// نوشتن کدی که تشحیص بده تو کدوم محیط اجرا هست 
if (app.get("env")==="development") {
    app.use(morgan("tiny"))
}

// denug middleware : برای جلوگیری از نوشتن و پاک کردن یه عالمه کنسول لاگ 
startupdebug("hello minoo...")



// create middleware
// app.use(function(req, res, next){
//     console.log("logging");
//     next()
// })

// app.use((req,res,next)=>{
//     console.log("authentication...");
//     next()
// })



// app.get()
// app.post()
// app.put()
// app.delete()

// create a middleware
app.use(logger)
// یه سری دیتا ها که به api ارسال میشه با فرمت قدیمی ارسلا شه 
app.use(express.urlencoded({extended:true}))

app.use(logger2)

const courses=[
    {id:1, name:"html"},
    {id:2, name:"css"},
    {id:3, name:"py"},
]

app.get("/", (req, res)=>{
    dbdebug("hello from minoo dbdebug....")
    res.send("hello minicode :)")
})


app.get("/api/courses", (req,res)=>{
    res.send(["html" , "css" , "js"])    
})


// /api/courses/:id /:name?=id
// app.get("/api/courses/:id /:name?", (res,req)=>{
//     res.send([req.params.id ,req.params.name , req.query.sort])   
// })

app.get("/api/courses/:id ", (req,res)=>{
   const course= courses.find(c=> c.id ===parseInt(req.params.id))
   if(!course) res.status(404).send("course with given id not found ")
    res.send(course)   
})

// post
app.post("/api/courses",(req,res)=>{
if (!req.body.name || req.body.name.length <3 ) {
    req.status(404).send("name is requires !")
    return
}

    const course={
        id:course.length +1 , 
        name:req.body.name
    }
    course.push(course)
    res.send(course)
})


app.put("/api/courses/:id", (req,res)=>{
    const course= courses.find(c=> c.id ===parseInt(req.params.id))
    if(!course) return res.status(404).send("course with given id not found ")
        if (!req.body.name || req.body.name.length <3 )
            return res.status(404).send("name is required and more than 3 charachter ...")
        
    course.name=req.body.name
    res.send(course)
})



app.delete("/api/courses/:id", (req,res)=>{
    const course= courses.find(c=> c.id ===parseInt(req.params.id))
    if(!course) return res.status(404).send("course with given id not found ")

    const index=courses.indexOf(course)
    courses.splice(index, 1)
    res.send(course)
})

const port=process.env.APP_PORT ||3000
app.listen(port, ()=>{
    console.log(`listening port ${port}`);
})