import mongoose from "mongoose";

const staffSchema=new mongoose.Schema({
    fname:{type:String},
    lname:{type:String},
    empid:{type:String},
    email:{type:String},
    phone:{type:Number},
    designation:{type:String},
    address:{type:String},
    imagepath:{type:String}
})


export default mongoose.model.Staffs||mongoose.model('Staff',staffSchema);