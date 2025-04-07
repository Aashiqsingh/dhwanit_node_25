const UserSchema = require("../models/userModel");

const getUser = async(req,res)=>{

    const users = await UserSchema.find();
    if(users){
        res.json({
            message:"User fetched successfully..",
            data: users
        })
    }

}

const addUser = async(req,res)=>{
    console.log("request body",req.body);
    
    const savedUser = await UserSchema.create(req.body);
    console.log("new user",savedUser);
    if(savedUser){
        res.json({
            message:"User added successfully..",
            data: savedUser
        })
    }else{
        res.json({
            message:"Failed to add user..",
            data: null
        })
    }
}


const deleteUser = async(req,res)=>{
    
    const deleteId = req.params.id;
    const delUser = await UserSchema.findByIdAndDelete(deleteId);

    if(delUser != null)
    {
        res.json({
            message:"User deleted successfully..",
            data: delUser
        })
    }
    else{
        res.json({
            message:"Failed to delete user..",
            data: null
        })
    }
}

const getUserByGender = async(req,res)=>{

  const gender = req.query.gender;
  const age = req.query.age;
//   const page = req.query.page;
//   const sort = req.query.sort;

//   console.log(gender);
//   console.log(age);
  
  
//   find({gender:gender,age:{$gte:age}})).
  const foundUsers = await userModel.find({gender:gender,age:{$gt:age}}).sort({age:-1}).limit(page)
//   const foundUsers = await UserSchema.
  if(foundUsers.length>0){
    res.json({
      message: "users found",
      data: foundUsers,
    });
  }
  else{
    res.json({
      message: "user not found",
    });
  }
}



module.exports = {
    getUser,
    addUser,
    deleteUser,
    getUserByGender
}