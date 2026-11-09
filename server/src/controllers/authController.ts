import type { Request, Response, NextFunction } from 'express';
import User from "../models/User.js";
import generateToken from '../utils/generateToken.js';

const sendUser = (
    user: { _id: unknown, name: string, email: string },
    res: Response,
    status: 200
) => {
    const id = String(user._id);
    res.status(status).json({
        user: { _id: id, name: user.name, email: user.email },
        token: generateToken(id)
    });
};

export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, email, password } = req.body ?? {};
        if (!name || !email || !password) {
            res.status(400).json({ message: 'All fields are required.'});
            return;
        }

        const exists = await User.findOne({ email });
        if (exists) {
            res.status(409).json({ message: 'Email already registered.'});
            return;
        }

        const user = await User.create({ name, email, password });
        sendUser(user, res, 200);
    } catch (err) {
        next(err)
    }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body ?? {};
        if (!email || !password) {
            res.status(400).json({ message: 'Email and password are required.' });
            return;
        }

        const user = await User.findOne({ email }).select({ password });
        if (!user || !(await user.matchPassword(password))) {
            res.status(401).json({ message: 'Invalid email or password.' });
            return;
        }

        sendUser(user, res, 200);
    } catch(err) {
        next(err);
    }
};

export const getMe = (req:Request, res:Response) => {
    res.json({ user: req.user });
};