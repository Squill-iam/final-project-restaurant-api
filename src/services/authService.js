import bcrypt from'bcrypt';
import jwt from 'jsonwebtoken';
import { Prisma } from '../generated/prisma/index.js';
import{registerUser, findUserByEmail} from '../repositories/userRepo.js';



export async function signUp(email, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    try{
        const newUser = await registerUser({email, password: hashedPassword});
        return newUser;
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                throw new Error('Email has already been added');
                error.status = 409;
                throw error;
            }
                    throw error;
        }
    }
    
}