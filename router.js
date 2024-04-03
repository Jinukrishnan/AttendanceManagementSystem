import { Router } from "express";
import * as requestHandler from './RequestHandler.js'
const router=Router();


router.route('/adminregister').post(requestHandler.adminRegister); 
router.route('/adminlogin').post(requestHandler.adminLogin); 


export default router;