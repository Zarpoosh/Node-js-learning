const pool=require("../utilities/mysql-database")


class CoursesModel{

static getCourses=async () => {
    const result=await pool.query("select * from courses")
    // console.log(result);
    return result
}

static getCourse=async (id) => {
    const result=await pool.query(`select * from courses where id=?` , [id])
    // console.log(result);
    return result
}



static insertCourse=async(title)=>{
const [result]=await pool.query("insert into courses (Title) values (?)" , 
    [title])
    // console.log(result.insertId);
    // return {id :result.insertId  , title:title}
    return getCourse(result.insertId)
}


static updateCourse=async(id  , title)=>{
    const result=await pool.query("update courses set title =? where id=?" , [title, id])
    return getCourse(id)
}


static deleteCourse=async(id)=>{
    const result=pool.query("delete from courses where id=? " ,[id])
    return result
}




static callStoreProcedure=async(id)=>{
    const [result]=pool.query("call sp_select (?) ", [id])
    return result[0]
}
}

module.exports=CoursesModel