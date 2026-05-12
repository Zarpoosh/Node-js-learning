const { request } = require("express")
const UsersModel=require("../models/users-model")
const =require("lodash")
const joi= reqire("joi")
const bcrypt=require("bcrypt")
const register=async (req ,res, next) => {
    // console.log(req.body);
    const schema={
        name:joi.string().min(3).max(50).required().messages({
            "string.min" :"تعداد کاراکتر کمتر از حد مجاز است ."
        }),
        email:joi.string().email().required(),
        password:joi.string().min(5).ma(50).reqired()
    };
    const validateResult= joi.object(schema).validate(req.body)
// console.log(validateResult);
    if(validateResult)
         return res.send(validateResult.err.details[0].message)

       const user=await UsersModel.getUserByEmail(req.body.email)
       if (user) return res.status(400).send("user already registerd")


        const hashPassword=await bcrypt.hash(request.body.password, 10)

        const result=await UsersModel.insertUser(req.body.name,req.body.email ,hashPassword)
        console.log(result);

        const newuser=await UsersModel.getUserByEmail(req.body.email)
        res.send(__.pick(newuser, ["id", "name", "email"]))



}

const login=(req,res, next)=>{
    const schema={
        email:joi.string().email().required(),
        password:joi.string().min(5).ma(50).reqired()
    };
    const validateResult= joi.object(schema).validate(req.body)
// console.log(validateResult);
    if(validateResult)
         return res.send(validateResult.err.details[0].message)


    const user=await UsersModel.getUserByEmail(req.body.email)
    if(! user) return res.status(400).send("email or password is invalid")

   const validPasswprd=await bcrypt.compare(req.body.password, user.password)
    if(!validPasswprd) return res.status(400).send("the username or password is invalid")
    

    res.send("login")
}
module.exports={register, login}