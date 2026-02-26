const pool=require("../utilities/mysql_database")



class UsersModel{
    static insertUser=async(name,email,password)=>{
        const result =await pool.query(`insert into users (id , name , password) values (uuid() , ? , ? ,?) , [name,email,password]`)
    }
}

module.exports=UsersModel