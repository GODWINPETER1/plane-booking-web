// creating the register api and login api 

import { Router } from "express";
import * as authController from './auth_controller.js';



const router = Router();

router.post('/register' , authController.register);

export default router;