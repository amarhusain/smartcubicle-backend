import mongoose, { Model, Schema, model } from "mongoose";




export interface IUser {
    email: string;
    password: string;
    username: string;
}

export interface IUserDocument extends IUser, Document { }

export interface IUserModel extends Model<IUserDocument> { }

const UserSchema: Schema<IUserDocument> = new mongoose.Schema(
    {
        email: { type: String, required: true },
        password: { type: String, required: true },
        username: { type: String, required: true }
    }
)

const User = model<IUserDocument, IUserModel>('User', UserSchema);

export default User;