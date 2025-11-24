const { error } = require("console");
const fs = require("fs");
//
// fs.readFile("./docs/blog14.txt", (err, data) => {
//     if (err) 
//         console.log(err);
//         // return;
//     // console.log(data)
//     console.log(data.toString())
    
// });

// console.log("the end ");



//-------------------------------------------------------- writing files 
// fs.writeFile("./docs/blog1.txt" , "\n Hello world " , ()=>{
//     console.log("file was written")
// })



// fs.appendFile("./docs/blog1.txt" , "\n Hello minicode :) " , ()=>{
//     console.log("file was appended")
// })


// --------------------------------------------------------------directories 

// fs.mkdir("./minicode" , (err)=>{
//     if(err)
//         console.log(err)
//     console.log("foledr created :)")
// })

// fs.rmdir("./minicode" , (err)=>{
//     if(err)
//         console.log(err)
//     console.log("foledr removed :)")
// })

//-------------------------------------------------------------- deleting files 


// fs.unlink("./minoo.txt" ,(err)=>{
//     if(err)
//         console.log(err)
//     console.log("file removed :)")
// })


// -------------------------------------------------------------------------


fs.mkdir("./minicode" , (err)=>{
    // if(err)
        // console.log(err)
    console.log("foledr created :)")
})

fs.writeFile("./minicode/blog.txt" , "\n Hello minicode " , ()=>{
    console.log("file was written")
})



fs.rmdir("./minicode" , (err)=>{
    if(err)
        console.log(err)
    console.log("foledr removed :)")
})
