// Handle the response and request logic

import type { Request , Response  } from "express";
import * as authService from './auth_service.js';


export const register = async (req: Request , res: Response): Promise<void> => {


    try {
        const user = await authService.registerUser(req.body);
        res.status(201).json({ message: "User Register successfully!" , user});

    } catch (error: any) {

        if(error.message === 'User with this email already exists.') {

            res.status(409).json({ error: error.message})
        } else {
            res.status(500).json({error: 'Failed to register'})
        }
    }
}