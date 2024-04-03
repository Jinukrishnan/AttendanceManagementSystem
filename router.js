import { Router } from "express";
import * as requestHandler from './RequestHandler.js'
import Auth from "./Middleware/Auth.js";
const router=Router();


router.route('/adminregister').post(requestHandler.adminRegister); 
router.route('/adminlogin').post(requestHandler.adminLogin); 
router.route('/adminhome').get(Auth,requestHandler.adminHome); 


export default router;