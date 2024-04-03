import adminSchema from './models/admin.model.js'
import bcrypt from 'bcrypt';
// admin
export async function adminRegister(req,res){
    console.log(req.body);
    const {username,email,phone,password,confirmpassword}=req.body;
    console.log(username,email,phone,password,confirmpassword);
    try {
        if(!(username&&email&&phone&&password&&confirmpassword))
        return res.status(500).send({msg:"Fields Are Empty"})
        if(password!=confirmpassword)
        return res.status(500).send({msg:"Password Not Matched"})
    const admin=await adminSchema.findOne({username})
    console.log(admin.username);
    if(admin.username==username)
        return res.status(500).send({msg:"username already Exist"})
        if(admin.email==email)
        return res.status(500).send({msg:"email already Exist"})
        bcrypt.hash(password,10)
        .then((hashedPwd)=>{
             adminSchema.create({username,email,phone,password:hashedPwd})
            .then(()=>{
            return res.status(201).send({msg:"Susscessfully Created"})
            })
            .catch((err)=>{
            return res.status(404).send({msg:"Not Created"})
            })
        }).catch((err)=>{
            return res.status(400).send({msg:"password not hashed"})
            })

    } catch (error) {
        res.status(404).send({error});
    }
   
    
}