//  pull the business logic , including prisma and BCrypt

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient();

export const registerUser = async ( data: any) => {

    const { email , password , fullName} = data;

    if (!email || !password || !fullName) {
        throw new Error('All fields are required');
    };

    const existingUser = await prisma.user.findUnique({ where: {email}});
    if (existingUser) {
        throw new Error('User with this email already exists.');
    }


    const hashedPassword = await bcrypt.hash(password , 10);

    const newUser = await prisma.user.create({

        data: {
            email,
            password: hashedPassword,
            fullName
        }
    })

    return newUser;
}

// LOGIN LOGIC
export const loginUser = async (email: string , password_sent: string): Promise<{token: string , role: string}> => {

    // check if the user exists
    const user = await prisma.user.findUnique({ where: { email}});
    if(!user) {

        throw new Error ('Invalid email. ')
    }

    // compare the sent password with the stored hashed password 
    const isPasswordValid = await bcrypt.compare( password_sent , user.password);

    if(!isPasswordValid) {
        throw new Error("Invalid Password. ")
    }

    // Generate a JWT and return it
    const secret = process.env.JWT_SECRET;
    if(!secret) {
        throw new Error('JWT secret is not configured. ')
    }

    const token = jwt.sign(
        {
            userId: user.id,
            email: user.email,
            role: user.role
        },
        secret,

        { expiresIn: '1h'}
    )

    return {token , role: user.role}
}