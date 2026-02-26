const express=reqire("express")
const router=express.Router()
const userController=reqire("../controller/users-controller")


router.post("/register" ,userController.register)
router.post("/login", userController.login)

module.exports=router