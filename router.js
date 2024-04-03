import { Router } from "express";
import * as requestHandler from './RequestHandler.js'
const router=Router();


router.route('/adminregister').post(requestHandler.adminRegister); 


export default router;