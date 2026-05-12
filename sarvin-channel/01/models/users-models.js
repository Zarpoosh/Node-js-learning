const pool=require("../utilities/mysql_database")



class UsersModel{
    static insertUser=async(name,email,password)=>{
        const result =await pool.query(`insert into users (id , name , password) values (uuid() , ? , ? ,?) , [name,email,password]`)
        return result
    }

    static getUserByEmail=async (email)=>{
        const [result]=await pool.query("select * from users where email = ? , [e,email")
        return result[0]
    }
}

module.exports=UsersModel