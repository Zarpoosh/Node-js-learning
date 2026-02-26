const {sql , poolPromise} =require("../utilities/mssql_database")

class CoursesModel{

static getCourses=async()=>{
    const pool=await  poolPromise()
    const request=pool.request()
    const result=await request.query("select * from courses")
    console.log(result);
    return result.recordset
}


static insertCourse=async (title) => {
    const pool=await  poolPromise()
    const request=pool.request()
    request.input("title" , sql.NVarChar , title)
    const result=await request.query("insert into courses (title) values (@Title)")
    console.log(result);
    return result.recordset
}

static updateCourse=async (id , title) => {
    const pool=await  poolPromise()
    const request=pool.request()
    request.input("title" , sql.NVarChar , title)
    request.input("Id" , sql.Int , Id)
    const result=await request.query("update courses set Title = @Title where Id= @Id")
    console.log(result);
    return result.recordset
}


static deleteCourse=async (id ) => {
    const pool=await  poolPromise()
    const request=pool.request()
    request.input("Id" , sql.Int , Id)
    const result=await request.query("delete from courses where Id=@Id")
    console.log(result);
    // return result.recordset
}


// !  this func is for execute the command where in sql file
static callStoreProcedure=async (id) => {
    const pool=await poolPromise;
    const request=pool.request()
    request.input("ID", sql.Int, id)
    const result=await request.execute("sp_select")  // write the neme of the StoreProcedure in the sql file
    console.log(result);
    return result.recordset
}

    // insertCourse("php")
    // updateCourse(1, "php")
    // deleteCourse(1)
    // getCourses()
    // callStoreProcedure(10)
}

module.exports=CoursesModel