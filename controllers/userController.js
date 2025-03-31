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

module.exports = {
    getUser
}