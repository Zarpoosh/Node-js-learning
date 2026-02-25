const sql=require("mssql")
require("dotenv").config()


const config={
    user:process.env.DB_USER, 
    password:process.env.DB_PASSWORD,
    server: process.env.DB_HOST, 
    database:process.env.DB_DATABASE,
    options:{
        encrypt:false,
        TrustServerCertifivate:true
    }
}


const poolPromise=new sql.ConnectionPool(config).connect().then
(pool=>{
    console.log("connected to pool ");
    return pool

}).catch(err=>{
    console.log(err);
})


const getCourses=async()=>{
    const pool=await  poolPromise()
    const request=pool.request()
    const result=await request.query("select * from courses")
    console.log(result);
    return result.recordset
}


const insertCourse=async (title) => {
    const pool=await  poolPromise()
    const request=pool.request()
    request.input("title" , sql.NVarChar , title)
    const result=await request.query("insert into courses (title) values (@Title)")
    console.log(result);
    return result.recordset
}

insertCourse("php")
getCourses()