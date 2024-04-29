import { Router } from "express";
import * as requestHandler from './RequestHandler.js'
import Auth from "./Middleware/Auth.js";
import multer from 'multer';
import path from 'path';
const router=Router();
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
      console.log(file.originalname);
  let spt = file.originalname.split(".");
  const date=new Date();
  console.log(`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`);
  cb(null, `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}.${spt[spt.length - 1]}`)
  },
});
const upload = multer({ storage });

router.route('/adminregister').post(requestHandler.adminRegister); 
router.route('/adminlogin').post(requestHandler.adminLogin); 
router.route('/adminhome').get(Auth,requestHandler.adminHome); 
router.route('/forgetpassword').post(requestHandler.forgetPassword); 
router.route('/addstaff').post(upload.any(),requestHandler.addStaff); 
router.route('/getstaff').get(requestHandler.getStaff); 
router.route('/staffdetails/:id').get(requestHandler.staffDetails)




router.route('/uploads/:name').get((req, res) => {
  const { name } = req.params;
  return res.sendFile(path.resolve(`./uploads/${name}`));
})


export default router;