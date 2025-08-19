// creating the register api and login api 

import { Router } from "express";
import * as authController from './auth_controller';



const router = Router();

router.post('/register' , authController.register);
router.post('/login' , authController.login)

export default router;