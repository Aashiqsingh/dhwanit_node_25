const express = require('express');
const mongoose = require('mongoose');

const app = express();


const userRoute = require("./routes/userRoute");
app.use(userRoute)



mongoose.connect("mongodb://127.0.0.1:27017/dhwanitNode").then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.error("Error connecting to MongoDB", err);
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




