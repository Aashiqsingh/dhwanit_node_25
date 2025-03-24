const express = require('express');

const app = express();


app.get("/getUser",(req,res)=>{
    // console.log("get Api calledd....");
    res.json({
        message:"User fetched successfully..",
        data:"Dhwanit"
    })
})



const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});































// console.log("helo world..");
// var a = 10;


// const user = require("./test.js");

// console.log("value of a ",a);

// console.log(user);
// console.log(user.pi);
// console.log(user.name);
// console.log(user.employee);
// console.log(user.employee.name);




