import userModel from "../models/user.js";


const creatUser= async(req,res)=>{
    try {
        const {name,password,email,phone} =req.body;

        const newUser = new userModel({name,password,email,phone});

        await newUser.save();

        res.status(200).json({success: true, message: 'new user created successfully', newUser});
    } 
    catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: 'internal server error', newUser});
    }

};
const getUser =async(req,res)=>{
  
   try {
    const user = await userModel.find();
    if(! user){
        res.status(404).json({success: false,message: "not found", user});
       }
       res.status(200).json({success:true, message: ' displayed users successfully', user});
   } catch (error) {
    console.log(error);
    res.status(500).json({success: false,message: "internal server error", user});
   }
   
};
const updateUser = async(req,res)=>{
    try {
        const UserId = req.params.id;

        const updatedUser = await userModel.findByIdAndUpdate(UserId,req.body,{new:true})
      
        if(!updatedUser){
            res.status(404).json({success: false,message: "user not found", updatedUser});
        }
        res.status(200).json({success:true, message: 'user updated  successfully', updatedUser});
    } 
    catch (error) {
        console.log(error);

        res.status(500).json({success: false,message: "internal server error", updatedUser});
    }
};


const deleteUser = async(req,res)=>{

    try {
        const UserId = req.params.id;
        const deletedUser =await userModel.findByIdAndDelete(UserId);

        if(!deletedUser){
            res.status(404).json({success:false,message: "user not found",deletedUser});
        }
        res.status(200).json({success:true,message:'user deleted successfully'});
    }
     catch (error) {
        console.log(error);
        res.status(500).json({success:false,message: "internal server error"});
    }
}

export {creatUser,getUser, updateUser, deleteUser};