const CoursesModel=require("../models/courses-models")

// const courses=[
//     {id:1, name:"html"},
//     {id:2, name:"css"},
//     {id:3, name:"py"},
// ]



const getCourse=(req,res)=>{
    CoursesModel.getCourse(parseInt(req.params.id)).then((result)=>{
        if(!result) res.status(404).send("course with given id not found ")
            res.send(result)   
    })
    // const course= courses.find(c=> c.id ===parseInt(req.params.id))
   
 }

const getCourses=(req,res)=>{
    // res.send(["html" , "css" , "js"])   
    CoursesModel.getCourse().then((result)=>{
        res.send(result)
    }) 
}
 
const insertCours=(req,res)=>{
    if (!req.body.name || req.body.name.length <3 ) {
        req.status(404).send("name is requires !")
        return
    }
    
    CoursesModel.insertCourse(req.body.name).then((result)=>{
        res.send(result)
    })

    // -------------------------------------------
        // const course={
        //     id:course.length +1 , 
        //     name:req.body.name
        // }
        // course.push(course)
        // res.send(course)
    }



const  updateCourse = (req,res)=>{
    CoursesModel.getCourse(parseInt(req.params.id)).then((result)=>{
        if(!result) return res.status(404).send("course with given id not found ")

    })
    // const course= courses.find(c=> c.id ===parseInt(req.params.id))
        if (!req.body.name || req.body.name.length <3 )
            return res.status(404).send("name is required and more than 3 charachter ...")
        
    CoursesModel.updateCourse(parseInt(req.params.id), !req.body.name).then((result)=>{
        res.send(result)
    })
}


const deleteCourse=(req,res)=>{
    CoursesModel.getCourse(parseInt(req.params.id)).then((result)=>{
        if(!result) res.status(404).send("course with given id not found ")    if(!course) return res.status(404).send("course with given id not found ")




    CoursesModel.deleteCourse(parseInt(req.params.id)).then((result)=>{
        res.send(result)
    })
//     const index=courses.indexOf(course)
//     courses.splice(index, 1)
//     res.send(course)
// }

 module.exports=[
    getCourse, 
    getCourses, 
    insertCours ,
    updateCourse,
    deleteCourse
 ]