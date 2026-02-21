const express=reqire("express")
const router=express.Router()
const homeController=reqire("../controller/home-controller.js")

router.get("/", homeController.getHome)

module.exports=router