// const result=require("./people")
const {people, ages}=require("./people")


// نمیتونی اینجوری نشون بدی باید اکسپورت کنی 
// console.log(people);

// console.log(result);
// console.log(result.people , result.ages);

// console.log(people, ages);


const os=require("os")
console.log(os.platform(), os.homedir());