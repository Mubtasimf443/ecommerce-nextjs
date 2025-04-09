/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
import mongoose, { Schema, Document, Model } from "mongoose";


// Shipping Address Interface
interface IShippingAddress {
  division: string;
  district: string;
  city: string;
  upazila: string;
  road_no?: string;
  additional?: string;
}

interface IPhone {
  number :string;
  countryName : string;
  phoneCode : string;
}


// User Interface
interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordSalt : string ;
  isVarified: boolean;
  isRegistered: boolean;
  registrationType : string;
  shipping_address: IShippingAddress;
  phoneDetails : IPhone;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}



// User Schema
const UserSchema = new Schema<IUser>(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, maxlength:300, minlength:7 },
    password: { type: String, required: true, minlength: 6 },
    passwordSalt : { type: String, required: true, minlength: 6 },
    isVarified: { type: Boolean, default: false },
    isRegistered: { type: Boolean, default: false },
    phoneDetails :{
      phoneNumber: { type: String, required: true },
      countryName : { type: String, required: true },
      phoneCode :  { type: String, required: true },
    } ,
    registrationType : {
      type : String,
      enum : ["normal", "google" , "facebook"],
      default : "normal"
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    shipping_address: {
      division: { type: String, required: true },
      district: { type: String, required: true },
      upazila: { type: String, required: true },
      city: { type: String, required: true },
      road_no: { type: String, required: false },
      additional: { type: String, default: "" },
    },
  },
  { timestamps: true }
);


// Create and export User model
const User: Model<IUser> = mongoose.model<IUser>("User", UserSchema);
export default User;
