import adminSchema from "./models/admin.model.js";
import bcrypt from "bcrypt";
import pkg from 'jsonwebtoken';
const{sign}=pkg;
// admin register
export async function adminRegister(req, res) {

  const { username, email, phone, password, confirmpassword } = req.body;
  try {
    if (!(username && email && phone && password && confirmpassword))
      return res.status(401).send({ msg: "Fields Are Empty" });
    if (password != confirmpassword)
      return res.status(401).send({ msg: "Password Not Matched" });
   const admindata=await adminSchema.findOne({email})

   if(admindata!=null)
   return res.status(401).send({ msg: `${admindata.email} already exist` });
    
    bcrypt
      .hash(password, 10)
      .then((hashedPwd) => {
        adminSchema
          .create({ username, email, phone, password: hashedPwd })
          .then(() => {
            return res.status(201).send({ msg: "Susscessfully Created" });
          })
          .catch((err) => {
            return res.status(401).send({ msg: "Not Created" });
          });
      })
      .catch((err) => {
        return res.status(401).send({ msg: "password not hashed" });
      });
  } catch (error) {
    res.status(501).send({ error });
  }
}
// admin login


export async  function adminLogin(req,res){
   try {
    const {email,password}=req.body;
    console.log(email,password);
    const user=await adminSchema.findOne({email});
    const username=user.username
    if(user === null) return res.status(401).send({ error: "Incorrect username or password" });
    const success=await bcrypt.compare(password,user.password);
    if(success !== true) return res.status(401).send("Incorrect username or password" );
  
    const token=await sign({username},process.env.JWT_KEY,{expiresIn:"24hr"})
   return res.status(200).send({
    msg: "Successfuly logged in.",
    token
  });
   } catch (error) {
    return res.status(401).send({msg:"User Not Available"});
   }
}

// admin Home


export async function adminHome(req,res){
 
    res.status(200).send(req.user.username);
}





// forgetpassword
export async function forgetPassword(req,res){
  try {
    const {email,password,confirmpassword}=req.body
  if(password!==confirmpassword)
  return res.status(400).send({msg:"Password Not Matched"});
  const user=await adminSchema.findOne({email});
  if(user==null)return res.status(400).send({msg:"email not found"});
  bcrypt.hash(password,10).then(async(hashpwd)=>{
    user.password=hashpwd;
    await user.save();
    res.status(200).send({msg:"pasword Updated Successfully"});
  }).catch((error)=>{
    res.status(400).send(error);
  })
  
  } catch (error) {
    res.status(400).send(error)
  }
 
}