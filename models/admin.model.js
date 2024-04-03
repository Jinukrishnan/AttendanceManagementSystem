import mongoose from "mongoose";


const adminShema=new mongoose.Schema({
    username:{type:String},
    email:{type:String},
    Phone:{type:Number},
    password:{type:String},
})

export default mongoose.model.Admin||mongoose.model("Admins",adminShema);