var pi = 3.14;

var name = "Dhwanit garg alwarwasi...";


var employee = {
    name:"rahul",
    salary:40000,
    age:40
}


module.exports = {
    pi,name,employee
}



// app.get("/getUser",(req,res)=>{
//     // console.log("get Api calledd....");
//     res.json({
//         message:"User fetched successfully..",
//         data:"Dhwanit"
//     })
// })


const employees = [
    {
        id:1,
        name:"Dhwanit",
        age:21,
        salary:42000
    },
    {
        id:2,
        name:"Rahul",
        age:22,
        salary:35000
    },
    {
        id:3,
        name:"Sachin",
        age:23,
        salary:45000
    }
]

app.get("/employees",(req,res)=>{
    res.json({
        message:"Employees get successfully",
        data:employees
    })
})


app.get("/employee/:id",(req,res)=>{
    var id = req.params.id;
    // console.log(id);
    // console.log(typeof id);
    let foundEmp = employees.find((emp)=> emp.id == id);

    if(foundEmp){
        res.json({
            message:"Employee fetched successfully",
            data:foundEmp
        })
    }else{
        res.json({
            message:"Employee not found",
            data:null
        })
    }
    

    
})