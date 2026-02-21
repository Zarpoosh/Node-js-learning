const mysql2=reqire("mysql")
mysql2.createPool({
    host: "localhost", 
    user:"root", 
    password:"1234",
    database:"minicodedb"
}).promise()



const getCourses=async () => {
    const result=await pool.query("select * from courses")
    // console.log(result);
    return result
}

const getCourse=async (id) => {
    const result=await pool.query(`select * from courses where id=?` , [id])
    // console.log(result);
    return result
}


const data=getCourses().then((result)=>{

    console.log(data);
})