//  pull the business logic , including prisma and BCrypt

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

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