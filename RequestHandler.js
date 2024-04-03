import adminSchema from "./models/admin.model.js";
import bcrypt from "bcrypt";
// admin register
export async function adminRegister(req, res) {
  console.log(req.body);
  const { username, email, phone, password, confirmpassword } = req.body;
  console.log(username, email, phone, password, confirmpassword);
  try {
    if (!(username && email && phone && password && confirmpassword))
      return res.status(500).send({ msg: "Fields Are Empty" });
    if (password != confirmpassword)
      return res.status(500).send({ msg: "Password Not Matched" });
   const admindata=await adminSchema.findOne({email})
   console.log(`admin data${admindata}`);
   if(admindata!=null)
   return res.status(404).send({ msg: `${admindata.email} already exist` });
    
    bcrypt
      .hash(password, 10)
      .then((hashedPwd) => {
        adminSchema
          .create({ username, email, phone, password: hashedPwd })
          .then(() => {
            return res.status(201).send({ msg: "Susscessfully Created" });
          })
          .catch((err) => {
            return res.status(404).send({ msg: "Not Created" });
          });
      })
      .catch((err) => {
        return res.status(400).send({ msg: "password not hashed" });
      });
  } catch (error) {
    res.status(404).send({ error });
  }
}
// admin login


export async  function adminLogin(req,res){

    res.send(req.body)
}