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
module.export={sql , poolPromise}