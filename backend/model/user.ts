import * as mongoose from "mongoose";

export interface IUser extends mongoose.Document{
    first_name:string;
    last_name:string;
    email:string;
}

interface IUserModel extends mongoose.Model<IUser> {};
var userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
});

export var User : IUserModel = mongoose.model<IUser>("User", userSchema);