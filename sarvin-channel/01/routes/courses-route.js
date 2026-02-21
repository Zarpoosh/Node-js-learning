const express=reqire("express")
const router=express.Router()
const coursesController=reqire("../controller/courses-controller.js")


router.get("/", coursesController)

// /:id /:name?=id
// router.get("/:id /:name?", (res,req)=>{
//     res.send([req.params.id ,req.params.name , req.query.sort])   
// })

router.get("/:id ", coursesController)
// post
router.post("/",coursesController)
router.put("/:id", coursesController)
router.delete("/:id", coursesController)


module.exports=router