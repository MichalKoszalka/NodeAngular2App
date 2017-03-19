import * as mongoose from "mongoose";

export interface IUser extends mongoose.Document{
    first_name:string;
    last_name:string;
    email:string;
    address:string;
    car: boolean;
}

interface IUserModel extends mongoose.Model<IUser> {};
var userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    address: String,
    car: Boolean
});

export var User : IUserModel = mongoose.model<IUser>("User", userSchema);