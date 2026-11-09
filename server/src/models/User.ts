import { Schema, model,  type Model } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser {
    name: string;
    email: string;
    password: string;
}

export interface IUserMethods {
    matchPassword(entered: string): Promise<boolean>;
}

type UserModel = Model<IUser, {}, IUserMethods>;

const userSchema = new Schema<IUser, UserModel, IUserMethods>(
    {
        name: {
            type: String,
            required: [true, 'Your name is required.'],
            trim: true
        },
        email: {
            type: String,
            required: [true, 'Your Email is required.'],
            unique: true,
            lowercase: true,
            trim: true,
            match: [/^\S+@\S+\.\S+$/, 'Invalid email.']
        },
        password: {
            type: String,
            required: [true, 'Your password is required'],
            minlength: [6, 'Password must be at least 6 characters.'],
            select: false
        }
    },
    {
        timestamps: true
    }
);

userSchema.pre('save', async function () {
    if (!this.isModified('password')) return;
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.matchPassword = function (entered: string) {
    return bcrypt.compare(entered, this.password);
};

export default model<IUser,UserModel>('User', userSchema);