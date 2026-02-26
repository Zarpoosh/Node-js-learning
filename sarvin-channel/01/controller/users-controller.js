const UsersModel=require("../models/users-model")
const joi= reqire("joi")
const register=async (req ,res, next) => {
    // console.log(req.body);
    const schema={
        name:joi.string().min(3).max(50).required().messages({
            "string.min" :"تعداد کاراکتر کمتر از حد مجاز است ."
        }),
        email:joi.string().email().required(),
        password:joi.string().min(5).ma(50).reqired()
    }
    const validateResult= joi.object(schema).validate(req.body)
// console.log(validateResult);
    if(validateResult)
         return res.send(validateResult.err.details[0].message)

        res.send("ok")
}

const login=(req,res, next)=>{

}
module.exports={register, login}