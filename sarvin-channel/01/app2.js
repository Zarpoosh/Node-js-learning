// const uuid=require("uuid")

// // core module
// // file / folder

// console.log(uuid.v4());

// ---------------------------------------------------------
const logger=require("./middelwares/logger")
const logger2=require("./middelwares/logger")
const helmet=require("helmet")
const morgan=require("morgan")
const express=require("express")
require("dotenv").config()
const startupdebug=require("debug")("startup")
const dbdebug=require("debug")("db")
const app=express()
const coursesRoute=require("./routes/courses-route")
const homeRoute=reqire("./routes/home-route.js")


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


app.use("/api/courses", coursesRoute)
app.use("/api/users", useRoute)
app.use("/", homeRoute)



const port=process.env.APP_PORT ||3000
app.listen(port, ()=>{
    console.log(`listening port ${port}`);
})