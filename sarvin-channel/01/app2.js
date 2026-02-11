// const uuid=require("uuid")

// // core module
// // file / folder

// console.log(uuid.v4());

// ---------------------------------------------------------
const express=require("express")
require("dotenv").config()
const app=express()
app.use(express.json())
// app.get()
// app.post()
// app.put()
// app.delete()


const courses=[
    {id:1, name:"html"},
    {id:2, name:"css"},
    {id:3, name:"py"},
]

app.get("/", (req, res)=>{
    res.send("hello minicode :)")
})


app.get("/api/courses", (res,req)=>{
    res.send(["html" , "css" , "js"])    
})


// /api/courses/:id /:name?=id
// app.get("/api/courses/:id /:name?", (res,req)=>{
//     res.send([req.params.id ,req.params.name , req.query.sort])   
// })

app.get("/api/courses/:id ", (res,req)=>{
   const course= courses.find(c=> c.id ===parseInt(req.params.id))
   if(!course) res.status(404).send("course with given id not found ")
    res.send(course)   
})

// post
app.post("/api/courses",(res,req)=>{
if (!req.body.name || req.body.name.length <3 ) {
    req.status(404).send("name is requires !")
}

    const course={
        id:course.length +1 , 
        name:req.body.name
    }
    course.push(course)
    res.send(course)
})

const port=process.env.APP_PORT ||3000
app.listen(port, ()=>{
    console.log(`listening port ${port}`);
})